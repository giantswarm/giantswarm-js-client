var match = function match(match, params, headers) {
  if (match[1] === '/v1/org/oponder/stream/logs') {
    return {
      body: {
        status_code: 10000,
        data: "websocket_token"
      }
    }
  }
}
module.exports = match;