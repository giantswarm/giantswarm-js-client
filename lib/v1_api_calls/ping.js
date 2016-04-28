var stampit = require('stampit');
var request = require('request-promise');

module.exports = stampit().
  methods({
    ping: function() {
      return request({
        uri: this.apiEndpoint + "/v1/ping"
      }).then(function(response) {
        if (response === '"OK"') {
          return true;
        } else {
          return false;
        }
      }).catch(function(error) {
        return false;
      });
    }
  });