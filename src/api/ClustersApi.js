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
    define(['ApiClient', 'model/V4AddClusterRequest', 'model/V4ClusterDetailsResponse', 'model/V4ClusterListItem', 'model/V4GenericResponse', 'model/V4ModifyClusterRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/V4AddClusterRequest'), require('../model/V4ClusterDetailsResponse'), require('../model/V4ClusterListItem'), require('../model/V4GenericResponse'), require('../model/V4ModifyClusterRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.GiantSwarmV4) {
      root.GiantSwarmV4 = {};
    }
    root.GiantSwarmV4.ClustersApi = factory(root.GiantSwarmV4.ApiClient, root.GiantSwarmV4.V4AddClusterRequest, root.GiantSwarmV4.V4ClusterDetailsResponse, root.GiantSwarmV4.V4ClusterListItem, root.GiantSwarmV4.V4GenericResponse, root.GiantSwarmV4.V4ModifyClusterRequest);
  }
}(this, function(ApiClient, V4AddClusterRequest, V4ClusterDetailsResponse, V4ClusterListItem, V4GenericResponse, V4ModifyClusterRequest) {
  'use strict';

  /**
   * Clusters service.
   * @module api/ClustersApi
   * @version 4.0.0
   */

  /**
   * Constructs a new ClustersApi. 
   * @alias module:api/ClustersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create cluster
     * This operation is used to create a new Kubernetes cluster for an organization. The desired configuration can be specified using the __cluster definition format__ (see [external documentation](https://github.com/giantswarm/api-spec/blob/master/details/CLUSTER_DEFINITION.md) for details).  The cluster definition format allows to set a number of optional configuration details, like memory size and number of CPU cores. However, one attribute is __mandatory__ upon creation: The &#x60;owner&#x60; attribute must carry the name of the organization the cluster will belong to. Note that the acting user must be a member of that organization in order to create a cluster.  It is *recommended* to also specify the &#x60;name&#x60; attribute to give the cluster a friendly name, like e. g. \&quot;Development Cluster\&quot;.  Additional definition attributes can be used. Where attributes are omitted, default configuration values will be applied. For example, if no &#x60;release_version&#x60; is specified, the most recent version is used.  The number of &#x60;availability_zones&#x60; affects the total number of nodes that can be created in the cluster. The number of availability zones splits the IP range that can be used for the cluster in multiple smaller IP ranges. The [getInfo](#operation/getInfo) endpoint provides more details about the cluster IP range.  IP range example:  If a cluster gets a &#x60;/22&#x60; range (1022 hosts) and the cluster should be spawned across 3 availability zones, the range will then be split up into four &#x60;/24&#x60; (254 hosts) that can be assigned to four different availability zones. One range will stay unused because network addresses must be powers of two. See [CIDR addressing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing). Each of the &#x60;/24&#x60; will then be split into two &#x60;/25&#x60; (126 hosts) for public and private subnets. The private subnet is used for nodes and internal loadbalancer (only if you create them within Kubernetes). The public subnet will be used by the public loadbalancers. Tenant cluster come with two public loadbalancers by default. One for the Kubernetes API and one for Ingress.  __Note:__ AWS ELBs can take up to 8 IP addresses due to the way how they scale. In addition to this, every AWS subnet has four first addresses (.1-.4) reserved for internal use.  The &#x60;workers&#x60; attribute, if present, must contain an array of node definition objects. The number of objects given determines the number of workers created.  For example, requesting three worker nodes with default configuration can be achieved by submitting an array of three empty objects:  &#x60;&#x60;&#x60;\&quot;workers\&quot;: [{}, {}, {}]&#x60;&#x60;&#x60;  For clusters on AWS, note that all worker nodes must use the same instance type. 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {module:model/V4AddClusterRequest} body New cluster definition
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    this.addClusterWithHttpInfo = function(authorization, body, opts) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling addCluster");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addCluster");
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
      var returnType = V4GenericResponse;

      return this.apiClient.callApi(
        '/v4/clusters/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create cluster
     * This operation is used to create a new Kubernetes cluster for an organization. The desired configuration can be specified using the __cluster definition format__ (see [external documentation](https://github.com/giantswarm/api-spec/blob/master/details/CLUSTER_DEFINITION.md) for details).  The cluster definition format allows to set a number of optional configuration details, like memory size and number of CPU cores. However, one attribute is __mandatory__ upon creation: The &#x60;owner&#x60; attribute must carry the name of the organization the cluster will belong to. Note that the acting user must be a member of that organization in order to create a cluster.  It is *recommended* to also specify the &#x60;name&#x60; attribute to give the cluster a friendly name, like e. g. \&quot;Development Cluster\&quot;.  Additional definition attributes can be used. Where attributes are omitted, default configuration values will be applied. For example, if no &#x60;release_version&#x60; is specified, the most recent version is used.  The number of &#x60;availability_zones&#x60; affects the total number of nodes that can be created in the cluster. The number of availability zones splits the IP range that can be used for the cluster in multiple smaller IP ranges. The [getInfo](#operation/getInfo) endpoint provides more details about the cluster IP range.  IP range example:  If a cluster gets a &#x60;/22&#x60; range (1022 hosts) and the cluster should be spawned across 3 availability zones, the range will then be split up into four &#x60;/24&#x60; (254 hosts) that can be assigned to four different availability zones. One range will stay unused because network addresses must be powers of two. See [CIDR addressing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing). Each of the &#x60;/24&#x60; will then be split into two &#x60;/25&#x60; (126 hosts) for public and private subnets. The private subnet is used for nodes and internal loadbalancer (only if you create them within Kubernetes). The public subnet will be used by the public loadbalancers. Tenant cluster come with two public loadbalancers by default. One for the Kubernetes API and one for Ingress.  __Note:__ AWS ELBs can take up to 8 IP addresses due to the way how they scale. In addition to this, every AWS subnet has four first addresses (.1-.4) reserved for internal use.  The &#x60;workers&#x60; attribute, if present, must contain an array of node definition objects. The number of objects given determines the number of workers created.  For example, requesting three worker nodes with default configuration can be achieved by submitting an array of three empty objects:  &#x60;&#x60;&#x60;\&quot;workers\&quot;: [{}, {}, {}]&#x60;&#x60;&#x60;  For clusters on AWS, note that all worker nodes must use the same instance type. 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {module:model/V4AddClusterRequest} body New cluster definition
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    this.addCluster = function(authorization, body, opts) {
      return this.addClusterWithHttpInfo(authorization, body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete cluster
     * This operation allows to delete a cluster.  __Caution:__ Deleting a cluster causes the termination of all workloads running on the cluster. Data stored on the worker nodes will be lost. There is no way to undo this operation.  The response is sent as soon as the request is validated. At that point, workloads might still be running on the cluster and may be accessible for a little wile, until the cluster is actually deleted. 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    this.deleteClusterWithHttpInfo = function(authorization, clusterId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling deleteCluster");
      }

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling deleteCluster");
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
      var returnType = V4GenericResponse;

      return this.apiClient.callApi(
        '/v4/clusters/{cluster_id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete cluster
     * This operation allows to delete a cluster.  __Caution:__ Deleting a cluster causes the termination of all workloads running on the cluster. Data stored on the worker nodes will be lost. There is no way to undo this operation.  The response is sent as soon as the request is validated. At that point, workloads might still be running on the cluster and may be accessible for a little wile, until the cluster is actually deleted. 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    this.deleteCluster = function(authorization, clusterId, opts) {
      return this.deleteClusterWithHttpInfo(authorization, clusterId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get cluster details
     * This operation allows to obtain all available details on a particular cluster. 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4ClusterDetailsResponse} and HTTP response
     */
    this.getClusterWithHttpInfo = function(authorization, clusterId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getCluster");
      }

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling getCluster");
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
      var returnType = V4ClusterDetailsResponse;

      return this.apiClient.callApi(
        '/v4/clusters/{cluster_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get cluster details
     * This operation allows to obtain all available details on a particular cluster. 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4ClusterDetailsResponse}
     */
    this.getCluster = function(authorization, clusterId, opts) {
      return this.getClusterWithHttpInfo(authorization, clusterId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get clusters
     * This operation fetches a list of clusters.  The result depends on the permissions of the user. A normal user will get all the clusters the user has access to, via organization membership. A user with admin permission will receive a list of all existing clusters.  The result array items are sparse representations of the cluster objects. To fetch more details on a cluster, use the [getCluster](#operation/getCluster) operation. 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/V4ClusterListItem>} and HTTP response
     */
    this.getClustersWithHttpInfo = function(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getClusters");
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
      var returnType = [V4ClusterListItem];

      return this.apiClient.callApi(
        '/v4/clusters/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get clusters
     * This operation fetches a list of clusters.  The result depends on the permissions of the user. A normal user will get all the clusters the user has access to, via organization membership. A user with admin permission will receive a list of all existing clusters.  The result array items are sparse representations of the cluster objects. To fetch more details on a cluster, use the [getCluster](#operation/getCluster) operation. 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/V4ClusterListItem>}
     */
    this.getClusters = function(authorization, opts) {
      return this.getClustersWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify cluster
     * This operation allows to modify an existing cluster.  A cluster modification is performed by submitting a &#x60;PATCH&#x60; request to the cluster resource (as described in the [addCluster](#operation/addCluster) and [getCluster](#operation/getCluster)) in form of a [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386). This means, only the attributes to be modified have to be contained in the request body.  The following attributes can be modified:  - &#x60;name&#x60;: Rename the cluster to something more fitting.  - &#x60;owner&#x60;: Changing the owner organization name means to change cluster ownership from one organization to another. The user performing the request has to be a member of both organizations.  - &#x60;release_version&#x60;: By changing this attribute you can upgrade a cluster to a newer [release](https://docs.giantswarm.io/api/#tag/releases).  - &#x60;workers&#x60;: By modifying the array of workers, nodes can be added to increase the cluster&#39;s capacity. See details below.  ### Adding and Removing Worker Nodes (Scaling)  Adding worker nodes to a cluster or removing worker nodes from a cluster works by submitting the &#x60;workers&#x60; attribute, which contains a (sparse) array of worker node defintions.  _Sparse_ here means that all configuration details are optional. In the case that worker nodes are added to a cluster, wherever a configuration detail is missing, defaults will be applied. See [Creating a cluster](#operation/addCluster) for details.  When modifying the cluster resource, you describe the desired state. For scaling, this means that the worker node array submitted must contain as many elements as the cluster should have worker nodes. If your cluster currently has five nodes and you submit a workers array with four elements, this means that one worker node will be removed. If your submitted workers array has six elements, this means one will be added.  As an example, this request body could be used to scale a cluster to three worker nodes:  &#x60;&#x60;&#x60;json {   \&quot;workers\&quot;: [{}, {}, {}] } &#x60;&#x60;&#x60;  If the scaled cluster had four worker nodes before, one would be removed. If it had two worker nodes before, one with default settings would be added.  ### Limitations  - As of now, existing worker nodes cannot be modified. - The number of availability zones cannot be modified afterwards. - When removing nodes (scaling down), it is not possible to determine which nodes will be removed. - On AWS based clusters, all worker nodes must use the same EC2 instance type (&#x60;instance_type&#x60; node attribute). By not setting an &#x60;instance_type&#x60; when submitting a PATCH request, you ensure that the right instance type is used automatically. 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {module:model/V4ModifyClusterRequest} body Merge-patch body
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4ClusterDetailsResponse} and HTTP response
     */
    this.modifyClusterWithHttpInfo = function(authorization, body, clusterId, opts) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling modifyCluster");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling modifyCluster");
      }

      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling modifyCluster");
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
      var returnType = V4ClusterDetailsResponse;

      return this.apiClient.callApi(
        '/v4/clusters/{cluster_id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Modify cluster
     * This operation allows to modify an existing cluster.  A cluster modification is performed by submitting a &#x60;PATCH&#x60; request to the cluster resource (as described in the [addCluster](#operation/addCluster) and [getCluster](#operation/getCluster)) in form of a [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386). This means, only the attributes to be modified have to be contained in the request body.  The following attributes can be modified:  - &#x60;name&#x60;: Rename the cluster to something more fitting.  - &#x60;owner&#x60;: Changing the owner organization name means to change cluster ownership from one organization to another. The user performing the request has to be a member of both organizations.  - &#x60;release_version&#x60;: By changing this attribute you can upgrade a cluster to a newer [release](https://docs.giantswarm.io/api/#tag/releases).  - &#x60;workers&#x60;: By modifying the array of workers, nodes can be added to increase the cluster&#39;s capacity. See details below.  ### Adding and Removing Worker Nodes (Scaling)  Adding worker nodes to a cluster or removing worker nodes from a cluster works by submitting the &#x60;workers&#x60; attribute, which contains a (sparse) array of worker node defintions.  _Sparse_ here means that all configuration details are optional. In the case that worker nodes are added to a cluster, wherever a configuration detail is missing, defaults will be applied. See [Creating a cluster](#operation/addCluster) for details.  When modifying the cluster resource, you describe the desired state. For scaling, this means that the worker node array submitted must contain as many elements as the cluster should have worker nodes. If your cluster currently has five nodes and you submit a workers array with four elements, this means that one worker node will be removed. If your submitted workers array has six elements, this means one will be added.  As an example, this request body could be used to scale a cluster to three worker nodes:  &#x60;&#x60;&#x60;json {   \&quot;workers\&quot;: [{}, {}, {}] } &#x60;&#x60;&#x60;  If the scaled cluster had four worker nodes before, one would be removed. If it had two worker nodes before, one with default settings would be added.  ### Limitations  - As of now, existing worker nodes cannot be modified. - The number of availability zones cannot be modified afterwards. - When removing nodes (scaling down), it is not possible to determine which nodes will be removed. - On AWS based clusters, all worker nodes must use the same EC2 instance type (&#x60;instance_type&#x60; node attribute). By not setting an &#x60;instance_type&#x60; when submitting a PATCH request, you ensure that the right instance type is used automatically. 
     * @param {String} authorization As described in the [authentication](#section/Authentication) section 
     * @param {module:model/V4ModifyClusterRequest} body Merge-patch body
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose. 
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4ClusterDetailsResponse}
     */
    this.modifyCluster = function(authorization, body, clusterId, opts) {
      return this.modifyClusterWithHttpInfo(authorization, body, clusterId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
