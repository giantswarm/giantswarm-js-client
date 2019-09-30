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
    root.GiantSwarm.V5AddNodePoolRequestAvailabilityZones = factory(root.GiantSwarm.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V5AddNodePoolRequestAvailabilityZones model module.
   * @module model/V5AddNodePoolRequestAvailabilityZones
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>V5AddNodePoolRequestAvailabilityZones</code>.
   * Specifies how the nodes of a pool are spread over availability zones. The object must contain either the &#x60;number&#x60; attribute or the &#x60;zones&#x60; attribute, but not both. The maximum &#x60;number&#x60; of availbility zones is the same as that found under &#x60;general.availability_zones.max&#x60; from the &#x60;/v4/info/&#x60; endpoint. When not given, availability zones assignment is handled automatically. 
   * @alias module:model/V5AddNodePoolRequestAvailabilityZones
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>V5AddNodePoolRequestAvailabilityZones</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V5AddNodePoolRequestAvailabilityZones} obj Optional instance to populate.
   * @return {module:model/V5AddNodePoolRequestAvailabilityZones} The populated <code>V5AddNodePoolRequestAvailabilityZones</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'Number');
      }
      if (data.hasOwnProperty('zones')) {
        obj['zones'] = ApiClient.convertToType(data['zones'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Number of zones to use. If given, the zones are picked automatically. _(Maximum limit of 4 supported.)_ 
   * @member {Number} number
   */
  exports.prototype['number'] = undefined;
  /**
   * Names of the availability zones to use. _(Must be same region as the cluster.)_ 
   * @member {Array.<String>} zones
   */
  exports.prototype['zones'] = undefined;



  return exports;
}));


