# GiantSwarm.AppsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createClusterAppV4**](AppsApi.md#createClusterAppV4) | **PUT** /v4/clusters/{cluster_id}/apps/{app_name}/ | Install an app (v4)
[**createClusterAppV5**](AppsApi.md#createClusterAppV5) | **PUT** /v5/clusters/{cluster_id}/apps/{app_name}/ | Install an app (v5)
[**deleteClusterAppV4**](AppsApi.md#deleteClusterAppV4) | **DELETE** /v4/clusters/{cluster_id}/apps/{app_name}/ | Delete an app (v4)
[**deleteClusterAppV5**](AppsApi.md#deleteClusterAppV5) | **DELETE** /v5/clusters/{cluster_id}/apps/{app_name}/ | Delete an app (v5)
[**getAppCatalogs**](AppsApi.md#getAppCatalogs) | **GET** /v4/appcatalogs/ | Get a list of app catalogs configured on your installation.
[**getClusterAppsV4**](AppsApi.md#getClusterAppsV4) | **GET** /v4/clusters/{cluster_id}/apps/ | Get a list of apps on a cluster (v4)
[**getClusterAppsV5**](AppsApi.md#getClusterAppsV5) | **GET** /v5/clusters/{cluster_id}/apps/ | Get a list of apps on a cluster (v5)
[**modifyClusterAppV4**](AppsApi.md#modifyClusterAppV4) | **PATCH** /v4/clusters/{cluster_id}/apps/{app_name}/ | Modify an app (v4)
[**modifyClusterAppV5**](AppsApi.md#modifyClusterAppV5) | **PATCH** /v5/clusters/{cluster_id}/apps/{app_name}/ | Modify an app (v5)


<a name="createClusterAppV4"></a>
# **createClusterAppV4**
> V4App createClusterAppV4(clusterId, appName, opts)

Install an app (v4)

Install an app on a workload cluster by using this endpoint. For apps on v5 clusters, please use the v5 version of this endpoint.  The spec field represents the app we&#39;ll be installing, and so spec.name refers to the name of the app in the catalog.  The app_name in the path of this request is the name you want to give the instance of this app.  The response you get on a succesful create includes the status of the app. However since the App is still initialising and this is an asynchronous operation, it is likely that the fields in this status object will be all empty values.  To check on the status of your app, perform a GET to /v4/clusters/{cluster_id}/apps/, and check the status field of the app.  ### Example PUT request &#x60;&#x60;&#x60;json   /v4/clusters/abc12/apps/my-very-own-efk/    {     \&quot;spec\&quot;: {       \&quot;catalog\&quot;: \&quot;giantswarm\&quot;,       \&quot;name\&quot;: \&quot;efk-stack-app\&quot;,       \&quot;namespace\&quot;: \&quot;efk-stack-app\&quot;,       \&quot;version\&quot;: \&quot;0.2.0\&quot;,     }   } &#x60;&#x60;&#x60;  ### About the user_config field in the response This field is not editable by you, but is set automatically by the API if a ConfigMap named &#x60;{app_name}-user-values&#x60; exists in the workload cluster namespace on the management cluster.  The &#x60;/v4/clusters/{cluster_id}/apps/{app_name}/config/&#x60; endpoints allows you to create such a ConfigMap using this API.  It is recommended to create your config before creating your app. This will result in a faster deploy.  However, you can create your config after creating the app if you wish, this API will take care of setting the &#x60;user_config&#x60; field of the app correctly for you.  ### Why can&#39;t I just set the &#x60;user_config&#x60; value myself? It simplifies usage while also being a security measure.  Furthermore it is also a security measure and ensures that users of this API can&#39;t access arbitrary configmaps of the management cluster.  This API will only allow you to edit or access configmaps that adhere to a strict naming convention. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
  'body': new GiantSwarm.V4CreateAppRequest() // V4CreateAppRequest | 
};
apiInstance.createClusterAppV4(clusterId, appName, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **String**| Cluster ID | 
 **appName** | **String**| App Name | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 
 **body** | [**V4CreateAppRequest**](V4CreateAppRequest.md)|  | [optional] 

### Return type

[**V4App**](V4App.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createClusterAppV5"></a>
# **createClusterAppV5**
> V4App createClusterAppV5(clusterId, appName, opts)

Install an app (v5)

Install an app on a workload cluster by using this endpoint.  The spec field represents the app we&#39;ll be installing, and so spec.name refers to the name of the app in the catalog.  The app_name in the path of this request is the name you want to give the instance of this app.  The response you get on a succesful create includes the status of the app. However since the App is still initialising and this is an asynchronous operation, it is likely that the fields in this status object will be all empty values.  To check on the status of your app, perform a GET to /v5/clusters/{cluster_id}/apps/, and check the status field of the app.  ### Example PUT request &#x60;&#x60;&#x60;json   /v5/clusters/abc12/apps/my-very-own-efk/    {     \&quot;spec\&quot;: {       \&quot;catalog\&quot;: \&quot;giantswarm\&quot;,       \&quot;name\&quot;: \&quot;efk-stack-app\&quot;,       \&quot;namespace\&quot;: \&quot;efk-stack-app\&quot;,       \&quot;version\&quot;: \&quot;0.2.0\&quot;,     }   } &#x60;&#x60;&#x60;  ### About the user_config field in the response This field is not editable by you, but is set automatically by the API if a ConfigMap named &#x60;{app_name}-user-values&#x60; exists in the workload cluster namespace on the management cluster.  The &#x60;/v5/clusters/{cluster_id}/apps/{app_name}/config/&#x60; endpoints allows you to create such a ConfigMap using this API.  It is recommended to create your config before creating your app. This will result in a faster deploy.  However, you can create your config after creating the app if you wish, this API will take care of setting the &#x60;user_config&#x60; field of the app correctly for you.  ### Why can&#39;t I just set the &#x60;user_config&#x60; value myself? It simplifies usage while also being a security measure.  Furthermore it is also a security measure and ensures that users of this API can&#39;t access arbitrary configmaps of the management cluster.  This API will only allow you to edit or access configmaps that adhere to a strict naming convention. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
  'body': new GiantSwarm.V4CreateAppRequest() // V4CreateAppRequest | 
};
apiInstance.createClusterAppV5(clusterId, appName, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **String**| Cluster ID | 
 **appName** | **String**| App Name | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 
 **body** | [**V4CreateAppRequest**](V4CreateAppRequest.md)|  | [optional] 

### Return type

[**V4App**](V4App.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteClusterAppV4"></a>
# **deleteClusterAppV4**
> V4GenericResponse deleteClusterAppV4(clusterId, appName, opts)

Delete an app (v4)

This operation allows a user to delete an app. For apps on v5 clusters, please use the v5 version of this endpoint. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.deleteClusterAppV4(clusterId, appName, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **String**| Cluster ID | 
 **appName** | **String**| App Name | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V4GenericResponse**](V4GenericResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteClusterAppV5"></a>
# **deleteClusterAppV5**
> V4GenericResponse deleteClusterAppV5(clusterId, appName, opts)

Delete an app (v5)

This operation allows a user to delete an app. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.deleteClusterAppV5(clusterId, appName, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **String**| Cluster ID | 
 **appName** | **String**| App Name | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V4GenericResponse**](V4GenericResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAppCatalogs"></a>
# **getAppCatalogs**
> V4AppCatalogsResponse getAppCatalogs(opts)

Get a list of app catalogs configured on your installation.

Returns an array of app catalog objects, which contains further metadata, including a URL to fetch the full index of each catalog.   #### About the Labels  - &#x60;application.giantswarm.io/catalog-type&#x60;   Describes the type of catalog.    - &#x60;managed&#x60; - Apps in this catalog are managed by Giant Swarm.   - &#x60;incubator&#x60; - Apps in this catalog are a work in progress. They&#39;re                   made with your Giant Swarm cluster in mind though, so                   they should work. Feedback is appreciated on these apps.   - &#x60;test&#x60; - Apps in this catalog will soon graduate to incubator status,              you most likely will not see any &#x60;test&#x60; catalogs on your              installations.   - &#x60;community&#x60; - Apps in this catalog are provided by the kubernetes                   community. They will most likely not work without making                   some changes to the security settings of your cluster.    App Catalogs can also be labeled as &#x60;internal&#x60;, however these catalogs   contain apps that run on our management clusters. These &#x60;internal&#x60; app catalogs   will be filtered out and never shown when calling this endpoint.    For more details on app catalogs visit: https://docs.giantswarm.io/basics/app-catalog/   ### Example &#x60;&#x60;&#x60;json   [     {       \&quot;metadata\&quot;: {         \&quot;name\&quot;: \&quot;sample-catalog\&quot;,         \&quot;labels\&quot;: {           \&quot;application.giantswarm.io/catalog-type\&quot;: \&quot;test\&quot;,           \&quot;app-operator.giantswarm.io/version\&quot;: \&quot;1.0.0\&quot;,         },       },        \&quot;spec\&quot;: {         \&quot;description\&quot;: \&quot;Giant Swarm&#39;s Sample Catalog with a few apps to test things out.\&quot;,         \&quot;logoURL\&quot;: \&quot;https://s.giantswarm.io/app-catalog/1/images/sample-catalog.png\&quot;,          \&quot;storage\&quot;: {           \&quot;URL\&quot;: \&quot;https://giantswarm.github.io/sample-catalog/\&quot;,           \&quot;type\&quot;: \&quot;helm\&quot;         },         \&quot;title\&quot;: \&quot;Sample Catalog\&quot;       }     }   ] &#x60;&#x60;&#x60; 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppsApi();

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getAppCatalogs(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V4AppCatalogsResponse**](V4AppCatalogsResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClusterAppsV4"></a>
# **getClusterAppsV4**
> V4GetClusterAppsResponse getClusterAppsV4(clusterId, , opts)

Get a list of apps on a cluster (v4)

Returns an array of apps installed on a given cluster. For apps on v5 clusters, please use the v5 version of this endpoint.  ### Example &#x60;&#x60;&#x60;json   [     {       \&quot;metadata\&quot;: {         \&quot;name\&quot;: \&quot;my-awesome-prometheus\&quot;,         \&quot;labels\&quot;: {}       },        \&quot;spec\&quot;: {         \&quot;catalog\&quot;: \&quot;sample-catalog\&quot;         \&quot;name\&quot;: \&quot;prometheus-chart\&quot;,         \&quot;namespace\&quot;: \&quot;giantswarm\&quot;,         \&quot;version\&quot;: \&quot;0.2.0\&quot;,         \&quot;user_config\&quot;: {           \&quot;configmap\&quot;: {             \&quot;name\&quot;: \&quot;prometheus-user-values\&quot;,             \&quot;namespace\&quot;: \&quot;123ab\&quot;           }         }       },        \&quot;status\&quot;: {         \&quot;app_version\&quot;: \&quot;1.0.0\&quot;,         \&quot;release\&quot;: {           \&quot;last_deployed\&quot;: \&quot;2019-04-08T12:34:00Z\&quot;,           \&quot;status\&quot;: \&quot;DEPLOYED\&quot;         },         \&quot;version\&quot;: \&quot;0.2.0\&quot;,       }     }   ] &#x60;&#x60;&#x60; 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getClusterAppsV4(clusterId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **String**| Cluster ID | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V4GetClusterAppsResponse**](V4GetClusterAppsResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClusterAppsV5"></a>
# **getClusterAppsV5**
> V4GetClusterAppsResponse getClusterAppsV5(clusterId, , opts)

Get a list of apps on a cluster (v5)

Returns an array of apps installed on a given cluster.  ### Example &#x60;&#x60;&#x60;json   [     {       \&quot;metadata\&quot;: {         \&quot;name\&quot;: \&quot;my-awesome-prometheus\&quot;,         \&quot;labels\&quot;: {}       },        \&quot;spec\&quot;: {         \&quot;catalog\&quot;: \&quot;sample-catalog\&quot;         \&quot;name\&quot;: \&quot;prometheus-chart\&quot;,         \&quot;namespace\&quot;: \&quot;giantswarm\&quot;,         \&quot;version\&quot;: \&quot;0.2.0\&quot;,         \&quot;user_config\&quot;: {           \&quot;configmap\&quot;: {             \&quot;name\&quot;: \&quot;prometheus-user-values\&quot;,             \&quot;namespace\&quot;: \&quot;123ab\&quot;           }         }       },        \&quot;status\&quot;: {         \&quot;app_version\&quot;: \&quot;1.0.0\&quot;,         \&quot;release\&quot;: {           \&quot;last_deployed\&quot;: \&quot;2019-04-08T12:34:00Z\&quot;,           \&quot;status\&quot;: \&quot;DEPLOYED\&quot;         },         \&quot;version\&quot;: \&quot;0.2.0\&quot;,       }     }   ] &#x60;&#x60;&#x60; 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getClusterAppsV5(clusterId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **String**| Cluster ID | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V4GetClusterAppsResponse**](V4GetClusterAppsResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyClusterAppV4"></a>
# **modifyClusterAppV4**
> V4App modifyClusterAppV4(clusterId, appName, opts)

Modify an app (v4)

This operation allows you to modify an existing app.  For apps on v5 clusters, please use the v5 version of this endpoint.  The following attributes can be modified:  - &#x60;version&#x60;: Changing this field lets you upgrade or downgrade an app.  &#x60;catalog&#x60;, &#x60;name&#x60;, &#x60;namespace&#x60;, are not editable. If you need to move or rename an app, you should instead delete the app and make it again.  &#x60;user_config&#x60; holds a reference to a user-values ConfigMap and is also not editable at this endpoint. A user-values ConfigMap can be created using the [corresponding v4 app config creator endpoint](https://docs.giantswarm.io/api/#operation/createClusterAppConfigV4).  The request body must conform with the [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386) standard. Requests have to be sent with the &#x60;Content-Type: application/merge-patch+json&#x60; header. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
  'body': new GiantSwarm.V4ModifyAppRequest() // V4ModifyAppRequest | 
};
apiInstance.modifyClusterAppV4(clusterId, appName, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **String**| Cluster ID | 
 **appName** | **String**| App Name | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 
 **body** | [**V4ModifyAppRequest**](V4ModifyAppRequest.md)|  | [optional] 

### Return type

[**V4App**](V4App.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyClusterAppV5"></a>
# **modifyClusterAppV5**
> V4App modifyClusterAppV5(clusterId, appName, opts)

Modify an app (v5)

This operation allows you to modify an existing app.  The following attributes can be modified:  - &#x60;version&#x60;: Changing this field lets you upgrade or downgrade an app.  &#x60;catalog&#x60;, &#x60;name&#x60;, &#x60;namespace&#x60;, are not editable. If you need to move or rename an app, you should instead delete the app and make it again.  &#x60;user_config&#x60; holds a reference to a user-values ConfigMap and is also not editable at this endpoint. A user-values ConfigMap can be created using the [corresponding v5 app config creator endpoint](https://docs.giantswarm.io/api/#operation/createClusterAppConfigV5).  The request body must conform with the [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386) standard. Requests have to be sent with the &#x60;Content-Type: application/merge-patch+json&#x60; header. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
  'body': new GiantSwarm.V4ModifyAppRequest() // V4ModifyAppRequest | 
};
apiInstance.modifyClusterAppV5(clusterId, appName, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **String**| Cluster ID | 
 **appName** | **String**| App Name | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 
 **body** | [**V4ModifyAppRequest**](V4ModifyAppRequest.md)|  | [optional] 

### Return type

[**V4App**](V4App.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

