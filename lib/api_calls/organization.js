var stampit = require('stampit');

module.exports = stampit().
  methods({
    organization: function(params) {
      return this.getRequest(this.apiEndpoint + "/v2/org/" + params.organizationName)
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
    },

    addMemberToOrganization: function(params) {
      return this.postRequest(this.apiEndpoint + "/v1/org/" + params.organizationName + "/members/add",
      {
        email: params.email
      })
      .then(function(response) {
        return {
          result: response.body,
          rawResponse: response
        }
      });
    },

    removeMemberFromOrganization: function(params) {
      return this.postRequest(this.apiEndpoint + "/v1/org/" + params.organizationName + "/members/remove",
      {
        email: params.email
      })
      .then(function(response) {
        return {
          result: response.body,
          rawResponse: response
        }
      });
    }
  });