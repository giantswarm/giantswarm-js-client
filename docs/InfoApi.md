# GiantSwarm.InfoApi

All URIs are relative to *https://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInfo**](InfoApi.md#getInfo) | **GET** /v4/info/ | Get information on the installation



## getInfo

> V4InfoResponse getInfo(authorization, opts)

Get information on the installation

Returns a set of details on the installation. The output varies based on the provider used in the installation.  This information is useful for example when creating new cluster, to prevent creating clusters with more worker nodes than possible.  ### Example for an AWS-based installation  &#x60;&#x60;&#x60;json {   \&quot;general\&quot;: {     \&quot;installation_name\&quot;: \&quot;shire\&quot;,     \&quot;provider\&quot;: \&quot;aws\&quot;,     \&quot;datacenter\&quot;: \&quot;eu-central-1\&quot;,     \&quot;availability_zones\&quot;: {       \&quot;max\&quot;: 3,       \&quot;default\&quot;: 1,     }   },   \&quot;stats\&quot;: {     \&quot;cluster_creation_duration\&quot;: {       \&quot;median\&quot;: 750,       \&quot;p25\&quot;: 700,       \&quot;p75\&quot;: 800     }   },   \&quot;workers\&quot;: {     \&quot;count_per_cluster\&quot;: {       \&quot;max\&quot;: null,       \&quot;default\&quot;: 3     },     \&quot;instance_type\&quot;: {       \&quot;options\&quot;: [         \&quot;m3.medium\&quot;, \&quot;m3.large\&quot;, \&quot;m3.xlarge\&quot;       ],       \&quot;default\&quot;: \&quot;m3.large\&quot;     }   } } &#x60;&#x60;&#x60;  ### Example for a KVM-based installation  &#x60;&#x60;&#x60;json {   \&quot;general\&quot;: {     \&quot;installation_name\&quot;: \&quot;isengard\&quot;,     \&quot;provider\&quot;: \&quot;kvm\&quot;,     \&quot;datacenter\&quot;: \&quot;string\&quot;,     \&quot;availability_zones\&quot;: {       \&quot;max\&quot;: 1,       \&quot;default\&quot;: 1,     }   },   \&quot;stats\&quot;: {     \&quot;cluster_creation_duration\&quot;: {       \&quot;median\&quot;: 750,       \&quot;p25\&quot;: 700,       \&quot;p75\&quot;: 800     }   },   \&quot;workers\&quot;: {     \&quot;count_per_cluster\&quot;: {       \&quot;max\&quot;: 8,       \&quot;default\&quot;: 3     },   } } &#x60;&#x60;&#x60; 

### Example

```javascript
var GiantSwarm = require('giantswarm');

var apiInstance = new GiantSwarm.InfoApi();
var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 
var opts = {
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getInfo(authorization, opts).then(function(data) {
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

[**V4InfoResponse**](V4InfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

