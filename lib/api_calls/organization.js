var stampit = require('stampit');

module.exports = stampit().
  methods({
    organization: function(params) {
      return this.getRequest(this.apiEndpoint + "/v1/org/" + params.organizationName)
      .then(function(response) {
        return {
          result: response.body.data,
          rawResponse: response
        }
      });
    },

    createOrganization: function(params) {
      return this.postRequest(this.apiEndpoint + "/v1/org/",
      {
        org_id: params.organizationName
      })
      .then(function(response) {
        return {
          result: response.body,
          rawResponse: response
        }
      });
    },

    deleteOrganization: function(params) {
      return this.deleteRequest(this.apiEndpoint + "/v1/org/" + params.organizationName + "/")
      .then(function(response) {
        return {
          result: response.body,
          rawResponse: response
        }
      });
    }
  });