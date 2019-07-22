/**
 * The Giant Swarm API
 * This is the documentation for the Giant Swarm API.  For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).  The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.  Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.  Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.  Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.  ## Source  The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec). 
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
    define(['ApiClient', 'model/V4AddKeyPairRequest', 'model/V4AddKeyPairResponse', 'model/V4GenericResponse', 'model/V4GetKeyPairsResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/V4AddKeyPairRequest'), require('../model/V4AddKeyPairResponse'), require('../model/V4GenericResponse'), require('../model/V4GetKeyPairsResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.GiantSwarm) {
      root.GiantSwarm = {};
    }
    root.GiantSwarm.KeyPairsApi = factory(root.GiantSwarm.ApiClient, root.GiantSwarm.V4AddKeyPairRequest, root.GiantSwarm.V4AddKeyPairResponse, root.GiantSwarm.V4GenericResponse, root.GiantSwarm.V4GetKeyPairsResponse);
  }
}(this, function(ApiClient, V4AddKeyPairRequest, V4AddKeyPairResponse, V4GenericResponse, V4GetKeyPairsResponse) {
  'use strict';

  /**
   * KeyPairs service.
   * @module api/KeyPairsApi
   * @version 4.0.0
   */

  /**
   * Constructs a new KeyPairsApi. 
   * @alias module:api/KeyPairsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create key pair
     * This operation allows to create a new key pair for accessing a specific cluster.  A key pair consists of an unencrypted private RSA key and an X.509 certificate. In addition, when obtaining a key pair for a cluster, the cluster&#39;s certificate authority file (CA certificate) is delivered, which is required by TLS clients to establish trust to the cluster.  In addition to the credentials itself, a key pair has some metadata like a unique ID, a creation timestamp and a free text &#x60;description&#x60; that you can use at will, for example to note for whom a key pair has been issued.  ### Customizing the certificate&#39;s subject for K8s RBAC  It is possible to set the Common Name and Organization fields of the generated certificate&#39;s subject.  - &#x60;cn_prefix&#x60;: The certificate&#39;s common name uses this format: &#x60;&lt;cn_prefix&gt;.user.&lt;clusterdomain&gt;&#x60;.    &#x60;clusterdomain&#x60; is specific to your cluster and is not editable.    The &#x60;cn_prefix&#x60; however is editable. When left blank it will default   to the email address of the Giant Swarm user that is performing the   create key pair request.    The common name is used as the username for requests to the Kubernetes API. This allows you   to set up role-based access controls.   - &#x60;certificate_organizations&#x60;: This will set the certificate&#39;s &#x60;organization&#x60; fields. Use a comma separated list of values.   The Kubernetes API will use these values as group memberships.  __Note:__ The actual credentials coming with the key pair (key, certificate) can only be accessed once, as the result of the &#x60;POST&#x60; request that triggers their creation. This restriction exists to minimize the risk of credentials being leaked. If you fail to capture the credentials upon creation, you&#39;ll have to repeat the creation request. 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {String} clusterId Cluster ID
     * @param {module:model/V4AddKeyPairRequest} body While the &#x60;ttl_hours&#x60; attribute is optional and will be set to a default value when omitted, the &#x60;description&#x60; is mandatory. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4AddKeyPairResponse} and HTTP response
     */
    this.addKeyPairWithHttpInfo = function(authorization, clusterId, body, opts) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling addKeyPair");
      }

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling addKeyPair");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addKeyPair");
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
      var returnType = V4AddKeyPairResponse;

      return this.apiClient.callApi(
        '/v4/clusters/{cluster_id}/key-pairs/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create key pair
     * This operation allows to create a new key pair for accessing a specific cluster.  A key pair consists of an unencrypted private RSA key and an X.509 certificate. In addition, when obtaining a key pair for a cluster, the cluster&#39;s certificate authority file (CA certificate) is delivered, which is required by TLS clients to establish trust to the cluster.  In addition to the credentials itself, a key pair has some metadata like a unique ID, a creation timestamp and a free text &#x60;description&#x60; that you can use at will, for example to note for whom a key pair has been issued.  ### Customizing the certificate&#39;s subject for K8s RBAC  It is possible to set the Common Name and Organization fields of the generated certificate&#39;s subject.  - &#x60;cn_prefix&#x60;: The certificate&#39;s common name uses this format: &#x60;&lt;cn_prefix&gt;.user.&lt;clusterdomain&gt;&#x60;.    &#x60;clusterdomain&#x60; is specific to your cluster and is not editable.    The &#x60;cn_prefix&#x60; however is editable. When left blank it will default   to the email address of the Giant Swarm user that is performing the   create key pair request.    The common name is used as the username for requests to the Kubernetes API. This allows you   to set up role-based access controls.   - &#x60;certificate_organizations&#x60;: This will set the certificate&#39;s &#x60;organization&#x60; fields. Use a comma separated list of values.   The Kubernetes API will use these values as group memberships.  __Note:__ The actual credentials coming with the key pair (key, certificate) can only be accessed once, as the result of the &#x60;POST&#x60; request that triggers their creation. This restriction exists to minimize the risk of credentials being leaked. If you fail to capture the credentials upon creation, you&#39;ll have to repeat the creation request. 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {String} clusterId Cluster ID
     * @param {module:model/V4AddKeyPairRequest} body While the &#x60;ttl_hours&#x60; attribute is optional and will be set to a default value when omitted, the &#x60;description&#x60; is mandatory. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4AddKeyPairResponse}
     */
    this.addKeyPair = function(authorization, clusterId, body, opts) {
      return this.addKeyPairWithHttpInfo(authorization, clusterId, body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get key pairs
     * Returns a list of information on all key pairs of a cluster as an array.  The individual array items contain metadata on the key pairs, but neither the key nor the certificate. These can only be obtained upon creation, using the [addKeypair](#operation/addKeyPair) operation. 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GetKeyPairsResponse} and HTTP response
     */
    this.getKeyPairsWithHttpInfo = function(authorization, clusterId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getKeyPairs");
      }

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling getKeyPairs");
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
      var returnType = V4GetKeyPairsResponse;

      return this.apiClient.callApi(
        '/v4/clusters/{cluster_id}/key-pairs/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get key pairs
     * Returns a list of information on all key pairs of a cluster as an array.  The individual array items contain metadata on the key pairs, but neither the key nor the certificate. These can only be obtained upon creation, using the [addKeypair](#operation/addKeyPair) operation. 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GetKeyPairsResponse}
     */
    this.getKeyPairs = function(authorization, clusterId, opts) {
      return this.getKeyPairsWithHttpInfo(authorization, clusterId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
