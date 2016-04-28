var stampit = require('stampit');
var request = require('superagent-bluebird-promise');

var CLUSTER_ID_HEADER = 'X-Giant-Swarm-ClusterID';

var requestHelper = stampit().
  methods({
    getRequest: function(url){
      return request.get(url).
      set(this.headers());
    },

    postRequest: function(url, params){
      return request.post(url).
      send(params).
      set(this.headers());
    },

    headers: function(){
      var headers = {};
      if (this.clusterId) { headers[CLUSTER_ID_HEADER] = this.clusterId };

      return headers;
    }
  });

module.exports = requestHelper;