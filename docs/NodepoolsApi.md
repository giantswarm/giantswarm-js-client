# GiantSwarm.NodepoolsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNodePool**](NodepoolsApi.md#addNodePool) | **POST** /v5/clusters/{cluster_id}/nodepools/ | Create node pool
[**deleteNodePool**](NodepoolsApi.md#deleteNodePool) | **DELETE** /v5/clusters/{cluster_id}/nodepools/{nodepool_id}/ | Delete node pool
[**getNodePool**](NodepoolsApi.md#getNodePool) | **GET** /v5/clusters/{cluster_id}/nodepools/{nodepool_id}/ | Get node pool details
[**getNodePools**](NodepoolsApi.md#getNodePools) | **GET** /v5/clusters/{cluster_id}/nodepools/ | Get node pools
[**modifyNodePool**](NodepoolsApi.md#modifyNodePool) | **PATCH** /v5/clusters/{cluster_id}/nodepools/{nodepool_id}/ | Modify node pool


<a name="addNodePool"></a>
# **addNodePool**
> V5GetNodePoolResponse addNodePool(authorization, clusterId, , opts)

Create node pool

This allows to add a node pool to a cluster.  __Providers__: &lt;span class&#x3D;\&quot;badge aws\&quot;&gt;AWS&lt;/span&gt; &amp;ndash; Only supports release &#x60;TODO&#x60; and higher on AWS.  Some, but not all, node pool configuration can be changed after creation. The following settings will have a permanent effect:  - &#x60;availability_zones&#x60; - &#x60;instance_type&#x60; 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.NodepoolsApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var clusterId = "clusterId_example"; // String | Cluster ID

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
  'body': new GiantSwarm.V5AddNodePoolRequest() // V5AddNodePoolRequest | 
};
apiInstance.addNodePool(authorization, clusterId, , opts).then(function(data) {
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
 **body** | [**V5AddNodePoolRequest**](V5AddNodePoolRequest.md)|  | [optional] 

### Return type

[**V5GetNodePoolResponse**](V5GetNodePoolResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNodePool"></a>
# **deleteNodePool**
> V4GenericResponse deleteNodePool(authorization, clusterId, nodepoolId, , opts)

Delete node pool

Triggers the deletion of a node pool.  __Providers__: &lt;span class&#x3D;\&quot;badge aws\&quot;&gt;AWS&lt;/span&gt; &amp;ndash; Only supports release &#x60;TODO&#x60; and higher on AWS.  Nodes in the pool will first be cordoned and drained. Note that it is your responsibililty to make sure that workloads using the node pool can be scheduled elsewhere. We recommend to double-check the available capacity of remaining node pools, as well as any node selectors and taints. Also you can do the draining yourself before issuing the delete request, to observe the outcome. Use  &#x60;&#x60;&#x60; kubectl drain nodes -l giantswarm.nodepool_id&#x3D;&lt;nodepool_id&gt; ... &#x60;&#x60;&#x60;  TODO: adapt the command for correct label syntax 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.NodepoolsApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var clusterId = "clusterId_example"; // String | Cluster ID

var nodepoolId = "nodepoolId_example"; // String | Node Pool ID

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.deleteNodePool(authorization, clusterId, nodepoolId, , opts).then(function(data) {
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
 **nodepoolId** | **String**| Node Pool ID | 
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

<a name="getNodePool"></a>
# **getNodePool**
> V5GetNodePoolResponse getNodePool(authorization, clusterId, nodepoolId, , opts)

Get node pool details

Returns all available details on a specific node pool.  __Providers__: &lt;span class&#x3D;\&quot;badge aws\&quot;&gt;AWS&lt;/span&gt; &amp;ndash; Only supports release &#x60;TODO&#x60; and higher on AWS. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.NodepoolsApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var clusterId = "clusterId_example"; // String | Cluster ID

var nodepoolId = "nodepoolId_example"; // String | Node Pool ID

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getNodePool(authorization, clusterId, nodepoolId, , opts).then(function(data) {
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
 **nodepoolId** | **String**| Node Pool ID | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V5GetNodePoolResponse**](V5GetNodePoolResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNodePools"></a>
# **getNodePools**
> V5GetNodePoolsResponse getNodePools(authorization, clusterId, , opts)

Get node pools

Returns a list of node pools from a given cluster.  __Providers__: &lt;span class&#x3D;\&quot;badge aws\&quot;&gt;AWS&lt;/span&gt; &amp;ndash; Only supports release &#x60;TODO&#x60; and higher on AWS. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.NodepoolsApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var clusterId = "clusterId_example"; // String | Cluster ID

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getNodePools(authorization, clusterId, , opts).then(function(data) {
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

[**V5GetNodePoolsResponse**](V5GetNodePoolsResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyNodePool"></a>
# **modifyNodePool**
> V5GetNodePoolResponse modifyNodePool(authorization, clusterId, nodepoolId, body, opts)

Modify node pool

Allows to rename a node pool or change its scaling settings.  __Providers__: &lt;span class&#x3D;\&quot;badge aws\&quot;&gt;AWS&lt;/span&gt; &amp;ndash; Only supports release &#x60;TODO&#x60; and higher on AWS. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.NodepoolsApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var clusterId = "clusterId_example"; // String | Cluster ID

var nodepoolId = "nodepoolId_example"; // String | Node Pool ID

var body = new GiantSwarm.V5ModifyNodePoolRequest(); // V5ModifyNodePoolRequest | Merge-patch body

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.modifyNodePool(authorization, clusterId, nodepoolId, body, opts).then(function(data) {
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
 **nodepoolId** | **String**| Node Pool ID | 
 **body** | [**V5ModifyNodePoolRequest**](V5ModifyNodePoolRequest.md)| Merge-patch body | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V5GetNodePoolResponse**](V5GetNodePoolResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

