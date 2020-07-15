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
    root.GiantSwarm.V5AddClusterRequestMaster = factory(root.GiantSwarm.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V5AddClusterRequestMaster model module.
   * @module model/V5AddClusterRequestMaster
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>V5AddClusterRequestMaster</code>.
   * Legacy configuration regarding the master node. Must not be used together with the &#x60;master_nodes&#x60; property.  *Deprecation notice:* This property has been replaced by &#x60;master_nodes&#x60; and is deprecated. It will still be accepted in requests until August 31, 2020. After that, using it will issue an error &#x60;400 Bad Request&#x60;. 
   * @alias module:model/V5AddClusterRequestMaster
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>V5AddClusterRequestMaster</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V5AddClusterRequestMaster} obj Optional instance to populate.
   * @return {module:model/V5AddClusterRequestMaster} The populated <code>V5AddClusterRequestMaster</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('availability_zone')) {
        obj['availability_zone'] = ApiClient.convertToType(data['availability_zone'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of the availability zone to use for the master node. If not given, the master node will be placed automatically. 
   * @member {String} availability_zone
   */
  exports.prototype['availability_zone'] = undefined;



  return exports;
}));


