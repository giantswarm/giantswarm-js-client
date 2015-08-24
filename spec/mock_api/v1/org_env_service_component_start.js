var match = function match(match, params, headers) {
  if (match[1] === '/v1/org/oponder/env/dev/service/known_service/component/start') {
    params = JSON.parse(params);
    if(params.component === "known_component") {
      return {
        body: {
          "status_code": 10004,
          "status_text": "resource started"
        }
      }
    } else {
      throw new Error(400);
    }
  }
}
module.exports = match;