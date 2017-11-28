var stampit = require('stampit');

module.exports = stampit().
  methods({
    releases: function() {
      return this.getRequest(this.apiEndpoint + "/v4/releases/").
      then(function(response) {
        return {
          result: response.body,
          rawResponse: response
        }
      });
    }
  });
