var stampit = require('stampit');

module.exports = stampit().
  methods({
    instanceStats: function(params) {
      return this.getRequest(this.apiEndpoint + "/v1/org/" + params.organizationName + "/instance/" + params.instanceId + "/stats").
      then(function(response) {
        return {
          result: response.body.data,
          rawResponse: response
        }
      });
    }
  });