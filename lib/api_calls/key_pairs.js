var stampit = require('stampit');

module.exports = stampit().
  methods({
    clusterKeyPairs: function(params) {
      return this.getRequest(this.apiEndpoint + "/v4/clusters/" + params.clusterId + "/key-pairs/")
      .then(function(response) {
        return {
          result: response.body,
          rawResponse: response
        }
      });
    },

    createClusterKeyPair: function(params) {
      return this.postRequest(this.apiEndpoint + "/v4/clusters/" + params.clusterId + "/key-pairs/",
      {
        description: params.description,
        ttl_hours: params.ttl_hours,
        cn_prefix: params.cn_prefix,
        certificate_organizations: params.certificate_organizations
      })
      .then(function(response) {
        return {
          result: response.body,
          rawResponse: response
        }
      });
    }
  });
