var stampit = require('stampit');
var request = require('superagent-bluebird-promise');

var CLUSTER_ID_HEADER = 'X-Giant-Swarm-ClusterID';
var ACTIVITY_HEADER = 'X-Giant-Swarm-Activity';
var REQUEST_ID_HEADER = 'X-Request-ID';

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
      if (this.requestId) { headers[REQUEST_ID_HEADER] = this.requestId };

      return headers;
    }
  });

module.exports = requestHelper;