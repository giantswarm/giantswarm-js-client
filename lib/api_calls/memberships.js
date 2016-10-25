var stampit = require('stampit');

module.exports = stampit().
  methods({
    memberships: function() {
      return this.getRequest(this.apiEndpoint + "/v1/user/me/memberships").
      then(function(response) {
        return {
          result: response.body.data,
          rawResponse: response
        }
      });
    }
  });