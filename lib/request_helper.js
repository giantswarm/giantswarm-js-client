agent = require('superagent');

var requestHelper = (function() {
  return {
    _handleResponses: function(params) {
      onError   = params.onError;
      onSuccess = params.onSuccess;
      error     = params.error;
      response  = params.response;

      if (response.ok) { onSuccess(response.body.data); return }
      if (error) { onError(error); return }
    },

    _validateOptionalCallback: function(callback, errorMessage) {
      if (callback !== null && typeof callback !== 'function') throw new this.UserException(errorMessage);
    },

    _validateRequiredCallback: function(callback, errorMessage) {
      if (typeof callback !== 'function') throw new this.UserException(errorMessage);
    },

    get: function(params) {
      onError = params.onError;
      onSuccess = params.onSuccess;
      headers = params.headers;

      this._validateOptionalCallback(onError,   'onError must be null or a function');
      this._validateRequiredCallback(onSuccess, 'an onSuccess callback must be given');

      agent.get(params.url)
        .set(headers)
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
      onError = params.onError;
      onSuccess = params.onSuccess;
      requestParams = params.requestParams;

      this._validateOptionalCallback(onError,   'onError must be null or a function');
      this._validateRequiredCallback(onSuccess, 'an onSuccess callback must be given');

      agent.post(params.url)
        .send(requestParams)
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