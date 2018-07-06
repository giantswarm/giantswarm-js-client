# GiantSwarmV4.AuthTokensApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAuthToken**](AuthTokensApi.md#createAuthToken) | **POST** /v4/auth-tokens/ | Create Auth Token (Login)
[**deleteAuthToken**](AuthTokensApi.md#deleteAuthToken) | **DELETE** /v4/auth-tokens/ | Delete Auth Token (Logout)


<a name="createAuthToken"></a>
# **createAuthToken**
> V4CreateAuthTokenResponse createAuthToken(body)

Create Auth Token (Login)

Creates a Auth Token for a given user. Must authenticate with email and password. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.AuthTokensApi();

var body = new GiantSwarmV4.V4CreateAuthTokenRequest(); // V4CreateAuthTokenRequest | Create Auth Token Request

apiInstance.createAuthToken(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V4CreateAuthTokenRequest**](V4CreateAuthTokenRequest.md)| Create Auth Token Request | 

### Return type

[**V4CreateAuthTokenResponse**](V4CreateAuthTokenResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAuthToken"></a>
# **deleteAuthToken**
> V4GenericResponse deleteAuthToken(authorization)

Delete Auth Token (Logout)

Deletes the authentication token provided in the Authorization header. This effectively logs you out. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.AuthTokensApi();

var authorization = "authorization_example"; // String | giantswarm AUTH_TOKEN_HERE

apiInstance.deleteAuthToken(authorization).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| giantswarm AUTH_TOKEN_HERE | 

### Return type

[**V4GenericResponse**](V4GenericResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

