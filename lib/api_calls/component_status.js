var stampit = require('stampit');
var Promise = require("bluebird");

module.exports = stampit().
  methods({
    componentStatus: function(params) {
      var self = this;
      return this.postRequest(this.apiEndpoint + "/v1/org/" + params.organizationName + "/env/" + params.environmentName + "/service/" + params.serviceName + "/component/status").
      send({
        component: params.componentName
      }).
      then(function(response) {
        return {
          result: response.body.data,
          rawResponse: response
        }
      });
    }
  });