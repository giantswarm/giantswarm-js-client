/**
* NodePools service.
* @module api/NodePoolsApi
* @version 4.0.0
*/
export default class NodePoolsApi {
    /**
    * Constructs a new NodePoolsApi.
    * @alias module:api/NodePoolsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient: any);
    apiClient: any;
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
    addNodePoolWithHttpInfo(clusterId: string, body: any, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
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
    addNodePool(clusterId: string, body: any, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
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
    deleteNodePoolWithHttpInfo(clusterId: string, nodepoolId: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
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
    deleteNodePool(clusterId: string, nodepoolId: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
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
    getNodePoolWithHttpInfo(clusterId: string, nodepoolId: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
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
    getNodePool(clusterId: string, nodepoolId: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
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
    getNodePoolsWithHttpInfo(clusterId: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
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
    getNodePools(clusterId: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
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
    modifyNodePoolWithHttpInfo(clusterId: string, nodepoolId: string, body: any, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
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
    modifyNodePool(clusterId: string, nodepoolId: string, body: any, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
}
//# sourceMappingURL=NodePoolsApi.d.ts.map