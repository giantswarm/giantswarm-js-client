var stampit = require('stampit');
var Promise = require('bluebird');

module.exports = stampit().
  methods({
    createCluster: function(params) {
      var self = this;
      return this.postRequest(this.apiEndpoint + '/v4/clusters/',
      {
        clusterName: params.clusterName,
        kubernetesVersion: params.kubernetesVersion,
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
    }
  });