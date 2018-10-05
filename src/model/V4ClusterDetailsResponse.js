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
    define(['ApiClient', 'model/V4ClusterDetailsResponseKvm', 'model/V4NodeDefinition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V4ClusterDetailsResponseKvm'), require('./V4NodeDefinition'));
  } else {
    // Browser globals (root is window)
    if (!root.GiantSwarmV4) {
      root.GiantSwarmV4 = {};
    }
    root.GiantSwarmV4.V4ClusterDetailsResponse = factory(root.GiantSwarmV4.ApiClient, root.GiantSwarmV4.V4ClusterDetailsResponseKvm, root.GiantSwarmV4.V4NodeDefinition);
  }
}(this, function(ApiClient, V4ClusterDetailsResponseKvm, V4NodeDefinition) {
  'use strict';




  /**
   * The V4ClusterDetailsResponse model module.
   * @module model/V4ClusterDetailsResponse
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>V4ClusterDetailsResponse</code>.
   * Response model showing details of a cluster
   * @alias module:model/V4ClusterDetailsResponse
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>V4ClusterDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V4ClusterDetailsResponse} obj Optional instance to populate.
   * @return {module:model/V4ClusterDetailsResponse} The populated <code>V4ClusterDetailsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('api_endpoint')) {
        obj['api_endpoint'] = ApiClient.convertToType(data['api_endpoint'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('credential_id')) {
        obj['credential_id'] = ApiClient.convertToType(data['credential_id'], 'String');
      }
      if (data.hasOwnProperty('release_version')) {
        obj['release_version'] = ApiClient.convertToType(data['release_version'], 'String');
      }
      if (data.hasOwnProperty('kubernetes_version')) {
        obj['kubernetes_version'] = ApiClient.convertToType(data['kubernetes_version'], 'String');
      }
      if (data.hasOwnProperty('workers')) {
        obj['workers'] = ApiClient.convertToType(data['workers'], [V4NodeDefinition]);
      }
      if (data.hasOwnProperty('kvm')) {
        obj['kvm'] = V4ClusterDetailsResponseKvm.constructFromObject(data['kvm']);
      }
    }
    return obj;
  }

  /**
   * Unique cluster identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * URI of the Kubernetes API endpoint
   * @member {String} api_endpoint
   */
  exports.prototype['api_endpoint'] = undefined;
  /**
   * Date/time of cluster creation
   * @member {String} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * Name of the organization owning the cluster
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * Cluster name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * ID of the credentials used to operate the cluster (only on AWS and Azure). See [Set credentials](#operation/addCredentials) for details. 
   * @member {String} credential_id
   */
  exports.prototype['credential_id'] = undefined;
  /**
   * The [release](#tag/releases) version currently running this cluster. 
   * @member {String} release_version
   */
  exports.prototype['release_version'] = undefined;
  /**
   * Deprecated. Will be removed in a future API version.
   * @member {String} kubernetes_version
   */
  exports.prototype['kubernetes_version'] = undefined;
  /**
   * @member {Array.<module:model/V4NodeDefinition>} workers
   */
  exports.prototype['workers'] = undefined;
  /**
   * @member {module:model/V4ClusterDetailsResponseKvm} kvm
   */
  exports.prototype['kvm'] = undefined;



  return exports;
}));


