# GiantSwarm.UsersApi

All URIs are relative to *https://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UsersApi.md#createUser) | **PUT** /v4/users/{email}/ | Create user
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /v4/users/{email}/ | Delete user
[**getCurrentUser**](UsersApi.md#getCurrentUser) | **GET** /v4/user/ | Get current user
[**getUser**](UsersApi.md#getUser) | **GET** /v4/users/{email}/ | Get user
[**getUsers**](UsersApi.md#getUsers) | **GET** /v4/users/ | Get users
[**modifyPassword**](UsersApi.md#modifyPassword) | **POST** /v4/users/{email}/password/ | Modify password
[**modifyUser**](UsersApi.md#modifyUser) | **PATCH** /v4/users/{email}/ | Modify user



## createUser

> V4GenericResponse createUser(authorization, email, v4CreateUserRequest, opts)

Create user

Creates a users in the system. Currently this endpoint is only available to users with admin permissions. 

### Example

```javascript
var GiantSwarm = require('giantswarm');

var apiInstance = new GiantSwarm.UsersApi();
var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 
var email = "email_example"; // String | The user's email address
var v4CreateUserRequest = new GiantSwarm.V4CreateUserRequest(); // V4CreateUserRequest | User account details
var opts = {
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.createUser(authorization, email, v4CreateUserRequest, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| As described in the [authentication](#section/Authentication) section  | 
 **email** | **String**| The user&#39;s email address | 
 **v4CreateUserRequest** | [**V4CreateUserRequest**](V4CreateUserRequest.md)| User account details | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V4GenericResponse**](V4GenericResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUser

> V4GenericResponse deleteUser(authorization, email, opts)

Delete user

Deletes a users in the system. Currently this endpoint is only available to users with admin permissions. 

### Example

```javascript
var GiantSwarm = require('giantswarm');

var apiInstance = new GiantSwarm.UsersApi();
var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 
var email = "email_example"; // String | The user's email address
var opts = {
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.deleteUser(authorization, email, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| As described in the [authentication](#section/Authentication) section  | 
 **email** | **String**| The user&#39;s email address | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V4GenericResponse**](V4GenericResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCurrentUser

> V4UserListItem getCurrentUser(authorization, opts)

Get current user

Returns details about the currently authenticated user 

### Example

```javascript
var GiantSwarm = require('giantswarm');

var apiInstance = new GiantSwarm.UsersApi();
var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 
var opts = {
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getCurrentUser(authorization, opts).then(function(data) {
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

[**V4UserListItem**](V4UserListItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUser

> V4UserListItem getUser(authorization, email, opts)

Get user

Returns details about a specific user 

### Example

```javascript
var GiantSwarm = require('giantswarm');

var apiInstance = new GiantSwarm.UsersApi();
var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 
var email = "email_example"; // String | The user's email address
var opts = {
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getUser(authorization, email, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| As described in the [authentication](#section/Authentication) section  | 
 **email** | **String**| The user&#39;s email address | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V4UserListItem**](V4UserListItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsers

> [V4UserListItem] getUsers(authorization, opts)

Get users

Returns a list of all users in the system. Currently this endpoint is only available to users with admin permissions. 

### Example

```javascript
var GiantSwarm = require('giantswarm');

var apiInstance = new GiantSwarm.UsersApi();
var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 
var opts = {
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getUsers(authorization, opts).then(function(data) {
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

[**[V4UserListItem]**](V4UserListItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyPassword

> V4GenericResponse modifyPassword(authorization, email, v4ModifyUserPasswordRequest, opts)

Modify password

This operation allows you to change your password. Admins are able to change passwords of other users. 

### Example

```javascript
var GiantSwarm = require('giantswarm');

var apiInstance = new GiantSwarm.UsersApi();
var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 
var email = "email_example"; // String | The user's email address
var v4ModifyUserPasswordRequest = new GiantSwarm.V4ModifyUserPasswordRequest(); // V4ModifyUserPasswordRequest | Modify password request
var opts = {
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.modifyPassword(authorization, email, v4ModifyUserPasswordRequest, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| As described in the [authentication](#section/Authentication) section  | 
 **email** | **String**| The user&#39;s email address | 
 **v4ModifyUserPasswordRequest** | [**V4ModifyUserPasswordRequest**](V4ModifyUserPasswordRequest.md)| Modify password request | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V4GenericResponse**](V4GenericResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## modifyUser

> V4UserListItem modifyUser(authorization, email, v4ModifyUserRequest, opts)

Modify user

This operation allows you to change details of a given user. Only administrators can edit accounts of other users. 

### Example

```javascript
var GiantSwarm = require('giantswarm');

var apiInstance = new GiantSwarm.UsersApi();
var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 
var email = "email_example"; // String | The user's email address
var v4ModifyUserRequest = new GiantSwarm.V4ModifyUserRequest(); // V4ModifyUserRequest | User account details
var opts = {
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.modifyUser(authorization, email, v4ModifyUserRequest, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| As described in the [authentication](#section/Authentication) section  | 
 **email** | **String**| The user&#39;s email address | 
 **v4ModifyUserRequest** | [**V4ModifyUserRequest**](V4ModifyUserRequest.md)| User account details | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V4UserListItem**](V4UserListItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

