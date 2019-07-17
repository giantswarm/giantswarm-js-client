/**
 * The Giant Swarm API v4
 * This is the documentation for the Giant Swarm API starting at version `v4`.  For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).  The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.  Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.  Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.  Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.  ## Source  The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec). 
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
    define(['ApiClient', 'model/V4App', 'model/V4AppCatalogsResponse', 'model/V4CreateAppRequest', 'model/V4GenericResponse', 'model/V4GetClusterAppsResponse', 'model/V4ModifyAppRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/V4App'), require('../model/V4AppCatalogsResponse'), require('../model/V4CreateAppRequest'), require('../model/V4GenericResponse'), require('../model/V4GetClusterAppsResponse'), require('../model/V4ModifyAppRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.GiantSwarm) {
      root.GiantSwarm = {};
    }
    root.GiantSwarm.AppsApi = factory(root.GiantSwarm.ApiClient, root.GiantSwarm.V4App, root.GiantSwarm.V4AppCatalogsResponse, root.GiantSwarm.V4CreateAppRequest, root.GiantSwarm.V4GenericResponse, root.GiantSwarm.V4GetClusterAppsResponse, root.GiantSwarm.V4ModifyAppRequest);
  }
}(this, function(ApiClient, V4App, V4AppCatalogsResponse, V4CreateAppRequest, V4GenericResponse, V4GetClusterAppsResponse, V4ModifyAppRequest) {
  'use strict';

  /**
   * Apps service.
   * @module api/AppsApi
   * @version 4.0.0
   */

  /**
   * Constructs a new AppsApi. 
   * @alias module:api/AppsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Install an app
     * Install an app on a tenant cluster by posting to this endpoint.  The spec field represents the app we&#39;ll be installing, and so spec.name refers to the name of the chart that installs this app in the catalog.  The response you get on a succesful create includes the status of the app. However since the App is still initialising and this is an asynchronous operation, it is likely that the fields in this status object will be all empty values.  To check on the status of your app, perform a GET to /v4/clusters/{cluster_id}/apps/, and check the status field of the app.  ### Example PUT request &#x60;&#x60;&#x60;json   {     \&quot;spec\&quot;: {       \&quot;catalog\&quot;: \&quot;sample-catalog\&quot;,       \&quot;name\&quot;: \&quot;prometheus-chart\&quot;,       \&quot;namespace\&quot;: \&quot;prometheus\&quot;,       \&quot;version\&quot;: \&quot;0.2.0\&quot;,     }   } &#x60;&#x60;&#x60;  ### About the user_config field in the response This field is not editable by you, but is set automatically by the API if a configmap named &#x60;{app_name}-user-values&#x60; exists in the tenant cluster namespace on the control plane.  The &#x60;/v4/clusters/{cluster_id}/apps/{app_name}/config/&#x60; endpoints allows you to create such a configmap using this API.  It is recommended to create your config before creating your app. This will result in a faster deploy.  However, you can create your config after creating the app if you wish, this API will take care of setting the &#x60;user_config&#x60; field of the app correctly for you.  ### Why can&#39;t I just set the &#x60;user_config&#x60; value myself? It simplifies usage while also being a security measure.  Furthermore it is also a security measure and ensures that users of this API can&#39;t access arbitrary configmaps of the control plane.  This API will only allow you to edit or access configmaps that adhere to a strict naming convention. 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @param {module:model/V4CreateAppRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4App} and HTTP response
     */
    this.createClusterAppWithHttpInfo = function(authorization, clusterId, appName, opts) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling createClusterApp");
      }

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling createClusterApp");
      }

      // verify the required parameter 'appName' is set
      if (appName === undefined || appName === null) {
        throw new Error("Missing the required parameter 'appName' when calling createClusterApp");
      }


      var pathParams = {
        'cluster_id': clusterId,
        'app_name': appName
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization,
        'X-Request-ID': opts['xRequestID'],
        'X-Giant-Swarm-Activity': opts['xGiantSwarmActivity'],
        'X-Giant-Swarm-CmdLine': opts['xGiantSwarmCmdLine']
      };
      var formParams = {
      };

      var authNames = ['AuthorizationHeaderToken'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V4App;

      return this.apiClient.callApi(
        '/v4/clusters/{cluster_id}/apps/{app_name}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Install an app
     * Install an app on a tenant cluster by posting to this endpoint.  The spec field represents the app we&#39;ll be installing, and so spec.name refers to the name of the chart that installs this app in the catalog.  The response you get on a succesful create includes the status of the app. However since the App is still initialising and this is an asynchronous operation, it is likely that the fields in this status object will be all empty values.  To check on the status of your app, perform a GET to /v4/clusters/{cluster_id}/apps/, and check the status field of the app.  ### Example PUT request &#x60;&#x60;&#x60;json   {     \&quot;spec\&quot;: {       \&quot;catalog\&quot;: \&quot;sample-catalog\&quot;,       \&quot;name\&quot;: \&quot;prometheus-chart\&quot;,       \&quot;namespace\&quot;: \&quot;prometheus\&quot;,       \&quot;version\&quot;: \&quot;0.2.0\&quot;,     }   } &#x60;&#x60;&#x60;  ### About the user_config field in the response This field is not editable by you, but is set automatically by the API if a configmap named &#x60;{app_name}-user-values&#x60; exists in the tenant cluster namespace on the control plane.  The &#x60;/v4/clusters/{cluster_id}/apps/{app_name}/config/&#x60; endpoints allows you to create such a configmap using this API.  It is recommended to create your config before creating your app. This will result in a faster deploy.  However, you can create your config after creating the app if you wish, this API will take care of setting the &#x60;user_config&#x60; field of the app correctly for you.  ### Why can&#39;t I just set the &#x60;user_config&#x60; value myself? It simplifies usage while also being a security measure.  Furthermore it is also a security measure and ensures that users of this API can&#39;t access arbitrary configmaps of the control plane.  This API will only allow you to edit or access configmaps that adhere to a strict naming convention. 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @param {module:model/V4CreateAppRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4App}
     */
    this.createClusterApp = function(authorization, clusterId, appName, opts) {
      return this.createClusterAppWithHttpInfo(authorization, clusterId, appName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an app
     * This operation allows a user to delete an app. 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    this.deleteClusterAppWithHttpInfo = function(authorization, clusterId, appName, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling deleteClusterApp");
      }

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling deleteClusterApp");
      }

      // verify the required parameter 'appName' is set
      if (appName === undefined || appName === null) {
        throw new Error("Missing the required parameter 'appName' when calling deleteClusterApp");
      }


      var pathParams = {
        'cluster_id': clusterId,
        'app_name': appName
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization,
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
        '/v4/clusters/{cluster_id}/apps/{app_name}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an app
     * This operation allows a user to delete an app. 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    this.deleteClusterApp = function(authorization, clusterId, appName, opts) {
      return this.deleteClusterAppWithHttpInfo(authorization, clusterId, appName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of app catalogs configured on your installation.
     * Returns an array of app catalog objects, which contains further metadata, including a URL to fetch the full index of each catalog.   ### Example &#x60;&#x60;&#x60;json   [     {       \&quot;metadata\&quot;: {         \&quot;name\&quot;: \&quot;sample-catalog\&quot;,       },        \&quot;spec\&quot;: {         \&quot;description\&quot;: \&quot;Giant Swarm&#39;s Sample Catalog with a few apps to test things out.\&quot;,         \&quot;logoURL\&quot;: \&quot;https://s.giantswarm.io/app-catalog/1/images/sample-catalog.png\&quot;,          \&quot;storage\&quot;: {           \&quot;URL\&quot;: \&quot;https://giantswarm.github.com/sample-catalog/\&quot;,           \&quot;type\&quot;: \&quot;helm\&quot;         },         \&quot;title\&quot;: \&quot;Sample Catalog\&quot;       }     }   ] &#x60;&#x60;&#x60; 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4AppCatalogsResponse} and HTTP response
     */
    this.getAppCatalogsWithHttpInfo = function(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getAppCatalogs");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization,
        'X-Request-ID': opts['xRequestID'],
        'X-Giant-Swarm-Activity': opts['xGiantSwarmActivity'],
        'X-Giant-Swarm-CmdLine': opts['xGiantSwarmCmdLine']
      };
      var formParams = {
      };

      var authNames = ['AuthorizationHeaderToken'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V4AppCatalogsResponse;

      return this.apiClient.callApi(
        '/v4/appcatalogs/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of app catalogs configured on your installation.
     * Returns an array of app catalog objects, which contains further metadata, including a URL to fetch the full index of each catalog.   ### Example &#x60;&#x60;&#x60;json   [     {       \&quot;metadata\&quot;: {         \&quot;name\&quot;: \&quot;sample-catalog\&quot;,       },        \&quot;spec\&quot;: {         \&quot;description\&quot;: \&quot;Giant Swarm&#39;s Sample Catalog with a few apps to test things out.\&quot;,         \&quot;logoURL\&quot;: \&quot;https://s.giantswarm.io/app-catalog/1/images/sample-catalog.png\&quot;,          \&quot;storage\&quot;: {           \&quot;URL\&quot;: \&quot;https://giantswarm.github.com/sample-catalog/\&quot;,           \&quot;type\&quot;: \&quot;helm\&quot;         },         \&quot;title\&quot;: \&quot;Sample Catalog\&quot;       }     }   ] &#x60;&#x60;&#x60; 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4AppCatalogsResponse}
     */
    this.getAppCatalogs = function(authorization, opts) {
      return this.getAppCatalogsWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get cluster apps
     * Returns an array of apps installed on a given cluster.  ### Example &#x60;&#x60;&#x60;json   [     {       \&quot;metadata\&quot;: {         \&quot;name\&quot;: \&quot;my-awesome-prometheus\&quot;,       },        \&quot;spec\&quot;: {         \&quot;catalog\&quot;: \&quot;sample-catalog\&quot;         \&quot;name\&quot;: \&quot;prometheus-chart\&quot;,         \&quot;namespace\&quot;: \&quot;giantswarm\&quot;,         \&quot;version\&quot;: \&quot;0.2.0\&quot;,         \&quot;user_config\&quot;: {           \&quot;configmap\&quot;: {             \&quot;name\&quot;: \&quot;prometheus-user-values\&quot;,             \&quot;namespace\&quot;: \&quot;123ab\&quot;           }         }       },        \&quot;status\&quot;: {         \&quot;app_version\&quot;: \&quot;1.0.0\&quot;,         \&quot;release\&quot;: {           \&quot;last_deployed\&quot;: \&quot;2019-04-08T12:34:00Z\&quot;,           \&quot;status\&quot;: \&quot;DEPLOYED\&quot;         },         \&quot;version\&quot;: \&quot;0.2.0\&quot;,       }     }   ] &#x60;&#x60;&#x60; 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GetClusterAppsResponse} and HTTP response
     */
    this.getClusterAppsWithHttpInfo = function(authorization, clusterId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getClusterApps");
      }

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling getClusterApps");
      }


      var pathParams = {
        'cluster_id': clusterId
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization,
        'X-Request-ID': opts['xRequestID'],
        'X-Giant-Swarm-Activity': opts['xGiantSwarmActivity'],
        'X-Giant-Swarm-CmdLine': opts['xGiantSwarmCmdLine']
      };
      var formParams = {
      };

      var authNames = ['AuthorizationHeaderToken'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V4GetClusterAppsResponse;

      return this.apiClient.callApi(
        '/v4/clusters/{cluster_id}/apps/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get cluster apps
     * Returns an array of apps installed on a given cluster.  ### Example &#x60;&#x60;&#x60;json   [     {       \&quot;metadata\&quot;: {         \&quot;name\&quot;: \&quot;my-awesome-prometheus\&quot;,       },        \&quot;spec\&quot;: {         \&quot;catalog\&quot;: \&quot;sample-catalog\&quot;         \&quot;name\&quot;: \&quot;prometheus-chart\&quot;,         \&quot;namespace\&quot;: \&quot;giantswarm\&quot;,         \&quot;version\&quot;: \&quot;0.2.0\&quot;,         \&quot;user_config\&quot;: {           \&quot;configmap\&quot;: {             \&quot;name\&quot;: \&quot;prometheus-user-values\&quot;,             \&quot;namespace\&quot;: \&quot;123ab\&quot;           }         }       },        \&quot;status\&quot;: {         \&quot;app_version\&quot;: \&quot;1.0.0\&quot;,         \&quot;release\&quot;: {           \&quot;last_deployed\&quot;: \&quot;2019-04-08T12:34:00Z\&quot;,           \&quot;status\&quot;: \&quot;DEPLOYED\&quot;         },         \&quot;version\&quot;: \&quot;0.2.0\&quot;,       }     }   ] &#x60;&#x60;&#x60; 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GetClusterAppsResponse}
     */
    this.getClusterApps = function(authorization, clusterId, opts) {
      return this.getClusterAppsWithHttpInfo(authorization, clusterId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify an app
     * This operation allows you to modify an existing app.  The following attributes can be modified:  - &#x60;version&#x60;: Changing this field lets you upgrade or downgrade an app.  &#x60;catalog&#x60;, &#x60;name&#x60;, &#x60;namespace&#x60;, and &#x60;user_config&#x60; are not editable. If you need to move or rename an app, you should instead delete the app and make it again.  The request body must conform with the [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386) standard. Requests have to be sent with the &#x60;Content-Type: application/merge-patch+json&#x60; header. 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @param {module:model/V4ModifyAppRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4App} and HTTP response
     */
    this.modifyClusterAppWithHttpInfo = function(authorization, clusterId, appName, opts) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling modifyClusterApp");
      }

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling modifyClusterApp");
      }

      // verify the required parameter 'appName' is set
      if (appName === undefined || appName === null) {
        throw new Error("Missing the required parameter 'appName' when calling modifyClusterApp");
      }


      var pathParams = {
        'cluster_id': clusterId,
        'app_name': appName
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization,
        'X-Request-ID': opts['xRequestID'],
        'X-Giant-Swarm-Activity': opts['xGiantSwarmActivity'],
        'X-Giant-Swarm-CmdLine': opts['xGiantSwarmCmdLine']
      };
      var formParams = {
      };

      var authNames = ['AuthorizationHeaderToken'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V4App;

      return this.apiClient.callApi(
        '/v4/clusters/{cluster_id}/apps/{app_name}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Modify an app
     * This operation allows you to modify an existing app.  The following attributes can be modified:  - &#x60;version&#x60;: Changing this field lets you upgrade or downgrade an app.  &#x60;catalog&#x60;, &#x60;name&#x60;, &#x60;namespace&#x60;, and &#x60;user_config&#x60; are not editable. If you need to move or rename an app, you should instead delete the app and make it again.  The request body must conform with the [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386) standard. Requests have to be sent with the &#x60;Content-Type: application/merge-patch+json&#x60; header. 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @param {module:model/V4ModifyAppRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4App}
     */
    this.modifyClusterApp = function(authorization, clusterId, appName, opts) {
      return this.modifyClusterAppWithHttpInfo(authorization, clusterId, appName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
