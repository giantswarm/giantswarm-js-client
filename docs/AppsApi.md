# GiantSwarmV4.AppsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createClusterApp**](AppsApi.md#createClusterApp) | **PUT** /v4/clusters/{cluster_id}/apps/{app_name}/ | Install an app
[**deleteClusterApp**](AppsApi.md#deleteClusterApp) | **DELETE** /v4/clusters/{cluster_id}/apps/{app_name}/ | Delete an app
[**getAppCatalogs**](AppsApi.md#getAppCatalogs) | **GET** /v4/appcatalogs/ | Get a list of app catalogs configured on your installation.
[**getClusterApps**](AppsApi.md#getClusterApps) | **GET** /v4/clusters/{cluster_id}/apps/ | Get cluster apps


<a name="createClusterApp"></a>
# **createClusterApp**
> V4App createClusterApp(authorizationclusterId, appName, opts)

Install an app

Install an app on a tenant cluster by posting to this endpoint.  The spec field represents the app we&#39;ll be installing, and so spec.name refers to the name of the chart that installs this app in the catalog.  The response you get on a succesful create includes the status of the app. However since the App is still initialising and this is an asynchronous operation, it is likely that the fields in this status object will be all empty values.  To check on the status of your app, perform a GET to /v4/clusters/{cluster_id}/apps/, and check the status field of the app. ###  ### Example PUT request &#x60;&#x60;&#x60;json   {     \&quot;spec\&quot;: {       \&quot;catalog\&quot;: \&quot;sample-catalog\&quot;,       \&quot;name\&quot;: \&quot;prometheus-chart\&quot;,       \&quot;namespace\&quot;: \&quot;prometheus\&quot;,       \&quot;version\&quot;: \&quot;0.2.0\&quot;     }   } &#x60;&#x60;&#x60; 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.AppsApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
  'body': new GiantSwarmV4.V4CreateAppRequest() // V4CreateAppRequest | 
};
apiInstance.createClusterApp(authorizationclusterId, appName, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| As described in the [authentication](#section/Authentication) section  | 
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

<a name="deleteClusterApp"></a>
# **deleteClusterApp**
> V4GenericResponse deleteClusterApp(authorizationclusterId, appName, opts)

Delete an app

This operation allows a user to delete an app. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.AppsApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var clusterId = "clusterId_example"; // String | Cluster ID

var appName = "appName_example"; // String | App Name

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.deleteClusterApp(authorizationclusterId, appName, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| As described in the [authentication](#section/Authentication) section  | 
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
> V4AppCatalogsResponse getAppCatalogs(authorization, opts)

Get a list of app catalogs configured on your installation.

Returns an array of app catalog objects, which contains further metadata, including a URL to fetch the full index of each catalog.   ### Example &#x60;&#x60;&#x60;json   [     {       \&quot;metadata\&quot;: {         \&quot;name\&quot;: \&quot;sample-catalog\&quot;,       },        \&quot;spec\&quot;: {         \&quot;description\&quot;: \&quot;Giant Swarm&#39;s Sample Catalog with a few apps to test things out.\&quot;,         \&quot;logoURL\&quot;: \&quot;https://s.giantswarm.io/app-catalog/1/images/sample-catalog.png\&quot;,          \&quot;storage\&quot;: {           \&quot;URL\&quot;: \&quot;https://giantswarm.github.com/sample-catalog/\&quot;,           \&quot;type\&quot;: \&quot;helm\&quot;         },         \&quot;title\&quot;: \&quot;Sample Catalog\&quot;       }     }   ] &#x60;&#x60;&#x60; 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.AppsApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getAppCatalogs(authorization, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| As described in the [authentication](#section/Authentication) section  | 
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

<a name="getClusterApps"></a>
# **getClusterApps**
> V4GetClusterAppsResponse getClusterApps(authorizationclusterId, , opts)

Get cluster apps

Returns an array of apps installed on a given cluster.  ### Example &#x60;&#x60;&#x60;json   [     {       \&quot;metadata\&quot;: {         \&quot;name\&quot;: \&quot;my-awesome-prometheus\&quot;,       },        \&quot;spec\&quot;: {         \&quot;catalog\&quot;: \&quot;sample-catalog\&quot;         \&quot;name\&quot;: \&quot;prometheus-chart\&quot;,         \&quot;namespace\&quot;: \&quot;giantswarm\&quot;,         \&quot;version\&quot;: \&quot;0.2.0\&quot;       },        \&quot;status\&quot;: {         \&quot;app_version\&quot;: \&quot;1.0.0\&quot;,         \&quot;release\&quot;: {           \&quot;last_deployed\&quot;: \&quot;2019-04-08T12:34:00Z\&quot;,           \&quot;status\&quot;: \&quot;DEPLOYED\&quot;         },         \&quot;version\&quot;: \&quot;0.2.0\&quot;,       }     }   ] &#x60;&#x60;&#x60; 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.AppsApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var clusterId = "clusterId_example"; // String | Cluster ID

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getClusterApps(authorizationclusterId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| As described in the [authentication](#section/Authentication) section  | 
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

