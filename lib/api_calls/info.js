var stampit = require('stampit');

module.exports = stampit().
  methods({
    info: function() {
      return this.getRequest(this.apiEndpoint + "/v4/info/")
      .then(function(response) {
        return {
          result: response.body,
          rawResponse: response
        }
      });
    }
  });
