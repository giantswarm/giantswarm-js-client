var match = function match(match, params, headers) {
  if (match[1] === '/v1/org/oponder/env/dev/service/deleting_service/status') {
    return {
      body: {
        "status_code": 10000,
        "status_text": "success",
        "data": {
          "name": "deleting_service",
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
                  "status": "deleting",
                  "create_date": "0001-01-01T00:00:00Z",
                  "image": "nginx:latest",
                  "image_hash": "6886fb5a9b8d73b12d842bab8f9a6941c36094c2974abddb685d54c9d99e37da"
                },
                {
                  "id": "qub9nwzu2343",
                  "status": "deleting",
                  "create_date": "0001-01-01T00:00:00Z",
                  "image": "nginx:latest",
                  "image_hash": "6886fb5a9b8d73b12d842bab8f9a6941c36094c2974abddb685d54c9d99e37da"
                },
              ]
            }
          ]
        }
      }
    }
  }
}
module.exports = match;