var match = function match(match, params, headers) {
  if (match[1] === '/v1/token/logout') {
    if (headers.Authorization === "giantswarm logged_in_user") {
      return {
        body: {
          "status_code": 10007,
          "status_text": "resource deleted"
        }
      };
    } else {
      throw new Error(400);
    }
  }
}
module.exports = match;