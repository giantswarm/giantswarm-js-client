# GiantSwarmV4.OrganizationsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCredentials**](OrganizationsApi.md#addCredentials) | **POST** /v4/organizations/{organization_id}/credentials/ | Set credentials
[**addOrganization**](OrganizationsApi.md#addOrganization) | **PUT** /v4/organizations/{organization_id}/ | Create an organization
[**deleteOrganization**](OrganizationsApi.md#deleteOrganization) | **DELETE** /v4/organizations/{organization_id}/ | Delete an organization
[**getOrganization**](OrganizationsApi.md#getOrganization) | **GET** /v4/organizations/{organization_id}/ | Get organization details
[**getOrganizations**](OrganizationsApi.md#getOrganizations) | **GET** /v4/organizations/ | Get organizations
[**modifyOrganization**](OrganizationsApi.md#modifyOrganization) | **PATCH** /v4/organizations/{organization_id}/ | Modify organization


<a name="addCredentials"></a>
# **addCredentials**
> V4GenericResponse addCredentials(organizationId, body)

Set credentials

Add a set of credentials to the organization allowing the creation and operation of clusters within a cloud provider account/subscription.  The actual type of these credentials depends on the cloud provider the installation is running on. Currently, only AWS is supported, with support for Azure being planned for the near future.  Credentials in an organization are immutable. Each organization can only have one set of credentials.  Once credentials have been set for an organization, they are used for every new cluster that will be created for the organization.  ### Example request body for AWS  &#x60;&#x60;&#x60;json {   \&quot;provider\&quot;: \&quot;aws\&quot;,   \&quot;aws\&quot;: {     \&quot;roles\&quot;: {       \&quot;admin\&quot;: \&quot;arn:aws:iam::123456789012:role/GiantSwarmAdmin\&quot;,       \&quot;awsoperator\&quot;: \&quot;arn:aws:iam::123456789012:role/GiantSwarmAWSOperator\&quot;     }   } } &#x60;&#x60;&#x60; 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.OrganizationsApi();

var organizationId = "organizationId_example"; // String | An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$ 

var body = new GiantSwarmV4.V4AddCredentialsRequest(); // V4AddCredentialsRequest | 

apiInstance.addCredentials(organizationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$  | 
 **body** | [**V4AddCredentialsRequest**](V4AddCredentialsRequest.md)|  | 

### Return type

[**V4GenericResponse**](V4GenericResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOrganization"></a>
# **addOrganization**
> V4Organization addOrganization(organizationId, body)

Create an organization

This operation allows a user to create an organization. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.OrganizationsApi();

var organizationId = "organizationId_example"; // String | An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$ 

var body = new GiantSwarmV4.V4Organization(); // V4Organization | 

apiInstance.addOrganization(organizationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$  | 
 **body** | [**V4Organization**](V4Organization.md)|  | 

### Return type

[**V4Organization**](V4Organization.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOrganization"></a>
# **deleteOrganization**
> V4GenericResponse deleteOrganization(organizationId, )

Delete an organization

This operation allows a user to delete an organization that they are a member of. Admin users can delete any organization. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.OrganizationsApi();

var organizationId = "organizationId_example"; // String | An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$ 

apiInstance.deleteOrganization(organizationId, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$  | 

### Return type

[**V4GenericResponse**](V4GenericResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganization"></a>
# **getOrganization**
> V4Organization getOrganization(organizationId, )

Get organization details

This operation fetches organization details. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.OrganizationsApi();

var organizationId = "organizationId_example"; // String | An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$ 

apiInstance.getOrganization(organizationId, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$  | 

### Return type

[**V4Organization**](V4Organization.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizations"></a>
# **getOrganizations**
> [V4OrganizationListItem] getOrganizations()

Get organizations

This operation allows to fetch a list of organizations the user is a member of. In the case of an admin user, the result includes all existing organizations. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.OrganizationsApi();
apiInstance.getOrganizations().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[V4OrganizationListItem]**](V4OrganizationListItem.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyOrganization"></a>
# **modifyOrganization**
> V4Organization modifyOrganization(organizationId, body)

Modify organization

This operation allows you to modify an existing organization. You must be a member of the organization or an admin in order to use this endpoint.  The following attributes can be modified:  - &#x60;members&#x60;: By modifying the array of members, members can be added to or removed from the organization  The request body must conform with the [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386) standard. Requests have to be sent with the &#x60;Content-Type: application/merge-patch+json&#x60; header.  The full request must be valid before it will be executed, currently this means every member you attempt to add to the organization must actually exist in the system. If any member you attempt to add is invalid, the entire patch operation will fail, no members will be added or removed, and an error message will explain which members in your request are invalid. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.OrganizationsApi();

var organizationId = "organizationId_example"; // String | An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$ 

var body = new GiantSwarmV4.Body(); // Body | 

apiInstance.modifyOrganization(organizationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$  | 
 **body** | [**Body**](Body.md)|  | 

### Return type

[**V4Organization**](V4Organization.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

