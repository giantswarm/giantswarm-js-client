var stampit = require('stampit');
var request = require('superagent-bluebird-promise');

var CLUSTER_ID_HEADER = 'X-Giant-Swarm-ClusterID';

module.exports = stampit().
  methods({
    memberships: function() {
      headers = {};
      headers[CLUSTER_ID_HEADER] = this.clusterId;

      return request.get(this.apiEndpoint + "/v1/user/me/memberships").
      set(headers).
      then(function(response) {
        return {
          result: response.body.data,
          rawResponse: response
        }
      });
    }
  });