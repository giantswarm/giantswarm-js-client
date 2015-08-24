var match = function match(match, params, headers) {
  if (match[1] === '/v1/user/existing_user/login') {
    if(params["password"] === "Y29ycmVjdF9wYXNzd29yZA==") {  // The base64 encoding of "correct password"
      return {
        body: {
          data: {
            Id: "valid_token"
          },
          "status_code": 10000,
          "status_text": "success"
        }
      };
    } else {
      throw new Error(400);
      // return {
      //   body: {
      //     "status_code": 10010,
      //     "status_text": "resource invalid credentials"
      //   }
      // }
    }
  }
}
module.exports = match;