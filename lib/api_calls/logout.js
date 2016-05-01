var stampit = require('stampit');

module.exports = stampit().
  methods({
    logout: function() {
      return this.postRequest(this.apiEndpoint + "/v1/token/logout").
      then(function(response) {
        this.authToken = undefined;
        return {
          result: true,
          rawResponse: response
        }
      }.bind(this)).
      catch(function(error) {
        this.authToken = undefined;
        return {
          result: true,
          rawResponse: error
        }
      }.bind(this));
    }
  });