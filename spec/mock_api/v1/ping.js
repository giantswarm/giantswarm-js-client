var match = function match(match, params, headers) {
  if (match[1] === '/v1/ping') {
    return {text: '"OK"'};
  }
}

module.exports = match;