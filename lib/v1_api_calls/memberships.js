var stampit = require('stampit');
var request = require('request-promise');

module.exports = stampit().
  methods({
    memberships: function() {
      return request({
        uri: this.apiEndpoint + "/v1/user/me/memberships",
        json: true
      }).then(function(response) {
        return response.data;
      });
    }
  });