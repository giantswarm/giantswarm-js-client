var match = function match(match, params, headers) {
  if (match[1] === '/v1/org/oponder/env/dev/service/known_service/stop') {
    return {
      body: {
        "status_code": 10005,
        "status_text": "resource stopped"
      }
    }
  }
}
module.exports = match;