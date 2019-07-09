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
    define(['ApiClient', 'model/V4AppSpecUserConfigConfigMap'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V4AppSpecUserConfigConfigMap'));
  } else {
    // Browser globals (root is window)
    if (!root.GiantSwarmV4) {
      root.GiantSwarmV4 = {};
    }
    root.GiantSwarmV4.V4CreateAppRequestSpec = factory(root.GiantSwarmV4.ApiClient, root.GiantSwarmV4.V4AppSpecUserConfigConfigMap);
  }
}(this, function(ApiClient, V4AppSpecUserConfigConfigMap) {
  'use strict';




  /**
   * The V4CreateAppRequestSpec model module.
   * @module model/V4CreateAppRequestSpec
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>V4CreateAppRequestSpec</code>.
   * @alias module:model/V4CreateAppRequestSpec
   * @class
   * @param name {String} Name of the chart that should be used to install this app
   * @param namespace {String} Namespace that this app will be installed to
   * @param version {String} Version of the chart that should be used to install this app
   * @param catalog {String} The catalog where the chart for this app can be found
   */
  var exports = function(name, namespace, version, catalog) {
    var _this = this;

    _this['name'] = name;
    _this['namespace'] = namespace;
    _this['version'] = version;
    _this['catalog'] = catalog;

  };

  /**
   * Constructs a <code>V4CreateAppRequestSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V4CreateAppRequestSpec} obj Optional instance to populate.
   * @return {module:model/V4CreateAppRequestSpec} The populated <code>V4CreateAppRequestSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('namespace')) {
        obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('catalog')) {
        obj['catalog'] = ApiClient.convertToType(data['catalog'], 'String');
      }
      if (data.hasOwnProperty('user_config')) {
        obj['user_config'] = V4AppSpecUserConfigConfigMap.constructFromObject(data['user_config']);
      }
    }
    return obj;
  }

  /**
   * Name of the chart that should be used to install this app
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Namespace that this app will be installed to
   * @member {String} namespace
   */
  exports.prototype['namespace'] = undefined;
  /**
   * Version of the chart that should be used to install this app
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * The catalog where the chart for this app can be found
   * @member {String} catalog
   */
  exports.prototype['catalog'] = undefined;
  /**
   * @member {module:model/V4AppSpecUserConfigConfigMap} user_config
   */
  exports.prototype['user_config'] = undefined;



  return exports;
}));


