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
import V4CreateUserRequest from '../model/V4CreateUserRequest';
import V4GenericResponse from '../model/V4GenericResponse';
import V4UserListItem from '../model/V4UserListItem';

/**
* Users service.
* @module api/UsersApi
* @version 4.0.0
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create user
     * Creates a users in the system. Currently this endpoint is only available to users with admin permissions. 
     * @param {String} email The user&#39;s email address
     * @param {module:model/V4CreateUserRequest} body User account details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    createUserWithHttpInfo(email, body) {
      let postBody = body;

      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling createUser");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createUser");
      }


      let pathParams = {
        'email': email
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationHeaderToken'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V4GenericResponse;

      return this.apiClient.callApi(
        '/v4/users/{email}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create user
     * Creates a users in the system. Currently this endpoint is only available to users with admin permissions. 
     * @param {String} email The user&#39;s email address
     * @param {module:model/V4CreateUserRequest} body User account details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    createUser(email, body) {
      return this.createUserWithHttpInfo(email, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete user
     * Deletes a users in the system. Currently this endpoint is only available to users with admin permissions. 
     * @param {String} email The user&#39;s email address
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    deleteUserWithHttpInfo(email) {
      let postBody = null;

      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling deleteUser");
      }


      let pathParams = {
        'email': email
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationHeaderToken'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V4GenericResponse;

      return this.apiClient.callApi(
        '/v4/users/{email}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete user
     * Deletes a users in the system. Currently this endpoint is only available to users with admin permissions. 
     * @param {String} email The user&#39;s email address
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    deleteUser(email) {
      return this.deleteUserWithHttpInfo(email)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get users
     * Returns a list of all users in the system. Currently this endpoint is only available to users with admin permissions. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/V4UserListItem>} and HTTP response
     */
    getUsersWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationHeaderToken'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [V4UserListItem];

      return this.apiClient.callApi(
        '/v4/users/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get users
     * Returns a list of all users in the system. Currently this endpoint is only available to users with admin permissions. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/V4UserListItem>}
     */
    getUsers() {
      return this.getUsersWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
