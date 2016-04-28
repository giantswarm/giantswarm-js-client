var stampit = require('stampit');
var Promise = require("bluebird");

module.exports = stampit().
  methods({
    stopService: function(params) {
      return this.postRequest(this.apiEndpoint + "/v2/org/" + params.organizationName + "/env/" + params.environmentName + "/service/" + params.serviceName + "/stop/").
      then(function(response) {
        return {
          result: response.body.data,
          rawResponse: response,
          waitForTaskCompletion: function() {
            return new Promise(function(resolve, reject) {
              setTimeout(resolve.bind(this, "task done"), 10);
            });
          }
        }
      });
    }
  });