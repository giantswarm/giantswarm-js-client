# GiantSwarmV4.ClustersApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCluster**](ClustersApi.md#addCluster) | **POST** /v4/clusters/ | Create cluster
[**deleteCluster**](ClustersApi.md#deleteCluster) | **DELETE** /v4/clusters/{cluster_id}/ | Delete cluster
[**getCluster**](ClustersApi.md#getCluster) | **GET** /v4/clusters/{cluster_id}/ | Get cluster details
[**getClusterStatus**](ClustersApi.md#getClusterStatus) | **GET** /v4/clusters/{cluster_id}/status/ | Get cluster status
[**getClusters**](ClustersApi.md#getClusters) | **GET** /v4/clusters/ | Get clusters
[**modifyCluster**](ClustersApi.md#modifyCluster) | **PATCH** /v4/clusters/{cluster_id}/ | Modify cluster


<a name="addCluster"></a>
# **addCluster**
> V4GenericResponse addCluster(authorizationbody, opts)

Create cluster

This operation is used to create a new Kubernetes cluster for an organization. The desired configuration can be specified using the __cluster definition format__ (see [external documentation](https://github.com/giantswarm/api-spec/blob/master/details/CLUSTER_DEFINITION.md) for details).  The cluster definition format allows to set a number of optional configuration details, like memory size and number of CPU cores. However, one attribute is __mandatory__ upon creation: The &#x60;owner&#x60; attribute must carry the name of the organization the cluster will belong to. Note that the acting user must be a member of that organization in order to create a cluster.  It is *recommended* to also specify the &#x60;name&#x60; attribute to give the cluster a friendly name, like e. g. \&quot;Development Cluster\&quot;.  Additional definition attributes can be used. Where attributes are omitted, default configuration values will be applied. For example, if no &#x60;release_version&#x60; is specified, the most recent version is used.  The number of &#x60;availability_zones&#x60; affects the total number of nodes that can be created in the cluster. The number of availability zones splits the IP range that can be used for the cluster in multiple smaller IP ranges. The [getInfo](#operation/getInfo) endpoint provides more details about the cluster IP range.  IP range example:  If a cluster gets a &#x60;/22&#x60; range (1022 hosts) and the cluster should be spawned across 3 availability zones, the range will then be split up into four &#x60;/24&#x60; (254 hosts) that can be assigned to four different availability zones. One range will stay unused because network addresses must be powers of two. See [CIDR addressing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing). Each of the &#x60;/24&#x60; will then be split into two &#x60;/25&#x60; (126 hosts) for public and private subnets. The private subnet is used for nodes and internal loadbalancer (only if you create them within Kubernetes). The public subnet will be used by the public loadbalancers. Tenant cluster come with two public loadbalancers by default. One for the Kubernetes API and one for Ingress.  __Note:__ AWS ELBs can take up to 8 IP addresses due to the way how they scale. In addition to this, every AWS subnet has four first addresses (.1-.4) reserved for internal use.  The &#x60;workers&#x60; attribute, if present, must contain an array of node definition objects. The number of objects given determines the number of workers created.  For example, requesting three worker nodes with default configuration can be achieved by submitting an array of three empty objects:  &#x60;&#x60;&#x60;\&quot;workers\&quot;: [{}, {}, {}]&#x60;&#x60;&#x60;  For clusters on AWS, note that all worker nodes must use the same instance type. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.ClustersApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var body = new GiantSwarmV4.V4AddClusterRequest(); // V4AddClusterRequest | New cluster definition

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.addCluster(authorizationbody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| As described in the [authentication](#section/Authentication) section  | 
 **body** | [**V4AddClusterRequest**](V4AddClusterRequest.md)| New cluster definition | 
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

<a name="deleteCluster"></a>
# **deleteCluster**
> V4GenericResponse deleteCluster(authorizationclusterId, opts)

Delete cluster

This operation allows to delete a cluster.  __Caution:__ Deleting a cluster causes the termination of all workloads running on the cluster. Data stored on the worker nodes will be lost. There is no way to undo this operation.  The response is sent as soon as the request is validated. At that point, workloads might still be running on the cluster and may be accessible for a little wile, until the cluster is actually deleted. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.ClustersApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var clusterId = "clusterId_example"; // String | Cluster ID

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.deleteCluster(authorizationclusterId, opts).then(function(data) {
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCluster"></a>
# **getCluster**
> V4ClusterDetailsResponse getCluster(authorizationclusterId, opts)

Get cluster details

This operation allows to obtain all available details on a particular cluster. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.ClustersApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var clusterId = "clusterId_example"; // String | Cluster ID

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getCluster(authorizationclusterId, opts).then(function(data) {
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClusterStatus"></a>
# **getClusterStatus**
> V4GetClusterStatusResponse getClusterStatus(authorizationclusterId, opts)

Get cluster status

Returns an object about a cluster&#39;s current state and past status transitions.  This endpoint exposes the status content of the Kubernetes resources representing a cluster in the corresponding custom resource. That is, depending on the provider:  - [awsconfig.provider.giantswarm.io](https://godoc.org/github.com/giantswarm/apiextensions/pkg/apis/provider/v1alpha1#AWSConfig) - [azureconfig.provider.giantswarm.io](https://godoc.org/github.com/giantswarm/apiextensions/pkg/apis/provider/v1alpha1#AzureConfig) - [kvmconfig.provider.giantswarm.io](https://godoc.org/github.com/giantswarm/apiextensions/pkg/apis/provider/v1alpha1#KVMConfig)  Note that structure and style differ from the rest of the v4 API. Also note that the structure depends on the release version and changes can be expected frequently. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.ClustersApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var clusterId = "clusterId_example"; // String | Cluster ID

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getClusterStatus(authorizationclusterId, opts).then(function(data) {
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

[**V4GetClusterStatusResponse**](V4GetClusterStatusResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClusters"></a>
# **getClusters**
> [V4ClusterListItem] getClusters(authorization, opts)

Get clusters

This operation fetches a list of clusters.  The result depends on the permissions of the user. A normal user will get all the clusters the user has access to, via organization membership. A user with admin permission will receive a list of all existing clusters.  The result array items are sparse representations of the cluster objects. To fetch more details on a cluster, use the [getCluster](#operation/getCluster) operation. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.ClustersApi();

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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyCluster"></a>
# **modifyCluster**
> V4ClusterDetailsResponse modifyCluster(authorizationbody, clusterId, opts)

Modify cluster

This operation allows to modify an existing cluster.  A cluster modification is performed by submitting a &#x60;PATCH&#x60; request to the cluster resource (as described in the [addCluster](#operation/addCluster) and [getCluster](#operation/getCluster)) in form of a [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386). This means, only the attributes to be modified have to be contained in the request body.  The following attributes can be modified:  - &#x60;name&#x60;: Rename the cluster to something more fitting.  - &#x60;owner&#x60;: Changing the owner organization name means to change cluster ownership from one organization to another. The user performing the request has to be a member of both organizations.  - &#x60;release_version&#x60;: By changing this attribute you can upgrade a cluster to a newer [release](https://docs.giantswarm.io/api/#tag/releases).  - &#x60;workers&#x60;: By modifying the array of workers, nodes can be added to increase the cluster&#39;s capacity. See details below.  ### Adding and Removing Worker Nodes (Scaling)  Adding worker nodes to a cluster or removing worker nodes from a cluster works by submitting the &#x60;workers&#x60; attribute, which contains a (sparse) array of worker node defintions.  _Sparse_ here means that all configuration details are optional. In the case that worker nodes are added to a cluster, wherever a configuration detail is missing, defaults will be applied. See [Creating a cluster](#operation/addCluster) for details.  When modifying the cluster resource, you describe the desired state. For scaling, this means that the worker node array submitted must contain as many elements as the cluster should have worker nodes. If your cluster currently has five nodes and you submit a workers array with four elements, this means that one worker node will be removed. If your submitted workers array has six elements, this means one will be added.  As an example, this request body could be used to scale a cluster to three worker nodes:  &#x60;&#x60;&#x60;json {   \&quot;workers\&quot;: [{}, {}, {}] } &#x60;&#x60;&#x60;  If the scaled cluster had four worker nodes before, one would be removed. If it had two worker nodes before, one with default settings would be added.  ### Limitations  - As of now, existing worker nodes cannot be modified. - The number of availability zones cannot be modified afterwards. - When removing nodes (scaling down), it is not possible to determine which nodes will be removed. - On AWS based clusters, all worker nodes must use the same EC2 instance type (&#x60;instance_type&#x60; node attribute). By not setting an &#x60;instance_type&#x60; when submitting a PATCH request, you ensure that the right instance type is used automatically. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.ClustersApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var body = new GiantSwarmV4.V4ModifyClusterRequest(); // V4ModifyClusterRequest | Merge-patch body

var clusterId = "clusterId_example"; // String | Cluster ID

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.modifyCluster(authorizationbody, clusterId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| As described in the [authentication](#section/Authentication) section  | 
 **body** | [**V4ModifyClusterRequest**](V4ModifyClusterRequest.md)| Merge-patch body | 
 **clusterId** | **String**| Cluster ID | 
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

