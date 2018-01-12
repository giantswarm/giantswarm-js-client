[![CircleCI](https://circleci.com/gh/giantswarm/giantswarm-js-client.svg?style=svg)](https://circleci.com/gh/giantswarm/giantswarm-js-client)

# JavaScript Client for the Giant Swarm API v4

This is an ES5 compatible, asynchronous JavaScript client library for the [Giant
Swarm API](https://docs.giantswarm.io/api/). It is generated using the official
OpenAPI spec using swagger-codegen.

This client only supports v4 of the Giant Swarm API. For support of older API
version methods, there is the `v2017` tag in this repository.

For details about the Giant Swarm API, please check out the
[API documentation](https://docs.giantswarm.io/api/).

## Getting Started

This example shows you how to instantiate a client, set credentials, and fetch
a list of clusters.

```javascript
var GiantSwarmV4 = require('giantswarm-v4');
var defaultClient = GiantSwarmV4.ApiClient.instance;

defaultClient.basePath = 'https://api.example.com';

var defaultClientAuth = defaultClient.authentications['AuthorizationHeaderToken'];

defaultClientAuth.apiKey = 'TOKEN';
defaultClientAuth.apiKeyPrefix = 'giantswarm';

var apiInstance = new GiantSwarmV4.ClustersApi();
apiInstance.getClusters().then(function(data) {
  console.log('API called successfully. Returned data:');
  console.log(data);
}, function(error) {
  console.error(error);
});
```

## JavaScript API Documentation

See the generated [DOCS](DOCS.md) file for API documentation.
