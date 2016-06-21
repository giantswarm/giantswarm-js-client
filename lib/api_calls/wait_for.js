var stampit = require('stampit');
var Promise = require("bluebird");

module.exports = stampit().
  methods({
    waitFor: function(params) {
      var maxRetries = 5;
      var request = this.getRequest.bind(this, this.apiEndpoint + "/v2/org/" + params.organizationName + "/env/" + params.environmentName + "/task/" + params.taskId + "/waitfor");

      function doRequest() {
        return request().
        then(function(response) {
          if (response.status === 200) {
            return {
              result: response.body.data,
              rawResponse: response
            }
          } else if (maxRetries > 0) {
            maxRetries -= 1;
            return doRequest();
          } else {
            throw('Maximum number of retries reached.');
          }
        }).catch(function(response) {
          if (maxRetries > 0) {
            maxRetries -= 1;
            return doRequest();
          } else {
            throw('Maximum number of retries reached while waiting for task: `' + params.taskId + '`');
          }
        });
      };

      return doRequest()
    }
  });