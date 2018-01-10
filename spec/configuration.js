/* Configuration variables for tests */
var configuration = {
  // Fill in credentials of an existing user here
  existingUser: {
    username: 'user@example.com',
    password: 'password'
  },

  // Fill in details of a service you are ok testing against.
  // The service will be stopped and started during the jasmine test.
  organizationName: 'orgname',
  environmentName: 'myenv',
  serviceName: 'myservice',
  instanceId: 'myinstance',
  validToken: 'valid_token'
}

module.exports = configuration;
