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
    define(['ApiClient', 'model/V5ClusterDetailsResponseConditions', 'model/V5ClusterDetailsResponseMaster', 'model/V5ClusterDetailsResponseVersions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V5ClusterDetailsResponseConditions'), require('./V5ClusterDetailsResponseMaster'), require('./V5ClusterDetailsResponseVersions'));
  } else {
    // Browser globals (root is window)
    if (!root.GiantSwarm) {
      root.GiantSwarm = {};
    }
    root.GiantSwarm.V5ClusterDetailsResponse = factory(root.GiantSwarm.ApiClient, root.GiantSwarm.V5ClusterDetailsResponseConditions, root.GiantSwarm.V5ClusterDetailsResponseMaster, root.GiantSwarm.V5ClusterDetailsResponseVersions);
  }
}(this, function(ApiClient, V5ClusterDetailsResponseConditions, V5ClusterDetailsResponseMaster, V5ClusterDetailsResponseVersions) {
  'use strict';




  /**
   * The V5ClusterDetailsResponse model module.
   * @module model/V5ClusterDetailsResponse
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>V5ClusterDetailsResponse</code>.
   * @alias module:model/V5ClusterDetailsResponse
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>V5ClusterDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V5ClusterDetailsResponse} obj Optional instance to populate.
   * @return {module:model/V5ClusterDetailsResponse} The populated <code>V5ClusterDetailsResponse</code> instance.
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
      if (data.hasOwnProperty('master')) {
        obj['master'] = V5ClusterDetailsResponseMaster.constructFromObject(data['master']);
      }
      if (data.hasOwnProperty('conditions')) {
        obj['conditions'] = ApiClient.convertToType(data['conditions'], [V5ClusterDetailsResponseConditions]);
      }
      if (data.hasOwnProperty('versions')) {
        obj['versions'] = ApiClient.convertToType(data['versions'], [V5ClusterDetailsResponseVersions]);
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
   * ID of the credentials used to operate the cluster. See [Set credentials](#operation/addCredentials) for details. 
   * @member {String} credential_id
   */
  exports.prototype['credential_id'] = undefined;
  /**
   * The [release](https://docs.giantswarm.io/api/#tag/releases) version used by the cluster 
   * @member {String} release_version
   */
  exports.prototype['release_version'] = undefined;
  /**
   * @member {module:model/V5ClusterDetailsResponseMaster} master
   */
  exports.prototype['master'] = undefined;
  /**
   * List of conditions the cluster has gone through
   * @member {Array.<module:model/V5ClusterDetailsResponseConditions>} conditions
   */
  exports.prototype['conditions'] = undefined;
  /**
   * @member {Array.<module:model/V5ClusterDetailsResponseVersions>} versions
   */
  exports.prototype['versions'] = undefined;



  return exports;
}));


