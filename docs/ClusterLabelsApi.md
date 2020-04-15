# GiantSwarm.ClusterLabelsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getClusterLabels**](ClusterLabelsApi.md#getClusterLabels) | **GET** /v5/clusters/{cluster_id}/labels/ | Get cluster labels
[**setClusterLabels**](ClusterLabelsApi.md#setClusterLabels) | **PUT** /v5/clusters/{cluster_id}/labels/ | Set cluster labels


<a name="getClusterLabels"></a>
# **getClusterLabels**
> V5ClusterLabelsResponse getClusterLabels(clusterId, )

Get cluster labels

Returns the labels that this cluster is labelled with 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.ClusterLabelsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

apiInstance.getClusterLabels(clusterId, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **String**| Cluster ID | 

### Return type

[**V5ClusterLabelsResponse**](V5ClusterLabelsResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setClusterLabels"></a>
# **setClusterLabels**
> V5ClusterLabelsResponse setClusterLabels(clusterId, body)

Set cluster labels

Set cluster labels. Keys and labels should adhere to [Kubernetes labels syntax and character set](https://v1-16.docs.kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).  Label changes should be written as a [JSON Merge Patch, RFC 7386](https://tools.ietf.org/html/rfc7386).  Changes to labels containing &#x60;giantswarm.io&#x60; is forbidden, changes to label &#x60;release.giantswarm.io/version&#x60; will be validated against available Giant Swarm releases. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.ClusterLabelsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

var body = new GiantSwarm.V5ClusterLabelsResponse(); // V5ClusterLabelsResponse | Labels to attach to this cluster.

apiInstance.setClusterLabels(clusterId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **String**| Cluster ID | 
 **body** | [**V5ClusterLabelsResponse**](V5ClusterLabelsResponse.md)| Labels to attach to this cluster. | 

### Return type

[**V5ClusterLabelsResponse**](V5ClusterLabelsResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

