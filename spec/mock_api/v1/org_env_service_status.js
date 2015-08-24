var match = function match(match, params, headers) {
  if (match[1] === '/v1/org/oponder/env/dev/service/known_service/status') {
    return {
      body: {
        "status_code": 10000,
        "status_text": "success",
        "data": {
          "name": "known_service",
          "version": "V2GiantSwarm",
          "status": "up",
          "components": [
            {
              "name": "webserver",
              "min": 1,
              "max": 10,
              "status": "up",
              "instances": [
                {
                  "id": "qub9nwzu234u",
                  "status": "up",
                  "create_date": "2015-08-13T08:46:46.827236888Z",
                  "image": "nginx:latest",
                  "image_hash": "6886fb5a9b8d73b12d842bab8f9a6941c36094c2974abddb685d54c9d99e37da"
                }
              ]
            },
            {
              "name": "webserver/anotherserver",
              "min": 1,
              "max": 10,
              "status": "up",
              "instances": [
                {
                  "id": "5spvnhwvsujr",
                  "status": "up",
                  "create_date": "2015-08-13T08:46:52.820381111Z",
                  "image": "nginx:latest",
                  "image_hash": "6886fb5a9b8d73b12d842bab8f9a6941c36094c2974abddb685d54c9d99e37da"
                }
              ]
            },
            {
              "name": "webserver/yet/anotherserver",
              "min": 1,
              "max": 10,
              "status": "up",
              "instances": [
                {
                  "id": "wpney0fce4kf",
                  "status": "up",
                  "create_date": "2015-08-13T08:46:58.828184182Z",
                  "image": "nginx:latest",
                  "image_hash": "6886fb5a9b8d73b12d842bab8f9a6941c36094c2974abddb685d54c9d99e37da"
                }
              ]
            }
          ]
        }
      }
    }
  }
}
module.exports = match;