var stampit = require('stampit');
var request = require('superagent-bluebird-promise');

var CLUSTER_ID_HEADER = 'X-Giant-Swarm-ClusterID';

var requestHelper = stampit().
  methods({
    getRequest: function(url){
      headers = {};
      if (this.clusterId) { headers[CLUSTER_ID_HEADER] = this.clusterId };


      return request.get(url).
      set(headers).
      then(function(response) {
        return response
      });
    }
  });

module.exports = requestHelper;