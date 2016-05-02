# Asynchronous JavaScript Client for the Giant Swarm API

__Note:__ The code is in a very early stage. Expect many errors and future changes. Feel free to contribute by opening issues or pull requests.

For details about the Giant Swarm API, please check out the [API documentation](https://docs.giantswarm.io/reference/api/).

All requests are wrapped in a promise. https://www.promisejs.org/
All promises resolve into an object that looks like this:
```
{
  result: ...,
  rawResponse: superAgentResponseObject
}
```

Requests that return a task also return another promise for waiting on that task
to complete.

If something goes wrong, then the promise will be rejected with the error, so
you should always pair your requests with a '.catch()' if you want to properly
handle errors.

## Usage

```
// Instantiating with username and password

GiantSwarm = require("./lib/client.js");
client = GiantSwarm();
client.authenticate({username: "your-username", password: "your-password"});

// Instantiating with token

GiantSwarm = require("./lib/client.js");
client = GiantSwarm({authToken: "a-valid-token-here"});

// Getting membership details

client.memberships().then(function(response){
  console.log(response.result); // [organization1, organization2, organization3]
}).catch(function(error){
  console.log(error)
});

// Starting a service

client.startService({
  organizationName: "an-organization",
  environmentName: "an-environment",
  serviceName: "a-service-name"
}).then(function(response){
  console.log("Starting Service...");
  return response.waitForTaskCompletion().then(function(){
    console.log("Done!");
  })
}).catch(function(error){
  console.log(error)
});

// Stopping a service

client.stopService({
  organizationName: "an-organization",
  environmentName: "an-environment",
  serviceName: "a-service-name"
}).then(function(response){
  console.log("Stopping Service...");
  response.waitForTaskCompletion().then(function(){
    console.log("Done!");
  })
}).catch(function(error){
  console.log(error)
});
```

See `lib/client.js` for more methods.

## Building

```
make build
```

The result will be in dist/js

## Running lint and tests

Make sure the [mock-api](https://github.com/giantswarm/mock-api) is up and running first!

```
make test
```
