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
// Instantiating

GiantSwarm = require("./lib/client.js");
client = GiantSwarm();
client.authenticate({username: "your-username", password: "your-password"});

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

## Development

```
npm install gulp
npm install
gulp
```

## Running tests

```
npm test
```

## Running lint

```
gulp eslint
```
