var stampit = require('stampit');
var Base64 = require('js-base64').Base64;

module.exports = stampit().
  methods({
    changePassword: function(params) {
      return this.postRequest(this.apiEndpoint + "/v1/user/me/password/update",
      {
        old_password: Base64.encode(params.old_password),
        new_password: Base64.encode(params.new_password)
      }).
      then(function(response) {
        return {
          result: response.body,
          rawResponse: response
        }
      });
    }
  });