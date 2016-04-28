var stampit = require('stampit');
var request = require('superagent-bluebird-promise');

module.exports = stampit().
  methods({
    memberships: function() {
      return request.get(this.apiEndpoint + "/v1/user/me/memberships").
      then(function(response) {
        return response.body.data;
      });
    }
  });