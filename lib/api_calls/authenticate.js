var stampit  = require('stampit');
var validate = require("validate.js");
var _        = require('lodash');
var request  = require('superagent-bluebird-promise');
var Base64   = require('js-base64').Base64;

var constraints = {
  usernameOrEmail: {
    presence: true
  },
  password: {
    presence: true
  }
};

var base64encode = function (str) {
  return Base64.encode(str);
};

module.exports = stampit().
  methods({
    authenticate: function(params) {
      var self = this;
      var validationErrors = validate(params, constraints);
      if(validationErrors){
        var messages = _.map(validationErrors, function(error){return error});
        throw(new TypeError(messages));
      };

      params.password = base64encode(params.password);

      return this.postRequest(this.apiEndpoint + "/v1/user/" + params.usernameOrEmail + "/login", params)
      .then(function(response) {
        self.authToken = response.body.data.Id;
        return {
          result: true,
          rawResponse: response
        };
      })
      .catch(error => {
        self.authToken = undefined;
        throw error;
      });
    }
  });