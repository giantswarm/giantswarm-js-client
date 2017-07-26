var stampit = require('stampit');

module.exports = stampit().
  methods({
    clusters: function(params) {
      return this.getRequest(this.apiEndpoint + "/v4/clusters/").
      then(function(response) {
        return {
          result: response.body,
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
      return this.deleteRequest(this.apiEndpoint + '/v4/clusters/' + params.clusterId + '/')
      .then(function(response) {
        return {
          result: response.body,
          rawResponse: response
        }
      });
    },

    patchCluster: function(params) {
      var clusterId = params.clusterId;
      delete params.clusterId; // clusterId is an immutable attribute. Remove it from params

      return this.patchRequest(this.apiEndpoint + '/v4/clusters/' + clusterId + '/', params)
      .then(function(response) {
        return {
          result: response.body,
          rawResponse: response
        }
      });
    }
  });
