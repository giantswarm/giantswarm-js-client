var stampit = require('stampit');
var RequestHelper = require('../request_helper.js');

module.exports = stampit().
  compose(RequestHelper).
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