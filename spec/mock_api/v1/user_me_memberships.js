var match = function match(match, params, headers) {
  if (match[1] === '/v1/user/me/memberships') {
    return {
      body: {
        "status_code": 10000,
        "status_text": "success",
        "data": [
          "oponder",
          "appmonitor",
          "giantswarm"
        ]
      }
    }
  }
}
module.exports = match;