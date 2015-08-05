var request = require('superagent');

var GiantSwarm = (function () {

  var authToken = null;
  var clusterId = null;
  var apiEndpoint = 'https://api.giantswarm.io';
  var websocketEndpoint = 'wss://api.giantswarm.io';

  var CLUSTER_ID_HEADER = 'X-Giant-Swarm-ClusterID';

  var Base64;
  var base64encode;

  var unauthorizedCallback;

  if (typeof window === 'undefined') {
    Base64 = require('js-base64').Base64;
    base64encode = Base64.encode;
  } else {
    base64encode = window.btoa;
  }

  return {

    // to be thrown in case of bad parameters/arguments/values given
    UserException: function(message) {
      this.message = message;
      this.name = "UserException";
      this.toString = function(){
        return this.name + ": " + this.message;
      };
    },

    // simplify validation of string parameters for internal methods
    _validateStringParameters: function(parameters) {
      for (name in parameters) {
        if (!parameters[name]) {
          throw new this.UserException("Parameter '"+ name +"' must be given");
        }
        if (typeof parameters[name] !== 'string') {
          throw new this.UserException("Parameter '"+ name +"' must be of type string");
        }
      }
    },

    // Internal method to get the websocketEndpoint
    // mainly to make setApiEndpoint testable
    _getWebsocketEndpoint: function() {
      return websocketEndpoint
    },

    /**
     * Allows the user to overwrite the default API endpoint
     * to be used by subsequent API calls
     *
     * @param {String} [url] The URL to use as endpoint, without trailing slash
     */
    setApiEndpoint: function(url) {
      this._validateStringParameters({url: url});
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
    ping: function(successCallback, errorCallback) {
      if (typeof successCallback !== 'function') throw new this.UserException('successCallback must be given');
      if (errorCallback !== null && typeof errorCallback !== 'function') throw new this.UserException('errorCallback must be null or function');
      request
        .get(apiEndpoint + '/v1/ping')
        .end(function(err, res){
          if (err) {
            if (errorCallback) errorCallback(err);
          } else {
            if (typeof res.text !== 'undefined' && res.text.trim() === '"OK"') {
              if (successCallback) successCallback();
            } else {
              // calling error callback with no argument
              if (errorCallback) errorCallback(new Error('API response indicates bad API status.'));
            }
          }
        });
    },

    /**
     * Authenticate the client with a user's credentials
     *
     * @param {String} [username] username or email address (String)
     * @param {String} [password] password (String, UTF-8)
     * @param {Function} [successCallback] Optional callback to be called in case of success, no arguments
     * @param {Function} [errorCallback] Optional callback to be callled in case of an error, error object as argument
     */
    authenticate: function(username, password, successCallback, errorCallback) {
      this._validateStringParameters({
        username: username,
        password: password
      });
      if (successCallback !== null && typeof successCallback !== 'function') throw new this.UserException('successCallback must be null or function');
      if (errorCallback !== null && typeof errorCallback !== 'function') throw new this.UserException('errorCallback must be null or function');
      request
        .post(apiEndpoint + '/v1/user/' + username + '/login')
        .send({'password': base64encode(password)})
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
     * Set authentication token, to be used as an alternative to authenticate().
     * Parameter 'token' can be of value null to make subsequent calls
     * unauthenticated.
     *
     * @param {String} [token] Authentication token
     */
    setAuthToken: function(token) {
      if (token !== null && typeof token !== 'string') {
        throw new this.UserException("Parameter 'token' must be of type String or null.");
      }
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
     * Get the Cluster ID
     */
    _getClusterId: function() {
      return this.clusterId;
    },

    /**
     * Sets the Cluster ID to be used with subsequent requests
     */
    setClusterId: function(cid) {
      if (cid !== null && typeof cid !== 'string') {
        throw new this.UserException("Parameter 'cid' must be of type String or null.");
      }
      this.clusterId = cid;
    },

    /**
     * Allows to set a callback function to be called when a 401 (Unauthorized) error is received
     */
    setUnauthorizedCallback: function(callback) {
      if (typeof callback !== 'function') {
        throw new this.UserException("Parameter 'callback' must be of type function.");
      }
      unauthorizedCallback = callback;
    },

    /**
     * Internal function to perform an authenticated GET request and handle the response
     *
     * @param {String} [uri] API route to be called, starting with "/"
     * @param {Function} [successCallback] Callback to be called in case of success, gets response data as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     * @param {Object} [params] URL parameters to be added (optional)
     */
    _simple_data_get_request: function(uri, params, successCallback, errorCallback) {
      this._validateStringParameters({uri: uri});
      if (!successCallback) throw new this.UserException("Parameter successCallback must be given");
      if (typeof successCallback !== 'function') throw new this.UserException("Parameter successCallback must be of type function");
      if (errorCallback !== null && typeof errorCallback !== 'function') throw new this.UserException('errorCallback must be null or function');
      params = params || '';
      var headers = {
        'Authorization': 'giantswarm ' + authToken
      }
      if (clusterId) {
        headers[CLUSTER_ID_HEADER] = clusterId;
      }
      request.get(apiEndpoint + uri)
        .query(params)
        .set(headers)
        .end(function(err, resp){
          if (resp.unauthorized && unauthorizedCallback) unauthorizedCallback(resp, err);
          if (err) {
            if (errorCallback) errorCallback(err);
          } else {
            if (successCallback) successCallback(resp.body.data);
          }
        });
    },

    /**
     * Internal function to perform an authenticated GET request and return the raw body
     *
     * @param {String} [uri] API route to be called, starting with "/"
     * @param {Function} [successCallback] Callback to be called in case of success, gets response data as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     * @param {Object} [params] URL parameters to be added (optional)
     */
    _simple_text_get_request: function(uri, params, successCallback, errorCallback) {
      this._validateStringParameters({uri: uri});
      if (!successCallback) throw new this.UserException("Parameter successCallback must be given");
      if (typeof successCallback !== 'function') throw new this.UserException("Parameter successCallback must be of type function");
      if (errorCallback !== null && typeof errorCallback !== 'function') throw new this.UserException('errorCallback must be null or function');
      params = params || '';
      var headers = {
        'Authorization': 'giantswarm ' + authToken
      }
      if (clusterId) {
        headers[CLUSTER_ID_HEADER] = clusterId;
      }
      request.get(apiEndpoint + uri)
        .query(params)
        .set(headers)
        .end(function(err, resp){
          if (resp.unauthorized && unauthorizedCallback) unauthorizedCallback(resp, err);
          if (err) {
            if (errorCallback) errorCallback(err);
          } else {
            if (successCallback) successCallback(resp.text);
          }
        });
    },

    /**
     * Internal function to perform an authenticated POST request and handle the response
     *
     * @param {String} [uri] API route to be called, starting with "/"
     * @param {Function} [successCallback] Callback to be called in case of success, gets response data as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    _simple_data_post_request: function(uri, successCallback, errorCallback) {
      this._validateStringParameters({uri: uri});
      if (!successCallback) throw new this.UserException("Parameter successCallback must be given");
      if (typeof successCallback !== 'function') throw new this.UserException("Parameter successCallback must be of type function");
      if (errorCallback !== null && typeof errorCallback !== 'function') throw new this.UserException('errorCallback must be null or function');
      var headers = {
        'Authorization': 'giantswarm ' + authToken
      }
      if (clusterId) {
        headers[CLUSTER_ID_HEADER] = clusterId;
      }
      request
        .post(apiEndpoint + uri)
        .set(headers)
        .end(function(err, resp){
          if (resp.unauthorized && unauthorizedCallback) unauthorizedCallback(resp, err);
          if (err) {
            if (errorCallback) errorCallback(err);
          } else {
            if (successCallback) successCallback(resp.body.data);
          }
        });
    },

    /**
     * Internal function to open a websocket connection
     * as a result of a post request
     */
    _postForWebSocket: function(uri, postPayload, messageCallback, createCallback, errorCallback) {
      this._validateStringParameters({
        uri: uri,
      });
      if (typeof postPayload !== 'object') throw new this.UserException("Parameter 'postPayload' must be an array");
      if (typeof messageCallback !== 'function') throw new this.UserException("Parameter 'messageCallback' must be a function");
      if (typeof createCallback !== 'function') throw new this.UserException("Parameter 'createCallback' must be a function");
      if (errorCallback !== null && typeof errorCallback !== 'function') throw new this.UserException('errorCallback must be null or function');
      var headers = {
        'Authorization': 'giantswarm ' + authToken
      }
      if (clusterId) {
        headers[CLUSTER_ID_HEADER] = clusterId;
      }
      request
        .post(apiEndpoint + uri)
        .set(headers)
        .send(postPayload)
        .end(function(err, resp){
          if (resp.unauthorized && unauthorizedCallback) unauthorizedCallback(resp, err);
          if (err) {
            errorCallback(err);
          } else {
            if (resp.body.status_code != 10000) {
              errorCallback();
            } else {
              var url = websocketEndpoint + uri + '?p=' + resp.body.data;
              var socket = new WebSocket(url);
              socket.onmessage = messageCallback;
              if (createCallback) createCallback(socket);
            }
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
      this._simple_data_get_request('/v1/user/me', null, successCallback, errorCallback);
    },

    /**
     * Get memberships of the authenticated user
     *
     * @param {Function} [successCallback] Callback receiving the array of organization names as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    memberships: function(successCallback, errorCallback) {
      this._simple_data_get_request('/v1/user/me/memberships', null, successCallback, errorCallback);
    },

    /**
     * Get organization details
     *
     * @param {String} [organizationName] Name of the organization
     * @param {Function} [successCallback] Callback receiving the organization object as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    organization: function(organizationName, successCallback, errorCallback) {
      this._validateStringParameters({organizationName: organizationName});
      var uri = '/v1/org/' + encodeURIComponent(organizationName);
      this._simple_data_get_request(uri, null, successCallback, errorCallback);
    },

    /**
     * Get array of environments of an organization
     *
     * @param {String} [organizationName] Name of the organization
     * @param {Function} [successCallback] Callback receiving the array of environments as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    environments: function(organizationName, successCallback, errorCallback) {
      this._validateStringParameters({organizationName: organizationName});
      if (typeof successCallback !== 'function') throw new this.UserException('successCallback must be given');
      if (errorCallback !== null && typeof errorCallback !== 'function') throw new this.UserException('errorCallback must be null or function');
      var uri = apiEndpoint + '/v1/org/' + encodeURIComponent(organizationName) + '/env/';
      var headers = {
        'Authorization': 'giantswarm ' + authToken
      }
      if (clusterId) {
        headers[CLUSTER_ID_HEADER] = clusterId;
      }
      request
        .get(uri)
        .set(headers)
        .end(function(err, resp){
          if (resp.unauthorized && unauthorizedCallback) unauthorizedCallback(resp, err);
          if (err) {
            if (errorCallback) errorCallback(err);
          } else {
            var names = [];
            if (resp.body.data.environments) {
              for (i in resp.body.data.environments) {
                names.push(resp.body.data.environments[i].name)
              }
            }
            if (successCallback) successCallback(names);
          }
        });
    },

    /**
     * Get array of services in an environment
     *
     * @param {String} [organizationName] Name of the organization
     * @param {Function} [successCallback] Callback receiving the array of services as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    services: function(organizationName, environmentName, successCallback, errorCallback) {
      this._validateStringParameters({
        organizationName: organizationName,
        environmentName: environmentName
      });
      var uri = '/v1/org/' + encodeURIComponent(organizationName) + '/env/' + encodeURIComponent(environmentName) + '/service/';
      this._simple_data_get_request(uri, null, successCallback, errorCallback);
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
      this._validateStringParameters({
        organizationName: organizationName,
        environmentName: environmentName,
        applicationName: applicationName
      });
      var uri = '/v1/org/' + encodeURIComponent(organizationName) + '/env/' + encodeURIComponent(environmentName) + '/app/' + encodeURIComponent(applicationName) + '/status';
      this._simple_data_get_request(uri, null, successCallback, errorCallback);
    },

    /**
     * Get configuration (swarm.json) of an application
     *
     * @param {String} [organizationName] Name of the organization
     * @param {String} [environmentName] Name of the environment
     * @param {String} [organizationName] Name of the application
     * @param {Function} [successCallback] Callback receiving the config information object as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    applicationConfig: function(organizationName, environmentName, applicationName, successCallback, errorCallback) {
      this._validateStringParameters({
        organizationName: organizationName,
        environmentName: environmentName,
        applicationName: applicationName
      });
      var uri = '/v1/org/' + encodeURIComponent(organizationName) + '/env/' + encodeURIComponent(environmentName) + '/app/' + encodeURIComponent(applicationName) + '/config';
      this._simple_data_get_request(uri, null, successCallback, errorCallback);
    },

    /**
     * Start an application
     *
     * @param {String} [organizationName] Name of the organization
     * @param {String} [environmentName] Name of the environment
     * @param {String} [organizationName] Name of the application
     * @param {Function} [successCallback] Callback receiving the config information object as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    startApplication: function(organizationName, environmentName, applicationName, successCallback, errorCallback) {
      this._validateStringParameters({
        organizationName: organizationName,
        environmentName: environmentName,
        applicationName: applicationName
      });
      var uri = '/v1/org/' + encodeURIComponent(organizationName) + '/env/' + encodeURIComponent(environmentName) + '/app/' + encodeURIComponent(applicationName) + '/start';
      this._simple_data_post_request(uri, successCallback, errorCallback);
    },

    /**
     * Stop an application
     *
     * @param {String} [organizationName] Name of the organization
     * @param {String} [environmentName] Name of the environment
     * @param {String} [organizationName] Name of the application
     * @param {Function} [successCallback] Callback receiving the config information object as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    stopApplication: function(organizationName, environmentName, applicationName, successCallback, errorCallback) {
      this._validateStringParameters({
        organizationName: organizationName,
        environmentName: environmentName,
        applicationName: applicationName
      });
      var uri = '/v1/org/' + encodeURIComponent(organizationName) + '/env/' + encodeURIComponent(environmentName) + '/app/' + encodeURIComponent(applicationName) + '/stop';
      this._simple_data_post_request(uri, successCallback, errorCallback);
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
      this._validateStringParameters({
        organizationName: organizationName,
        environmentName: environmentName,
        applicationName: applicationName,
        serviceName: serviceName
      });
      var uri = '/v1/org/' + encodeURIComponent(organizationName) + '/env/' + encodeURIComponent(environmentName) + '/app/' + encodeURIComponent(applicationName);
      uri += '/service/' + encodeURIComponent(serviceName) + '/status';
      this._simple_data_get_request(uri, null, successCallback, errorCallback);
    },

    /**
     * Start a service
     *
     * @param {String} [organizationName] Name of the organization
     * @param {String} [environmentName] Name of the environment
     * @param {String} [organizationName] Name of the application
     * @param {String} [serviceName] Name of the service
     * @param {Function} [successCallback] Callback receiving the config information object as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    startService: function(organizationName, environmentName, applicationName, serviceName, successCallback, errorCallback) {
      this._validateStringParameters({
        organizationName: organizationName,
        environmentName: environmentName,
        applicationName: applicationName
      });
      var uri = '/v1/org/' + encodeURIComponent(organizationName) + '/env/' + encodeURIComponent(environmentName) + '/app/' + encodeURIComponent(applicationName) + '/service/' + encodeURIComponent(serviceName) + '/start';
      this._simple_data_post_request(uri, successCallback, errorCallback);
    },

    /**
     * Stop a service
     *
     * @param {String} [organizationName] Name of the organization
     * @param {String} [environmentName] Name of the environment
     * @param {String} [organizationName] Name of the application
     * @param {String} [serviceName] Name of the service
     * @param {Function} [successCallback] Callback receiving the config information object as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    stopService: function(organizationName, environmentName, applicationName, serviceName, successCallback, errorCallback) {
      this._validateStringParameters({
        organizationName: organizationName,
        environmentName: environmentName,
        applicationName: applicationName
      });
      var uri = '/v1/org/' + encodeURIComponent(organizationName) + '/env/' + encodeURIComponent(environmentName) + '/app/' + encodeURIComponent(applicationName) + '/service/' + encodeURIComponent(serviceName) + '/stop';
      this._simple_data_post_request(uri, successCallback, errorCallback);
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
      this._validateStringParameters({
        organizationName: organizationName,
        environmentName: environmentName,
        applicationName: applicationName,
        serviceName: serviceName,
        componentName: componentName
      });
      var uri = '/v1/org/' + encodeURIComponent(organizationName) + '/env/' + encodeURIComponent(environmentName) + '/app/' + encodeURIComponent(applicationName);
      uri += '/service/' + encodeURIComponent(serviceName) + '/component/' + encodeURIComponent(componentName) + '/status';
      this._simple_data_get_request(uri, null, successCallback, errorCallback);
    },

    /**
     * Get statistics for an instance
     *
     * @param {String} [organizationName] Name of the organization
     * @param {Function} [successCallback] Callback receiving the statistics object as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    instanceStats: function(organizationName, instanceId, successCallback, errorCallback) {
      this._validateStringParameters({
        organizationName: organizationName,
        instanceId: instanceId
      });
      var uri = '/v1/org/' + encodeURIComponent(organizationName) + '/instance/' + encodeURIComponent(instanceId) + '/stats';
      this._simple_data_get_request(uri, null, successCallback, errorCallback);
    },

    /**
     * Get logs for an instance
     *
     * @param {String} [organizationName] Name of the organization
     * @param {Integer} [numLines] Number of lines to return. If null, 10 lines will be returned.
     * @param {Function} [successCallback] Callback receiving the statistics object as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    instanceLogs: function(organizationName, instanceId, numLines, successCallback, errorCallback) {
      this._validateStringParameters({
        organizationName: organizationName,
        instanceId: instanceId
      });
      if (numLines === null || typeof numLines !== 'number' || isNaN(numLines) || parseInt(Number(numLines)) !== numLines
        || isNaN(parseInt(numLines, 10)) || numLines <= 0) {
        throw new this.UserException("Parameter 'numLines' must be a positive integer");
      }
      var params = {};
      if (numLines !== null) {
        params.t = numLines;
      }
      var uri = '/v1/org/' + encodeURIComponent(organizationName) + '/instance/' + encodeURIComponent(instanceId) + '/logs';
      this._simple_text_get_request(uri, params, successCallback, errorCallback);
    },

    /**
     * Create a websocket connection to stream logs from instances
     *
     * @param {String} [organizationName] Name of the organization owning the instance
     * @param {Array} [instanceIds] IDs of the instances to stream logs for
     * @param {Function} [messageCallback] Callback to call on Messages
     * @param {Function} [createCallback] Callback to call on creation of the websocket object
     * @param {Function} [errorCallback] Callback to call in case an error occurs during initialization
     */
    streamLogs: function(organizationName, instanceIds, messageCallback, createCallback, errorCallback) {
      this._validateStringParameters({
        organizationName: organizationName,
      });
      if (typeof instanceIds !== 'object') throw new this.UserException("Parameter 'instanceIds' must be an array");
      if (typeof messageCallback !== 'function') throw new this.UserException("Parameter 'messageCallback' must be a function");
      if (typeof createCallback !== 'function') throw new this.UserException("Parameter 'createCallback' must be a function");
      if (errorCallback !== null && typeof errorCallback !== 'function') throw new this.UserException('errorCallback must be null or function');
      var uri = '/v1/org/' + encodeURIComponent(organizationName) + '/stream/logs';
      var postPayload = {instances: instanceIds};
      this._postForWebSocket(uri,
        postPayload,
        messageCallback,
        createCallback,
        errorCallback);
    },

    /**
     * Create a websocket connection to stream statistics from instances
     *
     * @param {String} [organizationName] Name of the organization owning the instance
     * @param {Array} [instanceIds] IDs of the instances to stream stats for
     * @param {Number} [interval] Interval in seconds. Must be 2 at least.
     * @param {Function} [messageCallback] Callback to call on Messages
     * @param {Function} [createCallback] Callback to call on creation of the websocket object
     * @param {Function} [errorCallback] Callback to call in case an error occurs during initialization
     */
    streamStats: function(organizationName, instanceIds, interval, messageCallback,
      createCallback, errorCallback) {
      this._validateStringParameters({
        organizationName: organizationName,
      });
      if (typeof instanceIds !== 'object') throw new this.UserException("Parameter 'instanceIds' must be an array");
      if (typeof interval !== 'number') throw new this.UserException("Parameter 'interval' must be a number");
      if (interval < 2) throw new this.UserException("Value or parameter 'interval' must be min 2");
      var uri = '/v1/org/' + encodeURIComponent(organizationName) + '/stream/stats';
      var postPayload = {instances: instanceIds, interval: interval};
      this._postForWebSocket(uri,
        postPayload,
        messageCallback,
        createCallback,
        errorCallback);
    },

    /**
     * Expire the auth token currently used
     *
     * @param {Function} [successCallback] Callback to be called in case of success, gets response data as argument
     * @param {Function} [errorCallback] Optional callback to be called in case of an error, error object as argument
     */
    logout: function(successCallback, errorCallback) {
      if (!successCallback) throw new this.UserException("Parameter successCallback must be given");
      if (typeof successCallback !== 'function') throw new this.UserException("Parameter successCallback must be of type function");
      if (errorCallback !== null && typeof errorCallback !== 'function') throw new this.UserException('errorCallback must be null or function');
      var headers = {
        'Authorization': 'giantswarm ' + authToken
      }
      if (clusterId) {
        headers[CLUSTER_ID_HEADER] = clusterId;
      }
      request
        .post(apiEndpoint + '/v1/token/logout')
        .set(headers)
        .end(function(err, resp){
          if (err) {
            if (errorCallback) errorCallback(err);
          } else {
            authToken = null;
            if (successCallback) successCallback(resp.body);
          }
        });
    },

    /**
     * Return true if the cleitn is authenticated, otherwise return false
     */
    isAuthenticated: function(responseCallback) {
      if (!responseCallback) throw new this.UserException("Parameter responseCallback must be given");
      if (typeof responseCallback !== 'function') throw new this.UserException("Parameter responseCallback must be of type function");
      var answer = false;
      if (authToken === null) {
        responseCallback(answer);
      } else {
        // check auth status with the API
        this.user(function(data){
          answer = true;
          responseCallback(answer);
        }, function(err) {
          // TODO: only report false if response code was 401
          responseCallback(answer);
        });
      }
    }

  };

})();

if (typeof window !== "undefined") {
  window.GiantSwarm = GiantSwarm;
}
if (typeof module !== "undefined") {
  module.exports = GiantSwarm;
}
