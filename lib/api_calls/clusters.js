var stampit = require('stampit');

module.exports = stampit().
  methods({
    clusters: function(params) {
      return this.getRequest(this.apiEndpoint + "/v3/orgs/" + params.organizationName+ "/clusters/").
      then(function(response) {
        return {
          result: response.body.data,
          rawResponse: response
        }
      });
    }
  });