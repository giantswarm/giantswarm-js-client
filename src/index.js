/**
 * The Giant Swarm API v4
 * This is the documentation for the Giant Swarm API starting at version `v4`.  For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).  The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.  Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.  Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.  Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.  ## Source  The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec). 
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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Body', 'model/V4AddClusterRequest', 'model/V4AddCredentialsRequest', 'model/V4AddCredentialsRequestAws', 'model/V4AddCredentialsRequestAwsRoles', 'model/V4AddCredentialsRequestAzure', 'model/V4AddCredentialsRequestAzureCredential', 'model/V4AddKeyPairRequest', 'model/V4AddKeyPairResponse', 'model/V4AddNodePoolRequest', 'model/V4AddNodePoolRequestNodeSpec', 'model/V4AddNodePoolRequestNodeSpecAws', 'model/V4AddNodePoolRequestNodeSpecAzure', 'model/V4AddNodePoolRequestNodeSpecKvm', 'model/V4AddNodePoolRequestNodeSpecKvmCpu', 'model/V4AddNodePoolRequestNodeSpecKvmMemory', 'model/V4AddNodePoolRequestNodeSpecKvmStorage', 'model/V4AddNodePoolRequestScaling', 'model/V4ClusterDetailsResponse', 'model/V4ClusterDetailsResponseKvm', 'model/V4ClusterDetailsResponseKvmPortMappings', 'model/V4ClusterListItem', 'model/V4CreateAuthTokenRequest', 'model/V4CreateAuthTokenResponse', 'model/V4CreateUserRequest', 'model/V4GenericResponse', 'model/V4GetClusterStatusResponse', 'model/V4GetCredentialResponse', 'model/V4GetCredentialResponseAws', 'model/V4GetCredentialResponseAwsRoles', 'model/V4GetCredentialResponseAzure', 'model/V4GetCredentialResponseAzureCredential', 'model/V4GetCredentialsResponse', 'model/V4GetKeyPairsResponse', 'model/V4GetKeyPairsResponseInner', 'model/V4GetNodePoolResponse', 'model/V4GetNodePoolResponseNodeSpec', 'model/V4GetNodePoolResponseNodeSpecAws', 'model/V4GetNodePoolResponseNodeSpecAzure', 'model/V4GetNodePoolResponseScaling', 'model/V4GetNodePoolStatusResponse', 'model/V4GetNodePoolsResponse', 'model/V4InfoResponse', 'model/V4InfoResponseGeneral', 'model/V4InfoResponseGeneralAvailabilityZones', 'model/V4InfoResponseWorkers', 'model/V4InfoResponseWorkersCountPerCluster', 'model/V4InfoResponseWorkersInstanceType', 'model/V4InfoResponseWorkersVmSize', 'model/V4ModifyClusterRequest', 'model/V4ModifyNodePoolRequest', 'model/V4ModifyNodePoolRequestScaling', 'model/V4ModifyUserPasswordRequest', 'model/V4ModifyUserRequest', 'model/V4Organization', 'model/V4OrganizationListItem', 'model/V4OrganizationMember', 'model/V4ReleaseListItem', 'model/V4ReleaseListItemChangelog', 'model/V4ReleaseListItemComponents', 'model/V4UserListItem', 'api/AuthTokensApi', 'api/ClustersApi', 'api/InfoApi', 'api/KeyPairsApi', 'api/NodepoolsApi', 'api/OrganizationsApi', 'api/ReleasesApi', 'api/UsersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Body'), require('./model/V4AddClusterRequest'), require('./model/V4AddCredentialsRequest'), require('./model/V4AddCredentialsRequestAws'), require('./model/V4AddCredentialsRequestAwsRoles'), require('./model/V4AddCredentialsRequestAzure'), require('./model/V4AddCredentialsRequestAzureCredential'), require('./model/V4AddKeyPairRequest'), require('./model/V4AddKeyPairResponse'), require('./model/V4AddNodePoolRequest'), require('./model/V4AddNodePoolRequestNodeSpec'), require('./model/V4AddNodePoolRequestNodeSpecAws'), require('./model/V4AddNodePoolRequestNodeSpecAzure'), require('./model/V4AddNodePoolRequestNodeSpecKvm'), require('./model/V4AddNodePoolRequestNodeSpecKvmCpu'), require('./model/V4AddNodePoolRequestNodeSpecKvmMemory'), require('./model/V4AddNodePoolRequestNodeSpecKvmStorage'), require('./model/V4AddNodePoolRequestScaling'), require('./model/V4ClusterDetailsResponse'), require('./model/V4ClusterDetailsResponseKvm'), require('./model/V4ClusterDetailsResponseKvmPortMappings'), require('./model/V4ClusterListItem'), require('./model/V4CreateAuthTokenRequest'), require('./model/V4CreateAuthTokenResponse'), require('./model/V4CreateUserRequest'), require('./model/V4GenericResponse'), require('./model/V4GetClusterStatusResponse'), require('./model/V4GetCredentialResponse'), require('./model/V4GetCredentialResponseAws'), require('./model/V4GetCredentialResponseAwsRoles'), require('./model/V4GetCredentialResponseAzure'), require('./model/V4GetCredentialResponseAzureCredential'), require('./model/V4GetCredentialsResponse'), require('./model/V4GetKeyPairsResponse'), require('./model/V4GetKeyPairsResponseInner'), require('./model/V4GetNodePoolResponse'), require('./model/V4GetNodePoolResponseNodeSpec'), require('./model/V4GetNodePoolResponseNodeSpecAws'), require('./model/V4GetNodePoolResponseNodeSpecAzure'), require('./model/V4GetNodePoolResponseScaling'), require('./model/V4GetNodePoolStatusResponse'), require('./model/V4GetNodePoolsResponse'), require('./model/V4InfoResponse'), require('./model/V4InfoResponseGeneral'), require('./model/V4InfoResponseGeneralAvailabilityZones'), require('./model/V4InfoResponseWorkers'), require('./model/V4InfoResponseWorkersCountPerCluster'), require('./model/V4InfoResponseWorkersInstanceType'), require('./model/V4InfoResponseWorkersVmSize'), require('./model/V4ModifyClusterRequest'), require('./model/V4ModifyNodePoolRequest'), require('./model/V4ModifyNodePoolRequestScaling'), require('./model/V4ModifyUserPasswordRequest'), require('./model/V4ModifyUserRequest'), require('./model/V4Organization'), require('./model/V4OrganizationListItem'), require('./model/V4OrganizationMember'), require('./model/V4ReleaseListItem'), require('./model/V4ReleaseListItemChangelog'), require('./model/V4ReleaseListItemComponents'), require('./model/V4UserListItem'), require('./api/AuthTokensApi'), require('./api/ClustersApi'), require('./api/InfoApi'), require('./api/KeyPairsApi'), require('./api/NodepoolsApi'), require('./api/OrganizationsApi'), require('./api/ReleasesApi'), require('./api/UsersApi'));
  }
}(function(ApiClient, Body, V4AddClusterRequest, V4AddCredentialsRequest, V4AddCredentialsRequestAws, V4AddCredentialsRequestAwsRoles, V4AddCredentialsRequestAzure, V4AddCredentialsRequestAzureCredential, V4AddKeyPairRequest, V4AddKeyPairResponse, V4AddNodePoolRequest, V4AddNodePoolRequestNodeSpec, V4AddNodePoolRequestNodeSpecAws, V4AddNodePoolRequestNodeSpecAzure, V4AddNodePoolRequestNodeSpecKvm, V4AddNodePoolRequestNodeSpecKvmCpu, V4AddNodePoolRequestNodeSpecKvmMemory, V4AddNodePoolRequestNodeSpecKvmStorage, V4AddNodePoolRequestScaling, V4ClusterDetailsResponse, V4ClusterDetailsResponseKvm, V4ClusterDetailsResponseKvmPortMappings, V4ClusterListItem, V4CreateAuthTokenRequest, V4CreateAuthTokenResponse, V4CreateUserRequest, V4GenericResponse, V4GetClusterStatusResponse, V4GetCredentialResponse, V4GetCredentialResponseAws, V4GetCredentialResponseAwsRoles, V4GetCredentialResponseAzure, V4GetCredentialResponseAzureCredential, V4GetCredentialsResponse, V4GetKeyPairsResponse, V4GetKeyPairsResponseInner, V4GetNodePoolResponse, V4GetNodePoolResponseNodeSpec, V4GetNodePoolResponseNodeSpecAws, V4GetNodePoolResponseNodeSpecAzure, V4GetNodePoolResponseScaling, V4GetNodePoolStatusResponse, V4GetNodePoolsResponse, V4InfoResponse, V4InfoResponseGeneral, V4InfoResponseGeneralAvailabilityZones, V4InfoResponseWorkers, V4InfoResponseWorkersCountPerCluster, V4InfoResponseWorkersInstanceType, V4InfoResponseWorkersVmSize, V4ModifyClusterRequest, V4ModifyNodePoolRequest, V4ModifyNodePoolRequestScaling, V4ModifyUserPasswordRequest, V4ModifyUserRequest, V4Organization, V4OrganizationListItem, V4OrganizationMember, V4ReleaseListItem, V4ReleaseListItemChangelog, V4ReleaseListItemComponents, V4UserListItem, AuthTokensApi, ClustersApi, InfoApi, KeyPairsApi, NodepoolsApi, OrganizationsApi, ReleasesApi, UsersApi) {
  'use strict';

  /**
   * Generated JavaScript client for the Giant Swarm API v4..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var GiantSwarmV4 = require('index'); // See note below*.
   * var xxxSvc = new GiantSwarmV4.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new GiantSwarmV4.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new GiantSwarmV4.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new GiantSwarmV4.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 4.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Body model constructor.
     * @property {module:model/Body}
     */
    Body: Body,
    /**
     * The V4AddClusterRequest model constructor.
     * @property {module:model/V4AddClusterRequest}
     */
    V4AddClusterRequest: V4AddClusterRequest,
    /**
     * The V4AddCredentialsRequest model constructor.
     * @property {module:model/V4AddCredentialsRequest}
     */
    V4AddCredentialsRequest: V4AddCredentialsRequest,
    /**
     * The V4AddCredentialsRequestAws model constructor.
     * @property {module:model/V4AddCredentialsRequestAws}
     */
    V4AddCredentialsRequestAws: V4AddCredentialsRequestAws,
    /**
     * The V4AddCredentialsRequestAwsRoles model constructor.
     * @property {module:model/V4AddCredentialsRequestAwsRoles}
     */
    V4AddCredentialsRequestAwsRoles: V4AddCredentialsRequestAwsRoles,
    /**
     * The V4AddCredentialsRequestAzure model constructor.
     * @property {module:model/V4AddCredentialsRequestAzure}
     */
    V4AddCredentialsRequestAzure: V4AddCredentialsRequestAzure,
    /**
     * The V4AddCredentialsRequestAzureCredential model constructor.
     * @property {module:model/V4AddCredentialsRequestAzureCredential}
     */
    V4AddCredentialsRequestAzureCredential: V4AddCredentialsRequestAzureCredential,
    /**
     * The V4AddKeyPairRequest model constructor.
     * @property {module:model/V4AddKeyPairRequest}
     */
    V4AddKeyPairRequest: V4AddKeyPairRequest,
    /**
     * The V4AddKeyPairResponse model constructor.
     * @property {module:model/V4AddKeyPairResponse}
     */
    V4AddKeyPairResponse: V4AddKeyPairResponse,
    /**
     * The V4AddNodePoolRequest model constructor.
     * @property {module:model/V4AddNodePoolRequest}
     */
    V4AddNodePoolRequest: V4AddNodePoolRequest,
    /**
     * The V4AddNodePoolRequestNodeSpec model constructor.
     * @property {module:model/V4AddNodePoolRequestNodeSpec}
     */
    V4AddNodePoolRequestNodeSpec: V4AddNodePoolRequestNodeSpec,
    /**
     * The V4AddNodePoolRequestNodeSpecAws model constructor.
     * @property {module:model/V4AddNodePoolRequestNodeSpecAws}
     */
    V4AddNodePoolRequestNodeSpecAws: V4AddNodePoolRequestNodeSpecAws,
    /**
     * The V4AddNodePoolRequestNodeSpecAzure model constructor.
     * @property {module:model/V4AddNodePoolRequestNodeSpecAzure}
     */
    V4AddNodePoolRequestNodeSpecAzure: V4AddNodePoolRequestNodeSpecAzure,
    /**
     * The V4AddNodePoolRequestNodeSpecKvm model constructor.
     * @property {module:model/V4AddNodePoolRequestNodeSpecKvm}
     */
    V4AddNodePoolRequestNodeSpecKvm: V4AddNodePoolRequestNodeSpecKvm,
    /**
     * The V4AddNodePoolRequestNodeSpecKvmCpu model constructor.
     * @property {module:model/V4AddNodePoolRequestNodeSpecKvmCpu}
     */
    V4AddNodePoolRequestNodeSpecKvmCpu: V4AddNodePoolRequestNodeSpecKvmCpu,
    /**
     * The V4AddNodePoolRequestNodeSpecKvmMemory model constructor.
     * @property {module:model/V4AddNodePoolRequestNodeSpecKvmMemory}
     */
    V4AddNodePoolRequestNodeSpecKvmMemory: V4AddNodePoolRequestNodeSpecKvmMemory,
    /**
     * The V4AddNodePoolRequestNodeSpecKvmStorage model constructor.
     * @property {module:model/V4AddNodePoolRequestNodeSpecKvmStorage}
     */
    V4AddNodePoolRequestNodeSpecKvmStorage: V4AddNodePoolRequestNodeSpecKvmStorage,
    /**
     * The V4AddNodePoolRequestScaling model constructor.
     * @property {module:model/V4AddNodePoolRequestScaling}
     */
    V4AddNodePoolRequestScaling: V4AddNodePoolRequestScaling,
    /**
     * The V4ClusterDetailsResponse model constructor.
     * @property {module:model/V4ClusterDetailsResponse}
     */
    V4ClusterDetailsResponse: V4ClusterDetailsResponse,
    /**
     * The V4ClusterDetailsResponseKvm model constructor.
     * @property {module:model/V4ClusterDetailsResponseKvm}
     */
    V4ClusterDetailsResponseKvm: V4ClusterDetailsResponseKvm,
    /**
     * The V4ClusterDetailsResponseKvmPortMappings model constructor.
     * @property {module:model/V4ClusterDetailsResponseKvmPortMappings}
     */
    V4ClusterDetailsResponseKvmPortMappings: V4ClusterDetailsResponseKvmPortMappings,
    /**
     * The V4ClusterListItem model constructor.
     * @property {module:model/V4ClusterListItem}
     */
    V4ClusterListItem: V4ClusterListItem,
    /**
     * The V4CreateAuthTokenRequest model constructor.
     * @property {module:model/V4CreateAuthTokenRequest}
     */
    V4CreateAuthTokenRequest: V4CreateAuthTokenRequest,
    /**
     * The V4CreateAuthTokenResponse model constructor.
     * @property {module:model/V4CreateAuthTokenResponse}
     */
    V4CreateAuthTokenResponse: V4CreateAuthTokenResponse,
    /**
     * The V4CreateUserRequest model constructor.
     * @property {module:model/V4CreateUserRequest}
     */
    V4CreateUserRequest: V4CreateUserRequest,
    /**
     * The V4GenericResponse model constructor.
     * @property {module:model/V4GenericResponse}
     */
    V4GenericResponse: V4GenericResponse,
    /**
     * The V4GetClusterStatusResponse model constructor.
     * @property {module:model/V4GetClusterStatusResponse}
     */
    V4GetClusterStatusResponse: V4GetClusterStatusResponse,
    /**
     * The V4GetCredentialResponse model constructor.
     * @property {module:model/V4GetCredentialResponse}
     */
    V4GetCredentialResponse: V4GetCredentialResponse,
    /**
     * The V4GetCredentialResponseAws model constructor.
     * @property {module:model/V4GetCredentialResponseAws}
     */
    V4GetCredentialResponseAws: V4GetCredentialResponseAws,
    /**
     * The V4GetCredentialResponseAwsRoles model constructor.
     * @property {module:model/V4GetCredentialResponseAwsRoles}
     */
    V4GetCredentialResponseAwsRoles: V4GetCredentialResponseAwsRoles,
    /**
     * The V4GetCredentialResponseAzure model constructor.
     * @property {module:model/V4GetCredentialResponseAzure}
     */
    V4GetCredentialResponseAzure: V4GetCredentialResponseAzure,
    /**
     * The V4GetCredentialResponseAzureCredential model constructor.
     * @property {module:model/V4GetCredentialResponseAzureCredential}
     */
    V4GetCredentialResponseAzureCredential: V4GetCredentialResponseAzureCredential,
    /**
     * The V4GetCredentialsResponse model constructor.
     * @property {module:model/V4GetCredentialsResponse}
     */
    V4GetCredentialsResponse: V4GetCredentialsResponse,
    /**
     * The V4GetKeyPairsResponse model constructor.
     * @property {module:model/V4GetKeyPairsResponse}
     */
    V4GetKeyPairsResponse: V4GetKeyPairsResponse,
    /**
     * The V4GetKeyPairsResponseInner model constructor.
     * @property {module:model/V4GetKeyPairsResponseInner}
     */
    V4GetKeyPairsResponseInner: V4GetKeyPairsResponseInner,
    /**
     * The V4GetNodePoolResponse model constructor.
     * @property {module:model/V4GetNodePoolResponse}
     */
    V4GetNodePoolResponse: V4GetNodePoolResponse,
    /**
     * The V4GetNodePoolResponseNodeSpec model constructor.
     * @property {module:model/V4GetNodePoolResponseNodeSpec}
     */
    V4GetNodePoolResponseNodeSpec: V4GetNodePoolResponseNodeSpec,
    /**
     * The V4GetNodePoolResponseNodeSpecAws model constructor.
     * @property {module:model/V4GetNodePoolResponseNodeSpecAws}
     */
    V4GetNodePoolResponseNodeSpecAws: V4GetNodePoolResponseNodeSpecAws,
    /**
     * The V4GetNodePoolResponseNodeSpecAzure model constructor.
     * @property {module:model/V4GetNodePoolResponseNodeSpecAzure}
     */
    V4GetNodePoolResponseNodeSpecAzure: V4GetNodePoolResponseNodeSpecAzure,
    /**
     * The V4GetNodePoolResponseScaling model constructor.
     * @property {module:model/V4GetNodePoolResponseScaling}
     */
    V4GetNodePoolResponseScaling: V4GetNodePoolResponseScaling,
    /**
     * The V4GetNodePoolStatusResponse model constructor.
     * @property {module:model/V4GetNodePoolStatusResponse}
     */
    V4GetNodePoolStatusResponse: V4GetNodePoolStatusResponse,
    /**
     * The V4GetNodePoolsResponse model constructor.
     * @property {module:model/V4GetNodePoolsResponse}
     */
    V4GetNodePoolsResponse: V4GetNodePoolsResponse,
    /**
     * The V4InfoResponse model constructor.
     * @property {module:model/V4InfoResponse}
     */
    V4InfoResponse: V4InfoResponse,
    /**
     * The V4InfoResponseGeneral model constructor.
     * @property {module:model/V4InfoResponseGeneral}
     */
    V4InfoResponseGeneral: V4InfoResponseGeneral,
    /**
     * The V4InfoResponseGeneralAvailabilityZones model constructor.
     * @property {module:model/V4InfoResponseGeneralAvailabilityZones}
     */
    V4InfoResponseGeneralAvailabilityZones: V4InfoResponseGeneralAvailabilityZones,
    /**
     * The V4InfoResponseWorkers model constructor.
     * @property {module:model/V4InfoResponseWorkers}
     */
    V4InfoResponseWorkers: V4InfoResponseWorkers,
    /**
     * The V4InfoResponseWorkersCountPerCluster model constructor.
     * @property {module:model/V4InfoResponseWorkersCountPerCluster}
     */
    V4InfoResponseWorkersCountPerCluster: V4InfoResponseWorkersCountPerCluster,
    /**
     * The V4InfoResponseWorkersInstanceType model constructor.
     * @property {module:model/V4InfoResponseWorkersInstanceType}
     */
    V4InfoResponseWorkersInstanceType: V4InfoResponseWorkersInstanceType,
    /**
     * The V4InfoResponseWorkersVmSize model constructor.
     * @property {module:model/V4InfoResponseWorkersVmSize}
     */
    V4InfoResponseWorkersVmSize: V4InfoResponseWorkersVmSize,
    /**
     * The V4ModifyClusterRequest model constructor.
     * @property {module:model/V4ModifyClusterRequest}
     */
    V4ModifyClusterRequest: V4ModifyClusterRequest,
    /**
     * The V4ModifyNodePoolRequest model constructor.
     * @property {module:model/V4ModifyNodePoolRequest}
     */
    V4ModifyNodePoolRequest: V4ModifyNodePoolRequest,
    /**
     * The V4ModifyNodePoolRequestScaling model constructor.
     * @property {module:model/V4ModifyNodePoolRequestScaling}
     */
    V4ModifyNodePoolRequestScaling: V4ModifyNodePoolRequestScaling,
    /**
     * The V4ModifyUserPasswordRequest model constructor.
     * @property {module:model/V4ModifyUserPasswordRequest}
     */
    V4ModifyUserPasswordRequest: V4ModifyUserPasswordRequest,
    /**
     * The V4ModifyUserRequest model constructor.
     * @property {module:model/V4ModifyUserRequest}
     */
    V4ModifyUserRequest: V4ModifyUserRequest,
    /**
     * The V4Organization model constructor.
     * @property {module:model/V4Organization}
     */
    V4Organization: V4Organization,
    /**
     * The V4OrganizationListItem model constructor.
     * @property {module:model/V4OrganizationListItem}
     */
    V4OrganizationListItem: V4OrganizationListItem,
    /**
     * The V4OrganizationMember model constructor.
     * @property {module:model/V4OrganizationMember}
     */
    V4OrganizationMember: V4OrganizationMember,
    /**
     * The V4ReleaseListItem model constructor.
     * @property {module:model/V4ReleaseListItem}
     */
    V4ReleaseListItem: V4ReleaseListItem,
    /**
     * The V4ReleaseListItemChangelog model constructor.
     * @property {module:model/V4ReleaseListItemChangelog}
     */
    V4ReleaseListItemChangelog: V4ReleaseListItemChangelog,
    /**
     * The V4ReleaseListItemComponents model constructor.
     * @property {module:model/V4ReleaseListItemComponents}
     */
    V4ReleaseListItemComponents: V4ReleaseListItemComponents,
    /**
     * The V4UserListItem model constructor.
     * @property {module:model/V4UserListItem}
     */
    V4UserListItem: V4UserListItem,
    /**
     * The AuthTokensApi service constructor.
     * @property {module:api/AuthTokensApi}
     */
    AuthTokensApi: AuthTokensApi,
    /**
     * The ClustersApi service constructor.
     * @property {module:api/ClustersApi}
     */
    ClustersApi: ClustersApi,
    /**
     * The InfoApi service constructor.
     * @property {module:api/InfoApi}
     */
    InfoApi: InfoApi,
    /**
     * The KeyPairsApi service constructor.
     * @property {module:api/KeyPairsApi}
     */
    KeyPairsApi: KeyPairsApi,
    /**
     * The NodepoolsApi service constructor.
     * @property {module:api/NodepoolsApi}
     */
    NodepoolsApi: NodepoolsApi,
    /**
     * The OrganizationsApi service constructor.
     * @property {module:api/OrganizationsApi}
     */
    OrganizationsApi: OrganizationsApi,
    /**
     * The ReleasesApi service constructor.
     * @property {module:api/ReleasesApi}
     */
    ReleasesApi: ReleasesApi,
    /**
     * The UsersApi service constructor.
     * @property {module:api/UsersApi}
     */
    UsersApi: UsersApi
  };

  return exports;
}));
