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

    _processParams: function(params) {
      params.headers = params.headers || {};
      params.requestParams = params.requestParams;

      this._validateOptionalCallback(params.onError,   'onError must be null or a function');
      this._validateRequiredCallback(params.onSuccess, 'an onSuccess callback must be given');
      return params;
    },

    _finish: function(agent, params) {
      return agent.set(params.headers)
        .end(function(error, response){
          this._handleResponses({
            error: error,
            response: response,
            onSuccess: params.onSuccess,
            onError: params.onError
          })
        }.bind(this));
    },

    get: function(params) {
      params = this._processParams(params);
      return this._finish(agent.get(params.url).query(params.requestParams), params);
    },

    post: function(params) {
      params = this._processParams(params);
      return this._finish(agent.post(params.url).send(params.requestParams), params);
    }
  };
})();

module.exports = requestHelper;