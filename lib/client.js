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
          if (res.text.trim() === '"OK"') {
            successCallback();
          } else if (errorCallback) {
            errorCallback(err);
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
      request
        .post(apiEndpoint + '/v1/user/' + username + '/login')
        .send({'password': window.btoa(password)})
        .end(function(err, resp){
          if (err === null) {
            authToken = resp.body.data.Id;
            successCallback();
          } else {
            authToken = null;
            if (errorCallback) {
              errorCallback(err);
            }
          }
        });
    },

    /**
     * Set authentication token, to be used as an alternative to authenticate()
     *
     * @param {String} [token] Authentication token
     */ 
    setAuthToken: function(token) {
      if (token) {
        authToken = token;
      }
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
      request
        .get(apiEndpoint + uri)
        .set('Authorization', 'giantswarm ' + authToken)
        .end(function(err, resp){
          if (err === null) {
            successCallback(resp.body.data);
          } else if (errorCallback) {
            errorCallback(err);
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
      var uri = apiEndpoint + '/v1/org/' + organizationName + '/env/';
      request
        .get(uri)
        .set('Authorization', 'giantswarm ' + authToken)
        .end(function(err, resp){
          if (err === null) {
            var names = [];
            for (i in resp.body.data.environments) {
              names.push(resp.body.data.environments[i].name)
            }
            successCallback(names);
          } else if (errorCallback) {
            errorCallback(err);
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
      var uri = '/v1/org/' + organizationName + '/instance/' + instanceId + '/stats';
      this._simple_data_get_request(uri, successCallback, errorCallback);
    }

  };

})();

window.GiantSwarm = GiantSwarm;
module.exports = GiantSwarm;
