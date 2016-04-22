var match = function match(match, params, headers) {
  if (match[1] === '/v2/org/oponder/env/dev/task/a-valid-task-id/waitfor') {
    function sleepFor( sleepDuration ){
      var now = new Date().getTime();
      while(new Date().getTime() < now + sleepDuration){ /* do nothing */ }
    }

    sleepFor(2000);

    return {
      body: {
        "status_code": 10000,
        "status_text": "success",
        "data": {
          "id": "0gfpijs1ghln3zdj",
          "description": "Start component redis",
          "next_id": "1owcueok4z0th1xu",
          "child_task_ids": [
            "1owcueok4z0th1xu"
          ],
          "action": "start",
          "created_at": "2015-10-09T08:17:28.651621247Z",
          "finished_at": "2015-10-09T08:17:40.604687774Z",
          "metadata": {
            "org": "bant",
            "env": "prod",
            "service": "myservice"
          },
          "status": "finished"
        }
      }
    }
  }
}
module.exports = match;