# GiantSwarmV4.UsersApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UsersApi.md#createUser) | **PUT** /v4/users/{email}/ | Create user
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /v4/users/{email}/ | Delete user
[**getUsers**](UsersApi.md#getUsers) | **GET** /v4/users/ | Get users


<a name="createUser"></a>
# **createUser**
> V4GenericResponse createUser(emailbody)

Create user

Creates a users in the system. Currently this endpoint is only available to users with admin permissions. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.UsersApi();

var email = "email_example"; // String | The user's email address

var body = new GiantSwarmV4.V4CreateUserRequest(); // V4CreateUserRequest | User account details

apiInstance.createUser(emailbody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| The user&#39;s email address | 
 **body** | [**V4CreateUserRequest**](V4CreateUserRequest.md)| User account details | 

### Return type

[**V4GenericResponse**](V4GenericResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUser"></a>
# **deleteUser**
> V4GenericResponse deleteUser(email)

Delete user

Deletes a users in the system. Currently this endpoint is only available to users with admin permissions. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.UsersApi();

var email = "email_example"; // String | The user's email address

apiInstance.deleteUser(email).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| The user&#39;s email address | 

### Return type

[**V4GenericResponse**](V4GenericResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> [V4UserListItem] getUsers()

Get users

Returns a list of all users in the system. Currently this endpoint is only available to users with admin permissions. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.UsersApi();
apiInstance.getUsers().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[V4UserListItem]**](V4UserListItem.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

