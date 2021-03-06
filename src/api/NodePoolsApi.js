/**
 * The Giant Swarm API
 * This is the documentation for the Giant Swarm API.  For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).  The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.  Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.  Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.  Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.  ## Source  The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).  ## Versioning  Some endpoint paths are different, depending on the release version of the workload cluster that they expect. All V5 endpoints except a cluster release version newer than `10.0.0` on  <span class=\"badge aws\">AWS</span>, or `13.0.0` on <span class=\"badge azure\">Azure</span>. Cluster release versions older than that, or on different providers, must be used with V4 endpoints. If there is no V5 endpoint for a specific command (e.g. `Get clusters`), then release version rules don't apply, and the V4 endpoint must be used. 
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
    define(['ApiClient', 'model/V4GenericResponse', 'model/V5AddNodePoolRequest', 'model/V5GetNodePoolResponse', 'model/V5GetNodePoolsResponse', 'model/V5ModifyNodePoolRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/V4GenericResponse'), require('../model/V5AddNodePoolRequest'), require('../model/V5GetNodePoolResponse'), require('../model/V5GetNodePoolsResponse'), require('../model/V5ModifyNodePoolRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.GiantSwarm) {
      root.GiantSwarm = {};
    }
    root.GiantSwarm.NodePoolsApi = factory(root.GiantSwarm.ApiClient, root.GiantSwarm.V4GenericResponse, root.GiantSwarm.V5AddNodePoolRequest, root.GiantSwarm.V5GetNodePoolResponse, root.GiantSwarm.V5GetNodePoolsResponse, root.GiantSwarm.V5ModifyNodePoolRequest);
  }
}(this, function(ApiClient, V4GenericResponse, V5AddNodePoolRequest, V5GetNodePoolResponse, V5GetNodePoolsResponse, V5ModifyNodePoolRequest) {
  'use strict';

  /**
   * NodePools service.
   * @module api/NodePoolsApi
   * @version 4.0.0
   */

  /**
   * Constructs a new NodePoolsApi. 
   * @alias module:api/NodePoolsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create node pool
     * This allows to add a node pool to a cluster.  Some, but not all, node pool configuration can be changed after creation. The following settings will have a permanent effect:  - &#x60;availability_zones&#x60; - &#x60;node_spec.aws.instance_type&#x60; 
     * @param {String} clusterId Cluster ID
     * @param {module:model/V5AddNodePoolRequest} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V5GetNodePoolResponse} and HTTP response
     */
    this.addNodePoolWithHttpInfo = function(clusterId, body, opts) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling addNodePool");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addNodePool");
      }


      var pathParams = {
        'cluster_id': clusterId
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
      var returnType = V5GetNodePoolResponse;

      return this.apiClient.callApi(
        '/v5/clusters/{cluster_id}/nodepools/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create node pool
     * This allows to add a node pool to a cluster.  Some, but not all, node pool configuration can be changed after creation. The following settings will have a permanent effect:  - &#x60;availability_zones&#x60; - &#x60;node_spec.aws.instance_type&#x60; 
     * @param {String} clusterId Cluster ID
     * @param {module:model/V5AddNodePoolRequest} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V5GetNodePoolResponse}
     */
    this.addNodePool = function(clusterId, body, opts) {
      return this.addNodePoolWithHttpInfo(clusterId, body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete node pool
     * Triggers the deletion of a node pool.  Nodes in the pool will first be cordoned and drained. Note that it is your responsibililty to make sure that workloads using the node pool can be scheduled elsewhere. We recommend to double-check the available capacity of remaining node pools, as well as any node selectors and taints. Also you can do the draining yourself before issuing the delete request, to observe the outcome. Use  &#x60;&#x60;&#x60; kubectl drain nodes -l giantswarm.io/machine-deployment&#x3D;&lt;nodepool_id&gt; ... &#x60;&#x60;&#x60; 
     * @param {String} clusterId Cluster ID
     * @param {String} nodepoolId Node Pool ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    this.deleteNodePoolWithHttpInfo = function(clusterId, nodepoolId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling deleteNodePool");
      }

      // verify the required parameter 'nodepoolId' is set
      if (nodepoolId === undefined || nodepoolId === null) {
        throw new Error("Missing the required parameter 'nodepoolId' when calling deleteNodePool");
      }


      var pathParams = {
        'cluster_id': clusterId,
        'nodepool_id': nodepoolId
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
        '/v5/clusters/{cluster_id}/nodepools/{nodepool_id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete node pool
     * Triggers the deletion of a node pool.  Nodes in the pool will first be cordoned and drained. Note that it is your responsibililty to make sure that workloads using the node pool can be scheduled elsewhere. We recommend to double-check the available capacity of remaining node pools, as well as any node selectors and taints. Also you can do the draining yourself before issuing the delete request, to observe the outcome. Use  &#x60;&#x60;&#x60; kubectl drain nodes -l giantswarm.io/machine-deployment&#x3D;&lt;nodepool_id&gt; ... &#x60;&#x60;&#x60; 
     * @param {String} clusterId Cluster ID
     * @param {String} nodepoolId Node Pool ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    this.deleteNodePool = function(clusterId, nodepoolId, opts) {
      return this.deleteNodePoolWithHttpInfo(clusterId, nodepoolId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get node pool details
     * Returns all available details on a specific node pool. 
     * @param {String} clusterId Cluster ID
     * @param {String} nodepoolId Node Pool ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V5GetNodePoolResponse} and HTTP response
     */
    this.getNodePoolWithHttpInfo = function(clusterId, nodepoolId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling getNodePool");
      }

      // verify the required parameter 'nodepoolId' is set
      if (nodepoolId === undefined || nodepoolId === null) {
        throw new Error("Missing the required parameter 'nodepoolId' when calling getNodePool");
      }


      var pathParams = {
        'cluster_id': clusterId,
        'nodepool_id': nodepoolId
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
      var returnType = V5GetNodePoolResponse;

      return this.apiClient.callApi(
        '/v5/clusters/{cluster_id}/nodepools/{nodepool_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get node pool details
     * Returns all available details on a specific node pool. 
     * @param {String} clusterId Cluster ID
     * @param {String} nodepoolId Node Pool ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V5GetNodePoolResponse}
     */
    this.getNodePool = function(clusterId, nodepoolId, opts) {
      return this.getNodePoolWithHttpInfo(clusterId, nodepoolId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get node pools
     * Returns a list of node pools from a given cluster. 
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V5GetNodePoolsResponse} and HTTP response
     */
    this.getNodePoolsWithHttpInfo = function(clusterId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling getNodePools");
      }


      var pathParams = {
        'cluster_id': clusterId
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
      var returnType = V5GetNodePoolsResponse;

      return this.apiClient.callApi(
        '/v5/clusters/{cluster_id}/nodepools/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get node pools
     * Returns a list of node pools from a given cluster. 
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V5GetNodePoolsResponse}
     */
    this.getNodePools = function(clusterId, opts) {
      return this.getNodePoolsWithHttpInfo(clusterId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify node pool
     * Allows to rename a node pool or change its scaling settings. 
     * @param {String} clusterId Cluster ID
     * @param {String} nodepoolId Node Pool ID
     * @param {module:model/V5ModifyNodePoolRequest} body Merge-patch body
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V5GetNodePoolResponse} and HTTP response
     */
    this.modifyNodePoolWithHttpInfo = function(clusterId, nodepoolId, body, opts) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling modifyNodePool");
      }

      // verify the required parameter 'nodepoolId' is set
      if (nodepoolId === undefined || nodepoolId === null) {
        throw new Error("Missing the required parameter 'nodepoolId' when calling modifyNodePool");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling modifyNodePool");
      }


      var pathParams = {
        'cluster_id': clusterId,
        'nodepool_id': nodepoolId
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
      var returnType = V5GetNodePoolResponse;

      return this.apiClient.callApi(
        '/v5/clusters/{cluster_id}/nodepools/{nodepool_id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Modify node pool
     * Allows to rename a node pool or change its scaling settings. 
     * @param {String} clusterId Cluster ID
     * @param {String} nodepoolId Node Pool ID
     * @param {module:model/V5ModifyNodePoolRequest} body Merge-patch body
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V5GetNodePoolResponse}
     */
    this.modifyNodePool = function(clusterId, nodepoolId, body, opts) {
      return this.modifyNodePoolWithHttpInfo(clusterId, nodepoolId, body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
