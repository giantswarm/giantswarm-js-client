import ApiClient from "../ApiClient";
import V5AddClusterRequest from "../model/V5AddClusterRequest";
import V4AddClusterRequest from "../model/V4AddClusterRequest";
import V4ModifyClusterRequest from "../model/V4ModifyClusterRequest";
import V5ModifyClusterRequest from "../model/V5ModifyClusterRequest";
import V4GenericResponse from "../model/V4GenericResponse";
import V5ClusterDetailsResponse from "../model/V5ClusterDetailsResponse";
import V4ClusterDetailsResponse from "../model/V4ClusterDetailsResponse";
import V4GetClusterStatusResponse from "../model/V4GetClusterStatusResponse";
import V4ClusterListItem from "../model/V4ClusterListItem";

/**
* Clusters service.
* @module api/ClustersApi
* @version 4.0.0
*/
export default class ClustersApi {
    /**
    * Constructs a new ClustersApi.
    * @alias module:api/ClustersApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClient);
    apiClient: ApiClient;
    /**
     * Create cluster (v4)
     * This operation is used to create a new Kubernetes cluster or \&quot;tenant cluster\&quot;.  ### Cluster definition  The cluster definition format allows to set a number of optional configuration details, like worker node configuration, with node specification depending on the provider (e. g. on &lt;span class&#x3D;\&quot;badge azure\&quot;&gt;Azure&lt;/span&gt; the VM size, or on &lt;span class&#x3D;\&quot;badge kvm\&quot;&gt;KVM&lt;/span&gt; the memory size and number of CPU cores).  One attribute is __mandatory__ upon creation: The &#x60;owner&#x60; attribute must carry the name of the organization the cluster will belong to. Note that the acting user must be a member of that organization in order to create a cluster.  For all other attributes, defaults will be applied if the attribute is not set. Check out the [getInfo](#operation/getInfo) operation for more info about defaults. If no &#x60;release_version&#x60; is set, the latest release version available for the provider will be used.
     * @param {module:model/V4AddClusterRequest} body New cluster definition
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    addClusterWithHttpInfo(body: V4AddClusterRequest, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4GenericResponse>;
    /**
     * Create cluster (v4)
     * This operation is used to create a new Kubernetes cluster or \&quot;tenant cluster\&quot;.  ### Cluster definition  The cluster definition format allows to set a number of optional configuration details, like worker node configuration, with node specification depending on the provider (e. g. on &lt;span class&#x3D;\&quot;badge azure\&quot;&gt;Azure&lt;/span&gt; the VM size, or on &lt;span class&#x3D;\&quot;badge kvm\&quot;&gt;KVM&lt;/span&gt; the memory size and number of CPU cores).  One attribute is __mandatory__ upon creation: The &#x60;owner&#x60; attribute must carry the name of the organization the cluster will belong to. Note that the acting user must be a member of that organization in order to create a cluster.  For all other attributes, defaults will be applied if the attribute is not set. Check out the [getInfo](#operation/getInfo) operation for more info about defaults. If no &#x60;release_version&#x60; is set, the latest release version available for the provider will be used.
     * @param {module:model/V4AddClusterRequest} body New cluster definition
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    addCluster(body: V4AddClusterRequest, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4GenericResponse>;
    /**
     * Create cluster (v5)
     * Allows to create clusters supporting node pools on AWS installations.  The cluster will not have any worker nodes until you create a first node pool.  See [node pools](#tag/nodepools) and [create node pool](#operation/addNodePool) for details.
     * @param {module:model/V5AddClusterRequest} body New cluster definition
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V5ClusterDetailsResponse} and HTTP response
     */
    addClusterV5WithHttpInfo(body: V5AddClusterRequest, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V5ClusterDetailsResponse>;
    /**
     * Create cluster (v5)
     * Allows to create clusters supporting node pools on AWS installations.  The cluster will not have any worker nodes until you create a first node pool.  See [node pools](#tag/nodepools) and [create node pool](#operation/addNodePool) for details.
     * @param {module:model/V5AddClusterRequest} body New cluster definition
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V5ClusterDetailsResponse}
     */
    addClusterV5(body: V5AddClusterRequest, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V5ClusterDetailsResponse>;
    /**
     * Delete cluster
     * This operation triggers deleting a cluster with all resources attached to it.  Deleting a cluster causes the termination of all workloads running on the cluster. Data stored on the worker nodes will be lost. There is no way to undo this operation.  The response is sent as soon as the request is validated. At that point, workloads might still be running on the cluster and may be accessible for a little wile, until the cluster is actually deleted.
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    deleteClusterWithHttpInfo(clusterId: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4GenericResponse>;
    /**
     * Delete cluster
     * This operation triggers deleting a cluster with all resources attached to it.  Deleting a cluster causes the termination of all workloads running on the cluster. Data stored on the worker nodes will be lost. There is no way to undo this operation.  The response is sent as soon as the request is validated. At that point, workloads might still be running on the cluster and may be accessible for a little wile, until the cluster is actually deleted.
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    deleteCluster(clusterId: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4GenericResponse>;
    /**
     * Get cluster details (v4)
     * This operation allows to obtain basic details on a particular cluster.
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4ClusterDetailsResponse} and HTTP response
     */
    getClusterWithHttpInfo(clusterId: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4ClusterDetailsResponse>;
    /**
     * Get cluster details (v4)
     * This operation allows to obtain basic details on a particular cluster.
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4ClusterDetailsResponse}
     */
    getCluster(clusterId: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4ClusterDetailsResponse>;
    /**
     * Get cluster status
     * Returns an object about a cluster&#39;s current state and past status transitions.  This endpoint exposes the status content of the Kubernetes resources representing a cluster in the corresponding custom resource. That is, depending on the provider:  - [&#x60;awsconfig.provider.giantswarm.io&#x60;](https://godoc.org/github.com/giantswarm/apiextensions/pkg/apis/provider/v1alpha1#AWSConfig) - [&#x60;azureconfig.provider.giantswarm.io&#x60;](https://godoc.org/github.com/giantswarm/apiextensions/pkg/apis/provider/v1alpha1#AzureConfig) - [&#x60;kvmconfig.provider.giantswarm.io&#x60;](https://godoc.org/github.com/giantswarm/apiextensions/pkg/apis/provider/v1alpha1#KVMConfig)  Note that structure and style differ from the rest of the v4 API. Also note that the structure depends on the release version and changes can be expected frequently.
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GetClusterStatusResponse} and HTTP response
     */
    getClusterStatusWithHttpInfo(clusterId: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4GetClusterStatusResponse>;
    /**
     * Get cluster status
     * Returns an object about a cluster&#39;s current state and past status transitions.  This endpoint exposes the status content of the Kubernetes resources representing a cluster in the corresponding custom resource. That is, depending on the provider:  - [&#x60;awsconfig.provider.giantswarm.io&#x60;](https://godoc.org/github.com/giantswarm/apiextensions/pkg/apis/provider/v1alpha1#AWSConfig) - [&#x60;azureconfig.provider.giantswarm.io&#x60;](https://godoc.org/github.com/giantswarm/apiextensions/pkg/apis/provider/v1alpha1#AzureConfig) - [&#x60;kvmconfig.provider.giantswarm.io&#x60;](https://godoc.org/github.com/giantswarm/apiextensions/pkg/apis/provider/v1alpha1#KVMConfig)  Note that structure and style differ from the rest of the v4 API. Also note that the structure depends on the release version and changes can be expected frequently.
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GetClusterStatusResponse}
     */
    getClusterStatus(clusterId: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4GetClusterStatusResponse>;
    /**
     * Get cluster details (v5)
     * Allows to retrieve details of a cluster supporting node pools on AWS installations.
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V5ClusterDetailsResponse} and HTTP response
     */
    getClusterV5WithHttpInfo(clusterId: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V5ClusterDetailsResponse>;
    /**
     * Get cluster details (v5)
     * Allows to retrieve details of a cluster supporting node pools on AWS installations.
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V5ClusterDetailsResponse}
     */
    getClusterV5(clusterId: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V5ClusterDetailsResponse>;
    /**
     * Get clusters
     * This operation fetches a list of clusters.  The result depends on the permissions of the user. A normal user will get all the clusters the user has access to, via organization membership. A user with admin permission will receive a list of all existing clusters.  The result array items are sparse representations of the cluster objects. To fetch more details on a cluster, use the [getClusterStatus](#operation/getClusterStatus) operation.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/V4ClusterListItem>} and HTTP response
     */
    getClustersWithHttpInfo(opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4ClusterListItem>;
    /**
     * Get clusters
     * This operation fetches a list of clusters.  The result depends on the permissions of the user. A normal user will get all the clusters the user has access to, via organization membership. A user with admin permission will receive a list of all existing clusters.  The result array items are sparse representations of the cluster objects. To fetch more details on a cluster, use the [getClusterStatus](#operation/getClusterStatus) operation.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/V4ClusterListItem>}
     */
    getClusters(opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4ClusterListItem>;
    /**
     * Get clusters by labels (v5)
     * This operation fetches a list of node pool clusters based on a label selector.  The operation accepts label selectors in the same way that &#x60;kubectl get -l&#x60; does ([kubernetes label selectors description](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors)) for listing clusters based on their labels.  The result depends on the permissions of the user. A normal user can search over all the clusters that they have access to, based on their organization memberships. Admin users however, will search over all existing clusters.  The resulting array contains a sparse representation of the cluster objects. To fetch more details on a cluster, use the [getClusterV5](#operation/getClusterV5) operation.
     * @param {module:model/V5ListClustersByLabel} body Label selector
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/V4ClusterListItem>} and HTTP response
     */
    getV5ClustersByLabelWithHttpInfo(body: V5ListClustersByLabel, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4ClusterListItem>;
    /**
     * Get clusters by labels (v5)
     * This operation fetches a list of node pool clusters based on a label selector.  The operation accepts label selectors in the same way that &#x60;kubectl get -l&#x60; does ([kubernetes label selectors description](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors)) for listing clusters based on their labels.  The result depends on the permissions of the user. A normal user can search over all the clusters that they have access to, based on their organization memberships. Admin users however, will search over all existing clusters.  The resulting array contains a sparse representation of the cluster objects. To fetch more details on a cluster, use the [getClusterV5](#operation/getClusterV5) operation.
     * @param {module:model/V5ListClustersByLabel} body Label selector
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/V4ClusterListItem>}
     */
    getV5ClustersByLabel(body: V5ListClustersByLabel, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4ClusterListItem>;
    /**
     * Modify cluster (v4)
     * This operation allows to modify an existing cluster.  A cluster modification is performed by submitting a &#x60;PATCH&#x60; request to the cluster resource (as described in the [addCluster](#operation/addCluster) and [getCluster](#operation/getCluster)) in form of a [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386). This means, only the attributes to be modified have to be contained in the request body.  The following attributes can be modified:  - &#x60;name&#x60;: Rename the cluster to something more fitting.  - &#x60;owner&#x60;: Changing the owner organization name means to change cluster ownership from one organization to another. The user performing the request has to be a member of both organizations.  - &#x60;release_version&#x60;: By changing this attribute you can upgrade a cluster to a newer [release](https://docs.giantswarm.io/api/#tag/releases).  - &#x60;scaling&#x60;: Adjust the cluster node limits to make use of auto scaling or to have full control over the node count. The latter can be achieved by setting &#x60;min&#x60; and &#x60;max&#x60; to the same values. Note that setting &#x60;min&#x60; and &#x60;max&#x60; to different values (effectively enabling autoscaling) is only available on AWS with releases from 6.2.0.   - &#x60;workers&#x60; (deprecated): For backward compatibility reasons, it is possible to provide this attribute as an array, where the number of items contained in the array determines the intended number of worker nodes in the cluster. The item count will be applied as both &#x60;min&#x60; and &#x60;max&#x60; value of the scaling limits, effectively disabling autoscaling. This requires the &#x60;scaling&#x60; attribute must not be present in the same request.  ### Limitations  - As of now, existing worker nodes cannot be modified. - The number of availability zones cannot be modified. - When removing nodes (scaling down), it is not possible to determine which nodes will be removed.
     * @param {String} clusterId Cluster ID
     * @param {module:model/V4ModifyClusterRequest} body Merge-patch body
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4ClusterDetailsResponse} and HTTP response
     */
    modifyClusterWithHttpInfo(clusterId: string, body: V4ModifyClusterRequest, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4ClusterDetailsResponse>;
    /**
     * Modify cluster (v4)
     * This operation allows to modify an existing cluster.  A cluster modification is performed by submitting a &#x60;PATCH&#x60; request to the cluster resource (as described in the [addCluster](#operation/addCluster) and [getCluster](#operation/getCluster)) in form of a [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386). This means, only the attributes to be modified have to be contained in the request body.  The following attributes can be modified:  - &#x60;name&#x60;: Rename the cluster to something more fitting.  - &#x60;owner&#x60;: Changing the owner organization name means to change cluster ownership from one organization to another. The user performing the request has to be a member of both organizations.  - &#x60;release_version&#x60;: By changing this attribute you can upgrade a cluster to a newer [release](https://docs.giantswarm.io/api/#tag/releases).  - &#x60;scaling&#x60;: Adjust the cluster node limits to make use of auto scaling or to have full control over the node count. The latter can be achieved by setting &#x60;min&#x60; and &#x60;max&#x60; to the same values. Note that setting &#x60;min&#x60; and &#x60;max&#x60; to different values (effectively enabling autoscaling) is only available on AWS with releases from 6.2.0.   - &#x60;workers&#x60; (deprecated): For backward compatibility reasons, it is possible to provide this attribute as an array, where the number of items contained in the array determines the intended number of worker nodes in the cluster. The item count will be applied as both &#x60;min&#x60; and &#x60;max&#x60; value of the scaling limits, effectively disabling autoscaling. This requires the &#x60;scaling&#x60; attribute must not be present in the same request.  ### Limitations  - As of now, existing worker nodes cannot be modified. - The number of availability zones cannot be modified. - When removing nodes (scaling down), it is not possible to determine which nodes will be removed.
     * @param {String} clusterId Cluster ID
     * @param {module:model/V4ModifyClusterRequest} body Merge-patch body
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4ClusterDetailsResponse}
     */
    modifyCluster(clusterId: string, body: V4ModifyClusterRequest, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4ClusterDetailsResponse>;
    /**
     * Modify cluster (v5)
     * Allows to change properties of a cluster supporting node pools on AWS installations.  The following attributes allow to be modified:  - &#x60;name&#x60; - &#x60;release_version&#x60;
     * @param {String} clusterId Cluster ID
     * @param {module:model/V5ModifyClusterRequest} body Merge-patch body
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V5ClusterDetailsResponse} and HTTP response
     */
    modifyClusterV5WithHttpInfo(clusterId: string, body: V5ModifyClusterRequest, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V5ClusterDetailsResponse>;
    /**
     * Modify cluster (v5)
     * Allows to change properties of a cluster supporting node pools on AWS installations.  The following attributes allow to be modified:  - &#x60;name&#x60; - &#x60;release_version&#x60;
     * @param {String} clusterId Cluster ID
     * @param {module:model/V5ModifyClusterRequest} body Merge-patch body
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V5ClusterDetailsResponse}
     */
    modifyClusterV5(clusterId: string, body: V5ModifyClusterRequest, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V5ClusterDetailsResponse>;
}
