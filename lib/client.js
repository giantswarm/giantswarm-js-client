'use strict';
var stampit = require('stampit');
var validate = require('validate.js');
var uuid = require('node-uuid');
var _ = require('lodash');
var RequestHelper = require('./request_helper');

var apiCalls = [
  require('./api_calls/authenticate.js'),
  require('./api_calls/change_email.js'),
  require('./api_calls/change_password.js'),
  require('./api_calls/cluster_details.js'),
  require('./api_calls/clusters.js'),
  require('./api_calls/info.js'),
  require('./api_calls/is_authenticated.js'),
  require('./api_calls/key_pairs.js'),
  require('./api_calls/logout.js'),
  require('./api_calls/memberships.js'),
  require('./api_calls/organization.js'),
  require('./api_calls/ping.js'),
  require('./api_calls/releases.js'),
  require('./api_calls/user.js')
];

validate.validators.isStringOrUndefined = function(value) {
  if (validate.isString(value) || value === undefined) {
    return null;
  } else {
    return 'must be a string or set to undefined';
  }
};

validate.validators.isFunction = function(value) {
  if (validate.isFunction(value) || value === undefined) {
    return null;
  } else {
    return 'must be a function';
  }
};

var constraints = {
  apiEndpoint: {
    presence: true
  },
  onUnauthorized: {
    isFunction: true
  },
  requestId: {
    presence: true
  },
  clusterId: {
    isStringOrUndefined: true
  }
};

function _makeWebsocketUrl(url) {
  var wsurl = url.replace('http://', 'ws://');
  wsurl = wsurl.replace('https://', 'wss://');
  return wsurl;
}

function _generateRequestId() {
  return uuid.v4();
}

var GiantSwarm = stampit().
  compose.apply(this, apiCalls).
  compose(RequestHelper).
  init(function(){
    this.requestId = _generateRequestId();

    var validationErrors = validate(this, constraints);

    if(validationErrors){
      var messages = _.map(validationErrors, function(error){return error; });
      throw new TypeError(messages);
    }
  }).
  props({
    apiEndpoint: 'https://api.giantswarm.io',
    requestId: undefined,
    authToken: undefined,
    clusterId: undefined,
    onUnauthorized: undefined
  }).
  methods({
    websocketEndpoint: function() {
      return _makeWebsocketUrl(this.apiEndpoint);
    }
  });

module.exports = GiantSwarm;
