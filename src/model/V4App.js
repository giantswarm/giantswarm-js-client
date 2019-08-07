/**
 * The Giant Swarm API
 * This is the documentation for the Giant Swarm API.  For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).  The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.  Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.  Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.  Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.  ## Source  The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec). 
 *
 * The version of the OpenAPI document: 4.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.1.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/V4AppMetadata', 'model/V4AppSpec', 'model/V4AppStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V4AppMetadata'), require('./V4AppSpec'), require('./V4AppStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.GiantSwarm) {
      root.GiantSwarm = {};
    }
    root.GiantSwarm.V4App = factory(root.GiantSwarm.ApiClient, root.GiantSwarm.V4AppMetadata, root.GiantSwarm.V4AppSpec, root.GiantSwarm.V4AppStatus);
  }
}(this, function(ApiClient, V4AppMetadata, V4AppSpec, V4AppStatus) {
  'use strict';



  /**
   * The V4App model module.
   * @module model/V4App
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>V4App</code>.
   * @alias module:model/V4App
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>V4App</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V4App} obj Optional instance to populate.
   * @return {module:model/V4App} The populated <code>V4App</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = V4AppMetadata.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('spec')) {
        obj['spec'] = V4AppSpec.constructFromObject(data['spec']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = V4AppStatus.constructFromObject(data['status']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/V4AppMetadata} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {module:model/V4AppSpec} spec
   */
  exports.prototype['spec'] = undefined;
  /**
   * @member {module:model/V4AppStatus} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


