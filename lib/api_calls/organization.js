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
      return this.putRequest(this.apiEndpoint + "/v4/organizations/" + params.organizationName + "/")
      .then(function(response) {
        return {
          result: response,
          rawResponse: response
        }
      });
    },

    deleteOrganization: function(params) {
      return this.deleteRequest(this.apiEndpoint + "/v4/organizations/" + params.organizationName + "/")
      .then(function(response) {
        return {
          result: response,
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
