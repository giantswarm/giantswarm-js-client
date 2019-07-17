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
    define(['ApiClient', 'model/V4NodeDefinitionAws', 'model/V4NodeDefinitionAzure', 'model/V4NodeDefinitionCpu', 'model/V4NodeDefinitionMemory', 'model/V4NodeDefinitionStorage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V4NodeDefinitionAws'), require('./V4NodeDefinitionAzure'), require('./V4NodeDefinitionCpu'), require('./V4NodeDefinitionMemory'), require('./V4NodeDefinitionStorage'));
  } else {
    // Browser globals (root is window)
    if (!root.GiantSwarm) {
      root.GiantSwarm = {};
    }
    root.GiantSwarm.V4NodeDefinition = factory(root.GiantSwarm.ApiClient, root.GiantSwarm.V4NodeDefinitionAws, root.GiantSwarm.V4NodeDefinitionAzure, root.GiantSwarm.V4NodeDefinitionCpu, root.GiantSwarm.V4NodeDefinitionMemory, root.GiantSwarm.V4NodeDefinitionStorage);
  }
}(this, function(ApiClient, V4NodeDefinitionAws, V4NodeDefinitionAzure, V4NodeDefinitionCpu, V4NodeDefinitionMemory, V4NodeDefinitionStorage) {
  'use strict';




  /**
   * The V4NodeDefinition model module.
   * @module model/V4NodeDefinition
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>V4NodeDefinition</code>.
   * @alias module:model/V4NodeDefinition
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>V4NodeDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V4NodeDefinition} obj Optional instance to populate.
   * @return {module:model/V4NodeDefinition} The populated <code>V4NodeDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('aws')) {
        obj['aws'] = V4NodeDefinitionAws.constructFromObject(data['aws']);
      }
      if (data.hasOwnProperty('azure')) {
        obj['azure'] = V4NodeDefinitionAzure.constructFromObject(data['azure']);
      }
      if (data.hasOwnProperty('memory')) {
        obj['memory'] = V4NodeDefinitionMemory.constructFromObject(data['memory']);
      }
      if (data.hasOwnProperty('storage')) {
        obj['storage'] = V4NodeDefinitionStorage.constructFromObject(data['storage']);
      }
      if (data.hasOwnProperty('cpu')) {
        obj['cpu'] = V4NodeDefinitionCpu.constructFromObject(data['cpu']);
      }
      if (data.hasOwnProperty('labels')) {
        obj['labels'] = ApiClient.convertToType(data['labels'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/V4NodeDefinitionAws} aws
   */
  exports.prototype['aws'] = undefined;
  /**
   * @member {module:model/V4NodeDefinitionAzure} azure
   */
  exports.prototype['azure'] = undefined;
  /**
   * @member {module:model/V4NodeDefinitionMemory} memory
   */
  exports.prototype['memory'] = undefined;
  /**
   * @member {module:model/V4NodeDefinitionStorage} storage
   */
  exports.prototype['storage'] = undefined;
  /**
   * @member {module:model/V4NodeDefinitionCpu} cpu
   */
  exports.prototype['cpu'] = undefined;
  /**
   * @member {Object} labels
   */
  exports.prototype['labels'] = undefined;



  return exports;
}));


