var match = function match(match, params, headers) {
  if (match[1] === '/v2/org/oponder/env/dev/service/known_service/stop') {
    return {
      body: {
        "status_code": 10000,
        "status_text": "success",
        "data":{
          "id": "dpaidf0t7r9vegqa",
          "description": "Stop service oponder/dev/known_service",
          "next_id": "79m3ombhd9ehuuf9",
          "child_task_ids": [
            "79m3ombhd9ehuuf9",
            "nl40qpatrxk0ofy4"
          ],
          "action": "stop",
          "created_at": "2015-10-09T08:09:26.17216939Z",
          "finished_at": "0001-01-01T00:00:00Z",
          "metadata": {
            "org": "oponder",
            "env": "dev",
            "service": "known_service"
          },
          "status":"pending"
        }
      }
    }
  }
}
module.exports = match;