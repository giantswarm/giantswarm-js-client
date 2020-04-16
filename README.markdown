[![CircleCI](https://circleci.com/gh/giantswarm/giantswarm-js-client.svg?style=shield)](https://circleci.com/gh/giantswarm/giantswarm-js-client)

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

## Generating code with types

Make sure your master branch is up to date (`git pull origin master`)

- `git checkout -b my-feature-branch`
- `git reset --hard 98fd000` # last generated commit
- Do steps outlined in [Generating Code and a new version](#generating-code-and-a-new-version)
- `sudo chown -R $(id -u):$(id -g) .`
- Commit your generated changes
- `git merge -X theirs master` # Re-apply master commits. Use chown when encountering permission errors
- `yarn install` # do this here
- Change `"useES6": false` to `"useES6": true` in `swagger-codegen-conf.json`
- Do steps outlined in [Generating Code and a new version](#generating-code-and-a-new-version) again
- `rm -rf @types` # Delete existing types `@types` folder
- `yarn tsc -p tsconfig.json` # Generate @types folder
- `git checkout $(git ls-files -m @types)` # Only keep added files
- work from here to fix types


## Generating Code and a new version

The `Makefile` provides all the tooling required to generate new code, docs
and tests whenever the API spec has changed. Here is the recipe:

- Create a feature branch
- Change the branch in makefile if needed
- In case the `api-spec` folder exists, remove it, so that the latest spec gets
   fetched: `make clean`
- Run `make generate`.
- Review the code changes. Check whether they add/change/remove what you expect.
- If necessary, start a change process on the [API spec](https://github.com/giantswarm/api-spec/) repo. You can use the local copy in the `api-spec` folder to try out things.
- Ideally test the changes in a [happa](https://github.com/giantswarm/happa/) branch.
