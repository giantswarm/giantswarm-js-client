# JavaScript Client for the Giant Swarm API

__Note:__ The code is in a very early stage. Expect many errors and future changes. Feel free to contribute by opening issues or pull requests.

For details about the Giant Swarm API, please check out the [API documentation](https://docs.giantswarm.io/reference/api/).

## Usage

```javascript
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

// stream log messages

var messageCount = 0;
var socket = null;

function socketCreateCallback(mySocket) {
  socket = mySocket;
}

function messageCallback(msg) {
  console.log(msg);
  messageCount++;
  if (messageCount >= 3) {
    console.log("Closing after 3 messages...");
    socket.close();
  }
}

function errorCallback(err) {
  console.log("Error:", err);
}

var organizationName = 'my-org';
var instanceIds = ['4lyqvwvqhg0m'];

GiantSwarm.streamLogs(organizationName, instanceIds, messageCallback, socketCreateCallback, errorCallback);
```

See `lib/client.js` for more methods.

## Development

```
npm install gulp
npm install
gulp
```
