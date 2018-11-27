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
    define(['ApiClient', 'model/V4GenericResponse', 'model/V4InfoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/V4GenericResponse'), require('../model/V4InfoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.GiantSwarmV4) {
      root.GiantSwarmV4 = {};
    }
    root.GiantSwarmV4.InfoApi = factory(root.GiantSwarmV4.ApiClient, root.GiantSwarmV4.V4GenericResponse, root.GiantSwarmV4.V4InfoResponse);
  }
}(this, function(ApiClient, V4GenericResponse, V4InfoResponse) {
  'use strict';

  /**
   * Info service.
   * @module api/InfoApi
   * @version 4.0.0
   */

  /**
   * Constructs a new InfoApi. 
   * @alias module:api/InfoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get information on the installation
     * Returns a set of details on the installation. The output varies based on the provider used in the installation.  This information is useful for example when creating new cluster, to prevent creating clusters with more worker nodes than possible.  ### Example for an AWS-based installation  &#x60;&#x60;&#x60;json {   \&quot;general\&quot;: {     \&quot;installation_name\&quot;: \&quot;shire\&quot;,     \&quot;provider\&quot;: \&quot;aws\&quot;,     \&quot;datacenter\&quot;: \&quot;eu-central-1\&quot;,     \&quot;availability_zones\&quot;: {       \&quot;max\&quot;: 3,       \&quot;default\&quot;: 1,     }   },   \&quot;workers\&quot;: {     \&quot;count_per_cluster\&quot;: {       \&quot;max\&quot;: null,       \&quot;default\&quot;: 3     },     \&quot;instance_type\&quot;: {       \&quot;options\&quot;: [         \&quot;m3.medium\&quot;, \&quot;m3.large\&quot;, \&quot;m3.xlarge\&quot;       ],       \&quot;default\&quot;: \&quot;m3.large\&quot;     }   } } &#x60;&#x60;&#x60;  ### Example for a KVM-based installation  &#x60;&#x60;&#x60;json {   \&quot;general\&quot;: {     \&quot;installation_name\&quot;: \&quot;isengard\&quot;,     \&quot;provider\&quot;: \&quot;kvm\&quot;,     \&quot;datacenter\&quot;: \&quot;string\&quot;,     \&quot;availability_zones\&quot;: {       \&quot;max\&quot;: 1,       \&quot;default\&quot;: 1,     }   },   \&quot;workers\&quot;: {     \&quot;count_per_cluster\&quot;: {       \&quot;max\&quot;: 8,       \&quot;default\&quot;: 3     },   } } &#x60;&#x60;&#x60; 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4InfoResponse} and HTTP response
     */
    this.getInfoWithHttpInfo = function(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getInfo");
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
      var returnType = V4InfoResponse;

      return this.apiClient.callApi(
        '/v4/info/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get information on the installation
     * Returns a set of details on the installation. The output varies based on the provider used in the installation.  This information is useful for example when creating new cluster, to prevent creating clusters with more worker nodes than possible.  ### Example for an AWS-based installation  &#x60;&#x60;&#x60;json {   \&quot;general\&quot;: {     \&quot;installation_name\&quot;: \&quot;shire\&quot;,     \&quot;provider\&quot;: \&quot;aws\&quot;,     \&quot;datacenter\&quot;: \&quot;eu-central-1\&quot;,     \&quot;availability_zones\&quot;: {       \&quot;max\&quot;: 3,       \&quot;default\&quot;: 1,     }   },   \&quot;workers\&quot;: {     \&quot;count_per_cluster\&quot;: {       \&quot;max\&quot;: null,       \&quot;default\&quot;: 3     },     \&quot;instance_type\&quot;: {       \&quot;options\&quot;: [         \&quot;m3.medium\&quot;, \&quot;m3.large\&quot;, \&quot;m3.xlarge\&quot;       ],       \&quot;default\&quot;: \&quot;m3.large\&quot;     }   } } &#x60;&#x60;&#x60;  ### Example for a KVM-based installation  &#x60;&#x60;&#x60;json {   \&quot;general\&quot;: {     \&quot;installation_name\&quot;: \&quot;isengard\&quot;,     \&quot;provider\&quot;: \&quot;kvm\&quot;,     \&quot;datacenter\&quot;: \&quot;string\&quot;,     \&quot;availability_zones\&quot;: {       \&quot;max\&quot;: 1,       \&quot;default\&quot;: 1,     }   },   \&quot;workers\&quot;: {     \&quot;count_per_cluster\&quot;: {       \&quot;max\&quot;: 8,       \&quot;default\&quot;: 3     },   } } &#x60;&#x60;&#x60; 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4InfoResponse}
     */
    this.getInfo = function(authorization, opts) {
      return this.getInfoWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
