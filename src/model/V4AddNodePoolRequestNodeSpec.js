/**
 * The Giant Swarm API v4
 * This is the documentation for the Giant Swarm API starting at version `v4`.  For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).  The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.  Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.  Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.  Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.  ## Source  The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec). 
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
    define(['ApiClient', 'model/V4AddNodePoolRequestNodeSpecAws', 'model/V4AddNodePoolRequestNodeSpecAzure', 'model/V4AddNodePoolRequestNodeSpecKvm'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V4AddNodePoolRequestNodeSpecAws'), require('./V4AddNodePoolRequestNodeSpecAzure'), require('./V4AddNodePoolRequestNodeSpecKvm'));
  } else {
    // Browser globals (root is window)
    if (!root.GiantSwarmV4) {
      root.GiantSwarmV4 = {};
    }
    root.GiantSwarmV4.V4AddNodePoolRequestNodeSpec = factory(root.GiantSwarmV4.ApiClient, root.GiantSwarmV4.V4AddNodePoolRequestNodeSpecAws, root.GiantSwarmV4.V4AddNodePoolRequestNodeSpecAzure, root.GiantSwarmV4.V4AddNodePoolRequestNodeSpecKvm);
  }
}(this, function(ApiClient, V4AddNodePoolRequestNodeSpecAws, V4AddNodePoolRequestNodeSpecAzure, V4AddNodePoolRequestNodeSpecKvm) {
  'use strict';




  /**
   * The V4AddNodePoolRequestNodeSpec model module.
   * @module model/V4AddNodePoolRequestNodeSpec
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>V4AddNodePoolRequestNodeSpec</code>.
   * @alias module:model/V4AddNodePoolRequestNodeSpec
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>V4AddNodePoolRequestNodeSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V4AddNodePoolRequestNodeSpec} obj Optional instance to populate.
   * @return {module:model/V4AddNodePoolRequestNodeSpec} The populated <code>V4AddNodePoolRequestNodeSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('aws')) {
        obj['aws'] = V4AddNodePoolRequestNodeSpecAws.constructFromObject(data['aws']);
      }
      if (data.hasOwnProperty('azure')) {
        obj['azure'] = V4AddNodePoolRequestNodeSpecAzure.constructFromObject(data['azure']);
      }
      if (data.hasOwnProperty('kvm')) {
        obj['kvm'] = V4AddNodePoolRequestNodeSpecKvm.constructFromObject(data['kvm']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/V4AddNodePoolRequestNodeSpecAws} aws
   */
  exports.prototype['aws'] = undefined;
  /**
   * @member {module:model/V4AddNodePoolRequestNodeSpecAzure} azure
   */
  exports.prototype['azure'] = undefined;
  /**
   * @member {module:model/V4AddNodePoolRequestNodeSpecKvm} kvm
   */
  exports.prototype['kvm'] = undefined;



  return exports;
}));


