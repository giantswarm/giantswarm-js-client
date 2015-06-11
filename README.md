# JavaScript Client for the Giant Swarm API

__Note:__ The code is in a very early stage. Expect many errors and future changes. Feel free to contribute by opening issues or pull requests.

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
}, function(err){
    console.log("Login error.", err);
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
