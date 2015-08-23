// This mocks the API for testing
//
// Files in ./mock_api/v1 define API calls and their responses
//
// This file loads them all and iterates over them on each request
// made to the mock API.

getAllFilesFromFolder = require("./support/utilities");

v1ApiCalls = getAllFilesFromFolder(__dirname + "/mock_api/v1")

var apiCalls = []

for(call in v1ApiCalls) {
  apiCalls.push(require(v1ApiCalls[call]));
}

module.exports = [
  {
    /**
     * regular expression of URL
     */
    pattern: 'https://api.giantswarm.io(.*)',

    /**
     * returns the data
     *
     * @param match array Result of the resolution of the regular expression
     * @param params object sent by 'send' function
     * @param headers object set by 'set' function
     */
    fixtures: function (match, params, headers) {
      // console.log("request:", match[1])
      // console.log("params:", params)
      // console.log("headers:", headers)

      if ((headers && headers.Authorization != "giantswarm valid_token") && (match[1] != '/v1/ping')) {
        throw new Error(401);
        return {
          "unauthorized": true
        }
      }

      for(apiCall in apiCalls) {
        response = apiCalls[apiCall](match, params, headers)

        if (response){
          return response
        }
      }
    },




    /**
     * returns the result of the request
     *
     * @param match array Result of the resolution of the regular expression
     * @param data  mixed Data returns by `fixtures` attribute
     */
    callback: function (match, data) {
      data.ok = true;
      return data;
    }
  }
];