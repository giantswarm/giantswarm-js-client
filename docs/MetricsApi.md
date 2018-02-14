# GiantSwarmV4.MetricsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getClusterMetrics**](MetricsApi.md#getClusterMetrics) | **GET** /v4/clusters/{cluster_id}/metrics/ | Get cluster metrics


<a name="getClusterMetrics"></a>
# **getClusterMetrics**
> V4GetClusterMetricsResponse getClusterMetrics(clusterId)

Get cluster metrics

This operation returns metrics about current resource usage in the cluster. Currently, all metrics reported concern worker nodes, hence they are grouped under a &#x60;workers&#x60; key.  Here is a shortened example, containing only one metric (&#x60;ram_used&#x60;) and only one worker node:  &#x60;&#x60;&#x60;json {   \&quot;workers\&quot;: [     {       \&quot;id\&quot;: \&quot;172.17.0.4\&quot;,       \&quot;metrics\&quot;: {         \&quot;ram_used\&quot;: {           \&quot;timestamp\&quot;: \&quot;2017-10-23T12:56:12.185000\&quot;,           \&quot;value\&quot;: 4205494272         },         \&quot;cpu_used\&quot;: {           \&quot;timestamp\&quot;: \&quot;2017-10-23T12:56:12.029000\&quot;,           \&quot;value\&quot;: 0.1255365799999         }       }     }   ] } &#x60;&#x60;&#x60;  ### Notes  - The &#x60;id&#x60; value contained in a worker entry should be treated as an arbitrary string identifier. It _may_ in fact be be an IPv4 address, a fully qualified host name, or any other string that uniquely identifies a worker node in this guest cluster.  - Metrics are not guaranteed to provide a value. If the underlying backend cannot provide a recent value fast enough, both the &#x60;value&#x60; and &#x60;timestamp&#x60; key have the &#x60;null&#x60; value.  ### Metrics provided for worker nodes  - &#x60;container_count&#x60;: Number of containers running - &#x60;pod_count&#x60;: Number of pods running - &#x60;cpu_used&#x60;: Number of CPU cores currently used - &#x60;ram_free&#x60;: Free memory in bytes - &#x60;ram_available&#x60;: Memory available for new applications, in bytes - &#x60;ram_cached&#x60;: Memory used for file caches, in bytes - &#x60;ram_buffers&#x60;: Memory used for kernel buffers, in bytes - &#x60;ram_mapped&#x60;: Memory used by mapped files, in bytes - &#x60;node_storage_used&#x60;: Amount of local storage used in bytes - &#x60;network_rx&#x60;: Incoming data volume (Rx) in bytes per second - &#x60;network_tx&#x60;: Outgoing data volume (Tx) in bytes per second - &#x60;resource_cpu_requests&#x60;: Sum of CPU requeszs for containers - &#x60;resource_cpu_limits&#x60;: Sum of CPU limits for containers - &#x60;resource_ram_requests&#x60;: Sum of memory requests for containers - &#x60;resource_ram_limits&#x60;: Sum of memory limits for containers 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.MetricsApi();

var clusterId = "clusterId_example"; // String | Cluster ID

apiInstance.getClusterMetrics(clusterId).then(function(data) {
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

[**V4GetClusterMetricsResponse**](V4GetClusterMetricsResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

