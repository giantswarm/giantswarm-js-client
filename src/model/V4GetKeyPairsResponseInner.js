/**
 * The Giant Swarm API
 * This is the documentation for the Giant Swarm API.  For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).  The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.  Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.  Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.  Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.  ## Source  The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec). 
 *
 * OpenAPI spec version: 4.0.0
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
    root.GiantSwarmV4.V4GetKeyPairsResponseInner = factory(root.GiantSwarmV4.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V4GetKeyPairsResponseInner model module.
   * @module model/V4GetKeyPairsResponseInner
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>V4GetKeyPairsResponseInner</code>.
   * @alias module:model/V4GetKeyPairsResponseInner
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>V4GetKeyPairsResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V4GetKeyPairsResponseInner} obj Optional instance to populate.
   * @return {module:model/V4GetKeyPairsResponseInner} The populated <code>V4GetKeyPairsResponseInner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('ttl_hours')) {
        obj['ttl_hours'] = ApiClient.convertToType(data['ttl_hours'], 'Number');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'String');
      }
      if (data.hasOwnProperty('common_name')) {
        obj['common_name'] = ApiClient.convertToType(data['common_name'], 'String');
      }
      if (data.hasOwnProperty('certificate_organizations')) {
        obj['certificate_organizations'] = ApiClient.convertToType(data['certificate_organizations'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique identifier of the key pair
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Free text information about the key pair
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Expiration time (from creation) in hours
   * @member {Number} ttl_hours
   */
  exports.prototype['ttl_hours'] = undefined;
  /**
   * Date/time of creation
   * @member {String} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * The common name of the certificate subject.
   * @member {String} common_name
   */
  exports.prototype['common_name'] = undefined;
  /**
   * The certificate subject's `organization` fields.
   * @member {String} certificate_organizations
   */
  exports.prototype['certificate_organizations'] = undefined;



  return exports;
}));


