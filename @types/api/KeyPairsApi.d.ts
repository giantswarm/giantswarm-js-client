import ApiClient from "../ApiClient";
import V4AddKeyPairRequest from "../model/V4AddKeyPairRequest";

/**
* KeyPairs service.
* @module api/KeyPairsApi
* @version 4.0.0
*/
export default class KeyPairsApi {
    /**
    * Constructs a new KeyPairsApi.
    * @alias module:api/KeyPairsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClient);
    apiClient: ApiClient;
    /**
     * Create key pair
     * This operation allows to create a new key pair for accessing a specific cluster.  A key pair consists of an unencrypted private RSA key and an X.509 certificate. In addition, when obtaining a key pair for a cluster, the cluster&#39;s certificate authority file (CA certificate) is delivered, which is required by TLS clients to establish trust to the cluster.  In addition to the credentials itself, a key pair has some metadata like a unique ID, a creation timestamp and a free text &#x60;description&#x60; that you can use at will, for example to note for whom a key pair has been issued.  ### Customizing the certificate&#39;s subject for K8s RBAC  It is possible to set the Common Name and Organization fields of the generated certificate&#39;s subject.  - &#x60;cn_prefix&#x60;: The certificate&#39;s common name uses this format: &#x60;&lt;cn_prefix&gt;.user.&lt;clusterdomain&gt;&#x60;.    &#x60;clusterdomain&#x60; is specific to your cluster and is not editable.    The &#x60;cn_prefix&#x60; however is editable. When left blank it will default   to the email address of the Giant Swarm user that is performing the   create key pair request.    The common name is used as the username for requests to the Kubernetes API. This allows you   to set up role-based access controls.   - &#x60;certificate_organizations&#x60;: This will set the certificate&#39;s &#x60;organization&#x60; fields. Use a comma separated list of values.   The Kubernetes API will use these values as group memberships.  __Note:__ The actual credentials coming with the key pair (key, certificate) can only be accessed once, as the result of the &#x60;POST&#x60; request that triggers their creation. This restriction exists to minimize the risk of credentials being leaked. If you fail to capture the credentials upon creation, you&#39;ll have to repeat the creation request.
     * @param {String} clusterId Cluster ID
     * @param {module:model/V4AddKeyPairRequest} body While the &#x60;ttl_hours&#x60; attribute is optional and will be set to a default value when omitted, the &#x60;description&#x60; is mandatory.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4AddKeyPairResponse} and HTTP response
     */
    addKeyPairWithHttpInfo(clusterId: string, body: V4AddKeyPairRequest, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
    /**
     * Create key pair
     * This operation allows to create a new key pair for accessing a specific cluster.  A key pair consists of an unencrypted private RSA key and an X.509 certificate. In addition, when obtaining a key pair for a cluster, the cluster&#39;s certificate authority file (CA certificate) is delivered, which is required by TLS clients to establish trust to the cluster.  In addition to the credentials itself, a key pair has some metadata like a unique ID, a creation timestamp and a free text &#x60;description&#x60; that you can use at will, for example to note for whom a key pair has been issued.  ### Customizing the certificate&#39;s subject for K8s RBAC  It is possible to set the Common Name and Organization fields of the generated certificate&#39;s subject.  - &#x60;cn_prefix&#x60;: The certificate&#39;s common name uses this format: &#x60;&lt;cn_prefix&gt;.user.&lt;clusterdomain&gt;&#x60;.    &#x60;clusterdomain&#x60; is specific to your cluster and is not editable.    The &#x60;cn_prefix&#x60; however is editable. When left blank it will default   to the email address of the Giant Swarm user that is performing the   create key pair request.    The common name is used as the username for requests to the Kubernetes API. This allows you   to set up role-based access controls.   - &#x60;certificate_organizations&#x60;: This will set the certificate&#39;s &#x60;organization&#x60; fields. Use a comma separated list of values.   The Kubernetes API will use these values as group memberships.  __Note:__ The actual credentials coming with the key pair (key, certificate) can only be accessed once, as the result of the &#x60;POST&#x60; request that triggers their creation. This restriction exists to minimize the risk of credentials being leaked. If you fail to capture the credentials upon creation, you&#39;ll have to repeat the creation request.
     * @param {String} clusterId Cluster ID
     * @param {module:model/V4AddKeyPairRequest} body While the &#x60;ttl_hours&#x60; attribute is optional and will be set to a default value when omitted, the &#x60;description&#x60; is mandatory.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4AddKeyPairResponse}
     */
    addKeyPair(clusterId: string, body: V4AddKeyPairRequest, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
    /**
     * Get key pairs
     * Returns a list of information on all key pairs of a cluster as an array.  The individual array items contain metadata on the key pairs, but neither the key nor the certificate. These can only be obtained upon creation, using the [addKeypair](#operation/addKeyPair) operation.
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GetKeyPairsResponse} and HTTP response
     */
    getKeyPairsWithHttpInfo(clusterId: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
    /**
     * Get key pairs
     * Returns a list of information on all key pairs of a cluster as an array.  The individual array items contain metadata on the key pairs, but neither the key nor the certificate. These can only be obtained upon creation, using the [addKeypair](#operation/addKeyPair) operation.
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GetKeyPairsResponse}
     */
    getKeyPairs(clusterId: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
}
