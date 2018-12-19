# GiantSwarmV4.KeyPairsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addKeyPair**](KeyPairsApi.md#addKeyPair) | **POST** /v4/clusters/{cluster_id}/key-pairs/ | Create key pair
[**getKeyPairs**](KeyPairsApi.md#getKeyPairs) | **GET** /v4/clusters/{cluster_id}/key-pairs/ | Get key pairs


<a name="addKeyPair"></a>
# **addKeyPair**
> V4AddKeyPairResponse addKeyPair(authorizationclusterIdbody, opts)

Create key pair

This operation allows to create a new key pair for accessing a specific cluster.  A key pair consists of an unencrypted private RSA key and an X.509 certificate. In addition, when obtaining a key pair for a cluster, the cluster&#39;s certificate authority file (CA certificate) is delivered, which is required by TLS clients to establish trust to the cluster.  In addition to the credentials itself, a key pair has some metadata like a unique ID, a creation timestamp and a free text &#x60;description&#x60; that you can use at will, for example to note for whom a key pair has been issued.  ### Customizing the certificate&#39;s subject for K8s RBAC  It is possible to set the Common Name and Organization fields of the generated certificate&#39;s subject.  - &#x60;cn_prefix&#x60;: The certificate&#39;s common name uses this format: &#x60;&lt;cn_prefix&gt;.user.&lt;clusterdomain&gt;&#x60;.    &#x60;clusterdomain&#x60; is specific to your cluster and is not editable.    The &#x60;cn_prefix&#x60; however is editable. When left blank it will default   to the email address of the Giant Swarm user that is performing the   create key pair request.    The common name is used as the username for requests to the Kubernetes API. This allows you   to set up role-based access controls.   - &#x60;certificate_organizations&#x60;: This will set the certificate&#39;s &#x60;organization&#x60; fields. Use a comma separated list of values.   The Kubernetes API will use these values as group memberships.  __Note:__ The actual credentials coming with the key pair (key, certificate) can only be accessed once, as the result of the &#x60;POST&#x60; request that triggers their creation. This restriction exists to minimize the risk of credentials being leaked. If you fail to capture the credentials upon creation, you&#39;ll have to repeat the creation request. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.KeyPairsApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var clusterId = "clusterId_example"; // String | Cluster ID

var body = new GiantSwarmV4.V4AddKeyPairRequest(); // V4AddKeyPairRequest | While the `ttl_hours` attribute is optional and will be set to a default value when omitted, the `description` is mandatory. 

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.addKeyPair(authorizationclusterIdbody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| As described in the [authentication](#section/Authentication) section  | 
 **clusterId** | **String**| Cluster ID | 
 **body** | [**V4AddKeyPairRequest**](V4AddKeyPairRequest.md)| While the &#x60;ttl_hours&#x60; attribute is optional and will be set to a default value when omitted, the &#x60;description&#x60; is mandatory.  | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V4AddKeyPairResponse**](V4AddKeyPairResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getKeyPairs"></a>
# **getKeyPairs**
> V4GetKeyPairsResponse getKeyPairs(authorizationclusterId, opts)

Get key pairs

Returns a list of information on all key pairs of a cluster as an array.  The individual array items contain metadata on the key pairs, but neither the key nor the certificate. These can only be obtained upon creation, using the [addKeypair](#operation/addKeyPair) operation. 

### Example
```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

// Configure API key authorization: AuthorizationHeaderToken
var AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';

var apiInstance = new GiantSwarmV4.KeyPairsApi();

var authorization = "authorization_example"; // String | As described in the [authentication](#section/Authentication) section 

var clusterId = "clusterId_example"; // String | Cluster ID

var opts = { 
  'xRequestID': "xRequestID_example", // String | A randomly generated key that can be used to track a request throughout services of Giant Swarm. 
  'xGiantSwarmActivity': "xGiantSwarmActivity_example", // String | Name of an activity to track, like \"list-clusters\". This allows to analyze several API requests sent in context and gives an idea on the purpose. 
  'xGiantSwarmCmdLine': "xGiantSwarmCmdLine_example" // String | If activity has been issued by a CLI, this header can contain the command line 
};
apiInstance.getKeyPairs(authorizationclusterId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| As described in the [authentication](#section/Authentication) section  | 
 **clusterId** | **String**| Cluster ID | 
 **xRequestID** | **String**| A randomly generated key that can be used to track a request throughout services of Giant Swarm.  | [optional] 
 **xGiantSwarmActivity** | **String**| Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.  | [optional] 
 **xGiantSwarmCmdLine** | **String**| If activity has been issued by a CLI, this header can contain the command line  | [optional] 

### Return type

[**V4GetKeyPairsResponse**](V4GetKeyPairsResponse.md)

### Authorization

[AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

