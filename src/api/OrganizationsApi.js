/**
 * The Giant Swarm API v4
 * This is the documentation for the Giant Swarm API starting at version `v4`.  For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).  The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you acess recources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.  Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.  Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.  Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.  ## Source  The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec). 
 *
 * OpenAPI spec version: 4.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Body from '../model/Body';
import V4GenericResponse from '../model/V4GenericResponse';
import V4Organization from '../model/V4Organization';
import V4OrganizationListItem from '../model/V4OrganizationListItem';

/**
* Organizations service.
* @module api/OrganizationsApi
* @version 4.0.0
*/
export default class OrganizationsApi {

    /**
    * Constructs a new OrganizationsApi. 
    * @alias module:api/OrganizationsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create an organization
     * This operation allows a user to create an organization. 
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$ 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4Organization} and HTTP response
     */
    addOrganizationWithHttpInfo(organizationId) {
      let postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling addOrganization");
      }


      let pathParams = {
        'organization_id': organizationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V4Organization;

      return this.apiClient.callApi(
        '/v4/organizations/{organization_id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create an organization
     * This operation allows a user to create an organization. 
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$ 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4Organization}
     */
    addOrganization(organizationId) {
      return this.addOrganizationWithHttpInfo(organizationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an organization
     * This operation allows a user to delete an organization that they are a member of. Admin users can delete any organization. 
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$ 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    deleteOrganizationWithHttpInfo(organizationId) {
      let postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteOrganization");
      }


      let pathParams = {
        'organization_id': organizationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V4GenericResponse;

      return this.apiClient.callApi(
        '/v4/organizations/{organization_id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an organization
     * This operation allows a user to delete an organization that they are a member of. Admin users can delete any organization. 
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$ 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    deleteOrganization(organizationId) {
      return this.deleteOrganizationWithHttpInfo(organizationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get organization details
     * This operation fetches organization details. 
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$ 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4Organization} and HTTP response
     */
    getOrganizationWithHttpInfo(organizationId) {
      let postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganization");
      }


      let pathParams = {
        'organization_id': organizationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V4Organization;

      return this.apiClient.callApi(
        '/v4/organizations/{organization_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get organization details
     * This operation fetches organization details. 
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$ 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4Organization}
     */
    getOrganization(organizationId) {
      return this.getOrganizationWithHttpInfo(organizationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get organizations
     * This operation allows to fetch a list of organizations the user is a member of. In the case of an admin user, the result includes all existing organizations. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/V4OrganizationListItem>} and HTTP response
     */
    getOrganizationsWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [V4OrganizationListItem];

      return this.apiClient.callApi(
        '/v4/organizations/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get organizations
     * This operation allows to fetch a list of organizations the user is a member of. In the case of an admin user, the result includes all existing organizations. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/V4OrganizationListItem>}
     */
    getOrganizations() {
      return this.getOrganizationsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify organization
     * This operation allows you to modify an existing organization. You must be a member of the organization or an admin in order to use this endpoint.  The following attributes can be modified:  - &#x60;members&#x60;: By modifying the array of members, members can be added to or removed from the organization  The request body must conform with the [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386) standard. Requests have to be sent with the &#x60;Content-Type: application/merge-patch+json&#x60; header.  The full request must be valid before it will be executed, currently this means every member you attempt to add to the organization must actually exist in the system. If any member you attempt to add is invalid, the entire patch operation will fail, no members will be added or removed, and an error message will explain which members in your request are invalid. 
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$ 
     * @param {module:model/Body} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4Organization} and HTTP response
     */
    modifyOrganizationWithHttpInfo(organizationId, body) {
      let postBody = body;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling modifyOrganization");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling modifyOrganization");
      }


      let pathParams = {
        'organization_id': organizationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V4Organization;

      return this.apiClient.callApi(
        '/v4/organizations/{organization_id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Modify organization
     * This operation allows you to modify an existing organization. You must be a member of the organization or an admin in order to use this endpoint.  The following attributes can be modified:  - &#x60;members&#x60;: By modifying the array of members, members can be added to or removed from the organization  The request body must conform with the [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386) standard. Requests have to be sent with the &#x60;Content-Type: application/merge-patch+json&#x60; header.  The full request must be valid before it will be executed, currently this means every member you attempt to add to the organization must actually exist in the system. If any member you attempt to add is invalid, the entire patch operation will fail, no members will be added or removed, and an error message will explain which members in your request are invalid. 
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$ 
     * @param {module:model/Body} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4Organization}
     */
    modifyOrganization(organizationId, body) {
      return this.modifyOrganizationWithHttpInfo(organizationId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
