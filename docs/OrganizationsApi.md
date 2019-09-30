# GiantSwarm.OrganizationsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCredentials**](OrganizationsApi.md#addCredentials) | **POST** /v4/organizations/{organization_id}/credentials/ | Set credentials
[**addOrganization**](OrganizationsApi.md#addOrganization) | **PUT** /v4/organizations/{organization_id}/ | Create an organization
[**deleteOrganization**](OrganizationsApi.md#deleteOrganization) | **DELETE** /v4/organizations/{organization_id}/ | Delete an organization
[**getCredential**](OrganizationsApi.md#getCredential) | **GET** /v4/organizations/{organization_id}/credentials/{credential_id}/ | Get credential details
[**getCredentials**](OrganizationsApi.md#getCredentials) | **GET** /v4/organizations/{organization_id}/credentials/ | Get credentials
[**getOrganization**](OrganizationsApi.md#getOrganization) | **GET** /v4/organizations/{organization_id}/ | Get organization details
[**getOrganizations**](OrganizationsApi.md#getOrganizations) | **GET** /v4/organizations/ | Get organizations
[**modifyOrganization**](OrganizationsApi.md#modifyOrganization) | **PATCH** /v4/organizations/{organization_id}/ | Modify organization


<a name="addCredentials"></a>
# **addCredentials**
> V4GenericResponse addCredentials(organizationId, body, opts)

Set credentials

Add a set of credentials to the organization allowing the creation and operation of clusters within a cloud provider account/subscription.  The actual type of these credentials depends on the cloud provider the installation is running on. AWS and Azure are currently supported.  Credentials in an organization are immutable. Each organization can only have one set of credentials.  Once credentials have been set for an organization, they are used for every new cluster that will be created for the organization.  ### Example request body for AWS  &#x60;&#x60;&#x60;json {   \&quot;provider\&quot;: \&quot;aws\&quot;,   \&quot;aws\&quot;: {     \&quot;roles\&quot;: {       \&quot;admin\&quot;: \&quot;arn:aws:iam::123456789012:role/GiantSwarmAdmin\&quot;,       \&quot;awsoperator\&quot;: \&quot;arn:aws:iam::123456789012:role/GiantSwarmAWSOperator\&quot;     }   } } &#x60;&#x60;&#x60;  ### Example request body for Azure  &#x60;&#x60;&#x60;json {   \&quot;provider\&quot;: \&quot;azure\&quot;,   \&quot;azure\&quot;: {     \&quot;credential\&quot;: {       \&quot;client_id\&quot;: \&quot;c93bf55e-5bf7-4966-ad2b-e6f6e7721d50\&quot;,       \&quot;secret_key\&quot;: \&quot;720e38f7-3af4-463c-9313-abcdf2ead612\&quot;,       \&quot;subscription_id\&quot;: \&quot;b388b7c7-4479-4040-9ac5-1e13edd6b1cd\&quot;,       \&quot;tenant_id\&quot;: \&quot;3dd2e94a-92ba-434c-99be-32bb65864a99\&quot;     }   } } &#x60;&#x60;&#x60; 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.OrganizationsApi();

var organizationId = "organizationId_example"; // String | An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$ 

var body = new GiantSwarm.V4AddCredentialsRequest(); // V4AddCredentialsRequest | 

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.addCredentials(organizationId, body, opts).then(function(data) {
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

<a name="addOrganization"></a>
# **addOrganization**
> V4Organization addOrganization(organizationId, body, opts)

Create an organization

This operation allows a user to create an organization. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.OrganizationsApi();

var organizationId = "organizationId_example"; // String | An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$ 

var body = new GiantSwarm.V4Organization(); // V4Organization | 

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.addOrganization(organizationId, body, opts).then(function(data) {
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
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V4Organization**](V4Organization.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOrganization"></a>
# **deleteOrganization**
> V4GenericResponse deleteOrganization(organizationId, , opts)

Delete an organization

This operation allows a user to delete an organization that they are a member of. Admin users can delete any organization. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.OrganizationsApi();

var organizationId = "organizationId_example"; // String | An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$ 

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.deleteOrganization(organizationId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$  | 
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

<a name="getCredential"></a>
# **getCredential**
> V4GetCredentialResponse getCredential(organizationId, credentialId, opts)

Get credential details

Returns details for a particular set of credentials, identified by its ID. The returned data does not contain any secrets (i. e. passphrase, secret key). For more information on credentials, see [Set credentials](#operation/addCredentials).  ### Example response body for AWS  &#x60;&#x60;&#x60;json {   \&quot;id\&quot;: \&quot;a1b2c3\&quot;,   \&quot;provider\&quot;: \&quot;aws\&quot;,   \&quot;aws\&quot;: {     \&quot;roles\&quot;: {       \&quot;admin\&quot;: \&quot;arn:aws:iam::123456789012:role/GiantSwarmAdmin\&quot;,       \&quot;awsoperator\&quot;: \&quot;arn:aws:iam::123456789012:role/GiantSwarmAWSOperator\&quot;     }   } } &#x60;&#x60;&#x60;  ### Example response body for Azure  &#x60;&#x60;&#x60;json {   \&quot;id\&quot;: \&quot;a1b2c3\&quot;,   \&quot;provider\&quot;: \&quot;azure\&quot;,   \&quot;azure\&quot;: {     \&quot;credential\&quot;: {       \&quot;client_id\&quot;: \&quot;c93bf55e-5bf7-4966-ad2b-e6f6e7721d50\&quot;,       \&quot;subscription_id\&quot;: \&quot;b388b7c7-4479-4040-9ac5-1e13edd6b1cd\&quot;,       \&quot;tenant_id\&quot;: \&quot;3dd2e94a-92ba-434c-99be-32bb65864a99\&quot;     }   } } &#x60;&#x60;&#x60; 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.OrganizationsApi();

var organizationId = "organizationId_example"; // String | An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$ 

var credentialId = "credentialId_example"; // String | Unique ID of a credential set

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getCredential(organizationId, credentialId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$  | 
 **credentialId** | **String**| Unique ID of a credential set | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V4GetCredentialResponse**](V4GetCredentialResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCredentials"></a>
# **getCredentials**
> V4GetCredentialsResponse getCredentials(organizationId, , opts)

Get credentials

Returns credentials for an organization, if available. For more information on credentials, see [Set credentials](#operation/addCredentials).  Here is another paragraph.  ### Example response body for AWS  &#x60;&#x60;&#x60;json [   {     \&quot;id\&quot;: \&quot;a1b2c3\&quot;,     \&quot;provider\&quot;: \&quot;aws\&quot;,     \&quot;aws\&quot;: {       \&quot;roles\&quot;: {         \&quot;admin\&quot;: \&quot;arn:aws:iam::123456789012:role/GiantSwarmAdmin\&quot;,         \&quot;awsoperator\&quot;: \&quot;arn:aws:iam::123456789012:role/GiantSwarmAWSOperator\&quot;       }     }   } ] &#x60;&#x60;&#x60;  ### Example response body for Azure  &#x60;&#x60;&#x60;json [   {     \&quot;id\&quot;: \&quot;a1b2c3\&quot;,     \&quot;provider\&quot;: \&quot;azure\&quot;,     \&quot;azure\&quot;: {       \&quot;credential\&quot;: {         \&quot;client_id\&quot;: \&quot;c93bf55e-5bf7-4966-ad2b-e6f6e7721d50\&quot;,         \&quot;subscription_id\&quot;: \&quot;b388b7c7-4479-4040-9ac5-1e13edd6b1cd\&quot;,         \&quot;tenant_id\&quot;: \&quot;3dd2e94a-92ba-434c-99be-32bb65864a99\&quot;       }     }   } ] &#x60;&#x60;&#x60; 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.OrganizationsApi();

var organizationId = "organizationId_example"; // String | An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$ 

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getCredentials(organizationId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$  | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V4GetCredentialsResponse**](V4GetCredentialsResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganization"></a>
# **getOrganization**
> V4Organization getOrganization(organizationId, , opts)

Get organization details

This operation fetches organization details. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.OrganizationsApi();

var organizationId = "organizationId_example"; // String | An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$ 

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getOrganization(organizationId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$  | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V4Organization**](V4Organization.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizations"></a>
# **getOrganizations**
> [V4OrganizationListItem] getOrganizations(opts)

Get organizations

This operation allows to fetch a list of organizations the user is a member of. In the case of an admin user, the result includes all existing organizations. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.OrganizationsApi();

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getOrganizations(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**[V4OrganizationListItem]**](V4OrganizationListItem.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyOrganization"></a>
# **modifyOrganization**
> V4Organization modifyOrganization(organizationId, body, opts)

Modify organization

This operation allows you to modify an existing organization. You must be a member of the organization or an admin in order to use this endpoint.  The following attributes can be modified:  - &#x60;members&#x60;: By modifying the array of members, members can be added to or removed from the organization  The request body must conform with the [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386) standard. Requests have to be sent with the &#x60;Content-Type: application/merge-patch+json&#x60; header.  The full request must be valid before it will be executed, currently this means every member you attempt to add to the organization must actually exist in the system. If any member you attempt to add is invalid, the entire patch operation will fail, no members will be added or removed, and an error message will explain which members in your request are invalid. 

### Example
```javascript
var GiantSwarm = require('giantswarm-');
var defaultClient = GiantSwarm.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarm.OrganizationsApi();

var organizationId = "organizationId_example"; // String | An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$ 

var body = new GiantSwarm.Body(); // Body | 

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.modifyOrganization(organizationId, body, opts).then(function(data) {
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
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V4Organization**](V4Organization.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

