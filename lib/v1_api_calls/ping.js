var stampit = require('stampit');
var request = require('superagent-bluebird-promise');

// Returns true when the server is up
// Returns false when the server is down

module.exports = stampit().
  methods({
    ping: function() {
      return request.get(this.apiEndpoint + "/v1/ping").
      then(function(response) {
        if (response.text === '"OK"') {
          return true;
        } else {
          return false;
        }
      }).catch(function(error) {
        return false;
      });
    }
  });