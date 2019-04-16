# GiantSwarmV4.NodepoolsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNodePool**](NodepoolsApi.md#addNodePool) | **POST** /v4/clusters/{cluster_id}/nodepools/ | Create node pool
[**deleteNodePool**](NodepoolsApi.md#deleteNodePool) | **DELETE** /v4/clusters/{cluster_id}/nodepools/{nodepool_id}/ | Delete node pool
[**getNodePool**](NodepoolsApi.md#getNodePool) | **GET** /v4/clusters/{cluster_id}/nodepools/{nodepool_id}/ | Get node pool details
[**getNodePoolStatus**](NodepoolsApi.md#getNodePoolStatus) | **GET** /v4/clusters/{cluster_id}/nodepools/{nodepool_id}/status/ | Get node pool status
[**getNodePools**](NodepoolsApi.md#getNodePools) | **GET** /v4/clusters/{cluster_id}/nodepools/ | Get node pools
[**modifyNodePool**](NodepoolsApi.md#modifyNodePool) | **PATCH** /v4/clusters/{cluster_id}/nodepools/{nodepool_id}/ | Modify node pool


<a name="addNodePool"></a>
# **addNodePool**
> V4GetNodePoolResponse addNodePool(authorizationclusterId, opts)

Create node pool

This allows to add a [node pool](https://docs.giantswarm.io/api/#tag/nodepools) to a cluster.  Some, but not all, node pool configuration can be changed after creation. The following settings will have a permanent effect:  - &#x60;availability_zones&#x60; (AWS only) - &#x60;instance_type&#x60; (AWS only) - &#x60;memory&#x60;, &#x60;storage&#x60;, and &#x60;cpu&#x60; (KVM only) - &#x60;vm_size&#x60; (Azure only)  ### Availability Zones (AWS only)  On AWS, you can distribute the nodes of a node pool over several availability zones to increase the cluster&#39;s resilience.  As a side effect, this impacts the maximum number of nodes a node pool can have. The more availability zones are used, the fewer nodes are possible. You can work around this by creating more node pools.  #### Details  Each node pool is assigned a &#x60;/22&#x60; IP address range, which allows for 1022 IP addresses.  If using, for example, three availability zones, the range will be split into four &#x60;/24&#x60; ranges of 254 addresses each. Each of the three availability zones is assigned one of these &#x60;/24&#x60; ranges.  Each of the &#x60;/24&#x60; address ranges then gets split into two &#x60;/25&#x60; with 126 hosts ) for public and private subnets. The private subnet is used for nodes and internal load balancers (only if you create them within Kubernetes). The public subnet will be used by public load balancers.  TODO: update this  &gt; Tenant cluster come with two public loadbalancers by default. One &gt; for the Kubernetes API and one for Ingress.  __Note:__ AWS ELBs can take up to 8 IP addresses due to the way how they scale. In addition to this, every AWS subnet has the first four addresses (.1 to .4) reserved for internal use.  ### Initial node pool size and autoscaling  The API allows to define the size of node pools on creation using the &#x60;scaling&#x60; attribute, setting a minimum and maximum node count.  On AWS, the pool size is controlled by the [Kubernetes Autoscaler](https://github.com/kubernetes/autoscaler) within the limits defined by the &#x60;scaling&#x60; setting. This setting can also be modified any time later in the node pool lifecycle.  By setting both the minimum and maximum to the same value, autoscaling is effectively disabled. This is also the default behaviour when no initial node pool size is given, or when clusters are upgraded from releases before 6.2.0.  Until autoscaling is available on providers other than AWS, for Azure and KVM (on-premises) the &#x60;min&#x60; and &#x60;max&#x60; scaling value **must** be identical.  ### Limitations  - Having multiple node pools in a cluster is currently only supported on AWS. - &#x60;scaling.min&#x60; and &#x60;scaling.max&#x60; must be identical on Azure and KVM. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.NodepoolsApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var clusterId = "clusterId_example"; // String | Cluster ID

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
  'body': new GiantSwarmV4.V4AddNodePoolRequest() // V4AddNodePoolRequest | 
};
apiInstance.addNodePool(authorizationclusterId, opts).then(function(data) {
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
 **body** | [**V4AddNodePoolRequest**](V4AddNodePoolRequest.md)|  | [optional] 

### Return type

[**V4GetNodePoolResponse**](V4GetNodePoolResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNodePool"></a>
# **deleteNodePool**
> deleteNodePool()

Delete node pool

Deletes a node pool.  Nodes in the pool will first be cordoned and drained. Note that it is your responsibililty to make sure that workloads using the node pool can be scheduled elsewhere. We recommend to double check the available capacity of remaining node pools, as well as any node selectors and affinities. Also you can do the draining yourself to observe the outcome. Use  &#x60;&#x60;&#x60; kubectl cordon nodes -l giantswarm.nodepool_id&#x3D;&lt;nodepool_id&gt; kubectl drain nodes -l giantswarm.nodepool_id&#x3D;&lt;nodepool_id&gt; ... &#x60;&#x60;&#x60;  TODO: adapt the command for correct label syntax 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.NodepoolsApi();
apiInstance.deleteNodePool().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNodePool"></a>
# **getNodePool**
> V4GetNodePoolResponse getNodePool(authorizationclusterIdnodepoolId, , opts)

Get node pool details

Returns all available details on a specific node pool 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.NodepoolsApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var clusterId = "clusterId_example"; // String | Cluster ID

var nodepoolId = "nodepoolId_example"; // String | Node Pool ID

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getNodePool(authorizationclusterIdnodepoolId, , opts).then(function(data) {
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

[**V4GetNodePoolResponse**](V4GetNodePoolResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNodePoolStatus"></a>
# **getNodePoolStatus**
> V4GetNodePoolStatusResponse getNodePoolStatus(authorizationclusterId, opts)

Get node pool status

Returns information on a node pool and the nodes in it.  This endpoint exposes the status content of the Kubernetes resources representing a node pool in the corresponding custom resource. That is, depending on the provider:  TODO: link to resources, as we do in &#x60;getClusterStatus&#x60;  Note that structure and style differ from the rest of the v4 API. Also note that the structure depends on the release version and changes can be expected frequently. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.NodepoolsApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var clusterId = "clusterId_example"; // String | Cluster ID

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getNodePoolStatus(authorizationclusterId, opts).then(function(data) {
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

[**V4GetNodePoolStatusResponse**](V4GetNodePoolStatusResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNodePools"></a>
# **getNodePools**
> V4GetNodePoolsResponse getNodePools(authorizationclusterId, opts)

Get node pools

Returns a list of node pools from a given cluster. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.NodepoolsApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var clusterId = "clusterId_example"; // String | Cluster ID

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getNodePools(authorizationclusterId, opts).then(function(data) {
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

[**V4GetNodePoolsResponse**](V4GetNodePoolsResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyNodePool"></a>
# **modifyNodePool**
> V4GetNodePoolResponse modifyNodePool(authorizationclusterIdnodepoolId, body, opts)

Modify node pool

Allows to rename a nod pool or change its scaling settings. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.NodepoolsApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var clusterId = "clusterId_example"; // String | Cluster ID

var nodepoolId = "nodepoolId_example"; // String | Node Pool ID

var body = new GiantSwarmV4.V4ModifyNodePoolRequest(); // V4ModifyNodePoolRequest | Merge-patch body

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.modifyNodePool(authorizationclusterIdnodepoolId, body, opts).then(function(data) {
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
 **body** | [**V4ModifyNodePoolRequest**](V4ModifyNodePoolRequest.md)| Merge-patch body | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V4GetNodePoolResponse**](V4GetNodePoolResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

