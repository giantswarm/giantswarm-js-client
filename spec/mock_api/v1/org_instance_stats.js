var match = function match(match, params, headers) {
  if (match[1] === '/v1/org/oponder/instance/xgu5504nah2b/stats') {
    return {
      body: {
        "status_code": 10000,
        "status_text": "success",
        "data": {
          "ComponentName": "",
          "Component": "webserver",
          "MemoryUsageMb": 7.390625,
          "MemoryCapacityMb": 512,
          "MemoryUsagePercent": 1.4434814453125,
          "CpuUsagePercent": 0
        }
      }
    }
  }
}
module.exports = match;