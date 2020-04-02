import ApiClient from "../ApiClient";

/**
* Apps service.
* @module api/AppsApi
* @version 4.0.0
*/
export default class AppsApi {
    /**
    * Constructs a new AppsApi.
    * @alias module:api/AppsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClient);
    apiClient: ApiClient;
    /**
     * Install an app (v4)
     * Install an app on a tenant cluster by posting to this endpoint. For apps on v5 clusters, please use the v5 version of this endpoint.  The spec field represents the app we&#39;ll be installing, and so spec.name refers to the name of the chart that installs this app in the catalog.  The response you get on a succesful create includes the status of the app. However since the App is still initialising and this is an asynchronous operation, it is likely that the fields in this status object will be all empty values.  To check on the status of your app, perform a GET to /v4/clusters/{cluster_id}/apps/, and check the status field of the app.  ### Example PUT request &#x60;&#x60;&#x60;json   {     \&quot;spec\&quot;: {       \&quot;catalog\&quot;: \&quot;sample-catalog\&quot;,       \&quot;name\&quot;: \&quot;prometheus-chart\&quot;,       \&quot;namespace\&quot;: \&quot;prometheus\&quot;,       \&quot;version\&quot;: \&quot;0.2.0\&quot;,     }   } &#x60;&#x60;&#x60;  ### About the user_config field in the response This field is not editable by you, but is set automatically by the API if a configmap named &#x60;{app_name}-user-values&#x60; exists in the tenant cluster namespace on the control plane.  The &#x60;/v4/clusters/{cluster_id}/apps/{app_name}/config/&#x60; endpoints allows you to create such a configmap using this API.  It is recommended to create your config before creating your app. This will result in a faster deploy.  However, you can create your config after creating the app if you wish, this API will take care of setting the &#x60;user_config&#x60; field of the app correctly for you.  ### Why can&#39;t I just set the &#x60;user_config&#x60; value myself? It simplifies usage while also being a security measure.  Furthermore it is also a security measure and ensures that users of this API can&#39;t access arbitrary configmaps of the control plane.  This API will only allow you to edit or access configmaps that adhere to a strict naming convention.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param {module:model/V4CreateAppRequest} opts.body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4App} and HTTP response
     */
    createClusterAppV4WithHttpInfo(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
        body: Record<string, any>;
    }): Promise<any>;
    /**
     * Install an app (v4)
     * Install an app on a tenant cluster by posting to this endpoint. For apps on v5 clusters, please use the v5 version of this endpoint.  The spec field represents the app we&#39;ll be installing, and so spec.name refers to the name of the chart that installs this app in the catalog.  The response you get on a succesful create includes the status of the app. However since the App is still initialising and this is an asynchronous operation, it is likely that the fields in this status object will be all empty values.  To check on the status of your app, perform a GET to /v4/clusters/{cluster_id}/apps/, and check the status field of the app.  ### Example PUT request &#x60;&#x60;&#x60;json   {     \&quot;spec\&quot;: {       \&quot;catalog\&quot;: \&quot;sample-catalog\&quot;,       \&quot;name\&quot;: \&quot;prometheus-chart\&quot;,       \&quot;namespace\&quot;: \&quot;prometheus\&quot;,       \&quot;version\&quot;: \&quot;0.2.0\&quot;,     }   } &#x60;&#x60;&#x60;  ### About the user_config field in the response This field is not editable by you, but is set automatically by the API if a configmap named &#x60;{app_name}-user-values&#x60; exists in the tenant cluster namespace on the control plane.  The &#x60;/v4/clusters/{cluster_id}/apps/{app_name}/config/&#x60; endpoints allows you to create such a configmap using this API.  It is recommended to create your config before creating your app. This will result in a faster deploy.  However, you can create your config after creating the app if you wish, this API will take care of setting the &#x60;user_config&#x60; field of the app correctly for you.  ### Why can&#39;t I just set the &#x60;user_config&#x60; value myself? It simplifies usage while also being a security measure.  Furthermore it is also a security measure and ensures that users of this API can&#39;t access arbitrary configmaps of the control plane.  This API will only allow you to edit or access configmaps that adhere to a strict naming convention.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param {module:model/V4CreateAppRequest} opts.body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4App}
     */
    createClusterAppV4(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
        body: Record<string, any>;
    }): Promise<any>;
    /**
     * Install an app (v5)
     * Install an app on a tenant cluster by posting to this endpoint.  The spec field represents the app we&#39;ll be installing, and so spec.name refers to the name of the chart that installs this app in the catalog.  The response you get on a succesful create includes the status of the app. However since the App is still initialising and this is an asynchronous operation, it is likely that the fields in this status object will be all empty values.  To check on the status of your app, perform a GET to /v5/clusters/{cluster_id}/apps/, and check the status field of the app.  ### Example PUT request &#x60;&#x60;&#x60;json   {     \&quot;spec\&quot;: {       \&quot;catalog\&quot;: \&quot;sample-catalog\&quot;,       \&quot;name\&quot;: \&quot;prometheus-chart\&quot;,       \&quot;namespace\&quot;: \&quot;prometheus\&quot;,       \&quot;version\&quot;: \&quot;0.2.0\&quot;,     }   } &#x60;&#x60;&#x60;  ### About the user_config field in the response This field is not editable by you, but is set automatically by the API if a configmap named &#x60;{app_name}-user-values&#x60; exists in the tenant cluster namespace on the control plane.  The &#x60;/v4/clusters/{cluster_id}/apps/{app_name}/config/&#x60; endpoints allows you to create such a configmap using this API.  It is recommended to create your config before creating your app. This will result in a faster deploy.  However, you can create your config after creating the app if you wish, this API will take care of setting the &#x60;user_config&#x60; field of the app correctly for you.  ### Why can&#39;t I just set the &#x60;user_config&#x60; value myself? It simplifies usage while also being a security measure.  Furthermore it is also a security measure and ensures that users of this API can&#39;t access arbitrary configmaps of the control plane.  This API will only allow you to edit or access configmaps that adhere to a strict naming convention.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param {module:model/V4CreateAppRequest} opts.body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4App} and HTTP response
     */
    createClusterAppV5WithHttpInfo(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
        body: Record<string, any>;
    }): Promise<any>;
    /**
     * Install an app (v5)
     * Install an app on a tenant cluster by posting to this endpoint.  The spec field represents the app we&#39;ll be installing, and so spec.name refers to the name of the chart that installs this app in the catalog.  The response you get on a succesful create includes the status of the app. However since the App is still initialising and this is an asynchronous operation, it is likely that the fields in this status object will be all empty values.  To check on the status of your app, perform a GET to /v5/clusters/{cluster_id}/apps/, and check the status field of the app.  ### Example PUT request &#x60;&#x60;&#x60;json   {     \&quot;spec\&quot;: {       \&quot;catalog\&quot;: \&quot;sample-catalog\&quot;,       \&quot;name\&quot;: \&quot;prometheus-chart\&quot;,       \&quot;namespace\&quot;: \&quot;prometheus\&quot;,       \&quot;version\&quot;: \&quot;0.2.0\&quot;,     }   } &#x60;&#x60;&#x60;  ### About the user_config field in the response This field is not editable by you, but is set automatically by the API if a configmap named &#x60;{app_name}-user-values&#x60; exists in the tenant cluster namespace on the control plane.  The &#x60;/v4/clusters/{cluster_id}/apps/{app_name}/config/&#x60; endpoints allows you to create such a configmap using this API.  It is recommended to create your config before creating your app. This will result in a faster deploy.  However, you can create your config after creating the app if you wish, this API will take care of setting the &#x60;user_config&#x60; field of the app correctly for you.  ### Why can&#39;t I just set the &#x60;user_config&#x60; value myself? It simplifies usage while also being a security measure.  Furthermore it is also a security measure and ensures that users of this API can&#39;t access arbitrary configmaps of the control plane.  This API will only allow you to edit or access configmaps that adhere to a strict naming convention.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param {module:model/V4CreateAppRequest} opts.body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4App}
     */
    createClusterAppV5(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
        body: Record<string, any>;
    }): Promise<any>;
    /**
     * Delete an app (v4)
     * This operation allows a user to delete an app. For apps on v5 clusters, please use the v5 version of this endpoint.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    deleteClusterAppV4WithHttpInfo(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
    /**
     * Delete an app (v4)
     * This operation allows a user to delete an app. For apps on v5 clusters, please use the v5 version of this endpoint.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    deleteClusterAppV4(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
    /**
     * Delete an app (v5)
     * This operation allows a user to delete an app.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    deleteClusterAppV5WithHttpInfo(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
    /**
     * Delete an app (v5)
     * This operation allows a user to delete an app.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    deleteClusterAppV5(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
    /**
     * Get a list of app catalogs configured on your installation.
     * Returns an array of app catalog objects, which contains further metadata, including a URL to fetch the full index of each catalog.   #### About the Labels  - &#x60;application.giantswarm.io/catalog-type&#x60;   Describes the type of catalog.    - &#x60;managed&#x60; - Apps in this catalog are managed by Giant Swarm.   - &#x60;incubator&#x60; - Apps in this catalog are a work in progress. They&#39;re                   made with your Giant Swarm cluster in mind though, so                   they should work. Feedback is appreciated on these apps.   - &#x60;test&#x60; - Apps in this catalog will soon graduate to incubator status,              you most likely will not see any &#x60;test&#x60; catalogs on your              installations.   - &#x60;community&#x60; - Apps in this catalog are provided by the kubernetes                   community. They will most likely not work without making                   some changes to the security settings of your cluster.    App Catalogs can also be labeled as &#x60;internal&#x60;, however these catalogs   contain apps that run on our control planes. These &#x60;internal&#x60; app catalogs   will be filtered out and never shown when calling this endpoint.    For more details on app catalogs visit: https://docs.giantswarm.io/basics/app-catalog/   ### Example &#x60;&#x60;&#x60;json   [     {       \&quot;metadata\&quot;: {         \&quot;name\&quot;: \&quot;sample-catalog\&quot;,         \&quot;labels\&quot;: {           \&quot;application.giantswarm.io/catalog-type\&quot;: \&quot;test\&quot;,           \&quot;app-operator.giantswarm.io/version\&quot;: \&quot;1.0.0\&quot;,         },       },        \&quot;spec\&quot;: {         \&quot;description\&quot;: \&quot;Giant Swarm&#39;s Sample Catalog with a few apps to test things out.\&quot;,         \&quot;logoURL\&quot;: \&quot;https://s.giantswarm.io/app-catalog/1/images/sample-catalog.png\&quot;,          \&quot;storage\&quot;: {           \&quot;URL\&quot;: \&quot;https://giantswarm.github.com/sample-catalog/\&quot;,           \&quot;type\&quot;: \&quot;helm\&quot;         },         \&quot;title\&quot;: \&quot;Sample Catalog\&quot;       }     }   ] &#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4AppCatalogsResponse} and HTTP response
     */
    getAppCatalogsWithHttpInfo(opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
    /**
     * Get a list of app catalogs configured on your installation.
     * Returns an array of app catalog objects, which contains further metadata, including a URL to fetch the full index of each catalog.   #### About the Labels  - &#x60;application.giantswarm.io/catalog-type&#x60;   Describes the type of catalog.    - &#x60;managed&#x60; - Apps in this catalog are managed by Giant Swarm.   - &#x60;incubator&#x60; - Apps in this catalog are a work in progress. They&#39;re                   made with your Giant Swarm cluster in mind though, so                   they should work. Feedback is appreciated on these apps.   - &#x60;test&#x60; - Apps in this catalog will soon graduate to incubator status,              you most likely will not see any &#x60;test&#x60; catalogs on your              installations.   - &#x60;community&#x60; - Apps in this catalog are provided by the kubernetes                   community. They will most likely not work without making                   some changes to the security settings of your cluster.    App Catalogs can also be labeled as &#x60;internal&#x60;, however these catalogs   contain apps that run on our control planes. These &#x60;internal&#x60; app catalogs   will be filtered out and never shown when calling this endpoint.    For more details on app catalogs visit: https://docs.giantswarm.io/basics/app-catalog/   ### Example &#x60;&#x60;&#x60;json   [     {       \&quot;metadata\&quot;: {         \&quot;name\&quot;: \&quot;sample-catalog\&quot;,         \&quot;labels\&quot;: {           \&quot;application.giantswarm.io/catalog-type\&quot;: \&quot;test\&quot;,           \&quot;app-operator.giantswarm.io/version\&quot;: \&quot;1.0.0\&quot;,         },       },        \&quot;spec\&quot;: {         \&quot;description\&quot;: \&quot;Giant Swarm&#39;s Sample Catalog with a few apps to test things out.\&quot;,         \&quot;logoURL\&quot;: \&quot;https://s.giantswarm.io/app-catalog/1/images/sample-catalog.png\&quot;,          \&quot;storage\&quot;: {           \&quot;URL\&quot;: \&quot;https://giantswarm.github.com/sample-catalog/\&quot;,           \&quot;type\&quot;: \&quot;helm\&quot;         },         \&quot;title\&quot;: \&quot;Sample Catalog\&quot;       }     }   ] &#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4AppCatalogsResponse}
     */
    getAppCatalogs(opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
    /**
     * Get a list of apps on a cluster (v4)
     * Returns an array of apps installed on a given cluster. For apps on v5 clusters, please use the v5 version of this endpoint.  ### Example &#x60;&#x60;&#x60;json   [     {       \&quot;metadata\&quot;: {         \&quot;name\&quot;: \&quot;my-awesome-prometheus\&quot;,         \&quot;labels\&quot;: {}       },        \&quot;spec\&quot;: {         \&quot;catalog\&quot;: \&quot;sample-catalog\&quot;         \&quot;name\&quot;: \&quot;prometheus-chart\&quot;,         \&quot;namespace\&quot;: \&quot;giantswarm\&quot;,         \&quot;version\&quot;: \&quot;0.2.0\&quot;,         \&quot;user_config\&quot;: {           \&quot;configmap\&quot;: {             \&quot;name\&quot;: \&quot;prometheus-user-values\&quot;,             \&quot;namespace\&quot;: \&quot;123ab\&quot;           }         }       },        \&quot;status\&quot;: {         \&quot;app_version\&quot;: \&quot;1.0.0\&quot;,         \&quot;release\&quot;: {           \&quot;last_deployed\&quot;: \&quot;2019-04-08T12:34:00Z\&quot;,           \&quot;status\&quot;: \&quot;DEPLOYED\&quot;         },         \&quot;version\&quot;: \&quot;0.2.0\&quot;,       }     }   ] &#x60;&#x60;&#x60;
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GetClusterAppsResponse} and HTTP response
     */
    getClusterAppsV4WithHttpInfo(clusterId: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
    /**
     * Get a list of apps on a cluster (v4)
     * Returns an array of apps installed on a given cluster. For apps on v5 clusters, please use the v5 version of this endpoint.  ### Example &#x60;&#x60;&#x60;json   [     {       \&quot;metadata\&quot;: {         \&quot;name\&quot;: \&quot;my-awesome-prometheus\&quot;,         \&quot;labels\&quot;: {}       },        \&quot;spec\&quot;: {         \&quot;catalog\&quot;: \&quot;sample-catalog\&quot;         \&quot;name\&quot;: \&quot;prometheus-chart\&quot;,         \&quot;namespace\&quot;: \&quot;giantswarm\&quot;,         \&quot;version\&quot;: \&quot;0.2.0\&quot;,         \&quot;user_config\&quot;: {           \&quot;configmap\&quot;: {             \&quot;name\&quot;: \&quot;prometheus-user-values\&quot;,             \&quot;namespace\&quot;: \&quot;123ab\&quot;           }         }       },        \&quot;status\&quot;: {         \&quot;app_version\&quot;: \&quot;1.0.0\&quot;,         \&quot;release\&quot;: {           \&quot;last_deployed\&quot;: \&quot;2019-04-08T12:34:00Z\&quot;,           \&quot;status\&quot;: \&quot;DEPLOYED\&quot;         },         \&quot;version\&quot;: \&quot;0.2.0\&quot;,       }     }   ] &#x60;&#x60;&#x60;
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GetClusterAppsResponse}
     */
    getClusterAppsV4(clusterId: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
    /**
     * Get a list of apps on a cluster (v5)
     * Returns an array of apps installed on a given cluster.  ### Example &#x60;&#x60;&#x60;json   [     {       \&quot;metadata\&quot;: {         \&quot;name\&quot;: \&quot;my-awesome-prometheus\&quot;,         \&quot;labels\&quot;: {}       },        \&quot;spec\&quot;: {         \&quot;catalog\&quot;: \&quot;sample-catalog\&quot;         \&quot;name\&quot;: \&quot;prometheus-chart\&quot;,         \&quot;namespace\&quot;: \&quot;giantswarm\&quot;,         \&quot;version\&quot;: \&quot;0.2.0\&quot;,         \&quot;user_config\&quot;: {           \&quot;configmap\&quot;: {             \&quot;name\&quot;: \&quot;prometheus-user-values\&quot;,             \&quot;namespace\&quot;: \&quot;123ab\&quot;           }         }       },        \&quot;status\&quot;: {         \&quot;app_version\&quot;: \&quot;1.0.0\&quot;,         \&quot;release\&quot;: {           \&quot;last_deployed\&quot;: \&quot;2019-04-08T12:34:00Z\&quot;,           \&quot;status\&quot;: \&quot;DEPLOYED\&quot;         },         \&quot;version\&quot;: \&quot;0.2.0\&quot;,       }     }   ] &#x60;&#x60;&#x60;
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GetClusterAppsResponse} and HTTP response
     */
    getClusterAppsV5WithHttpInfo(clusterId: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
    /**
     * Get a list of apps on a cluster (v5)
     * Returns an array of apps installed on a given cluster.  ### Example &#x60;&#x60;&#x60;json   [     {       \&quot;metadata\&quot;: {         \&quot;name\&quot;: \&quot;my-awesome-prometheus\&quot;,         \&quot;labels\&quot;: {}       },        \&quot;spec\&quot;: {         \&quot;catalog\&quot;: \&quot;sample-catalog\&quot;         \&quot;name\&quot;: \&quot;prometheus-chart\&quot;,         \&quot;namespace\&quot;: \&quot;giantswarm\&quot;,         \&quot;version\&quot;: \&quot;0.2.0\&quot;,         \&quot;user_config\&quot;: {           \&quot;configmap\&quot;: {             \&quot;name\&quot;: \&quot;prometheus-user-values\&quot;,             \&quot;namespace\&quot;: \&quot;123ab\&quot;           }         }       },        \&quot;status\&quot;: {         \&quot;app_version\&quot;: \&quot;1.0.0\&quot;,         \&quot;release\&quot;: {           \&quot;last_deployed\&quot;: \&quot;2019-04-08T12:34:00Z\&quot;,           \&quot;status\&quot;: \&quot;DEPLOYED\&quot;         },         \&quot;version\&quot;: \&quot;0.2.0\&quot;,       }     }   ] &#x60;&#x60;&#x60;
     * @param {String} clusterId Cluster ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GetClusterAppsResponse}
     */
    getClusterAppsV5(clusterId: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
    /**
     * Modify an app (v4)
     * This operation allows you to modify an existing app.  For apps on v5 clusters, please use the v5 version of this endpoint.  The following attributes can be modified:  - &#x60;version&#x60;: Changing this field lets you upgrade or downgrade an app.  &#x60;catalog&#x60;, &#x60;name&#x60;, &#x60;namespace&#x60;, and &#x60;user_config&#x60; are not editable. If you need to move or rename an app, you should instead delete the app and make it again.  The request body must conform with the [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386) standard. Requests have to be sent with the &#x60;Content-Type: application/merge-patch+json&#x60; header.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param {module:model/V4ModifyAppRequest} opts.body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4App} and HTTP response
     */
    modifyClusterAppV4WithHttpInfo(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
        body: Record<string, any>;
    }): Promise<any>;
    /**
     * Modify an app (v4)
     * This operation allows you to modify an existing app.  For apps on v5 clusters, please use the v5 version of this endpoint.  The following attributes can be modified:  - &#x60;version&#x60;: Changing this field lets you upgrade or downgrade an app.  &#x60;catalog&#x60;, &#x60;name&#x60;, &#x60;namespace&#x60;, and &#x60;user_config&#x60; are not editable. If you need to move or rename an app, you should instead delete the app and make it again.  The request body must conform with the [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386) standard. Requests have to be sent with the &#x60;Content-Type: application/merge-patch+json&#x60; header.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param {module:model/V4ModifyAppRequest} opts.body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4App}
     */
    modifyClusterAppV4(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
        body: Record<string, any>;
    }): Promise<any>;
    /**
     * Modify an app (v5)
     * This operation allows you to modify an existing app.  The following attributes can be modified:  - &#x60;version&#x60;: Changing this field lets you upgrade or downgrade an app.  &#x60;catalog&#x60;, &#x60;name&#x60;, &#x60;namespace&#x60;, and &#x60;user_config&#x60; are not editable. If you need to move or rename an app, you should instead delete the app and make it again.  The request body must conform with the [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386) standard. Requests have to be sent with the &#x60;Content-Type: application/merge-patch+json&#x60; header.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param {module:model/V4ModifyAppRequest} opts.body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4App} and HTTP response
     */
    modifyClusterAppV5WithHttpInfo(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
        body: Record<string, any>;
    }): Promise<any>;
    /**
     * Modify an app (v5)
     * This operation allows you to modify an existing app.  The following attributes can be modified:  - &#x60;version&#x60;: Changing this field lets you upgrade or downgrade an app.  &#x60;catalog&#x60;, &#x60;name&#x60;, &#x60;namespace&#x60;, and &#x60;user_config&#x60; are not editable. If you need to move or rename an app, you should instead delete the app and make it again.  The request body must conform with the [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386) standard. Requests have to be sent with the &#x60;Content-Type: application/merge-patch+json&#x60; header.
     * @param {String} clusterId Cluster ID
     * @param {String} appName App Name
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param {module:model/V4ModifyAppRequest} opts.body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4App}
     */
    modifyClusterAppV5(clusterId: string, appName: string, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
        body: Record<string, any>;
    }): Promise<any>;
}
