describe("Client", function() {

	var GiantSwarm = require('../lib/client');

	it("should allow me to specify the API endpoint", function(){
		GiantSwarm.setApiEndpoint('https://giantswarm.io');
	});
});