var stampit = require('stampit');

if (typeof WebSocket === 'undefined') {
  var WebSocket = require('ws');
}

module.exports = stampit().
  methods({
    streamLogs: function(params) {
      var self = this;
      var url = "/v1/org/" + params.organizationName + "/stream/logs";
      return this.postRequest(this.apiEndpoint + url).
      then(function(response) {
        var token = response.body.data;
        var wsUrl = this.websocketEndpoint() + url + '?p=' + token;
        var socket = new WebSocket(wsUrl);

        return {
          result: response.body.data,
          websocket: socket,
          rawResponse: response
        }
      }.bind(this));
    }
  });