import ApiClient from "../ApiClient";
import V5ClusterLabelsResponse from "../model/V5ClusterLabelsResponse";

/**
* ClusterLabels service.
* @module api/ClusterLabelsApi
* @version 4.0.0
*/
export default class ClusterLabelsApi {
    /**
    * Constructs a new ClusterLabelsApi.
    * @alias module:api/ClusterLabelsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClient);
    apiClient: ApiClient;
    /**
     * Get cluster labels
     * Returns the labels that this cluster is labelled with
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V5ClusterLabelsResponse} and HTTP response
     */
    getClusterLabelsWithHttpInfo(clusterId: string, opts?: {
        xRequestID?: string;
        xGiantSwarmActivity?: string;
        xGiantSwarmCmdLine?: string;
    }): Promise<V5ClusterLabelsResponse>;
    /**
     * Get cluster labels
     * Returns the labels that this cluster is labelled with
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V5ClusterLabelsResponse}
     */
    getClusterLabels(clusterId: string, opts?: {
        xRequestID?: string;
        xGiantSwarmActivity?: string;
        xGiantSwarmCmdLine?: string;
    }): Promise<V5ClusterLabelsResponse>;
    /**
     * Set cluster labels
     * Set cluster labels. Keys and labels should adhere to [Kubernetes labels syntax and character set](https://v1-16.docs.kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).  Label changes should be written as a [JSON Merge Patch, RFC 7386](https://tools.ietf.org/html/rfc7386).  Changes to labels containing &#x60;giantswarm.io&#x60; is forbidden, changes to label &#x60;release.giantswarm.io/version&#x60; will be validated against available Giant Swarm releases.
     * @param {String} clusterId Cluster ID
     * @param {module:model/V5SetClusterLabelsRequest} body Labels to attach to this cluster.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V5ClusterLabelsResponse} and HTTP response
     */
    setClusterLabelsWithHttpInfo(clusterId: string, body: V5SetClusterLabelsRequest, opts?: {
        xRequestID?: string;
        xGiantSwarmActivity?: string;
        xGiantSwarmCmdLine?: string;
    }): Promise<V5ClusterLabelsResponse>;
    /**
     * Set cluster labels
     * Set cluster labels. Keys and labels should adhere to [Kubernetes labels syntax and character set](https://v1-16.docs.kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).  Label changes should be written as a [JSON Merge Patch, RFC 7386](https://tools.ietf.org/html/rfc7386).  Changes to labels containing &#x60;giantswarm.io&#x60; is forbidden, changes to label &#x60;release.giantswarm.io/version&#x60; will be validated against available Giant Swarm releases.
     * @param {String} clusterId Cluster ID
     * @param {module:model/V5SetClusterLabelsRequest} body Labels to attach to this cluster.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V5ClusterLabelsResponse}
     */
    setClusterLabels(clusterId: string, body: V5SetClusterLabelsRequest, opts?: {
        xRequestID?: string;
        xGiantSwarmActivity?: string;
        xGiantSwarmCmdLine?: string;
    }): Promise<V5ClusterLabelsResponse>;
}
