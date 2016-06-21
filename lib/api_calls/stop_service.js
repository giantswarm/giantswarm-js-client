var stampit = require('stampit');
var Promise = require("bluebird");

module.exports = stampit().
  methods({
    stopService: function(params) {
      var self = this;
      return this.postRequest(this.apiEndpoint + "/v2/org/" + params.organizationName + "/env/" + params.environmentName + "/service/" + params.serviceName + "/stop").
      then(function(response) {
        return {
          result: response.body.data,
          rawResponse: response,
          waitForTaskCompletion: function() {
            params.taskId = response.body.data.id;
            return self.waitFor(params);
          }
        }
      });
    }
  });