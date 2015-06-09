# JavaScript Client for the Giant Swarm API

## Usage

```javascript

// override API endpoint for development
GiantSwarm.setApiEndpoint('http://192.168.59.103:8008');

GiantSwarm.ping(function(){
    console.log("All right.");
}, function(err) {
    console.log("Something isn't right", err);
});

GiantSwarm.authenticate("my-username", "my-password", function(){
    console.log("Login successful");
}, function(){
    console.log("Login error.");
});

GiantSwarm.applicationStatus("my-org", "my-env", "my-app", function(d){
    console.log(d);
}, function(err){
    console.log(err);
});
```

See `lib/client.js` for more methods.

## Development

```
npm install gulp
npm install
gulp
```
