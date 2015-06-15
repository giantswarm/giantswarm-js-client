describe("Client", function() {

  var GiantSwarm = require('../lib/client');
  var configuration = require('./configuration');

  var authToken;

  beforeEach(function() {
    GiantSwarm.setApiEndpoint('https://api.giantswarm.io');
    GiantSwarm.setAuthToken(null);
  });

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

});
