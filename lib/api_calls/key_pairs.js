var stampit = require('stampit');

module.exports = stampit().
  methods({
    clusterKeyPairs: function(params) {
      return this.getRequest(this.apiEndpoint + "/v3/clusters/" + params.clusterId + "/key-pairs/")
      .then(function(response) {
        return {
          result: response.body.data.KeyPairs,
          rawResponse: response
        }
      });
    },

    createClusterKeyPair: function(params) {
      return this.postRequest(this.apiEndpoint + "/v3/clusters/" + params.clusterId + "/key-pairs/",
      {
        description: params.description,
        ttl_hours: params.ttl_hours
      })
      .then(function(response) {
        return {
          result: response.body.data,
          rawResponse: response
        }
      });
    }
  });