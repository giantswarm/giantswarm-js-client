# GiantSwarm.ClustersApi

All URIs are relative to *https://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCluster**](ClustersApi.md#addCluster) | **POST** /v4/clusters/ | Create cluster (v4)
[**addClusterV5**](ClustersApi.md#addClusterV5) | **POST** /v5/clusters/ | Create cluster (v5)
[**deleteCluster**](ClustersApi.md#deleteCluster) | **DELETE** /v4/clusters/{cluster_id}/ | Delete cluster
[**getCluster**](ClustersApi.md#getCluster) | **GET** /v4/clusters/{cluster_id}/ | Get cluster details (v4)
[**getClusterStatus**](ClustersApi.md#getClusterStatus) | **GET** /v4/clusters/{cluster_id}/status/ | Get cluster status
[**getClusterV5**](ClustersApi.md#getClusterV5) | **GET** /v5/clusters/{cluster_id}/ | Get cluster details (v5)
[**getClusters**](ClustersApi.md#getClusters) | **GET** /v4/clusters/ | Get clusters
[**modifyCluster**](ClustersApi.md#modifyCluster) | **PATCH** /v4/clusters/{cluster_id}/ | Modify cluster (v4)
[**modifyClusterV5**](ClustersApi.md#modifyClusterV5) | **PATCH** /v5/clusters/{cluster_id}/ | Modify cluster (v5)



## addCluster

> V4GenericResponse addCluster(authorization, v4AddClusterRequest, opts)

Create cluster (v4)

This operation is used to create a new Kubernetes cluster or \&quot;tenant cluster\&quot;.  ### Cluster definition  The cluster definition format allows to set a number of optional configuration details, like worker node configuration, with node specification depending on the provider (e. g. on Azure the VM size, or on KVM the memory size and number of CPU cores).  One attribute is __mandatory__ upon creation: The &#x60;owner&#x60; attribute must carry the name of the organization the cluster will belong to. Note that the acting user must be a member of that organization in order to create a cluster.  For all other attributes, defaults will be applied if the attribute is not set. Check out the [getInfo](#operation/getInfo) operation for more info about defaults. If no &#x60;release_version&#x60; is set, the latest release version available for the provider will be used. 

### Example

```javascript
var GiantSwarm = require('giantswarm');
var defaultClient = GiantSwarm.ApiClient.instance;
// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.ClustersApi();
var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 
var v4AddClusterRequest = new GiantSwarm.V4AddClusterRequest(); // V4AddClusterRequest | New cluster definition
var opts = {
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.addCluster(authorization, v4AddClusterRequest, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| As described in the [authentication](#section/Authentication) section  | 
 **v4AddClusterRequest** | [**V4AddClusterRequest**](V4AddClusterRequest.md)| New cluster definition | 
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


## addClusterV5

> V5ClusterDetailsResponse addClusterV5(authorization, v5AddClusterRequest, opts)

Create cluster (v5)

Allows to create most recent clusters on AWS installations.  ### Node pools  In the Giant Swarm API v5, worker nodes are grouped into pools of worker nodes where all nodes share the same configuration.  When creating a cluster without submitting the &#x60;nodepools&#x60; attribute, or with its value being an empty array, one node pool with default configuration will be created.  Node pools can be created, deleted and modified during the entire lifetime of a cluster.  See [node pools](#tag/nodepools) and [Create node pool](#operation/addNodePool) for details. 

### Example

```javascript
var GiantSwarm = require('giantswarm');
var defaultClient = GiantSwarm.ApiClient.instance;
// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.ClustersApi();
var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 
var v5AddClusterRequest = new GiantSwarm.V5AddClusterRequest(); // V5AddClusterRequest | New cluster definition
var opts = {
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.addClusterV5(authorization, v5AddClusterRequest, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| As described in the [authentication](#section/Authentication) section  | 
 **v5AddClusterRequest** | [**V5AddClusterRequest**](V5AddClusterRequest.md)| New cluster definition | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V5ClusterDetailsResponse**](V5ClusterDetailsResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCluster

> V4GenericResponse deleteCluster(authorization, clusterId, opts)

Delete cluster

This operation triggers deleting a cluster with all resources attached to it.  Deleting a cluster causes the termination of all workloads running on the cluster. Data stored on the worker nodes will be lost. There is no way to undo this operation.  The response is sent as soon as the request is validated. At that point, workloads might still be running on the cluster and may be accessible for a little wile, until the cluster is actually deleted. 

### Example

```javascript
var GiantSwarm = require('giantswarm');
var defaultClient = GiantSwarm.ApiClient.instance;
// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.ClustersApi();
var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 
var clusterId = "clusterId_example"; // String | Cluster ID
var opts = {
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.deleteCluster(authorization, clusterId, opts).then(function(data) {
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

[**V4GenericResponse**](V4GenericResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCluster

> V4ClusterDetailsResponse getCluster(authorization, clusterId, opts)

Get cluster details (v4)

This operation allows to obtain basic details on a particular cluster. 

### Example

```javascript
var GiantSwarm = require('giantswarm');
var defaultClient = GiantSwarm.ApiClient.instance;
// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.ClustersApi();
var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 
var clusterId = "clusterId_example"; // String | Cluster ID
var opts = {
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getCluster(authorization, clusterId, opts).then(function(data) {
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

[**V4ClusterDetailsResponse**](V4ClusterDetailsResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClusterStatus

> {String: Object} getClusterStatus(authorization, clusterId, opts)

Get cluster status

Returns an object about a cluster&#39;s current state and past status transitions.  This endpoint exposes the status content of the Kubernetes resources representing a cluster in the corresponding custom resource. That is, depending on the provider:  - [&#x60;awsconfig.provider.giantswarm.io&#x60;](https://godoc.org/github.com/giantswarm/apiextensions/pkg/apis/provider/v1alpha1#AWSConfig) - [&#x60;azureconfig.provider.giantswarm.io&#x60;](https://godoc.org/github.com/giantswarm/apiextensions/pkg/apis/provider/v1alpha1#AzureConfig) - [&#x60;kvmconfig.provider.giantswarm.io&#x60;](https://godoc.org/github.com/giantswarm/apiextensions/pkg/apis/provider/v1alpha1#KVMConfig)  Note that structure and style differ from the rest of the v4 API. Also note that the structure depends on the release version and changes can be expected frequently. 

### Example

```javascript
var GiantSwarm = require('giantswarm');
var defaultClient = GiantSwarm.ApiClient.instance;
// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.ClustersApi();
var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 
var clusterId = "clusterId_example"; // String | Cluster ID
var opts = {
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getClusterStatus(authorization, clusterId, opts).then(function(data) {
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

**{String: Object}**

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClusterV5

> V5ClusterDetailsResponse getClusterV5(authorization, clusterId, opts)

Get cluster details (v5)

Allows to retrieve cluster details on AWS installations. 

### Example

```javascript
var GiantSwarm = require('giantswarm');
var defaultClient = GiantSwarm.ApiClient.instance;
// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.ClustersApi();
var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 
var clusterId = "clusterId_example"; // String | Cluster ID
var opts = {
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getClusterV5(authorization, clusterId, opts).then(function(data) {
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

[**V5ClusterDetailsResponse**](V5ClusterDetailsResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClusters

> [V4ClusterListItem] getClusters(authorization, opts)

Get clusters

This operation fetches a list of clusters.  The result depends on the permissions of the user. A normal user will get all the clusters the user has access to, via organization membership. A user with admin permission will receive a list of all existing clusters.  The result array items are sparse representations of the cluster objects. To fetch more details on a cluster, use the [getClusterStatus](#operation/getClusterStatus) operation. 

### Example

```javascript
var GiantSwarm = require('giantswarm');
var defaultClient = GiantSwarm.ApiClient.instance;
// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.ClustersApi();
var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 
var opts = {
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getClusters(authorization, opts).then(function(data) {
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

[**[V4ClusterListItem]**](V4ClusterListItem.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyCluster

> V4ClusterDetailsResponse modifyCluster(authorization, clusterId, v4ModifyClusterRequest, opts)

Modify cluster (v4)

This operation allows to modify an existing cluster.  A cluster modification is performed by submitting a &#x60;PATCH&#x60; request to the cluster resource (as described in the [addCluster](#operation/addCluster) and [getCluster](#operation/getCluster)) in form of a [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386). This means, only the attributes to be modified have to be contained in the request body.  The following attributes can be modified:  - &#x60;name&#x60;: Rename the cluster to something more fitting.  - &#x60;owner&#x60;: Changing the owner organization name means to change cluster ownership from one organization to another. The user performing the request has to be a member of both organizations.  - &#x60;release_version&#x60;: By changing this attribute you can upgrade a cluster to a newer [release](https://docs.giantswarm.io/api/#tag/releases).  - &#x60;scaling&#x60;: Adjust the cluster node limits to make use of auto scaling or to have full control over the node count. The latter can be achieved by setting &#x60;min&#x60; and &#x60;max&#x60; to the same values. Note that setting &#x60;min&#x60; and &#x60;max&#x60; to different values (effectively enabling autoscaling) is only available on AWS with releases from 6.2.0.    - &#x60;workers&#x60; (deprecated): For backward compatibility reasons, it is possible to provide this attribute as an array, where the number of items contained in the array determines the intended number of worker nodes in the cluster. The item count will be applied as both &#x60;min&#x60; and &#x60;max&#x60; value of the scaling limits, effectively disabling autoscaling. This requires the &#x60;scaling&#x60; attribute must not be present in the same request.  ### Limitations  - As of now, existing worker nodes cannot be modified. - The number of availability zones cannot be modified. - When removing nodes (scaling down), it is not possible to determine which nodes will be removed. 

### Example

```javascript
var GiantSwarm = require('giantswarm');
var defaultClient = GiantSwarm.ApiClient.instance;
// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.ClustersApi();
var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 
var clusterId = "clusterId_example"; // String | Cluster ID
var v4ModifyClusterRequest = new GiantSwarm.V4ModifyClusterRequest(); // V4ModifyClusterRequest | Merge-patch body
var opts = {
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.modifyCluster(authorization, clusterId, v4ModifyClusterRequest, opts).then(function(data) {
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
 **v4ModifyClusterRequest** | [**V4ModifyClusterRequest**](V4ModifyClusterRequest.md)| Merge-patch body | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V4ClusterDetailsResponse**](V4ClusterDetailsResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## modifyClusterV5

> V5ClusterDetailsResponse modifyClusterV5(authorization, clusterId, v5ModifyClusterRequest, opts)

Modify cluster (v5)

Allows to change cluster properties on AWS installations. 

### Example

```javascript
var GiantSwarm = require('giantswarm');
var defaultClient = GiantSwarm.ApiClient.instance;
// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.ClustersApi();
var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 
var clusterId = "clusterId_example"; // String | Cluster ID
var v5ModifyClusterRequest = new GiantSwarm.V5ModifyClusterRequest(); // V5ModifyClusterRequest | Merge-patch body
var opts = {
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.modifyClusterV5(authorization, clusterId, v5ModifyClusterRequest, opts).then(function(data) {
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
 **v5ModifyClusterRequest** | [**V5ModifyClusterRequest**](V5ModifyClusterRequest.md)| Merge-patch body | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V5ClusterDetailsResponse**](V5ClusterDetailsResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

