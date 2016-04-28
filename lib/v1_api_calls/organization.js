var stampit = require('stampit');

module.exports = stampit().
  methods({
    organization: function(params) {
      return this.getRequest(this.apiEndpoint + "/v1/org/" + params.organizationName).
      then(function(response) {
        return {
          result: response.body.data,
          rawResponse: response
        }
      });
    }
  });