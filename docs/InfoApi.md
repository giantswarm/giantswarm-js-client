# giantswarm-v4.InfoApi

All URIs are relative to *https://api.giantswarm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInfo**](InfoApi.md#getInfo) | **GET** /v4/info/ | Get information on the installation


<a name="getInfo"></a>
# **getInfo**
> V4InfoResponse getInfo()

Get information on the installation

Returns a set of details on the installation. The output varies based on the provider used in the installation.  This information is useful for example when creating new cluster, to prevent creating clusters with more worker nodes than possible.  ### Example for an AWS-based installation  &#x60;&#x60;&#x60;json {   \&quot;general\&quot;: {     \&quot;installation_name\&quot;: \&quot;shire\&quot;,     \&quot;provider\&quot;: \&quot;aws\&quot;,     \&quot;datacenter\&quot;: \&quot;eu-central-1\&quot;   },   \&quot;workers\&quot;: {     \&quot;count_per_cluster\&quot;: {       \&quot;max\&quot;: 20,       \&quot;default\&quot;: 3     },     \&quot;instance_type\&quot;: {       \&quot;options\&quot;: [         \&quot;m3.medium\&quot;, \&quot;m3.large\&quot;, \&quot;m3.xlarge\&quot;       ],       \&quot;default\&quot;: \&quot;m3.large\&quot;     }   } } &#x60;&#x60;&#x60;  ### Example for a KVM-based installation  &#x60;&#x60;&#x60;json {   \&quot;general\&quot;: {     \&quot;installation_name\&quot;: \&quot;isengard\&quot;,     \&quot;provider\&quot;: \&quot;kvm\&quot;,     \&quot;datacenter\&quot;: \&quot;string\&quot;   },   \&quot;workers\&quot;: {     \&quot;count_per_cluster\&quot;: {       \&quot;max\&quot;: 8,       \&quot;default\&quot;: 3     },     \&quot;cpu_cores\&quot;: {       \&quot;min\&quot;: 1,       \&quot;max\&quot;: 4,       \&quot;default\&quot;: 2     },     \&quot;ram_size_gb\&quot;: {       \&quot;min\&quot;: 2,       \&quot;max\&quot;: 16,       \&quot;default\&quot;: 4     },     \&quot;storage_size_gb\&quot;: {       \&quot;max\&quot;: 250,       \&quot;default\&quot;: 40     } } &#x60;&#x60;&#x60; 

### Example
```javascript
import giantswarm-v4 from 'giantswarm-v4';
let defaultClient = giantswarm-v4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

let apiInstance = new giantswarm-v4.InfoApi();
apiInstance.getInfo().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**V4InfoResponse**](V4InfoResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

