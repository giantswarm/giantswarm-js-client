describe("Client", function() {

  var GiantSwarm = require('../lib/client');
  var configuration = require('./configuration');

  var authToken;

  beforeEach(function() {
    GiantSwarm.setApiEndpoint('https://api.giantswarm.io');
    GiantSwarm.setAuthToken(null);
  });

  // ping

  it("should allow me to ping the right server", function(done){
    GiantSwarm.ping(function(){
      var value = 1;
      expect(value).toEqual(1);
      done();
    }, function(){
      throw new Error('ping() error callback called. This shouldn\'t have happened.');
    });
  });

  it("should not allow me to ping google.com", function(done){
    GiantSwarm.setApiEndpoint('https://www.google.com');
    GiantSwarm.ping(function(){
      throw new Error('ping() success callback called. This shouldn\'t have happened.');
    }, function(err){
      var value = 1;
      expect(value).toEqual(1);
      done();
    });
  });

  it("should forbid to call ping without callback", function(){
    var func = function() {
      GiantSwarm.ping();
    };
    expect(func).toThrow();
  });

  it("should forbid to call ping with non-function parameter", function(){
    var func = function() {
      GiantSwarm.ping("foo");
    };
    expect(func).toThrow();
  });

  // authenticate, user

  it("should be able to authenticate a valid user", function(done){
    GiantSwarm.authenticate(configuration.existingUser.username,
      configuration.existingUser.password,
      function(){
        authToken = GiantSwarm.getAuthToken();
        done();
      }, function(err){
        throw err;
      });
  });

  it("should not be able to authenticate an invalid user", function(done){
    GiantSwarm.authenticate(configuration.existingUser.username,
      'fooBarBlahFakePassword',
      function(){
        throw err;
      }, function(err){
        var value = 1;
        expect(value).toEqual(1);
        done();
      });
  });

  it("should be able to authenticate with a valid token", function(done){
    GiantSwarm.setAuthToken(authToken);
    GiantSwarm.user(function(data){
      expect(data.username).toEqual(configuration.existingUser.username);
      done();
    }, function(err){
      throw err;
    });
  });

  it("should not be able to authenticate with an invalid token", function(done){
    GiantSwarm.setAuthToken('akdskuf9sdf23-3409u42-23140285');
    GiantSwarm.user(function(data){
      throw new Error('user() function called successCallback')
    }, function(err){
      expect(typeof(err)).toEqual('object');
      done();
    });
  });

  // memberships

  it("should fetch organizations which the current user is a member of", function(done){
    GiantSwarm.setAuthToken(authToken);
    GiantSwarm.memberships(function(data){
      expect(typeof(data)).toEqual('object');
      expect(data.length).toBeGreaterThan(0);
      expect(typeof(data[0])).toEqual('string');
      done();
    }, function(err){
      throw err;
    });
  });

  // organization

  it("should fetch organization details", function(done){
    GiantSwarm.setAuthToken(authToken);
    GiantSwarm.organization(configuration.organizationName,
      function(data){
        expect(typeof(data)).toEqual('object');
        expect(typeof(data.id)).toEqual('string');
        expect(typeof(data.members)).not.toEqual('undefined');
        done();
      }, function(err){
        throw err;
      });
  });

  // environments

  it("should fetch environments within an organization", function(done){
    GiantSwarm.setAuthToken(authToken);
    GiantSwarm.environments(configuration.organizationName,
      function(data){
        expect(typeof(data)).toEqual('object');
        done();
      }, function(err){
        throw err;
      });
  });

  // applications

  it("should fetch applications within an environment", function(done){
    GiantSwarm.setAuthToken(authToken);
    GiantSwarm.applications(configuration.organizationName,
      configuration.environmentName,
      function(data){
        expect(typeof(data)).toEqual('object');
        done();
      }, function(err){
        throw err;
      });
  });

  // applicationStatus

  it("should fetch the status of an application", function(done){
    GiantSwarm.setAuthToken(authToken);
    GiantSwarm.applicationStatus(configuration.organizationName,
      configuration.environmentName,
      configuration.applicationName,
      function(data){
        expect(typeof(data)).toEqual('object');
        expect(typeof(data.name)).not.toEqual('undefined');
        expect(typeof(data.services)).not.toEqual('undefined');
        expect(typeof(data.services[0].components[0].instances[0].id)).not.toEqual('undefined');
        expect(typeof(data.services[0].components[0].instances[0].status)).not.toEqual('undefined');
        expect(typeof(data.status)).not.toEqual('undefined');
        done();
      }, function(err){
        throw err;
      });
  });

  // instanceStats

  it("should fetch the stats of an instance", function(done){
    GiantSwarm.setAuthToken(authToken);
    GiantSwarm.instanceStats(configuration.organizationName,
      configuration.instanceId,
      function(data){
        expect(typeof(data)).toEqual('object');
        expect(typeof(data.ComponentName)).not.toEqual('undefined');
        expect(typeof(data.MemoryUsageMb)).not.toEqual('undefined');
        expect(typeof(data.MemoryCapacityMb)).not.toEqual('undefined');
        expect(typeof(data.MemoryUsagePercent)).not.toEqual('undefined');
        expect(typeof(data.CpuUsagePercent)).not.toEqual('undefined');
        done();
      }, function(err){
        throw err;
      });
  });


});
