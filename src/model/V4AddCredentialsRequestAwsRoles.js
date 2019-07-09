/**
 * The Giant Swarm API
 * This is the documentation for the Giant Swarm API.  For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).  The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.  Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.  Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.  Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.  ## Source  The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec). 
 *
 * OpenAPI spec version: 5.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.GiantSwarmV4) {
      root.GiantSwarmV4 = {};
    }
    root.GiantSwarmV4.V4AddCredentialsRequestAwsRoles = factory(root.GiantSwarmV4.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V4AddCredentialsRequestAwsRoles model module.
   * @module model/V4AddCredentialsRequestAwsRoles
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>V4AddCredentialsRequestAwsRoles</code>.
   * IAM roles to assume by certain entities
   * @alias module:model/V4AddCredentialsRequestAwsRoles
   * @class
   * @param admin {String} ARN of the IAM role to assume by Giant Swarm support staff
   * @param awsoperator {String} ARN of the IAM role to assume by the software operating clusters
   */
  var exports = function(admin, awsoperator) {
    var _this = this;

    _this['admin'] = admin;
    _this['awsoperator'] = awsoperator;
  };

  /**
   * Constructs a <code>V4AddCredentialsRequestAwsRoles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V4AddCredentialsRequestAwsRoles} obj Optional instance to populate.
   * @return {module:model/V4AddCredentialsRequestAwsRoles} The populated <code>V4AddCredentialsRequestAwsRoles</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('admin')) {
        obj['admin'] = ApiClient.convertToType(data['admin'], 'String');
      }
      if (data.hasOwnProperty('awsoperator')) {
        obj['awsoperator'] = ApiClient.convertToType(data['awsoperator'], 'String');
      }
    }
    return obj;
  }

  /**
   * ARN of the IAM role to assume by Giant Swarm support staff
   * @member {String} admin
   */
  exports.prototype['admin'] = undefined;
  /**
   * ARN of the IAM role to assume by the software operating clusters
   * @member {String} awsoperator
   */
  exports.prototype['awsoperator'] = undefined;



  return exports;
}));


