/**
 * The Giant Swarm API
 * This is the documentation for the Giant Swarm API.  For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).  The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.  Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.  Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.  Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.  ## Source  The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).  ## Versioning  Some endpoint paths are different, depending on the release version of the workload cluster that they expect. All V5 endpoints except a cluster release version newer than `10.0.0` on  <span class=\"badge aws\">AWS</span>, or `13.0.0` on <span class=\"badge azure\">Azure</span>. Cluster release versions older than that, or on different providers, must be used with V4 endpoints. If there is no V5 endpoint for a specific command (e.g. `Get clusters`), then release version rules don't apply, and the V4 endpoint must be used. 
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
    root.GiantSwarm.V5ClusterDetailsResponseMasterNodes = factory(root.GiantSwarm.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V5ClusterDetailsResponseMasterNodes model module.
   * @module model/V5ClusterDetailsResponseMasterNodes
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>V5ClusterDetailsResponseMasterNodes</code>.
   * Information on the master node(s) of this cluster 
   * @alias module:model/V5ClusterDetailsResponseMasterNodes
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>V5ClusterDetailsResponseMasterNodes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V5ClusterDetailsResponseMasterNodes} obj Optional instance to populate.
   * @return {module:model/V5ClusterDetailsResponseMasterNodes} The populated <code>V5ClusterDetailsResponseMasterNodes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('high_availability')) {
        obj['high_availability'] = ApiClient.convertToType(data['high_availability'], 'Boolean');
      }
      if (data.hasOwnProperty('availability_zones')) {
        obj['availability_zones'] = ApiClient.convertToType(data['availability_zones'], ['String']);
      }
      if (data.hasOwnProperty('num_ready')) {
        obj['num_ready'] = ApiClient.convertToType(data['num_ready'], 'Number');
      }
    }
    return obj;
  }

  /**
   * When true, the cluster has (or should have) three master nodes. Otherwise it should have one. 
   * @member {Boolean} high_availability
   */
  exports.prototype['high_availability'] = undefined;
  /**
   * Availability zones of the master node(s) of this cluster. 
   * @member {Array.<String>} availability_zones
   */
  exports.prototype['availability_zones'] = undefined;
  /**
   * Number of master nodes that are reported as `Ready`. 
   * @member {Number} num_ready
   */
  exports.prototype['num_ready'] = undefined;



  return exports;
}));


