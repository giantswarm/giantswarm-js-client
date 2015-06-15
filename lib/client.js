var request = require('superagent');

var GiantSwarm = (function () {

  var authToken = null;
  var apiEndpoint = 'https://api.giantswarm.io';
  var websocketEndpoint = 'wss://api.giantswarm.io';

  return {

    UserException: function(message) {
      this.message = message;
      this.name = "UserException";
      this.toString = function(){
        return this.name + ": " + this.message;
      };
    },

    /**
     * Allows the user to overwrite the default API endpoint
     * to be used by subsequent API calls
     *
     * @param {String} [url] The URL to use as endpoint, without trailing slash
     */
    setApiEndpoint: function(url) {
      apiEndpoint = url;
      var wsurl = url.replace('http://', 'ws://');
      wsurl = wsurl.replace('https://', 'wss://');
      websocketEndpoint = wsurl;
    },

    /**
     * Check the availability of the API
     *
     * @param {Function} [successCallback] Callback to be called in case of success, no arguments
     * @param {Function} [errorCallback] Callback to be called in case of an error, error object as argument
     */
    ping: function (successCallback, errorCallback) {
      request
        .get(apiEndpoint + '/v1/ping')
        .end(function(err, res){
          if (err) {
            if (errorCallback) errorCallback(err);
          } else {
            if (res.text.trim() === '"OK"') {
              if (successCallback) successCallback();
            } else {
              // calling error callback with no argument
              if (errorCallback) errorCallback();
            }
          }
        });
    },

    /**
     * Authenticate the client with a user's credentials
     * 
     * @param {String} [username] username or email address (String)
     * @param {String} [password] password (String, UTF-8)
     * @param {Function} [successCallback] Callback to be called in case of success, no arguments
     * @param {Function} [errorCallback] Optional callback to be callled in case of an error, error object as argument
     */
    authenticate: function(username, password, successCallback, errorCallback) {
      if (!username) throw new this.UserException("No username given");
      if (!password) throw new this.UserException("No password given");
      request
        .post(apiEndpoint + '/v1/user/' + username + '/login')
        .send({'password': window.btoa(password)})
        .end(function(err, resp){
          if (err === null) {
            authToken = resp.body.data.Id;
            if (successCallback) successCallback();
          } else {
            authToken = null;
            if (errorCallback) errorCallback(err);
          }
        });
    },

    /**
     * Set authentication token, to be used as an alternative to authenticate()
     *
     * @param {String} [token] Authentication token
     */ 
    setAuthToken: function(token) {
      if (!token) throw new this.UserException("No token given");
      authToken = token;
    },

    /**
     * Return the currently used authentication token
     *
     * @returns {String} Currently used authentication token, might be null.
     */ 
    getAuthToken: function() {
      return authToken;
    },

    /**
     * Internal function to perform an authenticated GET request and handle the response
     * @param {String} [uri] API route to be called, starting with "/"
     * @param {Function} [successCallback] Callback to be called in case of success, gets response data as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    _simple_data_get_request: function(uri, successCallback, errorCallback) {
      if (!uri) throw new this.UserException("No uri given");
      request
        .get(apiEndpoint + uri)
        .set('Authorization', 'giantswarm ' + authToken)
        .end(function(err, resp){
          if (err) {
            if (errorCallback) errorCallback(err);
          } else {
            if (successCallback) successCallback(resp.body.data);
          }
        });
    },

    /**
     * Get info about the authenticated user
     *
     * @param {Function} [successCallback] Callback receiving the user info object as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    user: function(successCallback, errorCallback) {
      this._simple_data_get_request('/v1/user/me', successCallback, errorCallback);
    },

    /**
     * Get memberships of the authenticated user
     *
     * @param {Function} [successCallback] Callback receiving the array of organization names as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    memberships: function(successCallback, errorCallback) {
      this._simple_data_get_request('/v1/user/me/memberships', successCallback, errorCallback);
    },

    /**
     * Get organization details
     *
     * @param {String} [organizationName] Name of the organization
     * @param {Function} [successCallback] Callback receiving the organization object as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    organization: function(organizationName, successCallback, errorCallback) {
      this._simple_data_get_request('/v1/org/' + organizationName, successCallback, errorCallback);
    },

    /**
     * Get array of environments of an organization
     *
     * @param {String} [organizationName] Name of the organization
     * @param {Function} [successCallback] Callback receiving the array of environments as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    environments: function(organizationName, successCallback, errorCallback) {
      if (!organizationName) throw new this.UserException("No organizationName given");
      var uri = apiEndpoint + '/v1/org/' + organizationName + '/env/';
      request
        .get(uri)
        .set('Authorization', 'giantswarm ' + authToken)
        .end(function(err, resp){
          if (err) {
            if (errorCallback) errorCallback(err);
          } else {
            var names = [];
            for (i in resp.body.data.environments) {
              names.push(resp.body.data.environments[i].name)
            }
            if (successCallback) successCallback(names);
          }
        });
    },

    /**
     * Get array of applications in an environment
     *
     * @param {String} [organizationName] Name of the organization
     * @param {Function} [successCallback] Callback receiving the application array as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    applications: function(organizationName, environmentName, successCallback, errorCallback) {
      if (!organizationName) throw new this.UserException("No organizationName given");
      if (!environmentName) throw new this.UserException("No environmentName given");
      var uri = '/v1/org/' + organizationName + '/env/' + environmentName + '/app/';
      this._simple_data_get_request(uri, successCallback, errorCallback);
    },

    /**
     * Get Status and structure of an application
     *
     * @param {String} [organizationName] Name of the organization
     * @param {String} [environmentName] Name of the environment
     * @param {String} [organizationName] Name of the application
     * @param {Function} [successCallback] Callback receiving the status information object as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    applicationStatus: function(organizationName, environmentName, applicationName, successCallback, errorCallback) {
      if (!organizationName) throw new this.UserException("No organizationName given");
      if (!environmentName) throw new this.UserException("No environmentName given");
      if (!applicationName) throw new this.UserException("No applicationName given");
      var uri = '/v1/org/' + organizationName + '/env/' + environmentName + '/app/' + applicationName + '/status';
      this._simple_data_get_request(uri, successCallback, errorCallback);
    },

    /**
     * Get status of a service
     *
     * @param {String} [organizationName] Name of the organization
     * @param {String} [environmentName] Name of the environment
     * @param {String} [applicationName] Name of the application
     * @param {String} [serviceName] Name of the service
     * @param {Function} [successCallback] Callback receiving the status information object as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    serviceStatus: function(organizationName, environmentName, applicationName, serviceName, successCallback, errorCallback) {
      if (!organizationName) throw new this.UserException("No organizationName given");
      if (!environmentName) throw new this.UserException("No environmentName given");
      if (!applicationName) throw new this.UserException("No applicationName given");
      if (!serviceName) throw new this.UserException("No serviceName given");
      var uri = '/v1/org/' + organizationName + '/env/' + environmentName + '/app/' + applicationName;
      uri += '/service/' + serviceName + '/status';
      this._simple_data_get_request(uri, successCallback, errorCallback);
    },

    /**
     * Get status of a component
     *
     * @param {String} [organizationName] Name of the organization
     * @param {String} [environmentName] Name of the environment
     * @param {String} [applicationName] Name of the application
     * @param {Function} [successCallback] Callback receiving the status information object as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    componentStatus: function(organizationName, environmentName, applicationName, serviceName, componentName, successCallback, errorCallback) {
      if (!organizationName) throw new this.UserException("No organizationName given");
      if (!environmentName) throw new this.UserException("No environmentName given");
      if (!applicationName) throw new this.UserException("No applicationName given");
      if (!serviceName) throw new this.UserException("No serviceName given");
      if (!componentName) throw new this.UserException("No componentName given");
      var uri = '/v1/org/' + organizationName + '/env/' + environmentName + '/app/' + applicationName;
      uri += '/service/' + serviceName + '/component/' + componentName + '/status';
      this._simple_data_get_request(uri, successCallback, errorCallback);
    },

    /**
     * Get statistics for an instance
     *
     * @param {String} [organizationName] Name of the organization
     * @param {Function} [successCallback] Callback receiving the statistics object as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    instanceStats: function(organizationName, instanceId, successCallback, errorCallback) {
      if (!organizationName) throw new this.UserException("No organizationName given");
      if (!instanceId) throw new this.UserException("No instanceId given");
      var uri = '/v1/org/' + organizationName + '/instance/' + instanceId + '/stats';
      this._simple_data_get_request(uri, successCallback, errorCallback);
    }

  };

})();

if (typeof(window) !== "undefined") {
  window.GiantSwarm = GiantSwarm;
}
if (typeof(module) !== "undefined") {
  module.exports = GiantSwarm;
}
