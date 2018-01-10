# GiantSwarmV4.ReleasesApi

All URIs are relative to *https://api.giantswarm.io*

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
import GiantSwarmV4 from 'GiantSwarmV4';

let apiInstance = new GiantSwarmV4.ReleasesApi();

apiInstance.getReleases((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[V4ReleaseListItem]**](V4ReleaseListItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

