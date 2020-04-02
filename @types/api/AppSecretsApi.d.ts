/**
* AppSecrets service.
* @module api/AppSecretsApi
* @version 4.0.0
*/
export default class AppSecretsApi {
    /**
    * Constructs a new AppSecretsApi.
    * @alias module:api/AppSecretsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient: any);
    apiClient: any;
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
    createClusterAppSecretV4WithHttpInfo(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
        body: any;
    }): Promise<any>;
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
    createClusterAppSecretV4(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
        body: any;
    }): Promise<any>;
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
    createClusterAppSecretV5WithHttpInfo(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
        body: any;
    }): Promise<any>;
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
    createClusterAppSecretV5(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
        body: any;
    }): Promise<any>;
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
    deleteClusterAppSecretV4WithHttpInfo(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
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
    deleteClusterAppSecretV4(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
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
    deleteClusterAppSecretV5WithHttpInfo(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
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
    deleteClusterAppSecretV5(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
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
    getClusterAppSecretV4WithHttpInfo(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
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
    getClusterAppSecretV4(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
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
    getClusterAppSecretV5WithHttpInfo(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
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
    getClusterAppSecretV5(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
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
    modifyClusterAppSecretV4WithHttpInfo(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
        body: any;
    }): Promise<any>;
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
    modifyClusterAppSecretV4(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
        body: any;
    }): Promise<any>;
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
    modifyClusterAppSecretV5WithHttpInfo(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
        body: any;
    }): Promise<any>;
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
    modifyClusterAppSecretV5(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
        body: any;
    }): Promise<any>;
}
//# sourceMappingURL=AppSecretsApi.d.ts.map