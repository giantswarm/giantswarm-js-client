var stampit = require('stampit');

module.exports = stampit().
  methods({
    clusterDetails: function(params) {
      return this.getRequest(this.apiEndpoint + "/v3/clusters/" + params.clusterId + "/").
      then(function(response) {
        return {
          result: response.body.data,
          rawResponse: response
        }
      });
    }
  });