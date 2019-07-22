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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Body', 'model/V4AddClusterRequest', 'model/V4AddClusterRequestScaling', 'model/V4AddCredentialsRequest', 'model/V4AddCredentialsRequestAws', 'model/V4AddCredentialsRequestAwsRoles', 'model/V4AddCredentialsRequestAzure', 'model/V4AddCredentialsRequestAzureCredential', 'model/V4AddKeyPairRequest', 'model/V4AddKeyPairResponse', 'model/V4App', 'model/V4AppCatalogsResponse', 'model/V4AppCatalogsResponseInner', 'model/V4AppCatalogsResponseInnerMetadata', 'model/V4AppCatalogsResponseInnerSpec', 'model/V4AppCatalogsResponseInnerSpecStorage', 'model/V4AppMetadata', 'model/V4AppSpec', 'model/V4AppSpecUserConfigConfigMap', 'model/V4AppSpecUserConfigConfigMapConfigmap', 'model/V4AppStatus', 'model/V4AppStatusRelease', 'model/V4ClusterDetailsResponse', 'model/V4ClusterDetailsResponseKvm', 'model/V4ClusterDetailsResponseKvmPortMappings', 'model/V4ClusterDetailsResponseScaling', 'model/V4ClusterListItem', 'model/V4CreateAppConfigRequest', 'model/V4CreateAppRequest', 'model/V4CreateAppRequestSpec', 'model/V4CreateAuthTokenRequest', 'model/V4CreateAuthTokenResponse', 'model/V4CreateUserRequest', 'model/V4GenericResponse', 'model/V4GetClusterAppConfigResponse', 'model/V4GetClusterAppsResponse', 'model/V4GetClusterStatusResponse', 'model/V4GetCredentialResponse', 'model/V4GetCredentialResponseAws', 'model/V4GetCredentialResponseAwsRoles', 'model/V4GetCredentialResponseAzure', 'model/V4GetCredentialResponseAzureCredential', 'model/V4GetCredentialsResponse', 'model/V4GetKeyPairsResponse', 'model/V4GetKeyPairsResponseInner', 'model/V4InfoResponse', 'model/V4InfoResponseGeneral', 'model/V4InfoResponseGeneralAvailabilityZones', 'model/V4InfoResponseStats', 'model/V4InfoResponseStatsClusterCreationDuration', 'model/V4InfoResponseWorkers', 'model/V4InfoResponseWorkersCountPerCluster', 'model/V4InfoResponseWorkersInstanceType', 'model/V4InfoResponseWorkersVmSize', 'model/V4ModifyAppRequest', 'model/V4ModifyAppRequestSpec', 'model/V4ModifyClusterRequest', 'model/V4ModifyClusterRequestScaling', 'model/V4ModifyUserPasswordRequest', 'model/V4ModifyUserRequest', 'model/V4NodeDefinition', 'model/V4NodeDefinitionAws', 'model/V4NodeDefinitionAzure', 'model/V4NodeDefinitionCpu', 'model/V4NodeDefinitionMemory', 'model/V4NodeDefinitionStorage', 'model/V4Organization', 'model/V4OrganizationListItem', 'model/V4OrganizationMember', 'model/V4ReleaseListItem', 'model/V4ReleaseListItemChangelog', 'model/V4ReleaseListItemComponents', 'model/V4UserListItem', 'model/V5AddClusterRequest', 'model/V5AddClusterRequestMaster', 'model/V5AddNodePoolRequest', 'model/V5AddNodePoolRequestAvailabilityZones', 'model/V5AddNodePoolRequestNodeSpec', 'model/V5AddNodePoolRequestNodeSpecAws', 'model/V5AddNodePoolRequestScaling', 'model/V5ClusterDetailsResponse', 'model/V5ClusterDetailsResponseConditions', 'model/V5ClusterDetailsResponseMaster', 'model/V5ClusterDetailsResponseVersions', 'model/V5GetNodePoolResponse', 'model/V5GetNodePoolResponseNodeSpec', 'model/V5GetNodePoolResponseNodeSpecAws', 'model/V5GetNodePoolResponseNodeSpecVolumeSizesGb', 'model/V5GetNodePoolResponseScaling', 'model/V5GetNodePoolResponseStatus', 'model/V5GetNodePoolsResponse', 'model/V5ModifyClusterRequest', 'model/V5ModifyNodePoolRequest', 'model/V5ModifyNodePoolRequestScaling', 'api/AppConfigsApi', 'api/AppsApi', 'api/AuthTokensApi', 'api/ClustersApi', 'api/InfoApi', 'api/KeyPairsApi', 'api/NodepoolsApi', 'api/OrganizationsApi', 'api/ReleasesApi', 'api/UsersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Body'), require('./model/V4AddClusterRequest'), require('./model/V4AddClusterRequestScaling'), require('./model/V4AddCredentialsRequest'), require('./model/V4AddCredentialsRequestAws'), require('./model/V4AddCredentialsRequestAwsRoles'), require('./model/V4AddCredentialsRequestAzure'), require('./model/V4AddCredentialsRequestAzureCredential'), require('./model/V4AddKeyPairRequest'), require('./model/V4AddKeyPairResponse'), require('./model/V4App'), require('./model/V4AppCatalogsResponse'), require('./model/V4AppCatalogsResponseInner'), require('./model/V4AppCatalogsResponseInnerMetadata'), require('./model/V4AppCatalogsResponseInnerSpec'), require('./model/V4AppCatalogsResponseInnerSpecStorage'), require('./model/V4AppMetadata'), require('./model/V4AppSpec'), require('./model/V4AppSpecUserConfigConfigMap'), require('./model/V4AppSpecUserConfigConfigMapConfigmap'), require('./model/V4AppStatus'), require('./model/V4AppStatusRelease'), require('./model/V4ClusterDetailsResponse'), require('./model/V4ClusterDetailsResponseKvm'), require('./model/V4ClusterDetailsResponseKvmPortMappings'), require('./model/V4ClusterDetailsResponseScaling'), require('./model/V4ClusterListItem'), require('./model/V4CreateAppConfigRequest'), require('./model/V4CreateAppRequest'), require('./model/V4CreateAppRequestSpec'), require('./model/V4CreateAuthTokenRequest'), require('./model/V4CreateAuthTokenResponse'), require('./model/V4CreateUserRequest'), require('./model/V4GenericResponse'), require('./model/V4GetClusterAppConfigResponse'), require('./model/V4GetClusterAppsResponse'), require('./model/V4GetClusterStatusResponse'), require('./model/V4GetCredentialResponse'), require('./model/V4GetCredentialResponseAws'), require('./model/V4GetCredentialResponseAwsRoles'), require('./model/V4GetCredentialResponseAzure'), require('./model/V4GetCredentialResponseAzureCredential'), require('./model/V4GetCredentialsResponse'), require('./model/V4GetKeyPairsResponse'), require('./model/V4GetKeyPairsResponseInner'), require('./model/V4InfoResponse'), require('./model/V4InfoResponseGeneral'), require('./model/V4InfoResponseGeneralAvailabilityZones'), require('./model/V4InfoResponseStats'), require('./model/V4InfoResponseStatsClusterCreationDuration'), require('./model/V4InfoResponseWorkers'), require('./model/V4InfoResponseWorkersCountPerCluster'), require('./model/V4InfoResponseWorkersInstanceType'), require('./model/V4InfoResponseWorkersVmSize'), require('./model/V4ModifyAppRequest'), require('./model/V4ModifyAppRequestSpec'), require('./model/V4ModifyClusterRequest'), require('./model/V4ModifyClusterRequestScaling'), require('./model/V4ModifyUserPasswordRequest'), require('./model/V4ModifyUserRequest'), require('./model/V4NodeDefinition'), require('./model/V4NodeDefinitionAws'), require('./model/V4NodeDefinitionAzure'), require('./model/V4NodeDefinitionCpu'), require('./model/V4NodeDefinitionMemory'), require('./model/V4NodeDefinitionStorage'), require('./model/V4Organization'), require('./model/V4OrganizationListItem'), require('./model/V4OrganizationMember'), require('./model/V4ReleaseListItem'), require('./model/V4ReleaseListItemChangelog'), require('./model/V4ReleaseListItemComponents'), require('./model/V4UserListItem'), require('./model/V5AddClusterRequest'), require('./model/V5AddClusterRequestMaster'), require('./model/V5AddNodePoolRequest'), require('./model/V5AddNodePoolRequestAvailabilityZones'), require('./model/V5AddNodePoolRequestNodeSpec'), require('./model/V5AddNodePoolRequestNodeSpecAws'), require('./model/V5AddNodePoolRequestScaling'), require('./model/V5ClusterDetailsResponse'), require('./model/V5ClusterDetailsResponseConditions'), require('./model/V5ClusterDetailsResponseMaster'), require('./model/V5ClusterDetailsResponseVersions'), require('./model/V5GetNodePoolResponse'), require('./model/V5GetNodePoolResponseNodeSpec'), require('./model/V5GetNodePoolResponseNodeSpecAws'), require('./model/V5GetNodePoolResponseNodeSpecVolumeSizesGb'), require('./model/V5GetNodePoolResponseScaling'), require('./model/V5GetNodePoolResponseStatus'), require('./model/V5GetNodePoolsResponse'), require('./model/V5ModifyClusterRequest'), require('./model/V5ModifyNodePoolRequest'), require('./model/V5ModifyNodePoolRequestScaling'), require('./api/AppConfigsApi'), require('./api/AppsApi'), require('./api/AuthTokensApi'), require('./api/ClustersApi'), require('./api/InfoApi'), require('./api/KeyPairsApi'), require('./api/NodepoolsApi'), require('./api/OrganizationsApi'), require('./api/ReleasesApi'), require('./api/UsersApi'));
  }
}(function(ApiClient, Body, V4AddClusterRequest, V4AddClusterRequestScaling, V4AddCredentialsRequest, V4AddCredentialsRequestAws, V4AddCredentialsRequestAwsRoles, V4AddCredentialsRequestAzure, V4AddCredentialsRequestAzureCredential, V4AddKeyPairRequest, V4AddKeyPairResponse, V4App, V4AppCatalogsResponse, V4AppCatalogsResponseInner, V4AppCatalogsResponseInnerMetadata, V4AppCatalogsResponseInnerSpec, V4AppCatalogsResponseInnerSpecStorage, V4AppMetadata, V4AppSpec, V4AppSpecUserConfigConfigMap, V4AppSpecUserConfigConfigMapConfigmap, V4AppStatus, V4AppStatusRelease, V4ClusterDetailsResponse, V4ClusterDetailsResponseKvm, V4ClusterDetailsResponseKvmPortMappings, V4ClusterDetailsResponseScaling, V4ClusterListItem, V4CreateAppConfigRequest, V4CreateAppRequest, V4CreateAppRequestSpec, V4CreateAuthTokenRequest, V4CreateAuthTokenResponse, V4CreateUserRequest, V4GenericResponse, V4GetClusterAppConfigResponse, V4GetClusterAppsResponse, V4GetClusterStatusResponse, V4GetCredentialResponse, V4GetCredentialResponseAws, V4GetCredentialResponseAwsRoles, V4GetCredentialResponseAzure, V4GetCredentialResponseAzureCredential, V4GetCredentialsResponse, V4GetKeyPairsResponse, V4GetKeyPairsResponseInner, V4InfoResponse, V4InfoResponseGeneral, V4InfoResponseGeneralAvailabilityZones, V4InfoResponseStats, V4InfoResponseStatsClusterCreationDuration, V4InfoResponseWorkers, V4InfoResponseWorkersCountPerCluster, V4InfoResponseWorkersInstanceType, V4InfoResponseWorkersVmSize, V4ModifyAppRequest, V4ModifyAppRequestSpec, V4ModifyClusterRequest, V4ModifyClusterRequestScaling, V4ModifyUserPasswordRequest, V4ModifyUserRequest, V4NodeDefinition, V4NodeDefinitionAws, V4NodeDefinitionAzure, V4NodeDefinitionCpu, V4NodeDefinitionMemory, V4NodeDefinitionStorage, V4Organization, V4OrganizationListItem, V4OrganizationMember, V4ReleaseListItem, V4ReleaseListItemChangelog, V4ReleaseListItemComponents, V4UserListItem, V5AddClusterRequest, V5AddClusterRequestMaster, V5AddNodePoolRequest, V5AddNodePoolRequestAvailabilityZones, V5AddNodePoolRequestNodeSpec, V5AddNodePoolRequestNodeSpecAws, V5AddNodePoolRequestScaling, V5ClusterDetailsResponse, V5ClusterDetailsResponseConditions, V5ClusterDetailsResponseMaster, V5ClusterDetailsResponseVersions, V5GetNodePoolResponse, V5GetNodePoolResponseNodeSpec, V5GetNodePoolResponseNodeSpecAws, V5GetNodePoolResponseNodeSpecVolumeSizesGb, V5GetNodePoolResponseScaling, V5GetNodePoolResponseStatus, V5GetNodePoolsResponse, V5ModifyClusterRequest, V5ModifyNodePoolRequest, V5ModifyNodePoolRequestScaling, AppConfigsApi, AppsApi, AuthTokensApi, ClustersApi, InfoApi, KeyPairsApi, NodepoolsApi, OrganizationsApi, ReleasesApi, UsersApi) {
  'use strict';

  /**
   * Generated JavaScript client for the Giant Swarm API..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var GiantSwarm = require('index'); // See note below*.
   * var xxxSvc = new GiantSwarm.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new GiantSwarm.Yyy(); // Construct a model instance.
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
   * var xxxSvc = new GiantSwarm.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new GiantSwarm.Yyy(); // Construct a model instance.
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
     * The V4AddClusterRequestScaling model constructor.
     * @property {module:model/V4AddClusterRequestScaling}
     */
    V4AddClusterRequestScaling: V4AddClusterRequestScaling,
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
     * The V4App model constructor.
     * @property {module:model/V4App}
     */
    V4App: V4App,
    /**
     * The V4AppCatalogsResponse model constructor.
     * @property {module:model/V4AppCatalogsResponse}
     */
    V4AppCatalogsResponse: V4AppCatalogsResponse,
    /**
     * The V4AppCatalogsResponseInner model constructor.
     * @property {module:model/V4AppCatalogsResponseInner}
     */
    V4AppCatalogsResponseInner: V4AppCatalogsResponseInner,
    /**
     * The V4AppCatalogsResponseInnerMetadata model constructor.
     * @property {module:model/V4AppCatalogsResponseInnerMetadata}
     */
    V4AppCatalogsResponseInnerMetadata: V4AppCatalogsResponseInnerMetadata,
    /**
     * The V4AppCatalogsResponseInnerSpec model constructor.
     * @property {module:model/V4AppCatalogsResponseInnerSpec}
     */
    V4AppCatalogsResponseInnerSpec: V4AppCatalogsResponseInnerSpec,
    /**
     * The V4AppCatalogsResponseInnerSpecStorage model constructor.
     * @property {module:model/V4AppCatalogsResponseInnerSpecStorage}
     */
    V4AppCatalogsResponseInnerSpecStorage: V4AppCatalogsResponseInnerSpecStorage,
    /**
     * The V4AppMetadata model constructor.
     * @property {module:model/V4AppMetadata}
     */
    V4AppMetadata: V4AppMetadata,
    /**
     * The V4AppSpec model constructor.
     * @property {module:model/V4AppSpec}
     */
    V4AppSpec: V4AppSpec,
    /**
     * The V4AppSpecUserConfigConfigMap model constructor.
     * @property {module:model/V4AppSpecUserConfigConfigMap}
     */
    V4AppSpecUserConfigConfigMap: V4AppSpecUserConfigConfigMap,
    /**
     * The V4AppSpecUserConfigConfigMapConfigmap model constructor.
     * @property {module:model/V4AppSpecUserConfigConfigMapConfigmap}
     */
    V4AppSpecUserConfigConfigMapConfigmap: V4AppSpecUserConfigConfigMapConfigmap,
    /**
     * The V4AppStatus model constructor.
     * @property {module:model/V4AppStatus}
     */
    V4AppStatus: V4AppStatus,
    /**
     * The V4AppStatusRelease model constructor.
     * @property {module:model/V4AppStatusRelease}
     */
    V4AppStatusRelease: V4AppStatusRelease,
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
     * The V4ClusterDetailsResponseScaling model constructor.
     * @property {module:model/V4ClusterDetailsResponseScaling}
     */
    V4ClusterDetailsResponseScaling: V4ClusterDetailsResponseScaling,
    /**
     * The V4ClusterListItem model constructor.
     * @property {module:model/V4ClusterListItem}
     */
    V4ClusterListItem: V4ClusterListItem,
    /**
     * The V4CreateAppConfigRequest model constructor.
     * @property {module:model/V4CreateAppConfigRequest}
     */
    V4CreateAppConfigRequest: V4CreateAppConfigRequest,
    /**
     * The V4CreateAppRequest model constructor.
     * @property {module:model/V4CreateAppRequest}
     */
    V4CreateAppRequest: V4CreateAppRequest,
    /**
     * The V4CreateAppRequestSpec model constructor.
     * @property {module:model/V4CreateAppRequestSpec}
     */
    V4CreateAppRequestSpec: V4CreateAppRequestSpec,
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
     * The V4GetClusterAppConfigResponse model constructor.
     * @property {module:model/V4GetClusterAppConfigResponse}
     */
    V4GetClusterAppConfigResponse: V4GetClusterAppConfigResponse,
    /**
     * The V4GetClusterAppsResponse model constructor.
     * @property {module:model/V4GetClusterAppsResponse}
     */
    V4GetClusterAppsResponse: V4GetClusterAppsResponse,
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
     * The V4InfoResponseStats model constructor.
     * @property {module:model/V4InfoResponseStats}
     */
    V4InfoResponseStats: V4InfoResponseStats,
    /**
     * The V4InfoResponseStatsClusterCreationDuration model constructor.
     * @property {module:model/V4InfoResponseStatsClusterCreationDuration}
     */
    V4InfoResponseStatsClusterCreationDuration: V4InfoResponseStatsClusterCreationDuration,
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
     * The V4ModifyAppRequest model constructor.
     * @property {module:model/V4ModifyAppRequest}
     */
    V4ModifyAppRequest: V4ModifyAppRequest,
    /**
     * The V4ModifyAppRequestSpec model constructor.
     * @property {module:model/V4ModifyAppRequestSpec}
     */
    V4ModifyAppRequestSpec: V4ModifyAppRequestSpec,
    /**
     * The V4ModifyClusterRequest model constructor.
     * @property {module:model/V4ModifyClusterRequest}
     */
    V4ModifyClusterRequest: V4ModifyClusterRequest,
    /**
     * The V4ModifyClusterRequestScaling model constructor.
     * @property {module:model/V4ModifyClusterRequestScaling}
     */
    V4ModifyClusterRequestScaling: V4ModifyClusterRequestScaling,
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
     * The V4NodeDefinition model constructor.
     * @property {module:model/V4NodeDefinition}
     */
    V4NodeDefinition: V4NodeDefinition,
    /**
     * The V4NodeDefinitionAws model constructor.
     * @property {module:model/V4NodeDefinitionAws}
     */
    V4NodeDefinitionAws: V4NodeDefinitionAws,
    /**
     * The V4NodeDefinitionAzure model constructor.
     * @property {module:model/V4NodeDefinitionAzure}
     */
    V4NodeDefinitionAzure: V4NodeDefinitionAzure,
    /**
     * The V4NodeDefinitionCpu model constructor.
     * @property {module:model/V4NodeDefinitionCpu}
     */
    V4NodeDefinitionCpu: V4NodeDefinitionCpu,
    /**
     * The V4NodeDefinitionMemory model constructor.
     * @property {module:model/V4NodeDefinitionMemory}
     */
    V4NodeDefinitionMemory: V4NodeDefinitionMemory,
    /**
     * The V4NodeDefinitionStorage model constructor.
     * @property {module:model/V4NodeDefinitionStorage}
     */
    V4NodeDefinitionStorage: V4NodeDefinitionStorage,
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
     * The V5AddClusterRequest model constructor.
     * @property {module:model/V5AddClusterRequest}
     */
    V5AddClusterRequest: V5AddClusterRequest,
    /**
     * The V5AddClusterRequestMaster model constructor.
     * @property {module:model/V5AddClusterRequestMaster}
     */
    V5AddClusterRequestMaster: V5AddClusterRequestMaster,
    /**
     * The V5AddNodePoolRequest model constructor.
     * @property {module:model/V5AddNodePoolRequest}
     */
    V5AddNodePoolRequest: V5AddNodePoolRequest,
    /**
     * The V5AddNodePoolRequestAvailabilityZones model constructor.
     * @property {module:model/V5AddNodePoolRequestAvailabilityZones}
     */
    V5AddNodePoolRequestAvailabilityZones: V5AddNodePoolRequestAvailabilityZones,
    /**
     * The V5AddNodePoolRequestNodeSpec model constructor.
     * @property {module:model/V5AddNodePoolRequestNodeSpec}
     */
    V5AddNodePoolRequestNodeSpec: V5AddNodePoolRequestNodeSpec,
    /**
     * The V5AddNodePoolRequestNodeSpecAws model constructor.
     * @property {module:model/V5AddNodePoolRequestNodeSpecAws}
     */
    V5AddNodePoolRequestNodeSpecAws: V5AddNodePoolRequestNodeSpecAws,
    /**
     * The V5AddNodePoolRequestScaling model constructor.
     * @property {module:model/V5AddNodePoolRequestScaling}
     */
    V5AddNodePoolRequestScaling: V5AddNodePoolRequestScaling,
    /**
     * The V5ClusterDetailsResponse model constructor.
     * @property {module:model/V5ClusterDetailsResponse}
     */
    V5ClusterDetailsResponse: V5ClusterDetailsResponse,
    /**
     * The V5ClusterDetailsResponseConditions model constructor.
     * @property {module:model/V5ClusterDetailsResponseConditions}
     */
    V5ClusterDetailsResponseConditions: V5ClusterDetailsResponseConditions,
    /**
     * The V5ClusterDetailsResponseMaster model constructor.
     * @property {module:model/V5ClusterDetailsResponseMaster}
     */
    V5ClusterDetailsResponseMaster: V5ClusterDetailsResponseMaster,
    /**
     * The V5ClusterDetailsResponseVersions model constructor.
     * @property {module:model/V5ClusterDetailsResponseVersions}
     */
    V5ClusterDetailsResponseVersions: V5ClusterDetailsResponseVersions,
    /**
     * The V5GetNodePoolResponse model constructor.
     * @property {module:model/V5GetNodePoolResponse}
     */
    V5GetNodePoolResponse: V5GetNodePoolResponse,
    /**
     * The V5GetNodePoolResponseNodeSpec model constructor.
     * @property {module:model/V5GetNodePoolResponseNodeSpec}
     */
    V5GetNodePoolResponseNodeSpec: V5GetNodePoolResponseNodeSpec,
    /**
     * The V5GetNodePoolResponseNodeSpecAws model constructor.
     * @property {module:model/V5GetNodePoolResponseNodeSpecAws}
     */
    V5GetNodePoolResponseNodeSpecAws: V5GetNodePoolResponseNodeSpecAws,
    /**
     * The V5GetNodePoolResponseNodeSpecVolumeSizesGb model constructor.
     * @property {module:model/V5GetNodePoolResponseNodeSpecVolumeSizesGb}
     */
    V5GetNodePoolResponseNodeSpecVolumeSizesGb: V5GetNodePoolResponseNodeSpecVolumeSizesGb,
    /**
     * The V5GetNodePoolResponseScaling model constructor.
     * @property {module:model/V5GetNodePoolResponseScaling}
     */
    V5GetNodePoolResponseScaling: V5GetNodePoolResponseScaling,
    /**
     * The V5GetNodePoolResponseStatus model constructor.
     * @property {module:model/V5GetNodePoolResponseStatus}
     */
    V5GetNodePoolResponseStatus: V5GetNodePoolResponseStatus,
    /**
     * The V5GetNodePoolsResponse model constructor.
     * @property {module:model/V5GetNodePoolsResponse}
     */
    V5GetNodePoolsResponse: V5GetNodePoolsResponse,
    /**
     * The V5ModifyClusterRequest model constructor.
     * @property {module:model/V5ModifyClusterRequest}
     */
    V5ModifyClusterRequest: V5ModifyClusterRequest,
    /**
     * The V5ModifyNodePoolRequest model constructor.
     * @property {module:model/V5ModifyNodePoolRequest}
     */
    V5ModifyNodePoolRequest: V5ModifyNodePoolRequest,
    /**
     * The V5ModifyNodePoolRequestScaling model constructor.
     * @property {module:model/V5ModifyNodePoolRequestScaling}
     */
    V5ModifyNodePoolRequestScaling: V5ModifyNodePoolRequestScaling,
    /**
     * The AppConfigsApi service constructor.
     * @property {module:api/AppConfigsApi}
     */
    AppConfigsApi: AppConfigsApi,
    /**
     * The AppsApi service constructor.
     * @property {module:api/AppsApi}
     */
    AppsApi: AppsApi,
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
