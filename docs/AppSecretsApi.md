# GiantSwarm.AppSecretsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createClusterAppSecretV4**](AppSecretsApi.md#createClusterAppSecretV4) | **PUT** /v4/clusters/{cluster_id}/apps/{app_name}/secret/ | Create Secret (v4)
[**createClusterAppSecretV5**](AppSecretsApi.md#createClusterAppSecretV5) | **PUT** /v5/clusters/{cluster_id}/apps/{app_name}/secret/ | Create Secret (v5)
[**deleteClusterAppSecretV4**](AppSecretsApi.md#deleteClusterAppSecretV4) | **DELETE** /v4/clusters/{cluster_id}/apps/{app_name}/secret/ | Delete a Secret (v4)
[**deleteClusterAppSecretV5**](AppSecretsApi.md#deleteClusterAppSecretV5) | **DELETE** /v5/clusters/{cluster_id}/apps/{app_name}/secret/ | Delete a Secret (v5)
[**getClusterAppSecretV4**](AppSecretsApi.md#getClusterAppSecretV4) | **GET** /v4/clusters/{cluster_id}/apps/{app_name}/secret/ | Get Secret (v4)
[**getClusterAppSecretV5**](AppSecretsApi.md#getClusterAppSecretV5) | **GET** /v5/clusters/{cluster_id}/apps/{app_name}/secret/ | Get Secret (v5)
[**modifyClusterAppSecretV4**](AppSecretsApi.md#modifyClusterAppSecretV4) | **PATCH** /v4/clusters/{cluster_id}/apps/{app_name}/secret/ | Modify Secret (v4)
[**modifyClusterAppSecretV5**](AppSecretsApi.md#modifyClusterAppSecretV5) | **PATCH** /v5/clusters/{cluster_id}/apps/{app_name}/secret/ | Modify Secret (v5)


<a name="createClusterAppSecretV4"></a>
# **createClusterAppSecretV4**
> V4GenericResponse createClusterAppSecretV4(clusterId, appName, opts)

Create Secret (v4)

This operation allows you to create a Secret for a specific app. The app does not have to exist before hand.  If the app does exist, this endpoint will ensure that the App CR gets it&#39;s &#x60;spec.user_config.secret&#x60; field set correctly.  However, if the app exists and the &#x60;spec.user_config.secret&#x60; is already set to something, then this request will fail. You will in that case most likely want to update the Secret using the &#x60;PATCH /v4/clusters/{cluster_id}/apps/{app_name}/secret/&#x60; endpoint.  For apps on v5 clusters, please use the v5 version of this endpoint.  ### Example POST request &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;value\&quot;   } &#x60;&#x60;&#x60; 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppSecretsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
  'body': new GiantSwarm.V4CreateClusterAppSecretRequest() // V4CreateClusterAppSecretRequest | 
};
apiInstance.createClusterAppSecretV4(clusterId, appName, opts).then(function(data) {
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
 **body** | [**V4CreateClusterAppSecretRequest**](V4CreateClusterAppSecretRequest.md)|  | [optional] 

### Return type

[**V4GenericResponse**](V4GenericResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createClusterAppSecretV5"></a>
# **createClusterAppSecretV5**
> V4GenericResponse createClusterAppSecretV5(clusterId, appName, opts)

Create Secret (v5)

This operation allows you to create a Secret for a specific app. The app does not have to exist before hand.  If the app does exist, this endpoint will ensure that the App CR gets it&#39;s &#x60;spec.user_config.secret&#x60; field set correctly.  However, if the app exists and the &#x60;spec.user_config.secret&#x60; is already set to something, then this request will fail. You will in that case most likely want to update the Secret using the &#x60;PATCH /v5/clusters/{cluster_id}/apps/{app_name}/secret/&#x60; endpoint.  ### Example POST request &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;value\&quot;   } &#x60;&#x60;&#x60; 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppSecretsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
  'body': new GiantSwarm.V4CreateClusterAppSecretRequest() // V4CreateClusterAppSecretRequest | 
};
apiInstance.createClusterAppSecretV5(clusterId, appName, opts).then(function(data) {
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
 **body** | [**V4CreateClusterAppSecretRequest**](V4CreateClusterAppSecretRequest.md)|  | [optional] 

### Return type

[**V4GenericResponse**](V4GenericResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteClusterAppSecretV4"></a>
# **deleteClusterAppSecretV4**
> V4GenericResponse deleteClusterAppSecretV4(clusterId, appName, opts)

Delete a Secret (v4)

This operation allows a user to delete an app&#39;s Secret if it has been named according to the convention of {app-name}-user-secrets and stored in the cluster ID namespace.  Calling this endpoint will delete the Secret, and also remove the reference to the Secret in the (spec.user_config.secret field) from the app.  For apps on v5 clusters, please use the v5 version of this endpoint. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppSecretsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.deleteClusterAppSecretV4(clusterId, appName, opts).then(function(data) {
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

<a name="deleteClusterAppSecretV5"></a>
# **deleteClusterAppSecretV5**
> V4GenericResponse deleteClusterAppSecretV5(clusterId, appName, opts)

Delete a Secret (v5)

This operation allows a user to delete an app&#39;s Secret if it has been named according to the convention of {app-name}-user-secrets and stored in the cluster ID namespace.  Calling this endpoint will delete the Secret, and also remove the reference to the Secret in the (spec.user_config.secret field) from the app. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppSecretsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.deleteClusterAppSecretV5(clusterId, appName, opts).then(function(data) {
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

<a name="getClusterAppSecretV4"></a>
# **getClusterAppSecretV4**
> V4GetClusterAppSecretResponse getClusterAppSecretV4(clusterId, appName, opts)

Get Secret (v4)

This operation allows you to fetch the Secret associated with an app.  For apps on v5 clusters, please use the v5 version of this endpoint. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppSecretsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getClusterAppSecretV4(clusterId, appName, opts).then(function(data) {
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

[**V4GetClusterAppSecretResponse**](V4GetClusterAppSecretResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClusterAppSecretV5"></a>
# **getClusterAppSecretV5**
> V4GetClusterAppSecretResponse getClusterAppSecretV5(clusterId, appName, opts)

Get Secret (v5)

This operation allows you to fetch the Secret associated with an app. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppSecretsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getClusterAppSecretV5(clusterId, appName, opts).then(function(data) {
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

[**V4GetClusterAppSecretResponse**](V4GetClusterAppSecretResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyClusterAppSecretV4"></a>
# **modifyClusterAppSecretV4**
> V4GenericResponse modifyClusterAppSecretV4(clusterId, appName, opts)

Modify Secret (v4)

This operation allows you to modify the Secret for a specific app. It&#39;s only possible to modify Secrets that have been named according to the convention of {app-name}-user-secrets and stored in the cluster ID namespace.  The full values key of the Secret will be replaced by the JSON body of your request.  For apps on v5 clusters, please use the v5 version of this endpoint.  ### Example PATCH request &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;new-value\&quot;   } &#x60;&#x60;&#x60;  If the Secret contained content like:  &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;old-value\&quot;,     \&quot;secret2\&quot;: \&quot;another-old-value\&quot;   } &#x60;&#x60;&#x60;  Then the \&quot;secret2\&quot; will be removed, and \&quot;secret\&quot; will be set to \&quot;new-value\&quot; 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppSecretsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
  'body': new GiantSwarm.V4CreateClusterAppSecretRequest() // V4CreateClusterAppSecretRequest | 
};
apiInstance.modifyClusterAppSecretV4(clusterId, appName, opts).then(function(data) {
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
 **body** | [**V4CreateClusterAppSecretRequest**](V4CreateClusterAppSecretRequest.md)|  | [optional] 

### Return type

[**V4GenericResponse**](V4GenericResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyClusterAppSecretV5"></a>
# **modifyClusterAppSecretV5**
> V4GenericResponse modifyClusterAppSecretV5(clusterId, appName, opts)

Modify Secret (v5)

This operation allows you to modify the Secret for a specific app. It&#39;s only possible to modify Secrets that have been named according to the convention of {app-name}-user-secrets and stored in the cluster ID namespace.  The full values key of the Secret will be replaced by the JSON body of your request.  ### Example PATCH request &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;new-value\&quot;   } &#x60;&#x60;&#x60;  If the Secret contained content like:  &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;old-value\&quot;,     \&quot;secret2\&quot;: \&quot;another-old-value\&quot;   } &#x60;&#x60;&#x60;  Then the \&quot;secret2\&quot; will be removed, and \&quot;secret\&quot; will be set to \&quot;new-value\&quot; 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.AppSecretsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
  'body': new GiantSwarm.V4CreateClusterAppSecretRequest() // V4CreateClusterAppSecretRequest | 
};
apiInstance.modifyClusterAppSecretV5(clusterId, appName, opts).then(function(data) {
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
 **body** | [**V4CreateClusterAppSecretRequest**](V4CreateClusterAppSecretRequest.md)|  | [optional] 

### Return type

[**V4GenericResponse**](V4GenericResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

