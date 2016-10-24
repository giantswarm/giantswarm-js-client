var stampit = require('stampit');

module.exports = stampit().
  methods({
    user: function() {
      return this.getRequest(this.apiEndpoint + "/v1/user/me").
      then(function(response) {
        return {
          result: response.body.data,
          rawResponse: response
        }
      });
    }
  });