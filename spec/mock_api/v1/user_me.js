var match = function match(match, params, headers) {
  if (match[1] === '/v1/user/me') {
    if (headers.Authorization == "giantswarm valid_token") {
      return {
        body: {
          "status_code": 10000,
          "status_text": "success",
          "data": {
            "username": "existing_user",
            "email": "exisitng_user@example.com"
          }
        }
      }
    } else {
      return {
        "unauthorized": true
      }
    }
  }
}
module.exports = match;