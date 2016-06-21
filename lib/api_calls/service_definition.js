var stampit = require('stampit');

module.exports = stampit().
  methods({
    serviceDefinition: function(params) {
      return this.getRequest(this.apiEndpoint + "/v1/org/" + params.organizationName + "/env/" + params.environmentName + "/service/" + params.serviceName + "/definition").
      then(function(response) {
        return {
          result: response.body.data,
          rawResponse: response
        }
      });
    }
  });