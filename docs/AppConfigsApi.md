# GiantSwarm.AppConfigsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createClusterAppConfigV4**](AppConfigsApi.md#createClusterAppConfigV4) | **PUT** /v4/clusters/{cluster_id}/apps/{app_name}/config/ | Create app config (v4)
[**createClusterAppConfigV5**](AppConfigsApi.md#createClusterAppConfigV5) | **PUT** /v5/clusters/{cluster_id}/apps/{app_name}/config/ | Create app config (v5)
[**deleteClusterAppConfigV4**](AppConfigsApi.md#deleteClusterAppConfigV4) | **DELETE** /v4/clusters/{cluster_id}/apps/{app_name}/config/ | Delete an app config (v4)
[**deleteClusterAppConfigV5**](AppConfigsApi.md#deleteClusterAppConfigV5) | **DELETE** /v5/clusters/{cluster_id}/apps/{app_name}/config/ | Delete an app config (v5)
[**getClusterAppConfigV4**](AppConfigsApi.md#getClusterAppConfigV4) | **GET** /v4/clusters/{cluster_id}/apps/{app_name}/config/ | Get app config (v4)
[**getClusterAppConfigV5**](AppConfigsApi.md#getClusterAppConfigV5) | **GET** /v5/clusters/{cluster_id}/apps/{app_name}/config/ | Get app config (v5)
[**modifyClusterAppConfigV4**](AppConfigsApi.md#modifyClusterAppConfigV4) | **PATCH** /v4/clusters/{cluster_id}/apps/{app_name}/config/ | Modify app config (v4)
[**modifyClusterAppConfigV5**](AppConfigsApi.md#modifyClusterAppConfigV5) | **PATCH** /v5/clusters/{cluster_id}/apps/{app_name}/config/ | Modify app config (v5)


<a name="createClusterAppConfigV4"></a>
# **createClusterAppConfigV4**
> V4GenericResponse createClusterAppConfigV4(clusterId, appName, opts)

Create app config (v4)

This operation allows you to create a values configmap for a specific app. The app does not have to exist before hand.  If the app does exist, this endpoint will ensure that the App CR gets it&#39;s user_config field set correctly.  However, if the app exists and the user_config is already set to something, then this request will fail. You will in that case most likely want to update the config using the &#x60;PATCH /v4/clusters/{cluster_id}/apps/{app_name}/config/&#x60; endpoint.  For apps on v5 clusters, please use the v5 version of this endpoint.   ### Example POST request &#x60;&#x60;&#x60;json   {     \&quot;agent\&quot;: {       \&quot;key\&quot;: \&quot;secret-key-here\&quot;,       \&quot;endpointHost\&quot;: \&quot;saas-eu-west-1.instana.io\&quot;,       \&quot;endpointPort\&quot;: \&quot;443\&quot;,     },     \&quot;zone\&quot;: {       \&quot;name\&quot;: \&quot;giantswarm-cluster\&quot;     }   } &#x60;&#x60;&#x60; 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppConfigsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
  'body': new GiantSwarm.V4CreateAppConfigRequest() // V4CreateAppConfigRequest | 
};
apiInstance.createClusterAppConfigV4(clusterId, appName, opts).then(function(data) {
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
 **body** | [**V4CreateAppConfigRequest**](V4CreateAppConfigRequest.md)|  | [optional] 

### Return type

[**V4GenericResponse**](V4GenericResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createClusterAppConfigV5"></a>
# **createClusterAppConfigV5**
> V4GenericResponse createClusterAppConfigV5(clusterId, appName, opts)

Create app config (v5)

This operation allows you to create a values configmap for a specific app. The app does not have to exist before hand.  If the app does exist, this endpoint will ensure that the App CR gets it&#39;s user_config field set correctly.  However, if the app exists and the user_config is already set to something, then this request will fail. You will in that case most likely want to update the config using the &#x60;PATCH /v5/clusters/{cluster_id}/apps/{app_name}/config/&#x60; endpoint.  ### Example POST request &#x60;&#x60;&#x60;json   {     \&quot;agent\&quot;: {       \&quot;key\&quot;: \&quot;secret-key-here\&quot;,       \&quot;endpointHost\&quot;: \&quot;saas-eu-west-1.instana.io\&quot;,       \&quot;endpointPort\&quot;: \&quot;443\&quot;,     },     \&quot;zone\&quot;: {       \&quot;name\&quot;: \&quot;giantswarm-cluster\&quot;     }   } &#x60;&#x60;&#x60; 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppConfigsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
  'body': new GiantSwarm.V4CreateAppConfigRequest() // V4CreateAppConfigRequest | 
};
apiInstance.createClusterAppConfigV5(clusterId, appName, opts).then(function(data) {
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
 **body** | [**V4CreateAppConfigRequest**](V4CreateAppConfigRequest.md)|  | [optional] 

### Return type

[**V4GenericResponse**](V4GenericResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteClusterAppConfigV4"></a>
# **deleteClusterAppConfigV4**
> V4GenericResponse deleteClusterAppConfigV4(clusterId, appName, opts)

Delete an app config (v4)

This operation allows a user to delete an app&#39;s user config if it has been named according to the convention of {app-name}-user-values and stored in the cluster ID namespace.  Calling this endpoint will delete the ConfigMap, but it does not remove the reference to the ConfigMap in the (spec.user_config.configmap field) from the app.  Do make sure you also update the app and remove the reference.  The preferred order is to first remove the reference to the configmap by updating the app, and only then delete the configmap using this endpoint.  For apps on v5 clusters, please use the v5 version of this endpoint. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppConfigsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.deleteClusterAppConfigV4(clusterId, appName, opts).then(function(data) {
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

<a name="deleteClusterAppConfigV5"></a>
# **deleteClusterAppConfigV5**
> V4GenericResponse deleteClusterAppConfigV5(clusterId, appName, opts)

Delete an app config (v5)

This operation allows a user to delete an app&#39;s user config if it has been named according to the convention of {app-name}-user-values and stored in the cluster ID namespace.  Calling this endpoint will delete the ConfigMap, but it does not remove the reference to the ConfigMap in the (spec.user_config.configmap field) from the app.  Do make sure you also update the app and remove the reference.  The preferred order is to first remove the reference to the configmap by updating the app, and only then delete the configmap using this endpoint. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppConfigsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.deleteClusterAppConfigV5(clusterId, appName, opts).then(function(data) {
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

<a name="getClusterAppConfigV4"></a>
# **getClusterAppConfigV4**
> V4GetClusterAppConfigResponse getClusterAppConfigV4(clusterId, appName, opts)

Get app config (v4)

This operation allows you to fetch the user values configmap associated with an app.  For apps on v5 clusters, please use the v5 version of this endpoint. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppConfigsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getClusterAppConfigV4(clusterId, appName, opts).then(function(data) {
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

[**V4GetClusterAppConfigResponse**](V4GetClusterAppConfigResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClusterAppConfigV5"></a>
# **getClusterAppConfigV5**
> V4GetClusterAppConfigResponse getClusterAppConfigV5(clusterId, appName, opts)

Get app config (v5)

This operation allows you to fetch the user values configmap associated with an app. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppConfigsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getClusterAppConfigV5(clusterId, appName, opts).then(function(data) {
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

[**V4GetClusterAppConfigResponse**](V4GetClusterAppConfigResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyClusterAppConfigV4"></a>
# **modifyClusterAppConfigV4**
> V4GenericResponse modifyClusterAppConfigV4(clusterId, appName, opts)

Modify app config (v4)

This operation allows you to modify the values configmap for a specific app. It&#39;s only possible to modify app configs that have been named according to the convention of {app-name}-user-values and stored in the cluster ID namespace.  The full values key of the configmap will be replaced by the JSON body of your request.  For apps on v5 clusters, please use the v5 version of this endpoint.  ### Example PATCH request &#x60;&#x60;&#x60;json   {     \&quot;agent\&quot;: {       \&quot;key\&quot;: \&quot;a-new-key-here\&quot;,     }   } &#x60;&#x60;&#x60;  If the configmap contained content like:  &#x60;&#x60;&#x60;json   {     \&quot;agent\&quot;: {       \&quot;key\&quot;: \&quot;an-old-key-here\&quot;,       \&quot;admin\&quot;: true,     },     \&quot;server\&quot;: {       \&quot;url\&quot;: \&quot;giantswarm.io\&quot;,     }   } &#x60;&#x60;&#x60;  Then the \&quot;server\&quot; and \&quot;admin\&quot; keys will be removed. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppConfigsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
  'body': new GiantSwarm.V4CreateAppConfigRequest() // V4CreateAppConfigRequest | 
};
apiInstance.modifyClusterAppConfigV4(clusterId, appName, opts).then(function(data) {
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
 **body** | [**V4CreateAppConfigRequest**](V4CreateAppConfigRequest.md)|  | [optional] 

### Return type

[**V4GenericResponse**](V4GenericResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyClusterAppConfigV5"></a>
# **modifyClusterAppConfigV5**
> V4GenericResponse modifyClusterAppConfigV5(clusterId, appName, opts)

Modify app config (v5)

This operation allows you to modify the values configmap for a specific app. It&#39;s only possible to modify app configs that have been named according to the convention of {app-name}-user-values and stored in the cluster ID namespace.  The full values key of the configmap will be replaced by the JSON body of your request.  ### Example PATCH request &#x60;&#x60;&#x60;json   {     \&quot;agent\&quot;: {       \&quot;key\&quot;: \&quot;a-new-key-here\&quot;,     }   } &#x60;&#x60;&#x60;  If the configmap contained content like:  &#x60;&#x60;&#x60;json   {     \&quot;agent\&quot;: {       \&quot;key\&quot;: \&quot;an-old-key-here\&quot;,       \&quot;admin\&quot;: true,     },     \&quot;server\&quot;: {       \&quot;url\&quot;: \&quot;giantswarm.io\&quot;,     }   } &#x60;&#x60;&#x60;  Then the \&quot;server\&quot; and \&quot;admin\&quot; keys will be removed. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppConfigsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
  'body': new GiantSwarm.V4CreateAppConfigRequest() // V4CreateAppConfigRequest | 
};
apiInstance.modifyClusterAppConfigV5(clusterId, appName, opts).then(function(data) {
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
 **body** | [**V4CreateAppConfigRequest**](V4CreateAppConfigRequest.md)|  | [optional] 

### Return type

[**V4GenericResponse**](V4GenericResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

