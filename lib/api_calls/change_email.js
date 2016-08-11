var stampit = require('stampit');

module.exports = stampit().
  methods({
    changeEmail: function(params) {
      return this.postRequest(this.apiEndpoint + "/v1/user/me/email/update/",
      {
        old_email: params.old_email,
        new_email: params.new_email
      })
      .then(function(response) {
        return {
          result: response.body,
          rawResponse: response
        }
      });
    }
  });