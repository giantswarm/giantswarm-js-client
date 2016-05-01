var stampit = require('stampit');

describe("giantSwarm", function() {

  jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

  var GiantSwarm = require('../lib/client');
  var configuration = require('./configuration');

  testConfiguration = {
    apiEndpoint: 'http://localhost:3000',
    authToken: 'valid_token'
  };

  beforeEach(function() {
    giantSwarm = GiantSwarm(testConfiguration);
  });

  describe("instantiation", function() {
    it("should set a random request id", function(done) {
      var giantSwarm2 = GiantSwarm(testConfiguration);
      expect(giantSwarm.requestId).not.toEqual(giantSwarm2.requestId);
      done();
    });

    it("should set the websocketEndpoint correctly for http", function(done){
      var giantSwarm = GiantSwarm({apiEndpoint: "http://example.com"});
      expect(giantSwarm.websocketEndpoint()).toEqual("ws://example.com");
      done();
    });

    it("should set the websocketEndpoint correctly for https", function(done){
      var giantSwarm = GiantSwarm({apiEndpoint: "https://example.com"});
      expect(giantSwarm.websocketEndpoint()).toEqual("wss://example.com");
      done();
    });

    describe("validation of parameters", function() {
      it("should validate that apiEndpoint is a valid URL", function(done){
        expect(function() {GiantSwarm({apiEndpoint: 3})}).
        toThrowError("Api endpoint is not a valid url");
        done();
      });
    });
  });

  describe("#ping", function() {
    it('should return true when "OK"', function(done) {
      giantSwarm.ping().then(function(response) {
        expect(response.result).toEqual(true);
        done();
      });
    });

    it('should return false otherwise', function(done) {
      var giantSwarm = GiantSwarm({apiEndpoint: "https://google.com"});
      giantSwarm.ping().then(function(response) {
        expect(response.result).toEqual(false);
        done();
      });
    });
  });

  describe("requests in general", function() {
    it("should be cancellable", function(done) {
      var request = giantSwarm.memberships();

      // Cancel the request immediately
      request.cancel();

      // Since the request is cancelled this callback should never be called
      // and the test should fail if it does get called.
      request.then(function(response) {
        fail("this callback should never be called!")
      });

      // Attach a 'finally' that passes the test after 60 miliseconds
      // Because after 60 miliseconds, giantSwarm.memberships() would have
      // returned something already.
      request.finally(function() {
        setTimeout(done, 60);
      });
    });

    it("should use clusterId as X-Giant-Swarm-ClusterID", function(done) {
      giantSwarm.clusterId = "bob";
      var request = giantSwarm.memberships();

      request.then(function(response) {
        var headerValue = response.rawResponse.req._headers['x-giant-swarm-clusterid'];
        expect(headerValue).toEqual('bob');
        done();
      })
    });

    it("should use clusterId as X-Giant-Swarm-ClusterID on every call", function(done) {
      giantSwarm.clusterId = "bob";
      var request = giantSwarm.ping();

      request.then(function(response) {
        var headerValue = response.rawResponse.req._headers['x-giant-swarm-clusterid'];
        expect(headerValue).toEqual('bob');
        done();
      })
    });

    it("should use clusterId as X-Giant-Swarm-ClusterID on post calls", function(done) {
      giantSwarm.clusterId = "bob";
      var request = giantSwarm.authenticate({
        username: 'irrelevant',
        password: 'irrelevant'
      });

      request.then(function(response) {
        var headerValue = response.rawResponse.req._headers['x-giant-swarm-clusterid'];
        expect(headerValue).toEqual('bob');
        done();
      })
    });

    it("should convert 0001-01-01T00:00:00Z to null for dates in GET", function(done) {
      var request = giantSwarm.serviceStatus({
        organizationName: configuration.organizationName,
        environmentName: configuration.environmentName,
        serviceName: "deleting_service"
      })

      request.then(function(response) {
        expect(response.result.components[0].instances[0].create_date).toEqual(null);
        done();
      })
    });

    it("should convert 0001-01-01T00:00:00Z to null for dates in POST", function(done) {
      var request = giantSwarm.startComponent({
        organizationName: configuration.organizationName,
        environmentName: configuration.environmentName,
        serviceName: "known_service",
        componentName: "known_component"
      })

      request.then(function(response) {
        expect(response.result.finished_at).toEqual(null);
        done();
      })
    });
  });

  describe("#memberships", function() {
    it("should fetch organizations which the current user is a member of", function(done){
      var request = giantSwarm.memberships();

      request.then(function(response) {
        expect(response.result).toEqual(['oponder', 'appmonitor', 'giantswarm']);
        done();
      });
    });
  });


  describe("#authenticate for valid credentials", function() {
    beforeEach(function() {
      // Unset the authToken so we can check that it gets set
      this.giantSwarm = GiantSwarm({authToken: undefined, apiEndpoint: 'http://localhost:3000'});

      this.request = giantSwarm.authenticate({
        username: configuration.existingUser.username,
        password: configuration.existingUser.password
      });
    });

    it("should set the authtoken", function(done){
      this.request.then(function(response) {
        expect(this.giantSwarm.authToken).toEqual("valid_token");
        done();
      });
    });

    it("should return true", function(done){
      this.request.then(function(response) {
        expect(response.result).toEqual(true);
        done();
      });
    });
  });

  describe("#authenticate for invalid credentials", function() {
    beforeEach(function() {
      // Unset the authToken so we can check it remains unset
      this.giantSwarm = GiantSwarm({authToken: undefined, apiEndpoint: 'http://localhost:3000'});

      this.request = giantSwarm.authenticate({
        username: 'wrong_user',
        password: 'wrong_password'
      });
    });

    it("should not set the authtoken", function(done){
      this.request.then(function(response) {
        expect(this.giantSwarm.authToken).toEqual(undefined);
        done();
      });
    });

    it("should return false", function(done){
      this.request.then(function(response) {
        expect(response.result).toEqual(false);
        done();
      });
    });
  });

  describe("#organization", function() {
    it("should fetch organization details", function(done)  {
      var request = giantSwarm.organization({
        organizationName: configuration.organizationName
      });

      request.then(function(response) {
        expect(response.result.members).toEqual(["oponder"]);
        done();
      });
    });
  });

  describe("#environments", function() {
    it("should return an array of environments within an organization", function(done)  {
      var request = giantSwarm.environments({
        organizationName: configuration.organizationName
      });

      request.then(function(response) {
        expect(response.result).toEqual(["dev"]);
        done();
      });
    });
  });

  describe("#services", function() {
    it("should return an array of services within an environment", function(done)  {
      var request = giantSwarm.services({
        organizationName: configuration.organizationName,
        environmentName: configuration.environmentName
      });

      request.then(function(response) {
        expect(response.result[0].service).toEqual("known_service");
        done();
      });
    });
  });

  describe("#serviceStatus", function() {
    it("should fetch the status of a service", function(done) {
      var request = giantSwarm.serviceStatus({
        organizationName: configuration.organizationName,
        environmentName: configuration.environmentName,
        serviceName: configuration.serviceName
      });

      request.then(function(response) {
        expect(response.result.name).toEqual("known_service");
        done();
      });
    });
  });

  describe("#serviceDefinition", function() {
    it("should fetch the definition of a service", function(done) {
      var request = giantSwarm.serviceDefinition({
        organizationName: configuration.organizationName,
        environmentName: configuration.environmentName,
        serviceName: configuration.serviceName
      });

      request.then(function(response) {
        expect(response.result.components.webserver.image).toEqual("nginx");
        done();
      });
    });
  });

  describe("#stopService", function() {
    beforeEach(function() {
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.request = giantSwarm.stopService({
        organizationName: configuration.organizationName,
        environmentName: configuration.environmentName,
        serviceName: configuration.serviceName
      });
    });

    it("should return a pending task", function(done) {
      this.request.then(function(response) {
        expect(response.result.status).toEqual("pending");
        done();
      });
    });

    it("should return an array of child tasks", function(done) {
      this.request.then(function(response) {
        expect(response.result.child_task_ids).toEqual([
          "79m3ombhd9ehuuf9",
          "nl40qpatrxk0ofy4"
        ]);
        done();
      });
    });

    it("should be possible to waitfor the task to complete", function(done) {
      this.request.then(function(response) {
        return response.waitForTaskCompletion();
      }).then(function(response){
        expect(response.result.status).toEqual("finished");
        done();
      })
    });
  });

  describe("#waitFor", function() {
    it("should wait for a task to be 'finished', repeating the query until that is the case", function(done){
      var request = giantSwarm.waitFor({
        organizationName: configuration.organizationName,
        environmentName: configuration.environmentName,
        taskId: 'a-valid-task-id'
      });

      request.then(function(response) {
        expect(response.result.status).toEqual("finished");
        done();
      });
    });

    it("should give up eventually and throw an error", function(done){
      var request = giantSwarm.waitFor({
        organizationName: configuration.organizationName,
        environmentName: configuration.environmentName,
        taskId: 'a-task-that-never-finishes'
      });

      request.then(function(response) {
        fail("this task shouldn't complete");
        done();
      }).catch(function(error) {
        expect(error).toEqual("Maximum number of retries reached while waiting for task: `a-task-that-never-finishes`");
        done();
      });
    });

    it("should be possible to cancel a waitfor", function(done){
      var request = giantSwarm.waitFor({
        organizationName: configuration.organizationName,
        environmentName: configuration.environmentName,
        taskId: 'a-task-that-never-finishes'
      });

      request.cancel();

      request.then(function(response) {
        fail("this task shouldn't complete");
        done();
      }).catch(function(error) {
        fail("this task shouldn't trigger a failure either because it's been cancelled");
        done();
      });

      // Attach a 'finally' that passes the test after 60 miliseconds
      // Because after 60 miliseconds, giantSwarm.waitFor() would have
      // reached its max retries and thrown an error already.
      request.finally(function() {
        setTimeout(done, 60);
      });
    });
  });

  describe("#startService", function() {
    beforeEach(function() {
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.request = this.giantSwarm.startService({
        organizationName: configuration.organizationName,
        environmentName: configuration.environmentName,
        serviceName: configuration.serviceName
      });
    });

    it("should return a pending task", function(done) {
      this.request.then(function(response) {
        expect(response.result.status).toEqual("pending");
        done();
      });
    });

    it("should return an array of child tasks", function(done) {
      this.request.then(function(response) {
        expect(response.result.child_task_ids).toEqual([
          "abx3glgursu2qh2r"
        ]);
        done();
      });
    });

    it("should be possible to waitfor the task to complete", function(done) {
      this.request.then(function(response) {
        return response.waitForTaskCompletion();
      }).then(function(response){
        expect(response.result.status).toEqual("finished");
        done();
      })
    });
  });

  describe("#componentStatus", function() {
    beforeEach(function() {
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.request = this.giantSwarm.componentStatus({
        organizationName: configuration.organizationName,
        environmentName: configuration.environmentName,
        serviceName: configuration.serviceName,
        componentName: configuration.componentName
      });
    });

    it("should return the status of a component", function(done) {
      this.request.then(function(response) {
        expect(response.result.components[0].name).toEqual("webserver");
        done();
      });
    });
  });

  describe("#startComponent", function() {
    beforeEach(function() {
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.request = this.giantSwarm.startComponent({
        organizationName: configuration.organizationName,
        environmentName: configuration.environmentName,
        serviceName: configuration.serviceName,
        componentName: configuration.componentName
      });
    });

    it("should return a pending task", function(done) {
      this.request.then(function(response) {
        expect(response.result.status).toEqual("pending");
        done();
      });
    });

    it("should return an array of child tasks", function(done) {
      this.request.then(function(response) {
        expect(response.result.child_task_ids).toEqual([
          "1owcueok4z0th1xu"
        ]);
        done();
      });
    });

    it("should be possible to waitfor the task to complete", function(done) {
      this.request.then(function(response) {
        return response.waitForTaskCompletion();
      }).then(function(response){
        expect(response.result.status).toEqual("finished");
        done();
      })
    });
  });

  describe("#stopComponent", function() {
    beforeEach(function() {
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.request = this.giantSwarm.stopComponent({
        organizationName: configuration.organizationName,
        environmentName: configuration.environmentName,
        serviceName: configuration.serviceName,
        componentName: configuration.componentName
      });
    });

    it("should return a pending task", function(done) {
      this.request.then(function(response) {
        expect(response.result.status).toEqual("pending");
        done();
      });
    });

    it("should return an array of child tasks", function(done) {
      this.request.then(function(response) {
        expect(response.result.child_task_ids).toEqual([
          "1owcueok4z0th1xu"
        ]);
        done();
      });
    });

    it("should be possible to waitfor the task to complete", function(done) {
      this.request.then(function(response) {
        return response.waitForTaskCompletion();
      }).then(function(response){
        expect(response.result.status).toEqual("finished");
        done();
      })
    });
  });

  describe("#instanceStats", function() {
    beforeEach(function() {
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.request = this.giantSwarm.instanceStats({
        organizationName: configuration.organizationName,
        instanceId: configuration.instanceId
      });
    });

    it("should fetch the stats of an instance", function(done) {
      this.request.then(function(response) {
        expect(response.result.Component).toEqual("webserver");
        expect(response.result.MemoryCapacityMb).toEqual(512);
        done();
      });
    });
  });

  describe("#instanceLogs", function() {
    it("responds with 10 lines by default", function(done) {
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.request = this.giantSwarm.instanceLogs({
        organizationName: configuration.organizationName,
        instanceId: configuration.instanceId
      });

      this.request.then(function(response) {
        expect(response.result.indexOf("Line 10")).toBeGreaterThan(-1);
        done();
      });
    });

    it("works when there are no log lines returned", function(done) {
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.request = this.giantSwarm.instanceLogs({
        organizationName: configuration.organizationName,
        instanceId: "instanceWithNoLogs",
      });

      this.request.then(function(response) {
        expect(response.result).toEqual("");
        done();
      });
    });

    it("responds with 2 lines when asked", function(done){
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.request = this.giantSwarm.instanceLogs({
        organizationName: configuration.organizationName,
        instanceId: configuration.instanceId,
        numLines: 2
      });

      this.request.then(function(response) {
        expect(response.result).toEqual("Line 1\nLine 2");
        done();
      });
    });
  });

  describe("#streamLogs", function() {
    it("returns a websocket with a sensible url to stream logs, calls the message callback onmessage", function(done) {
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.request = this.giantSwarm.streamLogs({
        organizationName: configuration.organizationName,
        instanceIds: [configuration.instanceId],
      });

      this.request.then(function(response) {
        expect(response.result).toEqual("websocket_token");
        expect(response.websocket.url).toEqual("ws://localhost:3000/v1/org/oponder/stream/logs?p=websocket_token");
        response.websocket.onmessage = function(message) {
          expect(message.data).toEqual("Hello");
          done();
        }
      });
    });
  });

  describe("#streamStats", function() {
    it("returns a websocket with a sensible url to stream stats, calls the message callback onmessage", function(done) {
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.request = this.giantSwarm.streamStats({
        organizationName: configuration.organizationName,
        instanceIds: [configuration.instanceId],
      });

      this.request.then(function(response) {
        expect(response.result).toEqual("websocket_token");
        expect(response.websocket.url).toEqual("ws://localhost:3000/v1/org/oponder/stream/stats?p=websocket_token");
        response.websocket.onmessage = function(message) {
          expect(message.data).toEqual("Hello");
          done();
        }
      });
    });
  });

  describe("#logout", function() {
    it("returns true for a logged in user, and unsets the authToken", function(done) {
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.request = this.giantSwarm.logout();
      this.request.then(function(response) {
        expect(response.result).toEqual(true);
        expect(this.giantSwarm.authToken).toEqual(undefined);
        done();
      }.bind(this));
    });

    // I don't consider it an exceptional situation if someone tries to log out
    // with invalid credentials.
    it("also returns true for a not logged in user, and unsets the authToken", function(done) {
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.giantSwarm.authToken = "invalid_token";

      this.request = this.giantSwarm.logout();
      this.request.then(function(response) {
        expect(response.result).toEqual(true);
        expect(this.giantSwarm.authToken).toEqual(undefined);
        done();
      }.bind(this));
    });
  });

  describe("#isAuthenticated", function() {
    it("returns true when user is logged in", function(done){
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.request = this.giantSwarm.isAuthenticated();
      this.request.then(function(response) {
        expect(response.result).toEqual(true);
        done();
      });
    });

    it("returns false when user is logged out", function(done){
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.giantSwarm.authToken = "not_logged_in_user";
      this.request = this.giantSwarm.isAuthenticated();
      this.request.then(function(response) {
        expect(response.result).toEqual(false);
        done();
      });
    });

    it("throws the exception when response isn't a 401", function(done){
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.giantSwarm.authToken = "token_that_will_500";

      this.giantSwarm.isAuthenticated().then(function(response) {
        fail("Shouldn't have reached this success branch");
        done();
      }).catch(function(error) {
        expect(error.status).toEqual(500);
        done();
      });
    });
  });

  // // Null Dates

  // it("converts 0001-01-01T00:00:00Z to null for dates", function(done) {
  //   giantSwarm.setAuthToken("valid_token");
  //   giantSwarm.serviceStatus(configuration.organizationName,
  //     configuration.environmentName,
  //     "deleting_service",
  //     function(data){
  //       expect(data.components[0].instances[0].create_date).toEqual(null);
  //       done();
  //     }, function(err){
  //       fail(err);
  //       done();
  //     });
  // }),

  // // Activity Tracking

  // // // setActivity

  // it('sets the X-Giant-Swarm-Activity header', function() {
  //   giantSwarm.setAuthToken("valid_token");
  //   giantSwarm.setActivity("doing-a-cool-activity")

  //   var response = giantSwarm.memberships(function(data){}, function(){});

  //   expect(response.req._headers["x-giant-swarm-activity"]).toEqual("doing-a-cool-activity")
  // });

  // it('keeps the X-Giant-Swarm-Activity header for all subsequent requests', function() {
  //   giantSwarm.setAuthToken("valid_token");
  //   giantSwarm.setActivity("doing-something-that-takes-multiple-api-calls")

  //   var response = giantSwarm.memberships(function(data){}, function(){});

  //   expect(response.req._headers["x-giant-swarm-activity"]).toEqual("doing-something-that-takes-multiple-api-calls")

  //   var response_2 = giantSwarm.memberships(function(data){}, function(){});

  //   expect(response.req._headers["x-giant-swarm-activity"]).toEqual("doing-something-that-takes-multiple-api-calls")
  // });

  // it('does not set the X-Giant-Swarm-Activity header when not called', function() {
  //   giantSwarm.setAuthToken("valid_token");

  //   var response = giantSwarm.memberships(function(data){}, function(){});

  //   expect(response.req._headers["x-giant-swarm-activity"]).toEqual(undefined)
  // });


  // // Request ID
  // //

  // it('sets a random request ID for each instantiation of the client', function() {
  //   giantSwarm.setAuthToken("valid_token");
  //   var request = giantSwarm.memberships(function(data){}, function(){});
  //   firstRequestID = request.req._headers["x-request-id"]

  //   giantSwarm2 = new GiantSwarm();
  //   giantSwarm2.setAuthToken("valid_token");
  //   var request = giantSwarm2.memberships(function(data){}, function(){});
  //   secondRequestID = request.req._headers["x-request-id"]

  //   expect(firstRequestID).not.toEqual(secondRequestID);
  // });

  // // Request ID
  // //

  // it('uses the same request ID for each request made with the same client', function() {
  //   giantSwarm.setAuthToken("valid_token");
  //   var request = giantSwarm.memberships(function(data){}, function(){});
  //   firstRequestID = request.req._headers["x-request-id"]

  //   var response = giantSwarm.memberships(function(data){}, function(){});
  //   secondRequestID = request.req._headers["x-request-id"]

  //   expect(firstRequestID).toEqual(secondRequestID);
  // });

   // // // setUnauthorizedCallback

  // it("should set the callback and call it when a unauthorized call is made", function(done){
  //   giantSwarm.setAuthToken('invalid_token');
  //   giantSwarm.setUnauthorizedCallback(function() { done(); });
  //   giantSwarm.user(function() {
  //     fail("Success callback called.")
  //     done();
  //   }, function() {
  //     done();
  //   });
  // });
});
