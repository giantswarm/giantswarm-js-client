describe("Client", function() {

  var GiantSwarm = require('../lib/client');

  beforeEach(function() {
    GiantSwarm.setApiEndpoint('https://api.giantswarm.io');
    GiantSwarm.setAuthToken(null);
  });

  it("should allow me to ping the right server", function(done){
    GiantSwarm.ping(function(){
      var value = 1;
      expect(value).toEqual(1);
      done();
    });
  });

  it("should not allow me to ping google.com", function(done){
    GiantSwarm.setApiEndpoint('https://www.google.com');
    GiantSwarm.ping(function(){}, function(err){
      var value = 1;
      expect(value).toEqual(1);
      done();
    });
  });

});