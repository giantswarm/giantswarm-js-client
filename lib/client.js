var request = require('superagent');

var GiantSwarm = (function () {

  var authToken = null;
  var apiEndpoint = 'https://api.giantswarm.io';
  var websocketEndpoint = 'wss://api.giantswarm.io';

  return {

    // allows the user to overwrite the default endpoint
    setApiEndpoint: function(url) {
      apiEndpoint = url;
      var wsurl = url.replace('http://', 'ws://');
      wsurl = wsurl.replace('https://', 'wss://');
      websocketEndpoint = wsurl;
    },

    /**
     * successCallback: Called in case of success, no arguments
     * errorCallback (optional): Called in case of an error, error object as argument
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
     * username: username (String)
     * password: password (String, UTF-8)
     * successCallback: Called in case of success, no arguments
     * errorCallback (optional): Called in case of an error, error object as argument
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
     * Set authentication token from some source
     */ 
    setAuthToken: function(token) {
      if (token) {
        authToken = token;
      }
    },

    /**
     * Return the currently used authentication token
     */ 
    getAuthToken: function() {
      return authToken;
    },

    /**
     * Internal function to perform an authenticated GET request and handle the response
     * uri: API route to be called, starting with "/"
     * successCallback: Called in case of success, gets response data as argument
     * errorCallback (optional): Called in case of an error, error object as argument
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
     */
    user: function(successCallback, errorCallback) {
      this._simple_data_get_request('/v1/user/me', successCallback, errorCallback);
    },

    /**
     * Get memberships (array of organization names) of the authenticated user
     */
    memberships: function(successCallback, errorCallback) {
      this._simple_data_get_request('/v1/user/me/memberships', successCallback, errorCallback);
    },

    /**
     * Get organization details
     */
    organization: function(organizationName, successCallback, errorCallback) {
      this._simple_data_get_request('/v1/org/' + organizationName, successCallback, errorCallback);
    },

    /**
     * Get array of environments of an organization
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
     */
    applications: function(organizationName, environmentName, successCallback, errorCallback) {
      var uri = '/v1/org/' + organizationName + '/env/' + environmentName + '/app/';
      this._simple_data_get_request(uri, successCallback, errorCallback);
    },

    /**
     * Get Status and structure of an application
     */
    applicationStatus: function(organizationName, environmentName, applicationName, successCallback, errorCallback) {
      var uri = '/v1/org/' + organizationName + '/env/' + environmentName + '/app/' + applicationName + '/status';
      this._simple_data_get_request(uri, successCallback, errorCallback);
    },

    /**
     * Get status of a service
     */
    serviceStatus: function(organizationName, environmentName, applicationName, serviceName, successCallback, errorCallback) {
      var uri = '/v1/org/' + organizationName + '/env/' + environmentName + '/app/' + applicationName;
      uri += '/service/' + serviceName + '/status';
      this._simple_data_get_request(uri, successCallback, errorCallback);
    },

    /**
     * Get status of a component
     */
    componentStatus: function(organizationName, environmentName, applicationName, serviceName, componentName, successCallback, errorCallback) {
      var uri = '/v1/org/' + organizationName + '/env/' + environmentName + '/app/' + applicationName;
      uri += '/service/' + serviceName + '/component/' + componentName + '/status';
      this._simple_data_get_request(uri, successCallback, errorCallback);
    },

    /**
     * Get statistics for an instance
     */
    instanceStats: function(organizationName, instanceId, successCallback, errorCallback) {
      var uri = '/v1/org/' + organizationName + '/instance/' + instanceId + '/stats';
      this._simple_data_get_request(uri, successCallback, errorCallback);
    }

  };

})();

window.GiantSwarm = GiantSwarm;
module.exports = GiantSwarm;
