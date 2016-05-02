var stampit = require('stampit');

module.exports = stampit().
  methods({
    environments: function(params) {
      return this.getRequest(this.apiEndpoint + "/v1/org/" + params.organizationName + "/env/").
      then(function(response) {
        response.body.data.environments = response.body.data.environments || [];
        return {
          result: response.body.data.environments.map(function(x) { return x.name}),
          rawResponse: response
        }
      });
    }
  });