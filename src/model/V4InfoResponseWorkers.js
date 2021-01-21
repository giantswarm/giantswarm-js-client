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
    define(['ApiClient', 'model/V4InfoResponseWorkersCountPerCluster', 'model/V4InfoResponseWorkersInstanceType', 'model/V4InfoResponseWorkersVmSize'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V4InfoResponseWorkersCountPerCluster'), require('./V4InfoResponseWorkersInstanceType'), require('./V4InfoResponseWorkersVmSize'));
  } else {
    // Browser globals (root is window)
    if (!root.GiantSwarm) {
      root.GiantSwarm = {};
    }
    root.GiantSwarm.V4InfoResponseWorkers = factory(root.GiantSwarm.ApiClient, root.GiantSwarm.V4InfoResponseWorkersCountPerCluster, root.GiantSwarm.V4InfoResponseWorkersInstanceType, root.GiantSwarm.V4InfoResponseWorkersVmSize);
  }
}(this, function(ApiClient, V4InfoResponseWorkersCountPerCluster, V4InfoResponseWorkersInstanceType, V4InfoResponseWorkersVmSize) {
  'use strict';




  /**
   * The V4InfoResponseWorkers model module.
   * @module model/V4InfoResponseWorkers
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>V4InfoResponseWorkers</code>.
   * Information related to worker nodes
   * @alias module:model/V4InfoResponseWorkers
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>V4InfoResponseWorkers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V4InfoResponseWorkers} obj Optional instance to populate.
   * @return {module:model/V4InfoResponseWorkers} The populated <code>V4InfoResponseWorkers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count_per_cluster')) {
        obj['count_per_cluster'] = V4InfoResponseWorkersCountPerCluster.constructFromObject(data['count_per_cluster']);
      }
      if (data.hasOwnProperty('instance_type')) {
        obj['instance_type'] = V4InfoResponseWorkersInstanceType.constructFromObject(data['instance_type']);
      }
      if (data.hasOwnProperty('vm_size')) {
        obj['vm_size'] = V4InfoResponseWorkersVmSize.constructFromObject(data['vm_size']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/V4InfoResponseWorkersCountPerCluster} count_per_cluster
   */
  exports.prototype['count_per_cluster'] = undefined;
  /**
   * @member {module:model/V4InfoResponseWorkersInstanceType} instance_type
   */
  exports.prototype['instance_type'] = undefined;
  /**
   * @member {module:model/V4InfoResponseWorkersVmSize} vm_size
   */
  exports.prototype['vm_size'] = undefined;



  return exports;
}));


