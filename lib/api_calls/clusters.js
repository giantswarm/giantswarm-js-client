var stampit = require('stampit');

module.exports = stampit().
  methods({
    clusters: function(params) {
      return this.getRequest(this.apiEndpoint + "/v3/orgs/" + params.organizationName+ "/clusters/").
      then(function(response) {
        return {
          result: response.body.data,
          rawResponse: response
        }
      });
    },

    createCluster: function(params) {
      return this.postRequest(this.apiEndpoint + '/v4/clusters/',
      {
        name: params.clusterName,
        kubernetes_version: params.kubernetesVersion,
        owner: params.owner,
        workers: params.workers,
        masters: params.masters
      })
      .then(function(response) {
        return {
          result: response.body,
          rawResponse: response
        }
      });
    },

    deleteCluster: function(params) {
      return this.deleteRequest(this.apiEndpoint + '/v4/clusters/' + params.clusterId)
      .then(function(response) {
        return {
          result: response.body,
          rawResponse: response
        }
      });
    }
  });