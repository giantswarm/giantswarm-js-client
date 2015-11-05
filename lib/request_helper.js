agent = require('superagent');
_ = require('underscore')

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
      if(! response.body && typeof response.text === "string" && ! error) {
        response.ok = true
        response.body = {}
        response.body.data = response.text
      }

      // Convert 0001-01-01T00:00:00Z to null
      if(this._checkNested(response, 'body', 'data', 'components')) {
        // If the response contains components,
        // loop over them and check for and replace the null date

        _.each(response.body.data.components, function(component){
          _.each(component.instances, function(instance){
            if(instance.create_date === "0001-01-01T00:00:00Z") {
              instance.create_date = null;
            }
          })
        })
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

    // Checks for the presence of a nested key
    _checkNested: function(obj /*, level1, level2, ... levelN*/) {
      var args = Array.prototype.slice.call(arguments, 1);

      for (var i = 0; i < args.length; i++) {
        if (!obj || !obj.hasOwnProperty(args[i])) {
          return false;
        }
        obj = obj[args[i]];
      }
      return true;
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