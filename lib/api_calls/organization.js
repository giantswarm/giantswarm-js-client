var stampit = require('stampit');
var _ = require('underscore');

module.exports = stampit().
  methods({
    organization: function(params) {
      return this.getRequest(this.apiEndpoint + "/v4/organizations/" + params.organizationName + "/")
      .then(function(response) {
        return {
          result: response.body,
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
      var members;

      return this.getRequest(this.apiEndpoint + "/v4/organizations/" + params.organizationName + "/")
      .then(function(response) {
        response.body.members.push({email: params.email});
        members = _.uniq(response.body.members, false, (member) => {
          return member.email
        });
        return members;
      })
      .then((members => {
        return this.patchRequest(this.apiEndpoint + "/v4/organizations/" + params.organizationName + "/",
        {
          members: members
        })
      }))
      .then(function(response) {
        return {
          result: response.body,
          rawResponse: response
        }
      });
    },

    removeMemberFromOrganization: function(params) {
      var members;

      return this.getRequest(this.apiEndpoint + "/v4/organizations/" + params.organizationName + "/")
      .then(function(response) {
        members = _.reject(response.body.members, (member) => {
          return member.email === params.email;
        });

        return members;
      })
      .then((members => {
        return this.patchRequest(this.apiEndpoint + "/v4/organizations/" + params.organizationName + "/",
        {
          members: members
        })
      }))
      .then(function(response) {
        return {
          result: response.body,
          rawResponse: response
        }
      });
    }
  });
