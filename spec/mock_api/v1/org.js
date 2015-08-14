var match = function match(match, params, headers) {
  if (match[1] === '/v1/org/oponder') {
    return {
      body: {
        "status_code": 10000,
        "status_text": "success",
        "data": {
          "id": "oponder",
          "default_cluster": "alpha.private.giantswarm.io",
          "members": [
            "oponder"
          ]
        }
      }
    }
  }
}
module.exports = match;