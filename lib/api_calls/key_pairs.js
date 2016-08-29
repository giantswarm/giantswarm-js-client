var stampit = require('stampit');

module.exports = stampit().
  methods({
    createClusterKeyPair: function(params) {
      return this.postRequest(this.apiEndpoint + "/v3/clusters/" + params.clusterId + "/key-pair/",
      {
        description: params.description
      })
      .then(function(response) {
        return {
          result: response.body.data,
          rawResponse: response
        }
      });
    }
  });