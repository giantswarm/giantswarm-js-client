describe("GiantSwarm", function() {

  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  var GiantSwarm = require('../lib/client');
  var configuration = require('./configuration');

  var mocked_request = require('superagent');
  var config = require('./superagent-mock-config');

  require('superagent-mock')(mocked_request, config);

  beforeEach(function() {
    GiantSwarm.setApiEndpoint('https://api.giantswarm.io');
    GiantSwarm.setAuthToken('valid_token');
    GiantSwarm.setClusterId(null);
    GiantSwarm.setUnauthorizedCallback(function() { null });
  });

  // setApiEndpoint
  it("should throw an exception when given a non string url", function(done){
    expect(
      function(){ GiantSwarm.setApiEndpoint(3) }
    ).toThrow()
    done();
  });

  it("should throw an exception when given no url", function(done){
    expect(
      function(){ GiantSwarm.setApiEndpoint() }
    ).toThrow()
    done();
  });

  it("should set the websocketEndpoint correctly for http", function(done){
    GiantSwarm.setApiEndpoint("http://api.example.com");
    expect(GiantSwarm._getWebsocketEndpoint()).toEqual('ws://api.example.com');
    done();
  });

  it("should set the websocketEndpoint correctly for https", function(done){
    GiantSwarm.setApiEndpoint("https://api.example.com");
    expect(GiantSwarm._getWebsocketEndpoint()).toEqual('wss://api.example.com');
    done();
  });

  // ping

  it("should allow me to ping the right server", function(done){
    GiantSwarm.ping(function(){
      done();
    }, function(err){
      fail('ping() error callback called. This shouldn\'t have happened.');
      done();
    });
  });

  it("should not allow me to ping google.com", function(done){
    GiantSwarm.setApiEndpoint('https://www.google.com');
    GiantSwarm.ping(function(){
      fail('ping() success callback called. This shouldn\'t have happened.');
      done();
    }, function(err){
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

  // // authenticate, user

  it("should be able to authenticate a valid user", function(done){
    GiantSwarm.authenticate(configuration.existingUser.username,
      configuration.existingUser.password,
      function(){
        authToken = GiantSwarm.getAuthToken();
        done();
      }, function(err){
        fail(err);
        done();
      });
  });

  it("should not be able to authenticate an invalid user", function(done){
    GiantSwarm.authenticate(configuration.existingUser.username,
      'fooBarBlahFakePassword',
      function(){
        fail('an invalid user was able to authenticate');
        done();
      }, function(err){
        done();
      });
  });

  it("should be able to authenticate with a valid token", function(done){
    GiantSwarm.setAuthToken("valid_token");
    GiantSwarm.user(function(data){
      expect(data.username).toEqual(configuration.existingUser.username);
      done();
    }, function(err){
      fail(err);
      done();
    });
  });

  // it("should not be able to authenticate with an invalid token", function(done){
  //   GiantSwarm.setAuthToken('invalid_token');
  //   GiantSwarm.user(function(data){
  //     fail('user() function called successCallback');
  //     done();
  //   }, function(err){
  //     expect(typeof(err)).toEqual('object');
  //     done();
  //   });
  // });

  // // // setClusterId

  // it("should set the clusterId", function(done){
  //   GiantSwarm.setClusterId('fakecluster.example.com');
  //   expect(GiantSwarm._getClusterId()).toEqual("fakecluster.example.com");
  //   done();
  // });

  // it("should throw an error on non string clusterIds", function(done){
  //   expect(function(){GiantSwarm.setClusterId(3)}).toThrow();
  //   expect(function(){GiantSwarm.setClusterId()}).toThrow();
  //   done();
  // });

  // // // setUnauthorizedCallback

  // it("should set the callback and call it when a unauthorized call is made", function(done){
  //   GiantSwarm.setAuthToken('invalid_token');
  //   GiantSwarm.setUnauthorizedCallback(function() { done(); });
  //   GiantSwarm.user(function() {
  //     fail("Success callback called.")
  //     done();
  //   }, function() {

  //   });
  // });

  // // // memberships

  // it("should fetch organizations which the current user is a member of", function(done){
  //   GiantSwarm.setAuthToken("valid_token");
  //   GiantSwarm.memberships(function(data){
  //     expect(typeof(data)).toEqual('object');
  //     expect(data.length).toBeGreaterThan(0);
  //     expect(typeof(data[0])).toEqual('string');
  //     done();
  //   }, function(err){
  //     fail(err);
  //     done();
  //   });
  // });

  // // // organization

  // it("should fetch organization details", function(done){
  //   GiantSwarm.setAuthToken("valid_token");
  //   GiantSwarm.organization(configuration.organizationName,
  //     function(data){
  //       expect(typeof(data)).toEqual('object');
  //       expect(typeof(data.id)).toEqual('string');
  //       expect(typeof(data.members)).not.toEqual('undefined');
  //       done();
  //     }, function(err){
  //       fail(err);
  //       done();
  //     });
  // });

  // // // environments

  // it("should fetch environments within an organization", function(done){
  //   GiantSwarm.setAuthToken("valid_token");
  //   GiantSwarm.environments(configuration.organizationName,
  //     function(data){
  //       expect(typeof(data)).toEqual('object');
  //       done();
  //     }, function(err){
  //       fail(err);
  //       done();
  //     });
  // });

  // // // services

  // it("should fetch services within an environment", function(done){
  //   GiantSwarm.setAuthToken("valid_token");
  //   GiantSwarm.services(configuration.organizationName,
  //     configuration.environmentName,
  //     function(data){
  //       expect(typeof(data)).toEqual('object');
  //       done();
  //     }, function(err){
  //       fail(err);
  //       done();
  //     });
  // });

  // // // serviceStatus

  // it("should fetch the status of a service", function(done){
  //   GiantSwarm.serviceStatus(configuration.organizationName,
  //     configuration.environmentName,
  //     configuration.serviceName,
  //     function(data){
  //       expect(typeof(data)).toEqual('object');
  //       expect(typeof(data.name)).not.toEqual('undefined');
  //       expect(typeof(data.components)).not.toEqual('undefined');
  //       expect(typeof(data.components[0].instances[0].id)).not.toEqual('undefined');
  //       expect(typeof(data.components[0].instances[0].status)).not.toEqual('undefined');
  //       expect(typeof(data.status)).not.toEqual('undefined');
  //       done();
  //     }, function(err){
  //       fail(err);
  //       done();
  //     });
  // });

  // // // service definition

  // it("should fetch the definition of a service", function(done){
  //   GiantSwarm.serviceDefinition(configuration.organizationName,
  //     configuration.environmentName,
  //     configuration.serviceName,
  //     function(data){
  //       expect(typeof(data)).toEqual('object');
  //       done();
  //     }, function(err){
  //       fail(err);
  //       done();
  //     });
  // });

  // // // service stop

  // it("should stop a service", function(done){
  //  GiantSwarm.stopService(configuration.organizationName,
  //    configuration.environmentName,
  //    configuration.serviceName,
  //    function(data){
  //      // expect(typeof(data)).toEqual('object');
  //      done();
  //    }, function(err){
  //      fail(err);
  //      done();
  //    });
  // });

  // // // service start

  // it("should start a service", function(done){
  //   GiantSwarm.startService(configuration.organizationName,
  //     configuration.environmentName,
  //     configuration.serviceName,
  //     function(data){
  //       // expect(typeof(data)).toEqual('object');
  //       done();
  //     }, function(err){
  //       fail(err);
  //       done();
  //     });
  // });

  // // // componentStatus

  // it("should fetch the status of a known component", function(done){
  //   GiantSwarm.componentStatus(
  //     configuration.organizationName,
  //     configuration.environmentName,
  //     configuration.serviceName,
  //     configuration.componentName,
  //     function(data){
  //       expect(typeof(data)).toEqual('object');
  //       expect(typeof(data.components)).toEqual('object');
  //       expect(data.components[0].name).toEqual('webserver');
  //       done();
  //     }, function(err){
  //       fail(err);
  //       done();
  //     });
  // });

  // it("calls the error callback on unknown component", function(done){
  //   GiantSwarm.componentStatus(
  //     configuration.organizationName,
  //     configuration.environmentName,
  //     configuration.serviceName,
  //     "unknown_component",
  //     function(data){
  //       fail("success callback was called for an unkown component");
  //       done();
  //     }, function(err){
  //       done();
  //     });
  // });

  // // startComponent

  // it("starts a known component", function(done){
  //   GiantSwarm.startComponent(
  //     configuration.organizationName,
  //     configuration.environmentName,
  //     configuration.serviceName,
  //     "known_component",
  //     function(data){
  //       done();
  //     }, function(err){
  //       fail("error callback was called for a known component");
  //       done();
  //     });
  // });

  // it("calls the error callback for an unknown component", function(done){
  //   GiantSwarm.startComponent(
  //     configuration.organizationName,
  //     configuration.environmentName,
  //     configuration.serviceName,
  //     "unknown_component",
  //     function(data){
  //       fail("success callback was called for an unknown component");
  //       done();
  //     }, function(err){
  //       done();
  //     });
  // });

  // // stopComponent

  // it("stops a known component", function(done){
  //   GiantSwarm.stopComponent(
  //     configuration.organizationName,
  //     configuration.environmentName,
  //     configuration.serviceName,
  //     "known_component",
  //     function(data){
  //       done();
  //     }, function(err){
  //       fail("error callback was called for a known component");
  //       done();
  //     });
  // });

  // it("calls error callback for unknown component", function(done){
  //   GiantSwarm.stopComponent(
  //     configuration.organizationName,
  //     configuration.environmentName,
  //     configuration.serviceName,
  //     "unknown_component",
  //     function(data){
  //       fail("success callback was called for an unknown component");
  //       done();
  //     }, function(err){
  //       done();
  //     });
  // });


  // // instanceStats

  // it("should fetch the stats of an instance", function(done){
  //   GiantSwarm.instanceStats(configuration.organizationName,
  //     configuration.instanceId,
  //     function(data){
  //       expect(typeof(data)).toEqual('object');
  //       expect(typeof(data.ComponentName)).not.toEqual('undefined');
  //       expect(typeof(data.MemoryUsageMb)).not.toEqual('undefined');
  //       expect(typeof(data.MemoryCapacityMb)).not.toEqual('undefined');
  //       expect(typeof(data.MemoryUsagePercent)).not.toEqual('undefined');
  //       expect(typeof(data.CpuUsagePercent)).not.toEqual('undefined');
  //       done();
  //     }, function(err){
  //       fail(err);
  //       done();
  //     });
  // });

  // // instanceLogs

  // it("responds with 10 lines by default", function(done){
  //   GiantSwarm.instanceLogs(configuration.organizationName,
  //     configuration.instanceId,
  //     null,
  //     function(data){
  //       expect(data.indexOf("Line 10")).toBeGreaterThan(-1);
  //       done();
  //     }, function(err){
  //       fail(err);
  //       done();
  //     });
  // });

  // it("responds with 2 lines when asked", function(done){
  //   GiantSwarm.instanceLogs(configuration.organizationName,
  //     configuration.instanceId,
  //     1,
  //     function(data){
  //       expect(data.indexOf("Line 1")).toBeGreaterThan(-1);
  //       expect(data.indexOf("Line 2")).toBeGreaterThan(-1);
  //       done();
  //     }, function(err){
  //       fail(err);
  //       done();
  //     });
  // });

  // it("calls error callback for unknown instance", function(done){
  //   GiantSwarm.instanceLogs(configuration.organizationName,
  //     "invalid_instance",
  //     1,
  //     function(data){
  //       fail("success callback was called for unknown instance")
  //       done();
  //     }, function(err){
  //       done();
  //     });
  // });

  // // streamLogs

  // // it("returns a websocket with a sensible url to stream logs", function(done){
  // //   GiantSwarm.streamLogs(configuration.organizationName,
  // //     [configuration.instanceId],
  // //     function(message){},
  // //     function(socket){
  // //       expect(socket.url).toEqual("wss://api.giantswarm.io/v1/org/oponder/stream/logs?p=websocket_token");
  // //       done();
  // //     }, function(err){
  // //       fail("error callback was called for known instance")
  // //       done();
  // //     });
  // // });


  // // // // streamStats

  // // it("returns a websocket with a sensible url to stream stats", function(done){
  // //   GiantSwarm.streamStats(configuration.organizationName,
  // //     [configuration.instanceId],
  // //     2,
  // //     function(message){},
  // //     function(socket){
  // //       expect(socket.url).toEqual("wss://api.giantswarm.io/v1/org/oponder/stream/stats?p=websocket_token");
  // //       done();
  // //     }, function(err){
  // //       fail("error callback was called for known instance")
  // //       done();
  // //     });
  // // });


  // // logout

  // it("logs out a logged in user", function(done){
  //   GiantSwarm.setAuthToken("valid_token");
  //   GiantSwarm.logout(
  //     function(data){
  //       done()
  //     },
  //     function(err){
  //       fail("error callback was called for logged in user")
  //       done();
  //     });
  // });

  // it("calls error callback for non logged in user", function(done){
  //   GiantSwarm.setAuthToken("invalid_token");
  //   GiantSwarm.logout(
  //     function(data){
  //       fail("success callback was called for invalid token")
  //       done()
  //     },
  //     function(err){
  //       done();
  //     });
  // });

  // // isAuthenticated

  // it("returns true when user is logged in", function(done){
  //   GiantSwarm.setAuthToken("valid_token");
  //   GiantSwarm.isAuthenticated(
  //     function(response){
  //       expect(response).toEqual(true);
  //       done();
  //     });
  // });

  // it("returns false when user is logged out", function(done){
  //   GiantSwarm.setAuthToken("not_logged_in_user");
  //   GiantSwarm.isAuthenticated(
  //     function(response){
  //       expect(response).toEqual(false);
  //       done();
  //     });
  // });


});
