var stampit = require('stampit');
var request = require('superagent-bluebird-promise');
var _ = require('underscore');
var Kefir = require('kefir');

var CLUSTER_ID_HEADER = 'X-Giant-Swarm-ClusterID';
var ACTIVITY_HEADER = 'X-Giant-Swarm-Activity';
var REQUEST_ID_HEADER = 'X-Request-ID';

function _checkNested(obj /*, level1, level2, ... levelN*/) {
  var args = Array.prototype.slice.call(arguments, 1);

  for (var i = 0; i < args.length; i++) {
    if (!obj || !obj.hasOwnProperty(args[i])) {
      return false;
    }
    obj = obj[args[i]];
  }
  return true;
}

function fixDates(response) {
  // Convert 0001-01-01T00:00:00Z to null
  if(response.body && _checkNested(response, 'body', 'data', 'components')) {
    // If the response contains components,
    // loop over them and check for and replace the null date

    _.each(response.body.data.components, function(component){
      _.each(component.instances, function(instance){
        if(instance.create_date === '0001-01-01T00:00:00Z') {
          instance.create_date = null; // eslint-disable-line camelcase
        }
      });
    });

  }

  if(response.body && response.body.data) {
    if (response.body.data.created_at === '0001-01-01T00:00:00Z') {
      response.body.data.created_at = null; // eslint-disable-line camelcase
    }

    if (response.body.data.finished_at === '0001-01-01T00:00:00Z') {
      response.body.data.finished_at = null; // eslint-disable-line camelcase
    }
  }
  return response;
}

var requestHelper = stampit().
  init(function() {
    this.requestStream = Kefir.stream(function(emitter) {
      this.onRequest = function(r) {
        emitter.emit(r);
      };
    }.bind(this));
  }).
  methods({
    onRequest: function() {

    },

    getRequest: function(url, params){
      var r = request.get(url);
      if (params && params.query){ r.query(params.query); }
      r.set(this.headers());
      r = r.then(fixDates);
      this.onRequest({
        url: url,
        params: params,
        promise: r
      });
      return r;
    },

    postRequest: function(url, params){
      var r = request.post(url).
      send(params).
      set(this.headers()).then(fixDates);
      this.onRequest({
        url: url,
        params: params,
        promise: r
      });
      return r;
    },

    deleteRequest: function(url, params){
      var r = request.delete(url).
      send(params).
      set(this.headers()).then(fixDates);
      this.onRequest({
        url: url,
        params: params,
        promise: r
      });
      return r;
    },


    headers: function(){
      var headers = {};
      if (this.clusterId) { headers[CLUSTER_ID_HEADER] = this.clusterId; }
      if (this.requestId) { headers[REQUEST_ID_HEADER] = this.requestId; }
      if (this.activity) { headers[ACTIVITY_HEADER] = this.activity; }
      if (this.authToken) { headers.Authorization = 'giantswarm ' + this.authToken; }

      return headers;
    }
  });

module.exports = requestHelper;
