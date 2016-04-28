'use strict';
var OldGiantSwarm = require('../lib/old_client');
var stampit = require('stampit');
var validate = require("validate.js");
var uuid = require('node-uuid');
var _ = require('lodash');

function _generateRequestId() {
  return uuid.v4();
};

var constraints = {
  apiEndpoint: {
    presence: true,
    url: {
      allowLocal: true
    }
  },
  timeoutAfter: {
    presence: true,
    numericality: {
      onlyInteger: true,
      greaterThanOrEqualTo: 0,
      lessThanOrEqualTo: 10000
    }
  },
  maxWaitForRetries: {
    presence: true
  },
  requestId: {
    presence: true
  }
};

function _makeWebsocketUrl(url) {
  var wsurl = url.replace('http://', 'ws://');
  wsurl = wsurl.replace('https://', 'wss://');
  return wsurl;
}

var GiantSwarm = stampit().
  init(function(context){
    this.requestId = _generateRequestId();

    var validationErrors = validate(this, constraints);
    if(validationErrors){
      var messages = _.map(validationErrors, function(error){return error});
      throw(new TypeError(messages));
    };
  }).
  props({
    apiEndpoint: 'https://api.giantswarm.io',
    timeoutAfter: 5000,
    maxWaitForRetries: 5,
    requestId: undefined,
    authToken: undefined,
    clusterId: undefined
  }).
  methods({
    websocketEndpoint: function() {
      return _makeWebsocketUrl(this.apiEndpoint);
    }
  });

module.exports = GiantSwarm;
