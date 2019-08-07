/**
 * The Giant Swarm API
 * This is the documentation for the Giant Swarm API.  For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).  The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.  Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.  Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.  Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.  ## Source  The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec). 
 *
 * The version of the OpenAPI document: 4.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.1.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GiantSwarm);
  }
}(this, function(expect, GiantSwarm) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GiantSwarm.V5AddNodePoolRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V5AddNodePoolRequest', function() {
    it('should create an instance of V5AddNodePoolRequest', function() {
      // uncomment below and update the code to test V5AddNodePoolRequest
      //var instance = new GiantSwarm.V5AddNodePoolRequest();
      //expect(instance).to.be.a(GiantSwarm.V5AddNodePoolRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new GiantSwarm.V5AddNodePoolRequest();
      //expect(instance).to.be();
    });

    it('should have the property availabilityZones (base name: "availability_zones")', function() {
      // uncomment below and update the code to test the property availabilityZones
      //var instance = new GiantSwarm.V5AddNodePoolRequest();
      //expect(instance).to.be();
    });

    it('should have the property scaling (base name: "scaling")', function() {
      // uncomment below and update the code to test the property scaling
      //var instance = new GiantSwarm.V5AddNodePoolRequest();
      //expect(instance).to.be();
    });

    it('should have the property nodeSpec (base name: "node_spec")', function() {
      // uncomment below and update the code to test the property nodeSpec
      //var instance = new GiantSwarm.V5AddNodePoolRequest();
      //expect(instance).to.be();
    });

  });

}));
