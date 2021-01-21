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
    define(['ApiClient', 'model/V4InfoResponseGeneralAvailabilityZones', 'model/V4InfoResponseGeneralKubernetesVersions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V4InfoResponseGeneralAvailabilityZones'), require('./V4InfoResponseGeneralKubernetesVersions'));
  } else {
    // Browser globals (root is window)
    if (!root.GiantSwarm) {
      root.GiantSwarm = {};
    }
    root.GiantSwarm.V4InfoResponseGeneral = factory(root.GiantSwarm.ApiClient, root.GiantSwarm.V4InfoResponseGeneralAvailabilityZones, root.GiantSwarm.V4InfoResponseGeneralKubernetesVersions);
  }
}(this, function(ApiClient, V4InfoResponseGeneralAvailabilityZones, V4InfoResponseGeneralKubernetesVersions) {
  'use strict';




  /**
   * The V4InfoResponseGeneral model module.
   * @module model/V4InfoResponseGeneral
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>V4InfoResponseGeneral</code>.
   * General information
   * @alias module:model/V4InfoResponseGeneral
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>V4InfoResponseGeneral</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V4InfoResponseGeneral} obj Optional instance to populate.
   * @return {module:model/V4InfoResponseGeneral} The populated <code>V4InfoResponseGeneral</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('installation_name')) {
        obj['installation_name'] = ApiClient.convertToType(data['installation_name'], 'String');
      }
      if (data.hasOwnProperty('provider')) {
        obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
      }
      if (data.hasOwnProperty('datacenter')) {
        obj['datacenter'] = ApiClient.convertToType(data['datacenter'], 'String');
      }
      if (data.hasOwnProperty('kubernetes_versions')) {
        obj['kubernetes_versions'] = ApiClient.convertToType(data['kubernetes_versions'], [V4InfoResponseGeneralKubernetesVersions]);
      }
      if (data.hasOwnProperty('availability_zones')) {
        obj['availability_zones'] = V4InfoResponseGeneralAvailabilityZones.constructFromObject(data['availability_zones']);
      }
    }
    return obj;
  }

  /**
   * Unique name of the installation
   * @member {String} installation_name
   */
  exports.prototype['installation_name'] = undefined;
  /**
   * The technical provider used in this installation. Either \"kvm\", \"aws\", or \"azure\".
   * @member {String} provider
   */
  exports.prototype['provider'] = undefined;
  /**
   * Identifier of the datacenter or cloud provider region, e. g. \"eu-west-1\"
   * @member {String} datacenter
   */
  exports.prototype['datacenter'] = undefined;
  /**
   * Information on some kubernetes versions and their end of life dates.
   * @member {Array.<module:model/V4InfoResponseGeneralKubernetesVersions>} kubernetes_versions
   */
  exports.prototype['kubernetes_versions'] = undefined;
  /**
   * @member {module:model/V4InfoResponseGeneralAvailabilityZones} availability_zones
   */
  exports.prototype['availability_zones'] = undefined;



  return exports;
}));


