var stampit = require('stampit');

module.exports = stampit().
  methods({
    serviceStatus: function(params) {
      return this.getRequest(this.apiEndpoint + "/v1/org/" + params.organizationName + "/env/" + params.environmentName + "/service/" + params.serviceName + "/status/").
      then(function(response) {
        return {
          result: response.body.data,
          rawResponse: response
        }
      });
    }
  });