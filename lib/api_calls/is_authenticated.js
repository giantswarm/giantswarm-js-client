var stampit = require('stampit');

module.exports = stampit().
  methods({
    isAuthenticated: function(params) {
      return this.getRequest(this.apiEndpoint + "/v1/user/me").
      then(function(response) {
        return {
          result: true,
          rawResponse: response
        }
      }).catch(function(error) {
        if (error.status === 401) {
          return {
            result: false,
            rawResponse: error
          }
        } else {
          throw error;
        }
      });
    }
  });