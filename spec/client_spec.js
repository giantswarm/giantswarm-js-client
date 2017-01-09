var stampit = require('stampit');

describe("giantSwarm", function() {

  jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

  var GiantSwarm = require('../lib/client');
  var configuration = require('./configuration');

  testConfiguration = {
    apiEndpoint: 'http://mockapi:8000',
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
      })
      .catch(function(error) {
        // Late cancellation error is expected.
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
        usernameOrEmail: configuration.existingUser.username,
        password: configuration.existingUser.password
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
        expect(response.result).toEqual(['oponder', 'appmonitor', 'giantswarm', 'validorg']);
        done();
      });
    });
  });


  describe("#authenticate for valid credentials", function() {
    beforeEach(function() {
      // Unset the authToken so we can check that it gets set
      this.giantSwarm = GiantSwarm({authToken: undefined, apiEndpoint: 'http://mockapi:8000'});

      this.request = giantSwarm.authenticate({
        usernameOrEmail: configuration.existingUser.username,
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
      this.giantSwarm = GiantSwarm({authToken: undefined, apiEndpoint: 'http://mockapi:8000'});

      this.request = giantSwarm.authenticate({
        usernameOrEmail: 'wrong_user',
        password: 'wrong_password'
      });
    });

    it("should not set the authtoken", function(done){
      this.request.catch(function(response) {
        expect(this.giantSwarm.authToken).toEqual(undefined);
        done();
      });
    });

    it("should reject the promise", function(done){
      this.request.catch(function(response) {
        done();
      });
    });
  });

  describe("#authenticate for exceptional situations", function() {
    beforeEach(function() {
      // Unset the authToken so we can check it remains unset
      this.giantSwarm = GiantSwarm({authToken: undefined, apiEndpoint: 'http://fake.dev'});

      this.request = giantSwarm.authenticate({
        usernameOrEmail: 'wrong_user',
        password: 'wrong_password'
      });
    });

    it("should not set the authtoken", function(done){
      this.request.catch(function(response) {
        expect(this.giantSwarm.authToken).toEqual(undefined);
        done();
      });
    });

    it("shouldn't resolve the promise", function(done){
      this.request.then(function(response) {
        fail("this should not happen");
      }).catch(function(error) {
        done();
      });
    });

    it("should reject the promise", function(done){
      this.request.catch(function(response) {
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
        expect(response.result.members).toEqual([{ username: 'oponder', email: 'oliver.ponder@gmail.com' }]);
        done();
      });
    });
  });

  describe("#createOrganization", function() {
    it("should create an organization", function(done)  {
      var request = giantSwarm.createOrganization({
        organizationName: "a-new-org"
      });

      request.then(function(response) {
        expect(response.result.status_code).toEqual(10003);
      })
      .then(giantSwarm.memberships.bind(giantSwarm))
      .then(function(response) {
        expect(response.result).toEqual(['oponder', 'appmonitor', 'giantswarm', 'validorg', 'a-new-org']);
        done();
      });
    });
  });

  describe("#deleteOrganization", function() {
    it("should delete an organization", function(done)  {
      var request = giantSwarm.deleteOrganization({
        organizationName: "a-new-org"
      });

      request.then(function(response) {
        expect(response.result.status_code).toEqual(10007);
      })
      .then(giantSwarm.memberships.bind(giantSwarm))
      .then(function(response) {
        expect(response.result).toEqual(['oponder', 'appmonitor', 'giantswarm', 'validorg']);
        done();
      });
    });
  });

  describe("#addMemberToOrganization", function() {
    it("should add a member", function(done)  {
      var request = giantSwarm.addMemberToOrganization({
        organizationName: "oponder",
        email: "roberto@test.com",
      });

      request.then(function(response) {
        expect(response.result.status_code).toEqual(10006);
      })
      .then(giantSwarm.memberships.bind(giantSwarm))
      .then(giantSwarm.organization.bind(giantSwarm, {organizationName: "oponder"}))
      .then(function(response) {
        expect(response.result.members.map((x) => x.email)).toEqual(["oliver.ponder@gmail.com", "roberto@test.com"]);
        done();
      });
    });
  });

  describe("#removeMemberFromOrganization", function() {
    it("should remove a member", function(done)  {
      var request = giantSwarm.removeMemberFromOrganization({
        organizationName: "oponder",
        email: "roberto@test.com",
      });

      request.then(function(response) {
        expect(response.result.status_code).toEqual(10006);
      })
      .then(giantSwarm.memberships.bind(giantSwarm))
      .then(giantSwarm.organization.bind(giantSwarm, {organizationName: "oponder"}))
      .then(function(response) {
        expect(response.result.members.map((x) => x.email)).toEqual(["oliver.ponder@gmail.com"]);
        done();
      });
    });
  });

  describe("#changeEmail", function() {
    it("should change the logged in user's email address", function(done)  {
      var request = giantSwarm.changeEmail({
        old_email: "brad@example.com",
        new_email: "my_new_email@example.com",
      });

      request.then(function(response) {
        expect(response.result.status_code).toEqual(10006);
      })
      .then(giantSwarm.user.bind(giantSwarm))
      .then(function(response) {
        expect(response.result.email).toEqual("my_new_email@example.com");
        done();
      })
      .catch(function(error) {
        fail(error);
      });
    });
  });

  describe("#changeEmail", function() {
    it("should fail to change an email address when the old email is wrong", function(done)  {
      var request = giantSwarm.changeEmail({
        old_email: "existing_user@example.com", // Each individual tests does not reset mock-api, so
                                                // this time around the email is 'my_new_email@example.com'
                                                // so we can expect this to fail.
        new_email: "my_new_email@example.com",
      });

      request.then(function(response) {
        fail("this shouldn't succeed")
      })
      .catch(function(error) {
        done();
      });
    });
  });

  describe("#changePassword", function() {
    it("should change the logged in user's password", function(done)  {
      var request = giantSwarm.changePassword({
        old_password: "somepassword",
        new_password: "newpassword",
      });

      request.then(function(response) {
        expect(response.result.status_code).toEqual(10006);
        done();
      })
      .catch(function(error) {
        fail(error);
      });
    });

    it("should throw an error if something goes wrong on the server", function(done)  {
      var request = giantSwarm.changePassword({
        old_password: "simulate_server_error",
        new_password: "newpassword",
      });

      request.then(function(response) {
        console.log(response);
        fail('we should never have gotten here');
      })
      .catch(function(error) {
        expect(error.status).toEqual(500);
        done('we throw an error like we expected to');
      });
    });

    it("should throw an error if the user gave the wrong old password", function(done)  {
      var request = giantSwarm.changePassword({
        old_password: "simulate_user_input_error",
        new_password: "newpassword",
      });

      request.then(function(response) {
        console.log(response);
        fail('we should never have gotten here');
      })
      .catch(function(error) {
        expect(error.status).toEqual(400);
        done('we throw an error like we expected to');
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
        expect(response.websocket.url).toEqual("ws://mockapi:8000/v1/org/oponder/stream/logs?p=websocket_token");
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
        expect(response.websocket.url).toEqual("ws://mockapi:8000/v1/org/oponder/stream/stats?p=websocket_token");
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

  describe("Activity Tracking", function() {
    it("should use activity as X-Giant-Swarm-Activity", function(done) {
      giantSwarm.activity = "doing-something-cool";
      var request = giantSwarm.memberships();

      request.then(function(response) {
        var headerValue = response.rawResponse.req._headers['x-giant-swarm-activity'];
        expect(headerValue).toEqual('doing-something-cool');
        done();
      });

      var request2 = giantSwarm.memberships();

      request.then(function(response) {
        var headerValue = response.rawResponse.req._headers['x-giant-swarm-activity'];
        expect(headerValue).toEqual('doing-something-cool');
        done();
      });
    });

    it('does not set the X-Giant-Swarm-Activity header when activity isnt defined', function(done) {
      this.giantSwarm = GiantSwarm(testConfiguration);

      var request = this.giantSwarm.memberships();
      request.then(function(response){
        var headerValue = response.rawResponse.req._headers['x-giant-swarm-activity'];
        expect(headerValue).toEqual(undefined);
        done();
      });
    });
  });

  describe("#clusterDetails", function() {
    describe("for an existing cluster", function() {
      it("returns details about a valid cluster", function(done){
        this.giantSwarm = GiantSwarm(testConfiguration);
        this.request = this.giantSwarm.clusterDetails({
          clusterId: 'valid_cluster_id'
        });

        this.request.then(function(response) {
          expect(response.result.api_endpoint).toEqual("https://api.valid_cluster_id.k8s.gigantic.io");
          done();
        });
      });
    });

    describe("for a non existing cluster", function() {
      it("rejects the promise", function(done){
        this.giantSwarm = GiantSwarm(testConfiguration);
        this.request = this.giantSwarm.clusterDetails({
          clusterId: 'non_existing_cluster'
        });

        this.request.then(function(response) {
          fail("Should not have reached this success branch")
        })
        .catch(function(error) {
          expect(error.status).toEqual(404);
          done();
        });
      });
    });

    describe("for exceptional situations", function() {
      it("it rejects the promise", function(done){
        this.giantSwarm = GiantSwarm(testConfiguration);
        this.request = this.giantSwarm.clusterDetails({
          clusterId: 'cluster_id_that_will_500'
        });

        this.request.then(function(response) {
          fail("Should not have reached this success branch")
        })
        .catch(function(error) {
          expect(error.status).toEqual(500);
          done();
        });
      });
    });
  });

  describe("#clusterKeyPairs", function() {
    describe("for an existing cluster, with no key-pairs yet", function() {
      it("returns an empty array", function(done) {

        this.giantSwarm = GiantSwarm(testConfiguration);
        this.request = this.giantSwarm.clusterKeyPairs({
          clusterId: 'valid_cluster_id'
        });

        this.request.then(function(response) {
          expect(response.result).toEqual([]);
          done();
        })
        .catch(function(error) {
          fail(error);
        });
      });
    });

    describe("for an existing cluster, after creating a key-pair", function() {
      it("returns that key pair", function(done) {

        this.giantSwarm = GiantSwarm(testConfiguration);

        this.request = this.giantSwarm.createClusterKeyPair({
          clusterId: 'valid_cluster_id',
          description: 'just testing :D',
          ttl_hours: 200
        })
        .then(function() {
          return this.giantSwarm.clusterKeyPairs({
            clusterId: 'valid_cluster_id'
          });
        })
        .then(function(response) {
          expect(response.result.length).toEqual(1);
          expect(response.result[0].description).toEqual("just testing :D");
          expect(response.result[0].ttl_hours).toEqual(200);
          done();
        })
        .catch(function(error) {
          fail(error);
        });

      });
    });
  });

  describe("#createClusterKeyPair", function() {
    describe("for an existing cluster", function() {
      it("returns details about the created key-pair", function(done){

        this.giantSwarm = GiantSwarm(testConfiguration);
        this.request = this.giantSwarm.createClusterKeyPair({
          clusterId: 'valid_cluster_id',
          description: 'my personal description for this key-pair'
        });

        this.request.then(function(response) {
          expect(response.result.description).toEqual("my personal description for this key-pair");
          done();
        })
        .catch(function(error) {
          fail(error);
        });

      });
    });

    describe("for a non existing cluster", function() {
      it("rejects the promise", function(done){

        this.giantSwarm = GiantSwarm(testConfiguration);
        this.request = this.giantSwarm.createClusterKeyPair({
          clusterId: 'non_existing_cluster',
          description: 'some description'
        });

        this.request.then(function(response) {
          fail("Should not have reached this success branch")
        })
        .catch(function(error) {
          expect(error.status).toEqual(400);
          expect(error.res.body.status_code).toEqual(10008);
          done();
        });

      });
    });

    describe("for exceptional situations", function() {
      it("it rejects the promise", function(done){

        this.giantSwarm = GiantSwarm(testConfiguration);
        this.request = this.giantSwarm.createClusterKeyPair({
          clusterId: 'cluster_id_that_will_500',
          description: 'some description'
        });

        this.request.then(function(response) {
          fail("Should not have reached this success branch")
        })
        .catch(function(error) {
          expect(error.status).toEqual(500);
          done();
        });

      });
    });
  });

  describe("#clusters", function() {
    describe("for an existing organization with clusters", function() {
      it("returns a list of clusters", function(done){
        this.giantSwarm = GiantSwarm(testConfiguration);
        this.request = this.giantSwarm.clusters({
          organizationName: 'validorg'
        });

        this.request.then(function(response) {
          expect(response.result.clusters.length).toEqual(2);
          done();
        });
      });
    });

    describe("for an existing organization without any clusters", function() {
      it("returns an empty list of clusters", function(done){
        this.giantSwarm = GiantSwarm(testConfiguration);
        this.request = this.giantSwarm.clusters({
          organizationName: 'some_other_org'
        });

        this.request.then(function(response) {
          expect(response.result.clusters.length).toEqual(0);
          done();
        });
      });
    });
  });

  describe("create cluster", function() {
    it("returns 201 on success", function(done) {
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.request = this.giantSwarm.createCluster({
        clusterName: "A test cluster",
        kubernetesVersion: "1.4.6",
        owner: "oponder"
      });

      this.request.then(function(response) {
        expect(response.rawResponse.status).toEqual(201);
        done();
      }).catch(function(error) {
        fail(error);
      });
    });
  });

  describe("delete cluster", function() {
    it("returns 202 on success", function(done) {
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.request = this.giantSwarm.deleteCluster({
        clusterId: "valid_cluster_id",
      });

      this.request.then(function(response) {
        expect(response.rawResponse.status).toEqual(202);
        done();
      }).catch(function(error) {
        fail(error);
      });
    });

    it("fails with 404 on unknown clusterId", function(done) {
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.request = this.giantSwarm.deleteCluster({
        clusterId: "somerandomclusterid",
      });

      this.request.then(function(response) {
        fail("Should not have reached the success branch.")
      }).catch(function(error) {
        expect(error.status).toEqual(404);
        done();
      });
    });

    it("fails with 403 on forbidden clusterId", function(done) {
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.request = this.giantSwarm.deleteCluster({
        clusterId: "forbidden_cluster",
      });

      this.request.then(function(response) {
        fail("Should not have reached the success branch.")
      }).catch(function(error) {
        expect(error.status).toEqual(403);
        done();
      });
    });

    it("returns 500 if something failed on the server", function(done) {
      this.giantSwarm = GiantSwarm(testConfiguration);
      this.request = this.giantSwarm.deleteCluster({
        clusterId: "cluster_id_that_will_500",
      });

      this.request.then(function(response) {
        fail("Should not have reached the success branch.")
      }).catch(function(error) {
        expect(error.status).toEqual(500);
        done();
      });
    });
  });

  describe("unauthorized callback", function() {
    describe("when the unauthorized callback is set", function() {
      it("gets called whenever a 401 is returend", function(done) {
        this.giantSwarm = GiantSwarm({
          apiEndpoint: 'http://mockapi:8000',
          authToken: 'wrong_token',
          onUnauthorized: function() {
            done("correctly called onUnauthorized callback");
          }
        });

        this.request = this.giantSwarm.user();

        this.request.then(function(response) {
          fail('Should not have reached a succesful response');
        })
        .catch(function(error) {
          // We're not checking that catch gets executed too
          // other tests do that.
          //
          // What's important is the 'onAuthorized' callback up there.
        });


      });
    });
  });
});
