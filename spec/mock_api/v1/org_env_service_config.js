var match = function match(match, params, headers) {
  if (match[1] === '/v1/org/oponder/env/dev/service/known_service/config') {
    return {
      body: {
        "status_code": 10000,
        "status_text": "success",
        "data": {
          "name": "known_service",
          "components": {
            "webserver": {
              "image": "nginx",
              "ports": [
                80
              ],
              "domains": {
                "80/tcp": [
                  "simple-service-oponder.gigantic.io"
                ]
              }
            },
            "webserver/anotherserver": {
              "image": "nginx",
              "ports": [
                80
              ]
            },
            "webserver/yet/anotherserver": {
              "image": "nginx",
              "ports": [
                80
              ]
            }
          }
        }
      }
    }
  }
}
module.exports = match;