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
  } else if (typeof module === 'object' && module.exports) {} else {
    // Browser globals (root is window)
    factory(root.expect, root.GiantSwarm);
  }
}(this, function(expect, GiantSwarm) {
  'use strict';

  var instance;

  beforeEach(() => {
    instance = new GiantSwarm.AppConfigsApi();
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

  describe('AppConfigsApi', () => {
    describe('createClusterAppConfigV4', () => {
      test('should call createClusterAppConfigV4 successfully', done => {
        //uncomment below and update the code to test createClusterAppConfigV4
        //instance.createClusterAppConfigV4(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createClusterAppConfigV5', () => {
      test('should call createClusterAppConfigV5 successfully', done => {
        //uncomment below and update the code to test createClusterAppConfigV5
        //instance.createClusterAppConfigV5(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteClusterAppConfigV4', () => {
      test('should call deleteClusterAppConfigV4 successfully', done => {
        //uncomment below and update the code to test deleteClusterAppConfigV4
        //instance.deleteClusterAppConfigV4(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteClusterAppConfigV5', () => {
      test('should call deleteClusterAppConfigV5 successfully', done => {
        //uncomment below and update the code to test deleteClusterAppConfigV5
        //instance.deleteClusterAppConfigV5(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClusterAppConfigV4', () => {
      test('should call getClusterAppConfigV4 successfully', done => {
        //uncomment below and update the code to test getClusterAppConfigV4
        //instance.getClusterAppConfigV4(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClusterAppConfigV5', () => {
      test('should call getClusterAppConfigV5 successfully', done => {
        //uncomment below and update the code to test getClusterAppConfigV5
        //instance.getClusterAppConfigV5(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyClusterAppConfigV4', () => {
      test('should call modifyClusterAppConfigV4 successfully', done => {
        //uncomment below and update the code to test modifyClusterAppConfigV4
        //instance.modifyClusterAppConfigV4(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyClusterAppConfigV5', () => {
      test('should call modifyClusterAppConfigV5 successfully', done => {
        //uncomment below and update the code to test modifyClusterAppConfigV5
        //instance.modifyClusterAppConfigV5(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
