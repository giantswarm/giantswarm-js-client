/**
 * The Giant Swarm API
 * This is the documentation for the Giant Swarm API.  For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).  The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.  Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.  Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.  Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.  ## Source  The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).  ## Versioning  Some endpoint paths are different, depending on the release version of the tenant cluster that they expect. All V5 endpoints except a cluster release version newer than `10.0.0` on  <span class=\"badge aws\">AWS</span>, or `13.0.0` on <span class=\"badge azure\">Azure</span>. Cluster release versions older than that, or on different providers, must be used with V4 endpoints. If there is no V5 endpoint for a specific command (e.g. `Get clusters`), then release version rules don't apply, and the V4 endpoint must be used. 
 *
 * OpenAPI spec version: 4.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/V4CreateClusterAppSecretRequest', 'model/V4GenericResponse', 'model/V4GetClusterAppSecretResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/V4CreateClusterAppSecretRequest'), require('../model/V4GenericResponse'), require('../model/V4GetClusterAppSecretResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.GiantSwarm) {
      root.GiantSwarm = {};
    }
    root.GiantSwarm.AppSecretsApi = factory(root.GiantSwarm.ApiClient, root.GiantSwarm.V4CreateClusterAppSecretRequest, root.GiantSwarm.V4GenericResponse, root.GiantSwarm.V4GetClusterAppSecretResponse);
  }
}(this, function(ApiClient, V4CreateClusterAppSecretRequest, V4GenericResponse, V4GetClusterAppSecretResponse) {
  'use strict';

  /**
   * AppSecrets service.
   * @module api/AppSecretsApi
   * @version 4.0.0
   */

  /**
   * Constructs a new AppSecretsApi. 
   * @alias module:api/AppSecretsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create Secret (v4)
     * This operation allows you to create a Secret for a specific app. The app does not have to exist before hand.  If the app does exist, this endpoint will ensure that the App CR gets it&#39;s &#x60;spec.user_config.secret&#x60; field set correctly.  However, if the app exists and the &#x60;spec.user_config.secret&#x60; is already set to something, then this request will fail. You will in that case most likely want to update the Secret using the &#x60;PATCH /v4/clusters/{cluster_id}/apps/{app_name}/secret/&#x60; endpoint.  For apps on v5 clusters, please use the v5 version of this endpoint.  ### Example POST request &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;value\&quot;   } &#x60;&#x60;&#x60; 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @param {module:model/V4CreateClusterAppSecretRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    this.createClusterAppSecretV4WithHttpInfo = function(clusterId, appName, opts) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling createClusterAppSecretV4");
      }

      // verify the required parameter 'appName' is set
      if (appName === undefined || appName === null) {
        throw new Error("Missing the required parameter 'appName' when calling createClusterAppSecretV4");
      }


      var pathParams = {
        'cluster_id': clusterId,
        'app_name': appName
      };
      var queryParams = {
      };
      var headerParams = {
        'X-Request-ID': opts['xRequestID'],
        'X-Giant-Swarm-Activity': opts['xGiantSwarmActivity'],
        'X-Giant-Swarm-CmdLine': opts['xGiantSwarmCmdLine']
      };
      var formParams = {
      };

      var authNames = ['AuthorizationHeaderToken'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V4GenericResponse;

      return this.apiClient.callApi(
        '/v4/clusters/{cluster_id}/apps/{app_name}/secret/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create Secret (v4)
     * This operation allows you to create a Secret for a specific app. The app does not have to exist before hand.  If the app does exist, this endpoint will ensure that the App CR gets it&#39;s &#x60;spec.user_config.secret&#x60; field set correctly.  However, if the app exists and the &#x60;spec.user_config.secret&#x60; is already set to something, then this request will fail. You will in that case most likely want to update the Secret using the &#x60;PATCH /v4/clusters/{cluster_id}/apps/{app_name}/secret/&#x60; endpoint.  For apps on v5 clusters, please use the v5 version of this endpoint.  ### Example POST request &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;value\&quot;   } &#x60;&#x60;&#x60; 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @param {module:model/V4CreateClusterAppSecretRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    this.createClusterAppSecretV4 = function(clusterId, appName, opts) {
      return this.createClusterAppSecretV4WithHttpInfo(clusterId, appName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create Secret (v5)
     * This operation allows you to create a Secret for a specific app. The app does not have to exist before hand.  If the app does exist, this endpoint will ensure that the App CR gets it&#39;s &#x60;spec.user_config.secret&#x60; field set correctly.  However, if the app exists and the &#x60;spec.user_config.secret&#x60; is already set to something, then this request will fail. You will in that case most likely want to update the Secret using the &#x60;PATCH /v5/clusters/{cluster_id}/apps/{app_name}/secret/&#x60; endpoint.  ### Example POST request &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;value\&quot;   } &#x60;&#x60;&#x60; 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @param {module:model/V4CreateClusterAppSecretRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    this.createClusterAppSecretV5WithHttpInfo = function(clusterId, appName, opts) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling createClusterAppSecretV5");
      }

      // verify the required parameter 'appName' is set
      if (appName === undefined || appName === null) {
        throw new Error("Missing the required parameter 'appName' when calling createClusterAppSecretV5");
      }


      var pathParams = {
        'cluster_id': clusterId,
        'app_name': appName
      };
      var queryParams = {
      };
      var headerParams = {
        'X-Request-ID': opts['xRequestID'],
        'X-Giant-Swarm-Activity': opts['xGiantSwarmActivity'],
        'X-Giant-Swarm-CmdLine': opts['xGiantSwarmCmdLine']
      };
      var formParams = {
      };

      var authNames = ['AuthorizationHeaderToken'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V4GenericResponse;

      return this.apiClient.callApi(
        '/v5/clusters/{cluster_id}/apps/{app_name}/secret/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create Secret (v5)
     * This operation allows you to create a Secret for a specific app. The app does not have to exist before hand.  If the app does exist, this endpoint will ensure that the App CR gets it&#39;s &#x60;spec.user_config.secret&#x60; field set correctly.  However, if the app exists and the &#x60;spec.user_config.secret&#x60; is already set to something, then this request will fail. You will in that case most likely want to update the Secret using the &#x60;PATCH /v5/clusters/{cluster_id}/apps/{app_name}/secret/&#x60; endpoint.  ### Example POST request &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;value\&quot;   } &#x60;&#x60;&#x60; 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @param {module:model/V4CreateClusterAppSecretRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    this.createClusterAppSecretV5 = function(clusterId, appName, opts) {
      return this.createClusterAppSecretV5WithHttpInfo(clusterId, appName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Secret (v4)
     * This operation allows a user to delete an app&#39;s Secret if it has been named according to the convention of {app-name}-user-secrets and stored in the cluster ID namespace.  Calling this endpoint will delete the Secret, and also remove the reference to the Secret in the (spec.user_config.secret field) from the app.  For apps on v5 clusters, please use the v5 version of this endpoint. 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    this.deleteClusterAppSecretV4WithHttpInfo = function(clusterId, appName, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling deleteClusterAppSecretV4");
      }

      // verify the required parameter 'appName' is set
      if (appName === undefined || appName === null) {
        throw new Error("Missing the required parameter 'appName' when calling deleteClusterAppSecretV4");
      }


      var pathParams = {
        'cluster_id': clusterId,
        'app_name': appName
      };
      var queryParams = {
      };
      var headerParams = {
        'X-Request-ID': opts['xRequestID'],
        'X-Giant-Swarm-Activity': opts['xGiantSwarmActivity'],
        'X-Giant-Swarm-CmdLine': opts['xGiantSwarmCmdLine']
      };
      var formParams = {
      };

      var authNames = ['AuthorizationHeaderToken'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V4GenericResponse;

      return this.apiClient.callApi(
        '/v4/clusters/{cluster_id}/apps/{app_name}/secret/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Secret (v4)
     * This operation allows a user to delete an app&#39;s Secret if it has been named according to the convention of {app-name}-user-secrets and stored in the cluster ID namespace.  Calling this endpoint will delete the Secret, and also remove the reference to the Secret in the (spec.user_config.secret field) from the app.  For apps on v5 clusters, please use the v5 version of this endpoint. 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    this.deleteClusterAppSecretV4 = function(clusterId, appName, opts) {
      return this.deleteClusterAppSecretV4WithHttpInfo(clusterId, appName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Secret (v5)
     * This operation allows a user to delete an app&#39;s Secret if it has been named according to the convention of {app-name}-user-secrets and stored in the cluster ID namespace.  Calling this endpoint will delete the Secret, and also remove the reference to the Secret in the (spec.user_config.secret field) from the app. 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    this.deleteClusterAppSecretV5WithHttpInfo = function(clusterId, appName, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling deleteClusterAppSecretV5");
      }

      // verify the required parameter 'appName' is set
      if (appName === undefined || appName === null) {
        throw new Error("Missing the required parameter 'appName' when calling deleteClusterAppSecretV5");
      }


      var pathParams = {
        'cluster_id': clusterId,
        'app_name': appName
      };
      var queryParams = {
      };
      var headerParams = {
        'X-Request-ID': opts['xRequestID'],
        'X-Giant-Swarm-Activity': opts['xGiantSwarmActivity'],
        'X-Giant-Swarm-CmdLine': opts['xGiantSwarmCmdLine']
      };
      var formParams = {
      };

      var authNames = ['AuthorizationHeaderToken'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V4GenericResponse;

      return this.apiClient.callApi(
        '/v5/clusters/{cluster_id}/apps/{app_name}/secret/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Secret (v5)
     * This operation allows a user to delete an app&#39;s Secret if it has been named according to the convention of {app-name}-user-secrets and stored in the cluster ID namespace.  Calling this endpoint will delete the Secret, and also remove the reference to the Secret in the (spec.user_config.secret field) from the app. 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    this.deleteClusterAppSecretV5 = function(clusterId, appName, opts) {
      return this.deleteClusterAppSecretV5WithHttpInfo(clusterId, appName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Secret (v4)
     * This operation allows you to fetch the Secret associated with an app.  For apps on v5 clusters, please use the v5 version of this endpoint. 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GetClusterAppSecretResponse} and HTTP response
     */
    this.getClusterAppSecretV4WithHttpInfo = function(clusterId, appName, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling getClusterAppSecretV4");
      }

      // verify the required parameter 'appName' is set
      if (appName === undefined || appName === null) {
        throw new Error("Missing the required parameter 'appName' when calling getClusterAppSecretV4");
      }


      var pathParams = {
        'cluster_id': clusterId,
        'app_name': appName
      };
      var queryParams = {
      };
      var headerParams = {
        'X-Request-ID': opts['xRequestID'],
        'X-Giant-Swarm-Activity': opts['xGiantSwarmActivity'],
        'X-Giant-Swarm-CmdLine': opts['xGiantSwarmCmdLine']
      };
      var formParams = {
      };

      var authNames = ['AuthorizationHeaderToken'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V4GetClusterAppSecretResponse;

      return this.apiClient.callApi(
        '/v4/clusters/{cluster_id}/apps/{app_name}/secret/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Secret (v4)
     * This operation allows you to fetch the Secret associated with an app.  For apps on v5 clusters, please use the v5 version of this endpoint. 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GetClusterAppSecretResponse}
     */
    this.getClusterAppSecretV4 = function(clusterId, appName, opts) {
      return this.getClusterAppSecretV4WithHttpInfo(clusterId, appName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Secret (v5)
     * This operation allows you to fetch the Secret associated with an app. 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GetClusterAppSecretResponse} and HTTP response
     */
    this.getClusterAppSecretV5WithHttpInfo = function(clusterId, appName, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling getClusterAppSecretV5");
      }

      // verify the required parameter 'appName' is set
      if (appName === undefined || appName === null) {
        throw new Error("Missing the required parameter 'appName' when calling getClusterAppSecretV5");
      }


      var pathParams = {
        'cluster_id': clusterId,
        'app_name': appName
      };
      var queryParams = {
      };
      var headerParams = {
        'X-Request-ID': opts['xRequestID'],
        'X-Giant-Swarm-Activity': opts['xGiantSwarmActivity'],
        'X-Giant-Swarm-CmdLine': opts['xGiantSwarmCmdLine']
      };
      var formParams = {
      };

      var authNames = ['AuthorizationHeaderToken'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V4GetClusterAppSecretResponse;

      return this.apiClient.callApi(
        '/v5/clusters/{cluster_id}/apps/{app_name}/secret/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Secret (v5)
     * This operation allows you to fetch the Secret associated with an app. 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GetClusterAppSecretResponse}
     */
    this.getClusterAppSecretV5 = function(clusterId, appName, opts) {
      return this.getClusterAppSecretV5WithHttpInfo(clusterId, appName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify Secret (v4)
     * This operation allows you to modify the Secret for a specific app. It&#39;s only possible to modify Secrets that have been named according to the convention of {app-name}-user-secrets and stored in the cluster ID namespace.  The full values key of the Secret will be replaced by the JSON body of your request.  For apps on v5 clusters, please use the v5 version of this endpoint.  ### Example PATCH request &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;new-value\&quot;   } &#x60;&#x60;&#x60;  If the Secret contained content like:  &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;old-value\&quot;,     \&quot;secret2\&quot;: \&quot;another-old-value\&quot;   } &#x60;&#x60;&#x60;  Then the \&quot;secret2\&quot; will be removed, and \&quot;secret\&quot; will be set to \&quot;new-value\&quot; 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @param {module:model/V4CreateClusterAppSecretRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    this.modifyClusterAppSecretV4WithHttpInfo = function(clusterId, appName, opts) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling modifyClusterAppSecretV4");
      }

      // verify the required parameter 'appName' is set
      if (appName === undefined || appName === null) {
        throw new Error("Missing the required parameter 'appName' when calling modifyClusterAppSecretV4");
      }


      var pathParams = {
        'cluster_id': clusterId,
        'app_name': appName
      };
      var queryParams = {
      };
      var headerParams = {
        'X-Request-ID': opts['xRequestID'],
        'X-Giant-Swarm-Activity': opts['xGiantSwarmActivity'],
        'X-Giant-Swarm-CmdLine': opts['xGiantSwarmCmdLine']
      };
      var formParams = {
      };

      var authNames = ['AuthorizationHeaderToken'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V4GenericResponse;

      return this.apiClient.callApi(
        '/v4/clusters/{cluster_id}/apps/{app_name}/secret/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Modify Secret (v4)
     * This operation allows you to modify the Secret for a specific app. It&#39;s only possible to modify Secrets that have been named according to the convention of {app-name}-user-secrets and stored in the cluster ID namespace.  The full values key of the Secret will be replaced by the JSON body of your request.  For apps on v5 clusters, please use the v5 version of this endpoint.  ### Example PATCH request &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;new-value\&quot;   } &#x60;&#x60;&#x60;  If the Secret contained content like:  &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;old-value\&quot;,     \&quot;secret2\&quot;: \&quot;another-old-value\&quot;   } &#x60;&#x60;&#x60;  Then the \&quot;secret2\&quot; will be removed, and \&quot;secret\&quot; will be set to \&quot;new-value\&quot; 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @param {module:model/V4CreateClusterAppSecretRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    this.modifyClusterAppSecretV4 = function(clusterId, appName, opts) {
      return this.modifyClusterAppSecretV4WithHttpInfo(clusterId, appName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify Secret (v5)
     * This operation allows you to modify the Secret for a specific app. It&#39;s only possible to modify Secrets that have been named according to the convention of {app-name}-user-secrets and stored in the cluster ID namespace.  The full values key of the Secret will be replaced by the JSON body of your request.  ### Example PATCH request &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;new-value\&quot;   } &#x60;&#x60;&#x60;  If the Secret contained content like:  &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;old-value\&quot;,     \&quot;secret2\&quot;: \&quot;another-old-value\&quot;   } &#x60;&#x60;&#x60;  Then the \&quot;secret2\&quot; will be removed, and \&quot;secret\&quot; will be set to \&quot;new-value\&quot; 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @param {module:model/V4CreateClusterAppSecretRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    this.modifyClusterAppSecretV5WithHttpInfo = function(clusterId, appName, opts) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling modifyClusterAppSecretV5");
      }

      // verify the required parameter 'appName' is set
      if (appName === undefined || appName === null) {
        throw new Error("Missing the required parameter 'appName' when calling modifyClusterAppSecretV5");
      }


      var pathParams = {
        'cluster_id': clusterId,
        'app_name': appName
      };
      var queryParams = {
      };
      var headerParams = {
        'X-Request-ID': opts['xRequestID'],
        'X-Giant-Swarm-Activity': opts['xGiantSwarmActivity'],
        'X-Giant-Swarm-CmdLine': opts['xGiantSwarmCmdLine']
      };
      var formParams = {
      };

      var authNames = ['AuthorizationHeaderToken'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V4GenericResponse;

      return this.apiClient.callApi(
        '/v5/clusters/{cluster_id}/apps/{app_name}/secret/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Modify Secret (v5)
     * This operation allows you to modify the Secret for a specific app. It&#39;s only possible to modify Secrets that have been named according to the convention of {app-name}-user-secrets and stored in the cluster ID namespace.  The full values key of the Secret will be replaced by the JSON body of your request.  ### Example PATCH request &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;new-value\&quot;   } &#x60;&#x60;&#x60;  If the Secret contained content like:  &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;old-value\&quot;,     \&quot;secret2\&quot;: \&quot;another-old-value\&quot;   } &#x60;&#x60;&#x60;  Then the \&quot;secret2\&quot; will be removed, and \&quot;secret\&quot; will be set to \&quot;new-value\&quot; 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @param {module:model/V4CreateClusterAppSecretRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    this.modifyClusterAppSecretV5 = function(clusterId, appName, opts) {
      return this.modifyClusterAppSecretV5WithHttpInfo(clusterId, appName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
