# GiantSwarm.AppSecretsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createClusterAppSecret**](AppSecretsApi.md#createClusterAppSecret) | **PUT** /v4/clusters/{cluster_id}/apps/{app_name}/secret/ | Create Secret
[**deleteClusterAppSecret**](AppSecretsApi.md#deleteClusterAppSecret) | **DELETE** /v4/clusters/{cluster_id}/apps/{app_name}/secret/ | Delete a Secret
[**getClusterAppSecret**](AppSecretsApi.md#getClusterAppSecret) | **GET** /v4/clusters/{cluster_id}/apps/{app_name}/secret/ | Get Secret
[**modifyClusterAppSecret**](AppSecretsApi.md#modifyClusterAppSecret) | **PATCH** /v4/clusters/{cluster_id}/apps/{app_name}/secret/ | Modify Secret


<a name="createClusterAppSecret"></a>
# **createClusterAppSecret**
> V4GenericResponse createClusterAppSecret(clusterId, appName, opts)

Create Secret

This operation allows you to create a Secret for a specific app. The app does not have to exist before hand.  If the app does exist, this endpoint will ensure that the App CR gets it&#39;s &#x60;spec.user_config.secret&#x60; field set correctly.  However, if the app exists and the &#x60;spec.user_config.secret&#x60; is already set to something, then this request will fail. You will in that case most likely want to update the Secret using the &#x60;PATCH /v4/clusters/{cluster_id}/apps/{app_name}/secret/&#x60; endpoint.   ### Example POST request &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;value\&quot;   } &#x60;&#x60;&#x60; 

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
apiInstance.createClusterAppSecret(clusterId, appName, opts).then(function(data) {
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

<a name="deleteClusterAppSecret"></a>
# **deleteClusterAppSecret**
> V4GenericResponse deleteClusterAppSecret(clusterId, appName, opts)

Delete a Secret

This operation allows a user to delete an app&#39;s Secret if it has been named according to the convention of {app-name}-user-secret and stored in the cluster ID namespace.  Calling this endpoint will delete the Secret, and also remove the reference to the Secret in the (spec.user_config.secret field) from the app. 

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
apiInstance.deleteClusterAppSecret(clusterId, appName, opts).then(function(data) {
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

<a name="getClusterAppSecret"></a>
# **getClusterAppSecret**
> V4GetClusterAppSecretResponse getClusterAppSecret(clusterId, appName, opts)

Get Secret

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
apiInstance.getClusterAppSecret(clusterId, appName, opts).then(function(data) {
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

<a name="modifyClusterAppSecret"></a>
# **modifyClusterAppSecret**
> V4GenericResponse modifyClusterAppSecret(clusterId, appName, opts)

Modify Secret

This operation allows you to modify the Secret for a specific app. It&#39;s only possible to modify Secrets that have been named according to the convention of {app-name}-secret and stored in the cluster ID namespace.  The full values key of the Secret will be replaced by the JSON body of your request.  ### Example PATCH request &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;new-value\&quot;   } &#x60;&#x60;&#x60;  If the Secret contained content like:  &#x60;&#x60;&#x60;json   {     \&quot;secret\&quot;: \&quot;old-value\&quot;,     \&quot;secret2\&quot;: \&quot;another-old-value\&quot;   } &#x60;&#x60;&#x60;  Then the \&quot;secret2\&quot; will be removed, and \&quot;secret\&quot; will be set to \&quot;new-value\&quot; 

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
apiInstance.modifyClusterAppSecret(clusterId, appName, opts).then(function(data) {
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

