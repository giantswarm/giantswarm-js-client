# GiantSwarmV4.ReleasesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getReleases**](ReleasesApi.md#getReleases) | **GET** /v4/releases/ | Get releases


<a name="getReleases"></a>
# **getReleases**
> [V4ReleaseListItem] getReleases()

Get releases

Lists all releases available for new clusters or for upgrading existing clusters. Might also serve as an archive to obtain details on older releases. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.ReleasesApi();
apiInstance.getReleases().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[V4ReleaseListItem]**](V4ReleaseListItem.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

