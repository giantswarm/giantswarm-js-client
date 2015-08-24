var match = function match(match, params, headers) {
  if (match[1] === '/v1/org/oponder/env/dev/service/known_service/start') {
    return {
      body: {
        "status_code": 10004,
        "status_text": "resource started"
      }
    }
  }
}
module.exports = match;