var stampit = require('stampit');

module.exports = stampit().
  methods({
    services: function(params) {
      return this.getRequest(this.apiEndpoint + "/v1/org/" + params.organizationName + "/env/" + params.environmentName + "/service").
      then(function(response) {
        return {
          result: response.body.data,
          rawResponse: response
        }
      });
    }
  });