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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GiantSwarm);
  }
}(this, function(expect, GiantSwarm) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GiantSwarm.AppSecretsApi();
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

  describe('AppSecretsApi', function() {
    describe('createClusterAppSecretV4', function() {
      it('should call createClusterAppSecretV4 successfully', function(done) {
        //uncomment below and update the code to test createClusterAppSecretV4
        //instance.createClusterAppSecretV4(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createClusterAppSecretV5', function() {
      it('should call createClusterAppSecretV5 successfully', function(done) {
        //uncomment below and update the code to test createClusterAppSecretV5
        //instance.createClusterAppSecretV5(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteClusterAppSecretV4', function() {
      it('should call deleteClusterAppSecretV4 successfully', function(done) {
        //uncomment below and update the code to test deleteClusterAppSecretV4
        //instance.deleteClusterAppSecretV4(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteClusterAppSecretV5', function() {
      it('should call deleteClusterAppSecretV5 successfully', function(done) {
        //uncomment below and update the code to test deleteClusterAppSecretV5
        //instance.deleteClusterAppSecretV5(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClusterAppSecretV4', function() {
      it('should call getClusterAppSecretV4 successfully', function(done) {
        //uncomment below and update the code to test getClusterAppSecretV4
        //instance.getClusterAppSecretV4(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClusterAppSecretV5', function() {
      it('should call getClusterAppSecretV5 successfully', function(done) {
        //uncomment below and update the code to test getClusterAppSecretV5
        //instance.getClusterAppSecretV5(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyClusterAppSecretV4', function() {
      it('should call modifyClusterAppSecretV4 successfully', function(done) {
        //uncomment below and update the code to test modifyClusterAppSecretV4
        //instance.modifyClusterAppSecretV4(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyClusterAppSecretV5', function() {
      it('should call modifyClusterAppSecretV5 successfully', function(done) {
        //uncomment below and update the code to test modifyClusterAppSecretV5
        //instance.modifyClusterAppSecretV5(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
