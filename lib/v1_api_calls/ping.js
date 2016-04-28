var stampit = require('stampit');
var RequestHelper = require('../request_helper.js');

// Returns true when the server is up
// Returns false when the server is down

module.exports = stampit().
  methods({
    ping: function() {
      return this.getRequest(this.apiEndpoint + "/v1/ping").
      then(function(response) {
        if (response.text === '"OK"') {
          return {
            result: true,
            rawResponse: response
          };
        } else {
          return {
            result: false,
            rawResponse: response
          };
        }
      }).catch(function(error) {
        return {
          result: false,
          rawResponse: error
        };
      });
    }
  });