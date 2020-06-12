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
    if (!root.GiantSwarm) {
      root.GiantSwarm = {};
    }
    root.GiantSwarm.V5ModifyClusterRequestMasterNodes = factory(root.GiantSwarm.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V5ModifyClusterRequestMasterNodes model module.
   * @module model/V5ModifyClusterRequestMasterNodes
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>V5ModifyClusterRequestMasterNodes</code>.
   * @alias module:model/V5ModifyClusterRequestMasterNodes
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>V5ModifyClusterRequestMasterNodes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V5ModifyClusterRequestMasterNodes} obj Optional instance to populate.
   * @return {module:model/V5ModifyClusterRequestMasterNodes} The populated <code>V5ModifyClusterRequestMasterNodes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('high_availability')) {
        obj['high_availability'] = ApiClient.convertToType(data['high_availability'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Setting this attribute to `true` allows to switch a cluster from using a single master node to multiple (3) master nodes in separate availability zones for high availability. Note that the switch from multiple master nodes to a single master node is not supported. 
   * @member {Boolean} high_availability
   */
  exports.prototype['high_availability'] = undefined;



  return exports;
}));


