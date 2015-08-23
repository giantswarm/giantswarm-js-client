agent = require('superagent');

var requestHelper = (function() {
  return {
    unauthorizedCallback: function() {
      // noop
    },

    _handleResponses: function(params) {
      var onError   = params.onError;
      var onSuccess = params.onSuccess;
      var error     = params.error;
      var response  = params.response;

      // Slime in the ok and body.data properties
      // for the ping api call.
      if(response.text === '"OK"') {
        response.ok = true
        response.body = {}
        response.body.data = "OK"
      }

      // Slime in the ok and body.data properties
      // for the instance logs api call.
      if(! response.body && response.text && ! error) {
        response.ok = true
        response.body = {}
        response.body.data = response.text
      }

      if (response.ok) { onSuccess(response.body.data); return }
      if (response.unauthorized) { this.unauthorizedCallback() }
      if (error) { onError(error); return }
    },

    _validateOptionalCallback: function(callback, errorMessage) {
      if (callback !== null && typeof callback !== 'function') throw new this.UserException(errorMessage);
    },

    _validateRequiredCallback: function(callback, errorMessage) {
      if (typeof callback !== 'function') throw new this.UserException(errorMessage);
    },

    get: function(params) {
      var onError = params.onError;
      var onSuccess = params.onSuccess;
      var headers = params.headers || {};
      var requestParams = params.requestParams;

      this._validateOptionalCallback(onError,   'onError must be null or a function');
      this._validateRequiredCallback(onSuccess, 'an onSuccess callback must be given');

      agent.get(params.url)
        .set(headers)
        .query(requestParams)
        .end(function(error, response){
        this._handleResponses({
          error: error,
          response: response,
          onSuccess: onSuccess,
          onError: onError
        })
      }.bind(this));
    },

    post: function(params) {
      var onError = params.onError;
      var onSuccess = params.onSuccess;
      var requestParams = params.requestParams;
      var headers = params.headers || {};

      this._validateOptionalCallback(onError,   'onError must be null or a function');
      this._validateRequiredCallback(onSuccess, 'an onSuccess callback must be given');

      agent.post(params.url)
        .send(requestParams)
        .set(headers)
        .end(function(error, response){
        this._handleResponses({
          error: error,
          response: response,
          onSuccess: onSuccess,
          onError: onError
        })
      }.bind(this));
    }
  };
})();

module.exports = requestHelper;