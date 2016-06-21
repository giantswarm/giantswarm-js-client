var stampit = require('stampit');
var RequestHelper = require('../request_helper.js');

module.exports = stampit().
  compose(RequestHelper).
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