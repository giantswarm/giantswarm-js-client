var match = function match(match, params, headers) {
  if (match[1] === '/v1/org/oponder/instance/xgu5504nah2b/logs?t=10') {
    return {
      text: "Line 1\nLine 2\nLine 3\nLine 4\nLine 5\nLine 6\nLine 7\nLine 8\nLine 9\nLine 10"
    }
  }

  if (match[1] === '/v1/org/oponder/instance/xgu5504nah2b/logs?t=1') {
    return {
      text: "Line 1\nLine 2"
    }
  }

  if (match[1] === '/v1/org/oponder/instance/instanceWithNoLogs/logs?t=10') {
    return {
      text: ""
    }
  }
}
module.exports = match;