import ApiClient from "../ApiClient";
import V4GenericResponse from "../model/V4GenericResponse";
import V4GetClusterAppConfigResponse from "../model/V4GetClusterAppConfigResponse";
import V4CreateAppConfigRequest from "../model/V4CreateAppConfigRequest";

/**
* AppConfigs service.
* @module api/AppConfigsApi
* @version 4.0.0
*/
export default class AppConfigsApi {
    /**
    * Constructs a new AppConfigsApi.
    * @alias module:api/AppConfigsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClient);
    apiClient: ApiClient;
    /**
     * Create app config (v4)
     * This operation allows you to create a values configmap for a specific app. The app does not have to exist before hand.  If the app does exist, this endpoint will ensure that the App CR gets it&#39;s user_config field set correctly.  However, if the app exists and the user_config is already set to something, then this request will fail. You will in that case most likely want to update the config using the &#x60;PATCH /v4/clusters/{cluster_id}/apps/{app_name}/config/&#x60; endpoint.  For apps on v5 clusters, please use the v5 version of this endpoint.   ### Example POST request &#x60;&#x60;&#x60;json   {     \&quot;agent\&quot;: {       \&quot;key\&quot;: \&quot;secret-key-here\&quot;,       \&quot;endpointHost\&quot;: \&quot;saas-eu-west-1.instana.io\&quot;,       \&quot;endpointPort\&quot;: \&quot;443\&quot;,     },     \&quot;zone\&quot;: {       \&quot;name\&quot;: \&quot;giantswarm-cluster\&quot;     }   } &#x60;&#x60;&#x60;
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param {module:model/V4CreateAppConfigRequest} opts.body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    createClusterAppConfigV4WithHttpInfo(clusterId: string, appName: string, opts?: {
        xRequestID?: string;
        xGiantSwarmActivity?: string;
        xGiantSwarmCmdLine?: string;
        body: V4CreateAppConfigRequest;
    }): Promise<V4GenericResponse>;
    /**
     * Create app config (v4)
     * This operation allows you to create a values configmap for a specific app. The app does not have to exist before hand.  If the app does exist, this endpoint will ensure that the App CR gets it&#39;s user_config field set correctly.  However, if the app exists and the user_config is already set to something, then this request will fail. You will in that case most likely want to update the config using the &#x60;PATCH /v4/clusters/{cluster_id}/apps/{app_name}/config/&#x60; endpoint.  For apps on v5 clusters, please use the v5 version of this endpoint.   ### Example POST request &#x60;&#x60;&#x60;json   {     \&quot;agent\&quot;: {       \&quot;key\&quot;: \&quot;secret-key-here\&quot;,       \&quot;endpointHost\&quot;: \&quot;saas-eu-west-1.instana.io\&quot;,       \&quot;endpointPort\&quot;: \&quot;443\&quot;,     },     \&quot;zone\&quot;: {       \&quot;name\&quot;: \&quot;giantswarm-cluster\&quot;     }   } &#x60;&#x60;&#x60;
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param {module:model/V4CreateAppConfigRequest} opts.body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    createClusterAppConfigV4(clusterId: string, appName: string, opts?: {
        xRequestID?: string;
        xGiantSwarmActivity?: string;
        xGiantSwarmCmdLine?: string;
        body: V4CreateAppConfigRequest;
    }): Promise<V4GenericResponse>;
    /**
     * Create app config (v5)
     * This operation allows you to create a values configmap for a specific app. The app does not have to exist before hand.  If the app does exist, this endpoint will ensure that the App CR gets it&#39;s user_config field set correctly.  However, if the app exists and the user_config is already set to something, then this request will fail. You will in that case most likely want to update the config using the &#x60;PATCH /v5/clusters/{cluster_id}/apps/{app_name}/config/&#x60; endpoint.  ### Example POST request &#x60;&#x60;&#x60;json   {     \&quot;agent\&quot;: {       \&quot;key\&quot;: \&quot;secret-key-here\&quot;,       \&quot;endpointHost\&quot;: \&quot;saas-eu-west-1.instana.io\&quot;,       \&quot;endpointPort\&quot;: \&quot;443\&quot;,     },     \&quot;zone\&quot;: {       \&quot;name\&quot;: \&quot;giantswarm-cluster\&quot;     }   } &#x60;&#x60;&#x60;
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param {module:model/V4CreateAppConfigRequest} opts.body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    createClusterAppConfigV5WithHttpInfo(clusterId: string, appName: string, opts?: {
        xRequestID?: string;
        xGiantSwarmActivity?: string;
        xGiantSwarmCmdLine?: string;
        body: V4CreateAppConfigRequest;
    }): Promise<V4GenericResponse>;
    /**
     * Create app config (v5)
     * This operation allows you to create a values configmap for a specific app. The app does not have to exist before hand.  If the app does exist, this endpoint will ensure that the App CR gets it&#39;s user_config field set correctly.  However, if the app exists and the user_config is already set to something, then this request will fail. You will in that case most likely want to update the config using the &#x60;PATCH /v5/clusters/{cluster_id}/apps/{app_name}/config/&#x60; endpoint.  ### Example POST request &#x60;&#x60;&#x60;json   {     \&quot;agent\&quot;: {       \&quot;key\&quot;: \&quot;secret-key-here\&quot;,       \&quot;endpointHost\&quot;: \&quot;saas-eu-west-1.instana.io\&quot;,       \&quot;endpointPort\&quot;: \&quot;443\&quot;,     },     \&quot;zone\&quot;: {       \&quot;name\&quot;: \&quot;giantswarm-cluster\&quot;     }   } &#x60;&#x60;&#x60;
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param {module:model/V4CreateAppConfigRequest} opts.body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    createClusterAppConfigV5(clusterId: string, appName: string, opts?: {
        xRequestID?: string;
        xGiantSwarmActivity?: string;
        xGiantSwarmCmdLine?: string;
        body: V4CreateAppConfigRequest;
    }): Promise<V4GenericResponse>;
    /**
     * Delete an app config (v4)
     * This operation allows a user to delete an app&#39;s user config if it has been named according to the convention of {app-name}-user-values and stored in the cluster ID namespace.  Calling this endpoint will delete the ConfigMap, but it does not remove the reference to the ConfigMap in the (spec.user_config.configmap field) from the app.  Do make sure you also update the app and remove the reference.  The preferred order is to first remove the reference to the configmap by updating the app, and only then delete the configmap using this endpoint.  For apps on v5 clusters, please use the v5 version of this endpoint.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    deleteClusterAppConfigV4WithHttpInfo(clusterId: string, appName: string, opts?: {
        xRequestID?: string;
        xGiantSwarmActivity?: string;
        xGiantSwarmCmdLine?: string;
    }): Promise<V4GenericResponse>;
    /**
     * Delete an app config (v4)
     * This operation allows a user to delete an app&#39;s user config if it has been named according to the convention of {app-name}-user-values and stored in the cluster ID namespace.  Calling this endpoint will delete the ConfigMap, but it does not remove the reference to the ConfigMap in the (spec.user_config.configmap field) from the app.  Do make sure you also update the app and remove the reference.  The preferred order is to first remove the reference to the configmap by updating the app, and only then delete the configmap using this endpoint.  For apps on v5 clusters, please use the v5 version of this endpoint.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    deleteClusterAppConfigV4(clusterId: string, appName: string, opts?: {
        xRequestID?: string;
        xGiantSwarmActivity?: string;
        xGiantSwarmCmdLine?: string;
    }): Promise<V4GenericResponse>;
    /**
     * Delete an app config (v5)
     * This operation allows a user to delete an app&#39;s user config if it has been named according to the convention of {app-name}-user-values and stored in the cluster ID namespace.  Calling this endpoint will delete the ConfigMap, but it does not remove the reference to the ConfigMap in the (spec.user_config.configmap field) from the app.  Do make sure you also update the app and remove the reference.  The preferred order is to first remove the reference to the configmap by updating the app, and only then delete the configmap using this endpoint.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    deleteClusterAppConfigV5WithHttpInfo(clusterId: string, appName: string, opts?: {
        xRequestID?: string;
        xGiantSwarmActivity?: string;
        xGiantSwarmCmdLine?: string;
    }): Promise<V4GenericResponse>;
    /**
     * Delete an app config (v5)
     * This operation allows a user to delete an app&#39;s user config if it has been named according to the convention of {app-name}-user-values and stored in the cluster ID namespace.  Calling this endpoint will delete the ConfigMap, but it does not remove the reference to the ConfigMap in the (spec.user_config.configmap field) from the app.  Do make sure you also update the app and remove the reference.  The preferred order is to first remove the reference to the configmap by updating the app, and only then delete the configmap using this endpoint.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    deleteClusterAppConfigV5(clusterId: string, appName: string, opts?: {
        xRequestID?: string;
        xGiantSwarmActivity?: string;
        xGiantSwarmCmdLine?: string;
    }): Promise<V4GenericResponse>;
    /**
     * Get app config (v4)
     * This operation allows you to fetch the user values configmap associated with an app.  For apps on v5 clusters, please use the v5 version of this endpoint.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GetClusterAppConfigResponse} and HTTP response
     */
    getClusterAppConfigV4WithHttpInfo(clusterId: string, appName: string, opts?: {
        xRequestID?: string;
        xGiantSwarmActivity?: string;
        xGiantSwarmCmdLine?: string;
    }): Promise<V4GetClusterAppConfigResponse>;
    /**
     * Get app config (v4)
     * This operation allows you to fetch the user values configmap associated with an app.  For apps on v5 clusters, please use the v5 version of this endpoint.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GetClusterAppConfigResponse}
     */
    getClusterAppConfigV4(clusterId: string, appName: string, opts?: {
        xRequestID?: string;
        xGiantSwarmActivity?: string;
        xGiantSwarmCmdLine?: string;
    }): Promise<V4GetClusterAppConfigResponse>;
    /**
     * Get app config (v5)
     * This operation allows you to fetch the user values configmap associated with an app.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GetClusterAppConfigResponse} and HTTP response
     */
    getClusterAppConfigV5WithHttpInfo(clusterId: string, appName: string, opts?: {
        xRequestID?: string;
        xGiantSwarmActivity?: string;
        xGiantSwarmCmdLine?: string;
    }): Promise<V4GetClusterAppConfigResponse>;
    /**
     * Get app config (v5)
     * This operation allows you to fetch the user values configmap associated with an app.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GetClusterAppConfigResponse}
     */
    getClusterAppConfigV5(clusterId: string, appName: string, opts?: {
        xRequestID?: string;
        xGiantSwarmActivity?: string;
        xGiantSwarmCmdLine?: string;
    }): Promise<V4GetClusterAppConfigResponse>;
    /**
     * Modify app config (v4)
     * This operation allows you to modify the values configmap for a specific app. It&#39;s only possible to modify app configs that have been named according to the convention of {app-name}-user-values and stored in the cluster ID namespace.  The full values key of the configmap will be replaced by the JSON body of your request.  For apps on v5 clusters, please use the v5 version of this endpoint.  ### Example PATCH request &#x60;&#x60;&#x60;json   {     \&quot;agent\&quot;: {       \&quot;key\&quot;: \&quot;a-new-key-here\&quot;,     }   } &#x60;&#x60;&#x60;  If the configmap contained content like:  &#x60;&#x60;&#x60;json   {     \&quot;agent\&quot;: {       \&quot;key\&quot;: \&quot;an-old-key-here\&quot;,       \&quot;admin\&quot;: true,     },     \&quot;server\&quot;: {       \&quot;url\&quot;: \&quot;giantswarm.io\&quot;,     }   } &#x60;&#x60;&#x60;  Then the \&quot;server\&quot; and \&quot;admin\&quot; keys will be removed.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param {module:model/V4CreateAppConfigRequest} opts.body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    modifyClusterAppConfigV4WithHttpInfo(clusterId: string, appName: string, opts?: {
        xRequestID?: string;
        xGiantSwarmActivity?: string;
        xGiantSwarmCmdLine?: string;
        body: V4CreateAppConfigRequest;
    }): Promise<V4GenericResponse>;
    /**
     * Modify app config (v4)
     * This operation allows you to modify the values configmap for a specific app. It&#39;s only possible to modify app configs that have been named according to the convention of {app-name}-user-values and stored in the cluster ID namespace.  The full values key of the configmap will be replaced by the JSON body of your request.  For apps on v5 clusters, please use the v5 version of this endpoint.  ### Example PATCH request &#x60;&#x60;&#x60;json   {     \&quot;agent\&quot;: {       \&quot;key\&quot;: \&quot;a-new-key-here\&quot;,     }   } &#x60;&#x60;&#x60;  If the configmap contained content like:  &#x60;&#x60;&#x60;json   {     \&quot;agent\&quot;: {       \&quot;key\&quot;: \&quot;an-old-key-here\&quot;,       \&quot;admin\&quot;: true,     },     \&quot;server\&quot;: {       \&quot;url\&quot;: \&quot;giantswarm.io\&quot;,     }   } &#x60;&#x60;&#x60;  Then the \&quot;server\&quot; and \&quot;admin\&quot; keys will be removed.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param {module:model/V4CreateAppConfigRequest} opts.body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    modifyClusterAppConfigV4(clusterId: string, appName: string, opts?: {
        xRequestID?: string;
        xGiantSwarmActivity?: string;
        xGiantSwarmCmdLine?: string;
        body: V4CreateAppConfigRequest;
    }): Promise<V4GenericResponse>;
    /**
     * Modify app config (v5)
     * This operation allows you to modify the values configmap for a specific app. It&#39;s only possible to modify app configs that have been named according to the convention of {app-name}-user-values and stored in the cluster ID namespace.  The full values key of the configmap will be replaced by the JSON body of your request.  ### Example PATCH request &#x60;&#x60;&#x60;json   {     \&quot;agent\&quot;: {       \&quot;key\&quot;: \&quot;a-new-key-here\&quot;,     }   } &#x60;&#x60;&#x60;  If the configmap contained content like:  &#x60;&#x60;&#x60;json   {     \&quot;agent\&quot;: {       \&quot;key\&quot;: \&quot;an-old-key-here\&quot;,       \&quot;admin\&quot;: true,     },     \&quot;server\&quot;: {       \&quot;url\&quot;: \&quot;giantswarm.io\&quot;,     }   } &#x60;&#x60;&#x60;  Then the \&quot;server\&quot; and \&quot;admin\&quot; keys will be removed.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param {module:model/V4CreateAppConfigRequest} opts.body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    modifyClusterAppConfigV5WithHttpInfo(clusterId: string, appName: string, opts?: {
        xRequestID?: string;
        xGiantSwarmActivity?: string;
        xGiantSwarmCmdLine?: string;
        body: V4CreateAppConfigRequest;
    }): Promise<V4GenericResponse>;
    /**
     * Modify app config (v5)
     * This operation allows you to modify the values configmap for a specific app. It&#39;s only possible to modify app configs that have been named according to the convention of {app-name}-user-values and stored in the cluster ID namespace.  The full values key of the configmap will be replaced by the JSON body of your request.  ### Example PATCH request &#x60;&#x60;&#x60;json   {     \&quot;agent\&quot;: {       \&quot;key\&quot;: \&quot;a-new-key-here\&quot;,     }   } &#x60;&#x60;&#x60;  If the configmap contained content like:  &#x60;&#x60;&#x60;json   {     \&quot;agent\&quot;: {       \&quot;key\&quot;: \&quot;an-old-key-here\&quot;,       \&quot;admin\&quot;: true,     },     \&quot;server\&quot;: {       \&quot;url\&quot;: \&quot;giantswarm.io\&quot;,     }   } &#x60;&#x60;&#x60;  Then the \&quot;server\&quot; and \&quot;admin\&quot; keys will be removed.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param {module:model/V4CreateAppConfigRequest} opts.body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    modifyClusterAppConfigV5(clusterId: string, appName: string, opts?: {
        xRequestID?: string;
        xGiantSwarmActivity?: string;
        xGiantSwarmCmdLine?: string;
        body: V4CreateAppConfigRequest;
    }): Promise<V4GenericResponse>;
}
