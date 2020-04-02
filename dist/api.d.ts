export interface FetchAPI {
    (url: string, init?: any): Promise<any>;
}
export interface FetchArgs {
    url: string;
    options: any;
}
export declare class BaseAPI {
    basePath: string;
    fetch: FetchAPI;
    constructor(fetch?: FetchAPI, basePath?: string);
}
export interface Body {
    /**
     * List of members that belong to this organization
     */
    "members"?: Array<V4OrganizationMember>;
}
/**
 * Request model for creating a new cluster
 */
export interface V4AddClusterRequest {
    /**
     * Name of the organization owning the cluster
     */
    "owner": string;
    /**
     * Cluster name
     */
    "name"?: string;
    /**
     * The [release](https://docs.giantswarm.io/api/#tag/releases) version to use in the new cluster
     */
    "releaseVersion"?: string;
    /**
     * Number of availability zones a cluster should be spread across. The default is provided via the [info](#operation/getInfo) endpoint.
     */
    "availabilityZones"?: number;
    "scaling"?: V4AddClusterRequestScaling;
    /**
     * Worker node definition on KVM and Azure. If present, the first item of the array is expected to contain the specification for all worker nodes. Not available on AWS.
     */
    "workers"?: Array<V4NodeDefinition>;
}
/**
 * Attributes specific to cluster node scaling on KVM and Azure. To have full control of the cluster size, min and max can be set to the same value. If only `min` or only `max` is specified, `min` and `max` will be set equally. Not available on AWS.
 */
export interface V4AddClusterRequestScaling {
    /**
     * Minimum number of cluster nodes
     */
    "min"?: number;
    /**
     * Maximum number of cluster nodes
     */
    "max"?: number;
}
/**
 * Request model for adding a set of credentials
 */
export interface V4AddCredentialsRequest {
    "provider": string;
    "aws"?: V4AddCredentialsRequestAws;
    "azure"?: V4AddCredentialsRequestAzure;
}
/**
 * Credentials specific to an AWS account
 */
export interface V4AddCredentialsRequestAws {
    "roles"?: V4AddCredentialsRequestAwsRoles;
}
/**
 * IAM roles to assume by certain entities
 */
export interface V4AddCredentialsRequestAwsRoles {
    /**
     * ARN of the IAM role to assume by Giant Swarm support staff
     */
    "admin": string;
    /**
     * ARN of the IAM role to assume by the software operating clusters
     */
    "awsoperator": string;
}
/**
 * Credentials specific to an Azure service principal
 */
export interface V4AddCredentialsRequestAzure {
    "credential"?: V4AddCredentialsRequestAzureCredential;
}
/**
 * Service principal credential
 */
export interface V4AddCredentialsRequestAzureCredential {
    /**
     * Client ID of the service principal
     */
    "clientId": string;
    /**
     * Secret key of the service principal
     */
    "secretKey": string;
    /**
     * Azure subscription ID
     */
    "subscriptionId": string;
    /**
     * Tenant ID of the Azure subscription
     */
    "tenantId": string;
}
export interface V4AddKeyPairRequest {
    /**
     * Free text information about the key pair
     */
    "description": string;
    /**
     * Expiration time (from creation) in hours
     */
    "ttlHours"?: number;
    /**
     * The common name prefix of the certificate subject. This only allows characters that are usable in domain names (`a-z`, `0-9`, and `.-`, where `.-` must not occur at either the start or the end).
     */
    "cnPrefix"?: string;
    /**
     * This will set the certificate subject's `organization` fields. Use a comma seperated list of values.
     */
    "certificateOrganizations"?: string;
}
export interface V4AddKeyPairResponse {
    /**
     * Unique identifier of the key pair
     */
    "id"?: string;
    /**
     * Free text information about the key pair
     */
    "description"?: string;
    /**
     * Expiration time (from creation) in hours
     */
    "ttlHours"?: number;
    /**
     * Date/time of creation
     */
    "createDate"?: string;
    /**
     * PEM-encoded CA certificate of the cluster
     */
    "certificateAuthorityData"?: string;
    /**
     * PEM-encoded RSA private key
     */
    "clientKeyData"?: string;
    /**
     * PEM-encoded certificate
     */
    "clientCertificateData"?: string;
}
export interface V4App {
    "metadata"?: V4AppMetadata;
    "spec"?: V4AppSpec;
    "status"?: V4AppStatus;
}
export interface V4AppCatalogsResponse extends Array<V4AppCatalogsResponseInner> {
}
export interface V4AppCatalogsResponseInner {
    "metadata"?: V4AppCatalogsResponseInnerMetadata;
    "spec"?: V4AppCatalogsResponseInnerSpec;
}
export interface V4AppCatalogsResponseInnerMetadata {
    /**
     * A URL friendly identifier for the catalog.
     */
    "name"?: string;
    "labels"?: V4AppCatalogsResponseInnerMetadataLabels;
}
/**
 * The labels that are set on this app catalog
 */
export interface V4AppCatalogsResponseInnerMetadataLabels {
    "applicationGiantswarmIoCatalog-type"?: string;
    "app-operatorGiantswarmIoVersion"?: string;
}
export interface V4AppCatalogsResponseInnerSpec {
    /**
     * A display friendly title for this catalog.
     */
    "title"?: string;
    /**
     * A description of the catalog.
     */
    "description"?: string;
    /**
     * A URL to a logo representing this catalog.
     */
    "logoURL"?: string;
    "storage"?: V4AppCatalogsResponseInnerSpecStorage;
}
/**
 * Contains information on where to find the full catalog, and what type of catalog it is.
 */
export interface V4AppCatalogsResponseInnerSpecStorage {
    /**
     * A URL where clients can download the full catalog.
     */
    "uRL"?: string;
    /**
     * The format of this catalog. (Currently only helm is supported.)
     */
    "type"?: string;
}
export interface V4AppMetadata {
    /**
     * The identifier you set when creating this app
     */
    "name"?: string;
    /**
     * The labels that are set on this App
     */
    "labels"?: any;
}
export interface V4AppSpec {
    /**
     * Name of the chart that was used to install this app
     */
    "name"?: string;
    /**
     * Namespace that this app is installed to
     */
    "namespace"?: string;
    /**
     * Version of the chart that was used to install this app
     */
    "version"?: string;
    /**
     * The catalog that this app came from
     */
    "catalog"?: string;
    "userConfig"?: V4AppSpecUserConfig;
}
/**
 * User definable configuration to be applied when the app is deployed
 */
export interface V4AppSpecUserConfig {
    "configmap"?: V4AppSpecUserConfigConfigmap;
    "secret"?: V4AppSpecUserConfigSecret;
}
export interface V4AppSpecUserConfigConfigmap {
    /**
     * Name of the config map containing values to apply, e.g. prometheus-user-values
     */
    "name"?: string;
    /**
     * Namespace of the values config map on the control plane, e.g. 123ab
     */
    "namespace"?: string;
}
export interface V4AppSpecUserConfigSecret {
    /**
     * Name of the Secret on the control plane, which will become available wherever the app is installed
     */
    "name"?: string;
    /**
     * Namespace of the Secret on the control plane, e.g. 123ab
     */
    "namespace"?: string;
}
export interface V4AppStatus {
    /**
     * Version of the installed app
     */
    "appVersion"?: string;
    /**
     * Version of the chart that was used to install this app
     */
    "version"?: string;
    "release"?: V4AppStatusRelease;
}
export interface V4AppStatusRelease {
    /**
     * Date and time that the app was last last deployed
     */
    "lastDeployed"?: string;
    /**
     * A string representing the status of the app. (Can be: empty, DEPLOYED or FAILED)
     */
    "status"?: string;
}
/**
 * Response model showing details of a cluster
 */
export interface V4ClusterDetailsResponse {
    /**
     * Unique cluster identifier
     */
    "id"?: string;
    /**
     * URI of the Kubernetes API endpoint
     */
    "apiEndpoint"?: string;
    /**
     * Date/time of cluster creation
     */
    "createDate"?: string;
    /**
     * Date/time when cluster has been deleted
     */
    "deleteDate"?: Date;
    /**
     * Name of the organization owning the cluster
     */
    "owner"?: string;
    /**
     * Cluster name
     */
    "name"?: string;
    /**
     * ID of the credentials used to operate the cluster (only on AWS and Azure). See [Set credentials](#operation/addCredentials) for details.
     */
    "credentialId"?: string;
    /**
     * The [release](https://docs.giantswarm.io/api/#tag/releases) version currently running this cluster.
     */
    "releaseVersion"?: string;
    "scaling"?: V4ClusterDetailsResponseScaling;
    /**
     * List of availability zones a cluster is spread across.
     */
    "availabilityZones"?: Array<string>;
    /**
     * Information about worker nodes in the cluster (deprecated)
     */
    "workers"?: Array<V4NodeDefinition>;
    "kvm"?: V4ClusterDetailsResponseKvm;
}
/**
 * Attributes specific to clusters running on KVM (on-prem) installations.
 */
export interface V4ClusterDetailsResponseKvm {
    /**
     * Reveals the ports on the control plane that are mapped to this tenant cluster's ingress and which protocol that port supports. Only shown and relevant on our on-prem KVM clusters.
     */
    "portMappings"?: Array<V4ClusterDetailsResponseKvmPortMappings>;
}
export interface V4ClusterDetailsResponseKvmPortMappings {
    /**
     * The port on the control plane that will forward traffic to the tenant cluster
     */
    "port"?: number;
    /**
     * The protocol this port mapping is made for.
     */
    "protocol"?: string;
}
/**
 * Attributes specific to cluster node scaling as set during cluster creation or cluster scaling.
 */
export interface V4ClusterDetailsResponseScaling {
    /**
     * Minimum number of cluster nodes as configured
     */
    "min"?: number;
    /**
     * Maximum number of cluster nodes as configured
     */
    "max"?: number;
}
export interface V4ClusterListItem {
    /**
     * Unique cluster identifier
     */
    "id"?: string;
    /**
     * Date/time of cluster creation
     */
    "createDate"?: string;
    /**
     * Date/time when cluster has been deleted
     */
    "deleteDate"?: Date;
    /**
     * Cluster name
     */
    "name"?: string;
    /**
     * Name of the organization owning the cluster
     */
    "owner"?: string;
    /**
     * The semantic version number of this cluster
     */
    "releaseVersion"?: string;
    /**
     * API path of the cluster resource
     */
    "path"?: string;
}
/**
 * A part of the App CR that we create behind the scenes
 */
export interface V4CreateAppConfigRequest {
}
/**
 * A part of the App CR that we create behind the scenes
 */
export interface V4CreateAppRequest {
    "spec"?: V4CreateAppRequestSpec;
}
export interface V4CreateAppRequestSpec {
    /**
     * Name of the chart that should be used to install this app
     */
    "name": string;
    /**
     * Namespace that this app will be installed to
     */
    "namespace": string;
    /**
     * Version of the chart that should be used to install this app
     */
    "version": string;
    /**
     * The catalog where the chart for this app can be found
     */
    "catalog": string;
}
export interface V4CreateAuthTokenRequest {
    /**
     * Your email address
     */
    "email"?: string;
    /**
     * Your password as a base64 encoded string
     */
    "passwordBase64"?: string;
}
export interface V4CreateAuthTokenResponse {
    /**
     * The newly created API token
     */
    "authToken"?: string;
}
/**
 * The values to be used when creating a Secret for a given app
 */
export interface V4CreateClusterAppSecretRequest {
}
/**
 * Request model for creating a new user
 */
export interface V4CreateUserRequest {
    /**
     * A Base64 encoded password
     */
    "password": string;
    /**
     * The date and time when this account will expire
     */
    "expiry"?: string;
}
export interface V4GenericResponse {
    /**
     * A human readable message
     */
    "message"?: string;
    /**
     * A machine readable [response code](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) like e. g. `INVALID_CREDENTIALS`
     */
    "code"?: string;
}
/**
 * The values configmap for a given app returned as a yaml file
 */
export interface V4GetClusterAppConfigResponse {
}
/**
 * The response for showing a Secret for a given app
 */
export interface V4GetClusterAppSecretResponse {
}
/**
 * Array of apps
 */
export interface V4GetClusterAppsResponse extends Array<V4App> {
}
/**
 * Object about a cluster's current state
 */
export interface V4GetClusterStatusResponse {
}
/**
 * Response model for getting details on a set of credentials
 */
export interface V4GetCredentialResponse {
    /**
     * Unique ID of the credentials
     */
    "id"?: string;
    /**
     * Either 'aws' or 'azure'
     */
    "provider"?: string;
    "aws"?: V4GetCredentialResponseAws;
    "azure"?: V4GetCredentialResponseAzure;
}
/**
 * Credentials specific to an AWS account
 */
export interface V4GetCredentialResponseAws {
    "roles"?: V4GetCredentialResponseAwsRoles;
}
/**
 * IAM roles to assume by certain entities
 */
export interface V4GetCredentialResponseAwsRoles {
    /**
     * ARN of the IAM role Giant Swarm support staff will use
     */
    "admin"?: string;
    /**
     * ARN of the IAM role assumed by the software operating the clusters
     */
    "awsoperator"?: string;
}
/**
 * Credentials specific to an Azure service principal
 */
export interface V4GetCredentialResponseAzure {
    "credential"?: V4GetCredentialResponseAzureCredential;
}
/**
 * Service principal credential
 */
export interface V4GetCredentialResponseAzureCredential {
    /**
     * Client ID of the service principal
     */
    "clientId"?: string;
    /**
     * Azure subscription ID
     */
    "subscriptionId"?: string;
    /**
     * Tenant ID of the Azure subscription
     */
    "tenantId"?: string;
}
/**
 * List of credential sets for an organization. As of now, this can contain either zero or one items.
 */
export interface V4GetCredentialsResponse extends Array<V4GetCredentialResponse> {
}
/**
 * Array of sparse key pair objects
 */
export interface V4GetKeyPairsResponse extends Array<V4GetKeyPairsResponseInner> {
}
export interface V4GetKeyPairsResponseInner {
    /**
     * Unique identifier of the key pair
     */
    "id"?: string;
    /**
     * Free text information about the key pair
     */
    "description"?: string;
    /**
     * Expiration time (from creation) in hours
     */
    "ttlHours"?: number;
    /**
     * Date/time of creation
     */
    "createDate"?: string;
    /**
     * The common name of the certificate subject.
     */
    "commonName"?: string;
    /**
     * The certificate subject's `organization` fields.
     */
    "certificateOrganizations"?: string;
}
export interface V4InfoResponse {
    "general"?: V4InfoResponseGeneral;
    "features"?: V4InfoResponseFeatures;
    "stats"?: V4InfoResponseStats;
    "workers"?: V4InfoResponseWorkers;
}
/**
 * Information on particular capabilities of the installation.
 */
export interface V4InfoResponseFeatures {
    "nodepools"?: V4InfoResponseFeaturesNodepools;
}
/**
 * Support for grouping of worker nodes into node pools.
 */
export interface V4InfoResponseFeaturesNodepools {
    /**
     * The minimum release version number required to have support for node pools.
     */
    "releaseVersionMinimum"?: string;
}
/**
 * General information
 */
export interface V4InfoResponseGeneral {
    /**
     * Unique name of the installation
     */
    "installationName"?: string;
    /**
     * The technical provider used in this installation. Either \"kvm\", \"aws\", or \"azure\".
     */
    "provider"?: string;
    /**
     * Identifier of the datacenter or cloud provider region, e. g. \"eu-west-1\"
     */
    "datacenter"?: string;
    "availabilityZones"?: V4InfoResponseGeneralAvailabilityZones;
}
/**
 * Number of availability zones which a cluster can be spread across.
 */
export interface V4InfoResponseGeneralAvailabilityZones {
    /**
     * Number of availability zones in the region of this installation.
     */
    "max": number;
    /**
     * Default number of availability zones for a cluster.
     */
    "default": number;
    /**
     * The availability zones available in the installation's region for use with tenant clusters.
     */
    "zones"?: Array<string>;
}
/**
 * Statistics about the installation
 */
export interface V4InfoResponseStats {
    "clusterCreationDuration"?: V4InfoResponseStatsClusterCreationDuration;
}
/**
 * Duration of cluster creation, summarized.
 */
export interface V4InfoResponseStatsClusterCreationDuration {
    /**
     * Median of the value distribution
     */
    "median"?: number;
    /**
     * 25th percentile of the value distribution
     */
    "p25"?: number;
    /**
     * 75th percentile of the value distribution
     */
    "p75"?: number;
}
/**
 * Information related to worker nodes
 */
export interface V4InfoResponseWorkers {
    "countPerCluster"?: V4InfoResponseWorkersCountPerCluster;
    "instanceType"?: V4InfoResponseWorkersInstanceType;
    "vmSize"?: V4InfoResponseWorkersVmSize;
}
/**
 * Number of workers per cluster
 */
export interface V4InfoResponseWorkersCountPerCluster {
    /**
     * Maximum number of worker a cluster can have. Might be null when unknown.
     */
    "max"?: number;
    /**
     * Default number of workers in a new cluster will have, if not specifiec otherwise
     */
    "default"?: number;
}
/**
 * Instance types to be used for worker nodes. Only available for AWS clusters.
 */
export interface V4InfoResponseWorkersInstanceType {
    /**
     * List of available instance types
     */
    "options"?: Array<string>;
    /**
     * The instance type used in new cluster, if not specified
     */
    "default"?: string;
}
/**
 * Azure Virtual Machine size to be used for worker nodes. Only available for Azure clusters.
 */
export interface V4InfoResponseWorkersVmSize {
    /**
     * List of available instance types
     */
    "options"?: Array<string>;
    /**
     * The instance type used in new cluster, if not specified
     */
    "default"?: string;
}
/**
 * The fields that are editable when trying to modify an app
 */
export interface V4ModifyAppRequest {
    "spec"?: V4ModifyAppRequestSpec;
}
export interface V4ModifyAppRequestSpec {
    /**
     * Version of the chart that should be used to install this app
     */
    "version"?: string;
}
/**
 * Request body for cluster modification
 */
export interface V4ModifyClusterRequest {
    /**
     * Name for the cluster
     */
    "name"?: string;
    /**
     * Name of the organization owning the cluster
     */
    "owner"?: string;
    /**
     * Release version to use after an upgrade
     */
    "releaseVersion"?: string;
    "scaling"?: V4ModifyClusterRequestScaling;
    /**
     * Worker node array (deprecated)
     */
    "workers"?: Array<V4NodeDefinition>;
}
/**
 * Attributes specific to cluster node scaling. To have full control of the cluster size, min and max can be set to the same value.
 */
export interface V4ModifyClusterRequestScaling {
    /**
     * Minimum number of cluster nodes
     */
    "min"?: number;
    /**
     * Maximum number of cluster nodes
     */
    "max"?: number;
}
/**
 * Request model for modifying a user's password
 */
export interface V4ModifyUserPasswordRequest {
    /**
     * Current password encoded in Base64. Not required for admins
     */
    "currentPasswordBase64"?: string;
    /**
     * New password encoded in Base64
     */
    "newPasswordBase64": string;
}
/**
 * Request model for modifying a specific user
 */
export interface V4ModifyUserRequest {
    /**
     * New email address
     */
    "email"?: string;
    /**
     * New expiry date. (Only editable by admins)
     */
    "expiry"?: string;
}
export interface V4NodeDefinition {
    "aws"?: V4NodeDefinitionAws;
    "azure"?: V4NodeDefinitionAzure;
    "memory"?: V4NodeDefinitionMemory;
    "storage"?: V4NodeDefinitionStorage;
    "cpu"?: V4NodeDefinitionCpu;
    "labels"?: any;
}
/**
 * Attributes specific to nodes running on Amazon Web Services (AWS)
 */
export interface V4NodeDefinitionAws {
    /**
     * EC2 instance type name. Must be the same for all worker nodes of a cluster.
     */
    "instanceType"?: string;
}
/**
 * Attributes specific to nodes running on Microsoft Azure
 */
export interface V4NodeDefinitionAzure {
    /**
     * Azure Virtual Machine size. Must be the same for all worker nodes of a cluster.
     */
    "vmSize"?: string;
}
export interface V4NodeDefinitionCpu {
    /**
     * Number of CPU cores
     */
    "cores"?: number;
}
export interface V4NodeDefinitionMemory {
    /**
     * RAM size in GB. Can be an integer or float.
     */
    "sizeGb"?: number;
}
export interface V4NodeDefinitionStorage {
    /**
     * Node storage size in GB. Can be an integer or float.
     */
    "sizeGb"?: number;
}
export interface V4Organization {
    /**
     * Unique name/identifier of the organization
     */
    "id"?: string;
    /**
     * List of members that belong to this organization
     */
    "members"?: Array<V4OrganizationMember>;
}
export interface V4OrganizationListItem {
    /**
     * Unique name/identifier of the organization
     */
    "id"?: string;
}
export interface V4OrganizationMember {
    /**
     * Email address of the user
     */
    "email"?: string;
}
export interface V4ReleaseListItem {
    /**
     * The semantic version number
     */
    "version": string;
    /**
     * Date and time of the release creation
     */
    "timestamp": string;
    /**
     * If true, the version is available for new clusters and cluster upgrades. Older versions become unavailable and thus have the value `false` here.
     */
    "active"?: boolean;
    /**
     * Structured list of changes in this release, in comparison to the previous version, with respect to the contained components.
     */
    "changelog": Array<V4ReleaseListItemChangelog>;
    /**
     * List of components and their version contained in the release
     */
    "components": Array<V4ReleaseListItemComponents>;
}
export interface V4ReleaseListItemChangelog {
    /**
     * If the changed item was a component, this attribute is the name of the component.
     */
    "component"?: string;
    /**
     * Human-friendly description of the change
     */
    "description"?: string;
}
export interface V4ReleaseListItemComponents {
    /**
     * Name of the component
     */
    "name": string;
    /**
     * Version number of the component
     */
    "version": string;
}
export interface V4UserListItem {
    /**
     * Email address of the user
     */
    "email"?: string;
    /**
     * The date and time that this account was created
     */
    "created"?: string;
    /**
     * The date and time when this account will expire
     */
    "expiry"?: string;
}
export interface V5AddClusterRequest {
    /**
     * Name of the organization owning the cluster
     */
    "owner": string;
    /**
     * Cluster name
     */
    "name"?: string;
    /**
     * The [release](https://docs.giantswarm.io/api/#tag/releases) version to use in the new cluster. If not given, the latest release will be used.
     */
    "releaseVersion"?: string;
    "master"?: V5AddClusterRequestMaster;
}
/**
 * Configuration regarding the master node. If not given, the master node will be placed automatically.
 */
export interface V5AddClusterRequestMaster {
    /**
     * Name of the availability zone to use for the master node. If not given, the master node will be placed automatically.
     */
    "availabilityZone"?: string;
}
/**
 * Request body structure for creating a node pool
 */
export interface V5AddNodePoolRequest {
    /**
     * Node pool name. _(Length between 1-100, cannot contain control codes such as newline.)_
     */
    "name"?: string;
    "availabilityZones"?: V5AddNodePoolRequestAvailabilityZones;
    "scaling"?: V5AddNodePoolRequestScaling;
    /**
     * Worker node specification
     */
    "nodeSpec"?: V5AddNodePoolRequestNodeSpec;
}
/**
 * Specifies how the nodes of a pool are spread over availability zones. The object must contain either the `number` attribute or the `zones` attribute, but not both. The maximum `number` of availbility zones is the same as that found under `general.availability_zones.max` from the `/v4/info/` endpoint. When not given, availability zones assignment is handled automatically.
 */
export interface V5AddNodePoolRequestAvailabilityZones {
    /**
     * Number of zones to use. If given, the zones are picked automatically. _(Maximum limit of 4 supported.)_
     */
    "number"?: number;
    /**
     * Names of the availability zones to use. _(Must be same region as the cluster.)_
     */
    "zones"?: Array<string>;
}
export interface V5AddNodePoolRequestNodeSpec {
    "aws"?: V5AddNodePoolRequestNodeSpecAws;
}
/**
 * Attributes specific to the AWS provider
 */
export interface V5AddNodePoolRequestNodeSpecAws {
    /**
     * EC2 instance type to use for all nodes in the node pool. _(Validated against available instance types.)_
     */
    "instanceType"?: string;
}
/**
 * Attributes specific to cluster node scaling. To have full control of the cluster size, min and max can be set to the same value, however `max` must be greater or equal to `min`. If only `min` or only `max` is specified, `min` and `max` will be set equally.
 */
export interface V5AddNodePoolRequestScaling {
    /**
     * Minimum number of nodes in the pool.
     */
    "min"?: number;
    /**
     * Maximum number of nodes in the pool.
     */
    "max"?: number;
}
export interface V5ClusterDetailsResponse {
    /**
     * Unique cluster identifier
     */
    "id"?: string;
    /**
     * URI of the Kubernetes API endpoint
     */
    "apiEndpoint"?: string;
    /**
     * Date/time of cluster creation
     */
    "createDate"?: string;
    /**
     * Date/time when cluster has been deleted
     */
    "deleteDate"?: Date;
    /**
     * Name of the organization owning the cluster
     */
    "owner"?: string;
    /**
     * Cluster name
     */
    "name"?: string;
    /**
     * ID of the credentials used to operate the cluster. See [Set credentials](#operation/addCredentials) for details.
     */
    "credentialId"?: string;
    /**
     * The [release](https://docs.giantswarm.io/api/#tag/releases) version used by the cluster
     */
    "releaseVersion"?: string;
    "master"?: V5ClusterDetailsResponseMaster;
    /**
     * List of conditions the cluster has gone through
     */
    "conditions"?: Array<V5ClusterDetailsResponseConditions>;
    "versions"?: Array<V5ClusterDetailsResponseVersions>;
}
export interface V5ClusterDetailsResponseConditions {
    /**
     * Date and time when the cluster transitioned into this condition
     */
    "lastTransitionTime"?: string;
    /**
     * A string describing the condition, e. g. 'Created'
     */
    "condition"?: string;
}
/**
 * Information about the master node
 */
export interface V5ClusterDetailsResponseMaster {
    /**
     * Name of the availability zone the master node is placed in
     */
    "availabilityZone"?: string;
}
export interface V5ClusterDetailsResponseVersions {
    /**
     * Date and time when the cluster got created with or upgraded to this version
     */
    "lastTransitionTime"?: string;
    /**
     * Semantic version number
     */
    "version"?: string;
}
export interface V5GetNodePoolResponse {
    /**
     * Node pool identifier. Unique within a tenant cluster.
     */
    "id"?: string;
    /**
     * Node pool name
     */
    "name"?: string;
    /**
     * Names of the availability zones used by the nodes of this pool.
     */
    "availabilityZones"?: Array<string>;
    "scaling"?: V5GetNodePoolResponseScaling;
    /**
     * IP address block used by the node pool
     */
    "subnet"?: string;
    /**
     * Worker node specification
     */
    "nodeSpec"?: V5GetNodePoolResponseNodeSpec;
    "status"?: V5GetNodePoolResponseStatus;
}
export interface V5GetNodePoolResponseNodeSpec {
    "aws"?: V5GetNodePoolResponseNodeSpecAws;
    "volumeSizesGb"?: V5GetNodePoolResponseNodeSpecVolumeSizesGb;
}
/**
 * Attributes specific to the AWS provider
 */
export interface V5GetNodePoolResponseNodeSpecAws {
    /**
     * EC2 instance type used by all nodes in this pool
     */
    "instanceType"?: string;
}
export interface V5GetNodePoolResponseNodeSpecVolumeSizesGb {
    /**
     * Size of the Docker volume, used to store docker images and overlay file system data, in GB.
     */
    "docker"?: number;
    /**
     * Size of the kubelet volume of the worker, used e. g. for volumes of type EmptyDir, in GB.
     */
    "kubelet"?: number;
}
/**
 * Scaling range of the node pool. If `min` and `max` differ, the node pool is scaled automatically. If both have the same value, the cluster size is pinned.
 */
export interface V5GetNodePoolResponseScaling {
    /**
     * Minimum number of nodes in the pool
     */
    "min"?: number;
    /**
     * Maximum number of nodes in the pool
     */
    "max"?: number;
}
/**
 * Information on the current size and status of the node pool
 */
export interface V5GetNodePoolResponseStatus {
    /**
     * Desired number of nodes in the pool
     */
    "nodes"?: number;
    /**
     * Number of nodes in state NodeReady
     */
    "nodesReady"?: number;
}
export interface V5GetNodePoolsResponse extends Array<V5GetNodePoolResponse> {
}
/**
 * Request model for cluster modification
 */
export interface V5ModifyClusterRequest {
    /**
     * New cluster name
     */
    "name"?: string;
    /**
     * Release version to upgrade to
     */
    "releaseVersion"?: string;
}
/**
 * Request body for node pool modification
 */
export interface V5ModifyNodePoolRequest {
    /**
     * New name of the node pool
     */
    "name"?: string;
    "scaling"?: V5ModifyNodePoolRequestScaling;
}
/**
 * Attributes specific to node pool scaling. To have full control of the cluster size, min and max can be set to the same value. If only `min` or only `max` is specified, `min` and `max` will be set equally.
 */
export interface V5ModifyNodePoolRequestScaling {
    /**
     * Minimum number of nodes in the pool
     */
    "min"?: number;
    /**
     * Maximum number of nodes in the pool
     */
    "max"?: number;
}
/**
 * AppConfigsApi - fetch parameter creator
 */
export declare const AppConfigsApiFetchParamCreator: {
    createClusterAppConfigV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppConfigRequest;
    }, options?: any): FetchArgs;
    createClusterAppConfigV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppConfigRequest;
    }, options?: any): FetchArgs;
    deleteClusterAppConfigV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    deleteClusterAppConfigV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getClusterAppConfigV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getClusterAppConfigV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    modifyClusterAppConfigV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppConfigRequest;
    }, options?: any): FetchArgs;
    modifyClusterAppConfigV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppConfigRequest;
    }, options?: any): FetchArgs;
};
/**
 * AppConfigsApi - functional programming interface
 */
export declare const AppConfigsApiFp: {
    createClusterAppConfigV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppConfigRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
    createClusterAppConfigV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppConfigRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
    deleteClusterAppConfigV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
    deleteClusterAppConfigV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
    getClusterAppConfigV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GetClusterAppConfigResponse>;
    getClusterAppConfigV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GetClusterAppConfigResponse>;
    modifyClusterAppConfigV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppConfigRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
    modifyClusterAppConfigV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppConfigRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
};
/**
 * AppConfigsApi - object-oriented interface
 */
export declare class AppConfigsApi extends BaseAPI {
    /**
     * This operation allows you to create a values configmap for a specific app. The app does not have to exist before hand.  If the app does exist, this endpoint will ensure that the App CR gets it's user_config field set correctly.  However, if the app exists and the user_config is already set to something, then this request will fail. You will in that case most likely want to update the config using the `PATCH /v4/clusters/{cluster_id}/apps/{app_name}/config/` endpoint.  For apps on v5 clusters, please use the v5 version of this endpoint.   ### Example POST request ```json   {     \"agent\": {       \"key\": \"secret-key-here\",       \"endpointHost\": \"saas-eu-west-1.instana.io\",       \"endpointPort\": \"443\",     },     \"zone\": {       \"name\": \"giantswarm-cluster\"     }   } ```
     * @summary Create app config (v4)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param body
     */
    createClusterAppConfigV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppConfigRequest;
    }, options?: any): Promise<V4GenericResponse>;
    /**
     * This operation allows you to create a values configmap for a specific app. The app does not have to exist before hand.  If the app does exist, this endpoint will ensure that the App CR gets it's user_config field set correctly.  However, if the app exists and the user_config is already set to something, then this request will fail. You will in that case most likely want to update the config using the `PATCH /v5/clusters/{cluster_id}/apps/{app_name}/config/` endpoint.  ### Example POST request ```json   {     \"agent\": {       \"key\": \"secret-key-here\",       \"endpointHost\": \"saas-eu-west-1.instana.io\",       \"endpointPort\": \"443\",     },     \"zone\": {       \"name\": \"giantswarm-cluster\"     }   } ```
     * @summary Create app config (v5)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param body
     */
    createClusterAppConfigV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppConfigRequest;
    }, options?: any): Promise<V4GenericResponse>;
    /**
     * This operation allows a user to delete an app's user config if it has been named according to the convention of {app-name}-user-values and stored in the cluster ID namespace.  Calling this endpoint will delete the ConfigMap, but it does not remove the reference to the ConfigMap in the (spec.user_config.configmap field) from the app.  Do make sure you also update the app and remove the reference.  The preferred order is to first remove the reference to the configmap by updating the app, and only then delete the configmap using this endpoint.  For apps on v5 clusters, please use the v5 version of this endpoint.
     * @summary Delete an app config (v4)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    deleteClusterAppConfigV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    /**
     * This operation allows a user to delete an app's user config if it has been named according to the convention of {app-name}-user-values and stored in the cluster ID namespace.  Calling this endpoint will delete the ConfigMap, but it does not remove the reference to the ConfigMap in the (spec.user_config.configmap field) from the app.  Do make sure you also update the app and remove the reference.  The preferred order is to first remove the reference to the configmap by updating the app, and only then delete the configmap using this endpoint.
     * @summary Delete an app config (v5)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    deleteClusterAppConfigV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    /**
     * This operation allows you to fetch the user values configmap associated with an app.  For apps on v5 clusters, please use the v5 version of this endpoint.
     * @summary Get app config (v4)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getClusterAppConfigV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GetClusterAppConfigResponse>;
    /**
     * This operation allows you to fetch the user values configmap associated with an app.
     * @summary Get app config (v5)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getClusterAppConfigV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GetClusterAppConfigResponse>;
    /**
     * This operation allows you to modify the values configmap for a specific app. It's only possible to modify app configs that have been named according to the convention of {app-name}-user-values and stored in the cluster ID namespace.  The full values key of the configmap will be replaced by the JSON body of your request.  For apps on v5 clusters, please use the v5 version of this endpoint.  ### Example PATCH request ```json   {     \"agent\": {       \"key\": \"a-new-key-here\",     }   } ```  If the configmap contained content like:  ```json   {     \"agent\": {       \"key\": \"an-old-key-here\",       \"admin\": true,     },     \"server\": {       \"url\": \"giantswarm.io\",     }   } ```  Then the \"server\" and \"admin\" keys will be removed.
     * @summary Modify app config (v4)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param body
     */
    modifyClusterAppConfigV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppConfigRequest;
    }, options?: any): Promise<V4GenericResponse>;
    /**
     * This operation allows you to modify the values configmap for a specific app. It's only possible to modify app configs that have been named according to the convention of {app-name}-user-values and stored in the cluster ID namespace.  The full values key of the configmap will be replaced by the JSON body of your request.  ### Example PATCH request ```json   {     \"agent\": {       \"key\": \"a-new-key-here\",     }   } ```  If the configmap contained content like:  ```json   {     \"agent\": {       \"key\": \"an-old-key-here\",       \"admin\": true,     },     \"server\": {       \"url\": \"giantswarm.io\",     }   } ```  Then the \"server\" and \"admin\" keys will be removed.
     * @summary Modify app config (v5)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param body
     */
    modifyClusterAppConfigV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppConfigRequest;
    }, options?: any): Promise<V4GenericResponse>;
}
/**
 * AppConfigsApi - factory interface
 */
export declare const AppConfigsApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    createClusterAppConfigV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppConfigRequest;
    }, options?: any): Promise<V4GenericResponse>;
    createClusterAppConfigV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppConfigRequest;
    }, options?: any): Promise<V4GenericResponse>;
    deleteClusterAppConfigV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    deleteClusterAppConfigV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    getClusterAppConfigV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GetClusterAppConfigResponse>;
    getClusterAppConfigV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GetClusterAppConfigResponse>;
    modifyClusterAppConfigV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppConfigRequest;
    }, options?: any): Promise<V4GenericResponse>;
    modifyClusterAppConfigV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppConfigRequest;
    }, options?: any): Promise<V4GenericResponse>;
};
/**
 * AppSecretsApi - fetch parameter creator
 */
export declare const AppSecretsApiFetchParamCreator: {
    createClusterAppSecretV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateClusterAppSecretRequest;
    }, options?: any): FetchArgs;
    createClusterAppSecretV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateClusterAppSecretRequest;
    }, options?: any): FetchArgs;
    deleteClusterAppSecretV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    deleteClusterAppSecretV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getClusterAppSecretV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getClusterAppSecretV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    modifyClusterAppSecretV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateClusterAppSecretRequest;
    }, options?: any): FetchArgs;
    modifyClusterAppSecretV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateClusterAppSecretRequest;
    }, options?: any): FetchArgs;
};
/**
 * AppSecretsApi - functional programming interface
 */
export declare const AppSecretsApiFp: {
    createClusterAppSecretV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateClusterAppSecretRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
    createClusterAppSecretV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateClusterAppSecretRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
    deleteClusterAppSecretV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
    deleteClusterAppSecretV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
    getClusterAppSecretV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GetClusterAppSecretResponse>;
    getClusterAppSecretV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GetClusterAppSecretResponse>;
    modifyClusterAppSecretV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateClusterAppSecretRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
    modifyClusterAppSecretV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateClusterAppSecretRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
};
/**
 * AppSecretsApi - object-oriented interface
 */
export declare class AppSecretsApi extends BaseAPI {
    /**
     * This operation allows you to create a Secret for a specific app. The app does not have to exist before hand.  If the app does exist, this endpoint will ensure that the App CR gets it's `spec.user_config.secret` field set correctly.  However, if the app exists and the `spec.user_config.secret` is already set to something, then this request will fail. You will in that case most likely want to update the Secret using the `PATCH /v4/clusters/{cluster_id}/apps/{app_name}/secret/` endpoint.  For apps on v5 clusters, please use the v5 version of this endpoint.  ### Example POST request ```json   {     \"secret\": \"value\"   } ```
     * @summary Create Secret (v4)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param body
     */
    createClusterAppSecretV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateClusterAppSecretRequest;
    }, options?: any): Promise<V4GenericResponse>;
    /**
     * This operation allows you to create a Secret for a specific app. The app does not have to exist before hand.  If the app does exist, this endpoint will ensure that the App CR gets it's `spec.user_config.secret` field set correctly.  However, if the app exists and the `spec.user_config.secret` is already set to something, then this request will fail. You will in that case most likely want to update the Secret using the `PATCH /v5/clusters/{cluster_id}/apps/{app_name}/secret/` endpoint.  ### Example POST request ```json   {     \"secret\": \"value\"   } ```
     * @summary Create Secret (v5)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param body
     */
    createClusterAppSecretV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateClusterAppSecretRequest;
    }, options?: any): Promise<V4GenericResponse>;
    /**
     * This operation allows a user to delete an app's Secret if it has been named according to the convention of {app-name}-user-secrets and stored in the cluster ID namespace.  Calling this endpoint will delete the Secret, and also remove the reference to the Secret in the (spec.user_config.secret field) from the app.  For apps on v5 clusters, please use the v5 version of this endpoint.
     * @summary Delete a Secret (v4)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    deleteClusterAppSecretV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    /**
     * This operation allows a user to delete an app's Secret if it has been named according to the convention of {app-name}-user-secrets and stored in the cluster ID namespace.  Calling this endpoint will delete the Secret, and also remove the reference to the Secret in the (spec.user_config.secret field) from the app.
     * @summary Delete a Secret (v5)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    deleteClusterAppSecretV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    /**
     * This operation allows you to fetch the Secret associated with an app.  For apps on v5 clusters, please use the v5 version of this endpoint.
     * @summary Get Secret (v4)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getClusterAppSecretV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GetClusterAppSecretResponse>;
    /**
     * This operation allows you to fetch the Secret associated with an app.
     * @summary Get Secret (v5)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getClusterAppSecretV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GetClusterAppSecretResponse>;
    /**
     * This operation allows you to modify the Secret for a specific app. It's only possible to modify Secrets that have been named according to the convention of {app-name}-user-secrets and stored in the cluster ID namespace.  The full values key of the Secret will be replaced by the JSON body of your request.  For apps on v5 clusters, please use the v5 version of this endpoint.  ### Example PATCH request ```json   {     \"secret\": \"new-value\"   } ```  If the Secret contained content like:  ```json   {     \"secret\": \"old-value\",     \"secret2\": \"another-old-value\"   } ```  Then the \"secret2\" will be removed, and \"secret\" will be set to \"new-value\"
     * @summary Modify Secret (v4)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param body
     */
    modifyClusterAppSecretV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateClusterAppSecretRequest;
    }, options?: any): Promise<V4GenericResponse>;
    /**
     * This operation allows you to modify the Secret for a specific app. It's only possible to modify Secrets that have been named according to the convention of {app-name}-user-secrets and stored in the cluster ID namespace.  The full values key of the Secret will be replaced by the JSON body of your request.  ### Example PATCH request ```json   {     \"secret\": \"new-value\"   } ```  If the Secret contained content like:  ```json   {     \"secret\": \"old-value\",     \"secret2\": \"another-old-value\"   } ```  Then the \"secret2\" will be removed, and \"secret\" will be set to \"new-value\"
     * @summary Modify Secret (v5)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param body
     */
    modifyClusterAppSecretV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateClusterAppSecretRequest;
    }, options?: any): Promise<V4GenericResponse>;
}
/**
 * AppSecretsApi - factory interface
 */
export declare const AppSecretsApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    createClusterAppSecretV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateClusterAppSecretRequest;
    }, options?: any): Promise<V4GenericResponse>;
    createClusterAppSecretV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateClusterAppSecretRequest;
    }, options?: any): Promise<V4GenericResponse>;
    deleteClusterAppSecretV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    deleteClusterAppSecretV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    getClusterAppSecretV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GetClusterAppSecretResponse>;
    getClusterAppSecretV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GetClusterAppSecretResponse>;
    modifyClusterAppSecretV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateClusterAppSecretRequest;
    }, options?: any): Promise<V4GenericResponse>;
    modifyClusterAppSecretV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateClusterAppSecretRequest;
    }, options?: any): Promise<V4GenericResponse>;
};
/**
 * AppsApi - fetch parameter creator
 */
export declare const AppsApiFetchParamCreator: {
    createClusterAppV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppRequest;
    }, options?: any): FetchArgs;
    createClusterAppV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppRequest;
    }, options?: any): FetchArgs;
    deleteClusterAppV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    deleteClusterAppV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getAppCatalogs(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getClusterAppsV4(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getClusterAppsV5(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    modifyClusterAppV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4ModifyAppRequest;
    }, options?: any): FetchArgs;
    modifyClusterAppV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4ModifyAppRequest;
    }, options?: any): FetchArgs;
};
/**
 * AppsApi - functional programming interface
 */
export declare const AppsApiFp: {
    createClusterAppV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4App>;
    createClusterAppV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4App>;
    deleteClusterAppV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
    deleteClusterAppV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
    getAppCatalogs(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4AppCatalogsResponse>;
    getClusterAppsV4(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GetClusterAppsResponse>;
    getClusterAppsV5(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GetClusterAppsResponse>;
    modifyClusterAppV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4ModifyAppRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4App>;
    modifyClusterAppV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4ModifyAppRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4App>;
};
/**
 * AppsApi - object-oriented interface
 */
export declare class AppsApi extends BaseAPI {
    /**
     * Install an app on a tenant cluster by posting to this endpoint. For apps on v5 clusters, please use the v5 version of this endpoint.  The spec field represents the app we'll be installing, and so spec.name refers to the name of the chart that installs this app in the catalog.  The response you get on a succesful create includes the status of the app. However since the App is still initialising and this is an asynchronous operation, it is likely that the fields in this status object will be all empty values.  To check on the status of your app, perform a GET to /v4/clusters/{cluster_id}/apps/, and check the status field of the app.  ### Example PUT request ```json   {     \"spec\": {       \"catalog\": \"sample-catalog\",       \"name\": \"prometheus-chart\",       \"namespace\": \"prometheus\",       \"version\": \"0.2.0\",     }   } ```  ### About the user_config field in the response This field is not editable by you, but is set automatically by the API if a configmap named `{app_name}-user-values` exists in the tenant cluster namespace on the control plane.  The `/v4/clusters/{cluster_id}/apps/{app_name}/config/` endpoints allows you to create such a configmap using this API.  It is recommended to create your config before creating your app. This will result in a faster deploy.  However, you can create your config after creating the app if you wish, this API will take care of setting the `user_config` field of the app correctly for you.  ### Why can't I just set the `user_config` value myself? It simplifies usage while also being a security measure.  Furthermore it is also a security measure and ensures that users of this API can't access arbitrary configmaps of the control plane.  This API will only allow you to edit or access configmaps that adhere to a strict naming convention.
     * @summary Install an app (v4)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param body
     */
    createClusterAppV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppRequest;
    }, options?: any): Promise<V4App>;
    /**
     * Install an app on a tenant cluster by posting to this endpoint.  The spec field represents the app we'll be installing, and so spec.name refers to the name of the chart that installs this app in the catalog.  The response you get on a succesful create includes the status of the app. However since the App is still initialising and this is an asynchronous operation, it is likely that the fields in this status object will be all empty values.  To check on the status of your app, perform a GET to /v5/clusters/{cluster_id}/apps/, and check the status field of the app.  ### Example PUT request ```json   {     \"spec\": {       \"catalog\": \"sample-catalog\",       \"name\": \"prometheus-chart\",       \"namespace\": \"prometheus\",       \"version\": \"0.2.0\",     }   } ```  ### About the user_config field in the response This field is not editable by you, but is set automatically by the API if a configmap named `{app_name}-user-values` exists in the tenant cluster namespace on the control plane.  The `/v4/clusters/{cluster_id}/apps/{app_name}/config/` endpoints allows you to create such a configmap using this API.  It is recommended to create your config before creating your app. This will result in a faster deploy.  However, you can create your config after creating the app if you wish, this API will take care of setting the `user_config` field of the app correctly for you.  ### Why can't I just set the `user_config` value myself? It simplifies usage while also being a security measure.  Furthermore it is also a security measure and ensures that users of this API can't access arbitrary configmaps of the control plane.  This API will only allow you to edit or access configmaps that adhere to a strict naming convention.
     * @summary Install an app (v5)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param body
     */
    createClusterAppV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppRequest;
    }, options?: any): Promise<V4App>;
    /**
     * This operation allows a user to delete an app. For apps on v5 clusters, please use the v5 version of this endpoint.
     * @summary Delete an app (v4)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    deleteClusterAppV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    /**
     * This operation allows a user to delete an app.
     * @summary Delete an app (v5)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    deleteClusterAppV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    /**
     * Returns an array of app catalog objects, which contains further metadata, including a URL to fetch the full index of each catalog.   #### About the Labels  - `application.giantswarm.io/catalog-type`   Describes the type of catalog.    - `managed` - Apps in this catalog are managed by Giant Swarm.   - `incubator` - Apps in this catalog are a work in progress. They're                   made with your Giant Swarm cluster in mind though, so                   they should work. Feedback is appreciated on these apps.   - `test` - Apps in this catalog will soon graduate to incubator status,              you most likely will not see any `test` catalogs on your              installations.   - `community` - Apps in this catalog are provided by the kubernetes                   community. They will most likely not work without making                   some changes to the security settings of your cluster.    App Catalogs can also be labeled as `internal`, however these catalogs   contain apps that run on our control planes. These `internal` app catalogs   will be filtered out and never shown when calling this endpoint.    For more details on app catalogs visit: https://docs.giantswarm.io/basics/app-catalog/   ### Example ```json   [     {       \"metadata\": {         \"name\": \"sample-catalog\",         \"labels\": {           \"application.giantswarm.io/catalog-type\": \"test\",           \"app-operator.giantswarm.io/version\": \"1.0.0\",         },       },        \"spec\": {         \"description\": \"Giant Swarm's Sample Catalog with a few apps to test things out.\",         \"logoURL\": \"https://s.giantswarm.io/app-catalog/1/images/sample-catalog.png\",          \"storage\": {           \"URL\": \"https://giantswarm.github.com/sample-catalog/\",           \"type\": \"helm\"         },         \"title\": \"Sample Catalog\"       }     }   ] ```
     * @summary Get a list of app catalogs configured on your installation.
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getAppCatalogs(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4AppCatalogsResponse>;
    /**
     * Returns an array of apps installed on a given cluster. For apps on v5 clusters, please use the v5 version of this endpoint.  ### Example ```json   [     {       \"metadata\": {         \"name\": \"my-awesome-prometheus\",         \"labels\": {}       },        \"spec\": {         \"catalog\": \"sample-catalog\"         \"name\": \"prometheus-chart\",         \"namespace\": \"giantswarm\",         \"version\": \"0.2.0\",         \"user_config\": {           \"configmap\": {             \"name\": \"prometheus-user-values\",             \"namespace\": \"123ab\"           }         }       },        \"status\": {         \"app_version\": \"1.0.0\",         \"release\": {           \"last_deployed\": \"2019-04-08T12:34:00Z\",           \"status\": \"DEPLOYED\"         },         \"version\": \"0.2.0\",       }     }   ] ```
     * @summary Get a list of apps on a cluster (v4)
     * @param clusterId Cluster ID
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getClusterAppsV4(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GetClusterAppsResponse>;
    /**
     * Returns an array of apps installed on a given cluster.  ### Example ```json   [     {       \"metadata\": {         \"name\": \"my-awesome-prometheus\",         \"labels\": {}       },        \"spec\": {         \"catalog\": \"sample-catalog\"         \"name\": \"prometheus-chart\",         \"namespace\": \"giantswarm\",         \"version\": \"0.2.0\",         \"user_config\": {           \"configmap\": {             \"name\": \"prometheus-user-values\",             \"namespace\": \"123ab\"           }         }       },        \"status\": {         \"app_version\": \"1.0.0\",         \"release\": {           \"last_deployed\": \"2019-04-08T12:34:00Z\",           \"status\": \"DEPLOYED\"         },         \"version\": \"0.2.0\",       }     }   ] ```
     * @summary Get a list of apps on a cluster (v5)
     * @param clusterId Cluster ID
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getClusterAppsV5(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GetClusterAppsResponse>;
    /**
     * This operation allows you to modify an existing app.  For apps on v5 clusters, please use the v5 version of this endpoint.  The following attributes can be modified:  - `version`: Changing this field lets you upgrade or downgrade an app.  `catalog`, `name`, `namespace`, and `user_config` are not editable. If you need to move or rename an app, you should instead delete the app and make it again.  The request body must conform with the [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386) standard. Requests have to be sent with the `Content-Type: application/merge-patch+json` header.
     * @summary Modify an app (v4)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param body
     */
    modifyClusterAppV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4ModifyAppRequest;
    }, options?: any): Promise<V4App>;
    /**
     * This operation allows you to modify an existing app.  The following attributes can be modified:  - `version`: Changing this field lets you upgrade or downgrade an app.  `catalog`, `name`, `namespace`, and `user_config` are not editable. If you need to move or rename an app, you should instead delete the app and make it again.  The request body must conform with the [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386) standard. Requests have to be sent with the `Content-Type: application/merge-patch+json` header.
     * @summary Modify an app (v5)
     * @param clusterId Cluster ID
     * @param appName App Name
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @param body
     */
    modifyClusterAppV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4ModifyAppRequest;
    }, options?: any): Promise<V4App>;
}
/**
 * AppsApi - factory interface
 */
export declare const AppsApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    createClusterAppV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppRequest;
    }, options?: any): Promise<V4App>;
    createClusterAppV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4CreateAppRequest;
    }, options?: any): Promise<V4App>;
    deleteClusterAppV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    deleteClusterAppV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    getAppCatalogs(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4AppCatalogsResponse>;
    getClusterAppsV4(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GetClusterAppsResponse>;
    getClusterAppsV5(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GetClusterAppsResponse>;
    modifyClusterAppV4(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4ModifyAppRequest;
    }, options?: any): Promise<V4App>;
    modifyClusterAppV5(params: {
        "clusterId": string;
        "appName": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
        "body"?: V4ModifyAppRequest;
    }, options?: any): Promise<V4App>;
};
/**
 * AuthTokensApi - fetch parameter creator
 */
export declare const AuthTokensApiFetchParamCreator: {
    createAuthToken(params: {
        "body": V4CreateAuthTokenRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    deleteAuthToken(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
};
/**
 * AuthTokensApi - functional programming interface
 */
export declare const AuthTokensApiFp: {
    createAuthToken(params: {
        "body": V4CreateAuthTokenRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4CreateAuthTokenResponse>;
    deleteAuthToken(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
};
/**
 * AuthTokensApi - object-oriented interface
 */
export declare class AuthTokensApi extends BaseAPI {
    /**
     * Creates a Auth Token for a given user. Must authenticate with email and password.
     * @summary Create Auth Token (Login)
     * @param body Create Auth Token Request
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    createAuthToken(params: {
        "body": V4CreateAuthTokenRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4CreateAuthTokenResponse>;
    /**
     * Deletes the authentication token provided in the Authorization header. This effectively logs you out.
     * @summary Delete Auth Token (Logout)
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    deleteAuthToken(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
}
/**
 * AuthTokensApi - factory interface
 */
export declare const AuthTokensApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    createAuthToken(params: {
        "body": V4CreateAuthTokenRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4CreateAuthTokenResponse>;
    deleteAuthToken(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
};
/**
 * ClustersApi - fetch parameter creator
 */
export declare const ClustersApiFetchParamCreator: {
    addCluster(params: {
        "body": V4AddClusterRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    addClusterV5(params: {
        "body": V5AddClusterRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    deleteCluster(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getCluster(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getClusterStatus(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getClusterV5(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getClusters(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    modifyCluster(params: {
        "clusterId": string;
        "body": V4ModifyClusterRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    modifyClusterV5(params: {
        "clusterId": string;
        "body": V5ModifyClusterRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
};
/**
 * ClustersApi - functional programming interface
 */
export declare const ClustersApiFp: {
    addCluster(params: {
        "body": V4AddClusterRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
    addClusterV5(params: {
        "body": V5AddClusterRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V5ClusterDetailsResponse>;
    deleteCluster(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
    getCluster(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4ClusterDetailsResponse>;
    getClusterStatus(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GetClusterStatusResponse>;
    getClusterV5(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V5ClusterDetailsResponse>;
    getClusters(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4ClusterListItem[]>;
    modifyCluster(params: {
        "clusterId": string;
        "body": V4ModifyClusterRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4ClusterDetailsResponse>;
    modifyClusterV5(params: {
        "clusterId": string;
        "body": V5ModifyClusterRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V5ClusterDetailsResponse>;
};
/**
 * ClustersApi - object-oriented interface
 */
export declare class ClustersApi extends BaseAPI {
    /**
     * This operation is used to create a new Kubernetes cluster or \"tenant cluster\".  ### Cluster definition  The cluster definition format allows to set a number of optional configuration details, like worker node configuration, with node specification depending on the provider (e. g. on <span class=\"badge azure\">Azure</span> the VM size, or on <span class=\"badge kvm\">KVM</span> the memory size and number of CPU cores).  One attribute is __mandatory__ upon creation: The `owner` attribute must carry the name of the organization the cluster will belong to. Note that the acting user must be a member of that organization in order to create a cluster.  For all other attributes, defaults will be applied if the attribute is not set. Check out the [getInfo](#operation/getInfo) operation for more info about defaults. If no `release_version` is set, the latest release version available for the provider will be used.
     * @summary Create cluster (v4)
     * @param body New cluster definition
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    addCluster(params: {
        "body": V4AddClusterRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    /**
     * Allows to create clusters supporting node pools on AWS installations.  The cluster will not have any worker nodes until you create a first node pool.  See [node pools](#tag/nodepools) and [create node pool](#operation/addNodePool) for details.
     * @summary Create cluster (v5)
     * @param body New cluster definition
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    addClusterV5(params: {
        "body": V5AddClusterRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V5ClusterDetailsResponse>;
    /**
     * This operation triggers deleting a cluster with all resources attached to it.  Deleting a cluster causes the termination of all workloads running on the cluster. Data stored on the worker nodes will be lost. There is no way to undo this operation.  The response is sent as soon as the request is validated. At that point, workloads might still be running on the cluster and may be accessible for a little wile, until the cluster is actually deleted.
     * @summary Delete cluster
     * @param clusterId Cluster ID
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    deleteCluster(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    /**
     * This operation allows to obtain basic details on a particular cluster.
     * @summary Get cluster details (v4)
     * @param clusterId Cluster ID
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getCluster(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4ClusterDetailsResponse>;
    /**
     * Returns an object about a cluster's current state and past status transitions.  This endpoint exposes the status content of the Kubernetes resources representing a cluster in the corresponding custom resource. That is, depending on the provider:  - [`awsconfig.provider.giantswarm.io`](https://godoc.org/github.com/giantswarm/apiextensions/pkg/apis/provider/v1alpha1#AWSConfig) - [`azureconfig.provider.giantswarm.io`](https://godoc.org/github.com/giantswarm/apiextensions/pkg/apis/provider/v1alpha1#AzureConfig) - [`kvmconfig.provider.giantswarm.io`](https://godoc.org/github.com/giantswarm/apiextensions/pkg/apis/provider/v1alpha1#KVMConfig)  Note that structure and style differ from the rest of the v4 API. Also note that the structure depends on the release version and changes can be expected frequently.
     * @summary Get cluster status
     * @param clusterId Cluster ID
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getClusterStatus(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GetClusterStatusResponse>;
    /**
     * Allows to retrieve details of a cluster supporting node pools on AWS installations.
     * @summary Get cluster details (v5)
     * @param clusterId Cluster ID
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getClusterV5(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V5ClusterDetailsResponse>;
    /**
     * This operation fetches a list of clusters.  The result depends on the permissions of the user. A normal user will get all the clusters the user has access to, via organization membership. A user with admin permission will receive a list of all existing clusters.  The result array items are sparse representations of the cluster objects. To fetch more details on a cluster, use the [getClusterStatus](#operation/getClusterStatus) operation.
     * @summary Get clusters
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getClusters(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4ClusterListItem[]>;
    /**
     * This operation allows to modify an existing cluster.  A cluster modification is performed by submitting a `PATCH` request to the cluster resource (as described in the [addCluster](#operation/addCluster) and [getCluster](#operation/getCluster)) in form of a [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386). This means, only the attributes to be modified have to be contained in the request body.  The following attributes can be modified:  - `name`: Rename the cluster to something more fitting.  - `owner`: Changing the owner organization name means to change cluster ownership from one organization to another. The user performing the request has to be a member of both organizations.  - `release_version`: By changing this attribute you can upgrade a cluster to a newer [release](https://docs.giantswarm.io/api/#tag/releases).  - `scaling`: Adjust the cluster node limits to make use of auto scaling or to have full control over the node count. The latter can be achieved by setting `min` and `max` to the same values. Note that setting `min` and `max` to different values (effectively enabling autoscaling) is only available on AWS with releases from 6.2.0.   - `workers` (deprecated): For backward compatibility reasons, it is possible to provide this attribute as an array, where the number of items contained in the array determines the intended number of worker nodes in the cluster. The item count will be applied as both `min` and `max` value of the scaling limits, effectively disabling autoscaling. This requires the `scaling` attribute must not be present in the same request.  ### Limitations  - As of now, existing worker nodes cannot be modified. - The number of availability zones cannot be modified. - When removing nodes (scaling down), it is not possible to determine which nodes will be removed.
     * @summary Modify cluster (v4)
     * @param clusterId Cluster ID
     * @param body Merge-patch body
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    modifyCluster(params: {
        "clusterId": string;
        "body": V4ModifyClusterRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4ClusterDetailsResponse>;
    /**
     * Allows to change properties of a cluster supporting node pools on AWS installations.  The following attributes allow to be modified:  - `name` - `release_version`
     * @summary Modify cluster (v5)
     * @param clusterId Cluster ID
     * @param body Merge-patch body
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    modifyClusterV5(params: {
        "clusterId": string;
        "body": V5ModifyClusterRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V5ClusterDetailsResponse>;
}
/**
 * ClustersApi - factory interface
 */
export declare const ClustersApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    addCluster(params: {
        "body": V4AddClusterRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    addClusterV5(params: {
        "body": V5AddClusterRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V5ClusterDetailsResponse>;
    deleteCluster(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    getCluster(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4ClusterDetailsResponse>;
    getClusterStatus(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GetClusterStatusResponse>;
    getClusterV5(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V5ClusterDetailsResponse>;
    getClusters(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4ClusterListItem[]>;
    modifyCluster(params: {
        "clusterId": string;
        "body": V4ModifyClusterRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4ClusterDetailsResponse>;
    modifyClusterV5(params: {
        "clusterId": string;
        "body": V5ModifyClusterRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V5ClusterDetailsResponse>;
};
/**
 * ExceptionNotificationsApi - fetch parameter creator
 */
export declare const ExceptionNotificationsApiFetchParamCreator: {
    addExceptionNotification(params: {
        "body": any;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
};
/**
 * ExceptionNotificationsApi - functional programming interface
 */
export declare const ExceptionNotificationsApiFp: {
    addExceptionNotification(params: {
        "body": any;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
};
/**
 * ExceptionNotificationsApi - object-oriented interface
 */
export declare class ExceptionNotificationsApi extends BaseAPI {
    /**
     * This endpoint is used to notify Giant Swarm that an error has occured in one of our clients (like our Web UI or gsctl). It is not intended to be called manually, our clients are configured to report errors when they occur.  Find us in your Slack support channel if you want to contact us about any immediate issues.
     * @summary Notifies Giant Swarm that an error has occured in one of our clients.
     * @param body
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    addExceptionNotification(params: {
        "body": any;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
}
/**
 * ExceptionNotificationsApi - factory interface
 */
export declare const ExceptionNotificationsApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    addExceptionNotification(params: {
        "body": any;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
};
/**
 * InfoApi - fetch parameter creator
 */
export declare const InfoApiFetchParamCreator: {
    getInfo(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
};
/**
 * InfoApi - functional programming interface
 */
export declare const InfoApiFp: {
    getInfo(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4InfoResponse>;
};
/**
 * InfoApi - object-oriented interface
 */
export declare class InfoApi extends BaseAPI {
    /**
     * Returns a set of details on the installation. The output varies based on the provider used in the installation.  This information is useful for example when creating new cluster, to prevent creating clusters with more worker nodes than possible.  ### Example for an AWS-based installation  ```json {   \"general\": {     \"installation_name\": \"shire\",     \"provider\": \"aws\",     \"datacenter\": \"eu-central-1\",     \"availability_zones\": {       \"max\": 3,       \"default\": 1,       \"zones\": [         \"eu-central-1a\", \"eu-central-1b\", \"eu-central-1c\"       ]     }   },   \"stats\": {     \"cluster_creation_duration\": {       \"median\": 750,       \"p25\": 700,       \"p75\": 800     }   },   \"workers\": {     \"count_per_cluster\": {       \"max\": null,       \"default\": 3     },     \"instance_type\": {       \"options\": [         \"m3.medium\", \"m3.large\", \"m3.xlarge\"       ],       \"default\": \"m3.large\"     }   } } ```  ### Example for a KVM-based installation  ```json {   \"general\": {     \"installation_name\": \"isengard\",     \"provider\": \"kvm\",     \"datacenter\": \"string\",     \"availability_zones\": {       \"max\": 1,       \"default\": 1,     }   },   \"stats\": {     \"cluster_creation_duration\": {       \"median\": 750,       \"p25\": 700,       \"p75\": 800     }   },   \"workers\": {     \"count_per_cluster\": {       \"max\": 8,       \"default\": 3     },   } } ```
     * @summary Get information on the installation
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getInfo(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4InfoResponse>;
}
/**
 * InfoApi - factory interface
 */
export declare const InfoApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    getInfo(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4InfoResponse>;
};
/**
 * KeyPairsApi - fetch parameter creator
 */
export declare const KeyPairsApiFetchParamCreator: {
    addKeyPair(params: {
        "clusterId": string;
        "body": V4AddKeyPairRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getKeyPairs(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
};
/**
 * KeyPairsApi - functional programming interface
 */
export declare const KeyPairsApiFp: {
    addKeyPair(params: {
        "clusterId": string;
        "body": V4AddKeyPairRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4AddKeyPairResponse>;
    getKeyPairs(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GetKeyPairsResponse>;
};
/**
 * KeyPairsApi - object-oriented interface
 */
export declare class KeyPairsApi extends BaseAPI {
    /**
     * This operation allows to create a new key pair for accessing a specific cluster.  A key pair consists of an unencrypted private RSA key and an X.509 certificate. In addition, when obtaining a key pair for a cluster, the cluster's certificate authority file (CA certificate) is delivered, which is required by TLS clients to establish trust to the cluster.  In addition to the credentials itself, a key pair has some metadata like a unique ID, a creation timestamp and a free text `description` that you can use at will, for example to note for whom a key pair has been issued.  ### Customizing the certificate's subject for K8s RBAC  It is possible to set the Common Name and Organization fields of the generated certificate's subject.  - `cn_prefix`: The certificate's common name uses this format: `<cn_prefix>.user.<clusterdomain>`.    `clusterdomain` is specific to your cluster and is not editable.    The `cn_prefix` however is editable. When left blank it will default   to the email address of the Giant Swarm user that is performing the   create key pair request.    The common name is used as the username for requests to the Kubernetes API. This allows you   to set up role-based access controls.   - `certificate_organizations`: This will set the certificate's `organization` fields. Use a comma separated list of values.   The Kubernetes API will use these values as group memberships.  __Note:__ The actual credentials coming with the key pair (key, certificate) can only be accessed once, as the result of the `POST` request that triggers their creation. This restriction exists to minimize the risk of credentials being leaked. If you fail to capture the credentials upon creation, you'll have to repeat the creation request.
     * @summary Create key pair
     * @param clusterId Cluster ID
     * @param body While the &#x60;ttl_hours&#x60; attribute is optional and will be set to a default value when omitted, the &#x60;description&#x60; is mandatory.
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    addKeyPair(params: {
        "clusterId": string;
        "body": V4AddKeyPairRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4AddKeyPairResponse>;
    /**
     * Returns a list of information on all key pairs of a cluster as an array.  The individual array items contain metadata on the key pairs, but neither the key nor the certificate. These can only be obtained upon creation, using the [addKeypair](#operation/addKeyPair) operation.
     * @summary Get key pairs
     * @param clusterId Cluster ID
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getKeyPairs(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GetKeyPairsResponse>;
}
/**
 * KeyPairsApi - factory interface
 */
export declare const KeyPairsApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    addKeyPair(params: {
        "clusterId": string;
        "body": V4AddKeyPairRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4AddKeyPairResponse>;
    getKeyPairs(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GetKeyPairsResponse>;
};
/**
 * NodePoolsApi - fetch parameter creator
 */
export declare const NodePoolsApiFetchParamCreator: {
    addNodePool(params: {
        "clusterId": string;
        "body": V5AddNodePoolRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    deleteNodePool(params: {
        "clusterId": string;
        "nodepoolId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getNodePool(params: {
        "clusterId": string;
        "nodepoolId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getNodePools(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    modifyNodePool(params: {
        "clusterId": string;
        "nodepoolId": string;
        "body": V5ModifyNodePoolRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
};
/**
 * NodePoolsApi - functional programming interface
 */
export declare const NodePoolsApiFp: {
    addNodePool(params: {
        "clusterId": string;
        "body": V5AddNodePoolRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V5GetNodePoolResponse>;
    deleteNodePool(params: {
        "clusterId": string;
        "nodepoolId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
    getNodePool(params: {
        "clusterId": string;
        "nodepoolId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V5GetNodePoolResponse>;
    getNodePools(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V5GetNodePoolsResponse>;
    modifyNodePool(params: {
        "clusterId": string;
        "nodepoolId": string;
        "body": V5ModifyNodePoolRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V5GetNodePoolResponse>;
};
/**
 * NodePoolsApi - object-oriented interface
 */
export declare class NodePoolsApi extends BaseAPI {
    /**
     * This allows to add a node pool to a cluster.  Some, but not all, node pool configuration can be changed after creation. The following settings will have a permanent effect:  - `availability_zones` - `node_spec.aws.instance_type`
     * @summary Create node pool
     * @param clusterId Cluster ID
     * @param body
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    addNodePool(params: {
        "clusterId": string;
        "body": V5AddNodePoolRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V5GetNodePoolResponse>;
    /**
     * Triggers the deletion of a node pool.  Nodes in the pool will first be cordoned and drained. Note that it is your responsibililty to make sure that workloads using the node pool can be scheduled elsewhere. We recommend to double-check the available capacity of remaining node pools, as well as any node selectors and taints. Also you can do the draining yourself before issuing the delete request, to observe the outcome. Use  ``` kubectl drain nodes -l giantswarm.io/machine-deployment=<nodepool_id> ... ```
     * @summary Delete node pool
     * @param clusterId Cluster ID
     * @param nodepoolId Node Pool ID
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    deleteNodePool(params: {
        "clusterId": string;
        "nodepoolId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    /**
     * Returns all available details on a specific node pool.
     * @summary Get node pool details
     * @param clusterId Cluster ID
     * @param nodepoolId Node Pool ID
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getNodePool(params: {
        "clusterId": string;
        "nodepoolId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V5GetNodePoolResponse>;
    /**
     * Returns a list of node pools from a given cluster.
     * @summary Get node pools
     * @param clusterId Cluster ID
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getNodePools(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V5GetNodePoolsResponse>;
    /**
     * Allows to rename a node pool or change its scaling settings.
     * @summary Modify node pool
     * @param clusterId Cluster ID
     * @param nodepoolId Node Pool ID
     * @param body Merge-patch body
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    modifyNodePool(params: {
        "clusterId": string;
        "nodepoolId": string;
        "body": V5ModifyNodePoolRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V5GetNodePoolResponse>;
}
/**
 * NodePoolsApi - factory interface
 */
export declare const NodePoolsApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    addNodePool(params: {
        "clusterId": string;
        "body": V5AddNodePoolRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V5GetNodePoolResponse>;
    deleteNodePool(params: {
        "clusterId": string;
        "nodepoolId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    getNodePool(params: {
        "clusterId": string;
        "nodepoolId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V5GetNodePoolResponse>;
    getNodePools(params: {
        "clusterId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V5GetNodePoolsResponse>;
    modifyNodePool(params: {
        "clusterId": string;
        "nodepoolId": string;
        "body": V5ModifyNodePoolRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V5GetNodePoolResponse>;
};
/**
 * OrganizationsApi - fetch parameter creator
 */
export declare const OrganizationsApiFetchParamCreator: {
    addCredentials(params: {
        "organizationId": string;
        "body": V4AddCredentialsRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    addOrganization(params: {
        "organizationId": string;
        "body": V4Organization;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    deleteOrganization(params: {
        "organizationId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getCredential(params: {
        "organizationId": string;
        "credentialId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getCredentials(params: {
        "organizationId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getOrganization(params: {
        "organizationId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getOrganizations(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    modifyOrganization(params: {
        "organizationId": string;
        "body": Body;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
};
/**
 * OrganizationsApi - functional programming interface
 */
export declare const OrganizationsApiFp: {
    addCredentials(params: {
        "organizationId": string;
        "body": V4AddCredentialsRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
    addOrganization(params: {
        "organizationId": string;
        "body": V4Organization;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4Organization>;
    deleteOrganization(params: {
        "organizationId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
    getCredential(params: {
        "organizationId": string;
        "credentialId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GetCredentialResponse>;
    getCredentials(params: {
        "organizationId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GetCredentialsResponse>;
    getOrganization(params: {
        "organizationId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4Organization>;
    getOrganizations(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4OrganizationListItem[]>;
    modifyOrganization(params: {
        "organizationId": string;
        "body": Body;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4Organization>;
};
/**
 * OrganizationsApi - object-oriented interface
 */
export declare class OrganizationsApi extends BaseAPI {
    /**
     * Add a set of credentials to the organization allowing the creation and operation of clusters within a cloud provider account/subscription.  The actual type of these credentials depends on the cloud provider the installation is running on. AWS and Azure are currently supported.  Credentials in an organization are immutable. Each organization can only have one set of credentials.  Once credentials have been set for an organization, they are used for every new cluster that will be created for the organization.  ### Example request body for AWS  ```json {   \"provider\": \"aws\",   \"aws\": {     \"roles\": {       \"admin\": \"arn:aws:iam::123456789012:role/GiantSwarmAdmin\",       \"awsoperator\": \"arn:aws:iam::123456789012:role/GiantSwarmAWSOperator\"     }   } } ```  ### Example request body for Azure  ```json {   \"provider\": \"azure\",   \"azure\": {     \"credential\": {       \"client_id\": \"c93bf55e-5bf7-4966-ad2b-e6f6e7721d50\",       \"secret_key\": \"720e38f7-3af4-463c-9313-abcdf2ead612\",       \"subscription_id\": \"b388b7c7-4479-4040-9ac5-1e13edd6b1cd\",       \"tenant_id\": \"3dd2e94a-92ba-434c-99be-32bb65864a99\"     }   } } ```
     * @summary Set credentials
     * @param organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param body
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    addCredentials(params: {
        "organizationId": string;
        "body": V4AddCredentialsRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    /**
     * This operation allows a user to create an organization.
     * @summary Create an organization
     * @param organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param body
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    addOrganization(params: {
        "organizationId": string;
        "body": V4Organization;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4Organization>;
    /**
     * This operation allows a user to delete an organization that they are a member of. Admin users can delete any organization.
     * @summary Delete an organization
     * @param organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    deleteOrganization(params: {
        "organizationId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    /**
     * Returns details for a particular set of credentials, identified by its ID. The returned data does not contain any secrets (i. e. passphrase, secret key). For more information on credentials, see [Set credentials](#operation/addCredentials).  ### Example response body for AWS  ```json {   \"id\": \"a1b2c3\",   \"provider\": \"aws\",   \"aws\": {     \"roles\": {       \"admin\": \"arn:aws:iam::123456789012:role/GiantSwarmAdmin\",       \"awsoperator\": \"arn:aws:iam::123456789012:role/GiantSwarmAWSOperator\"     }   } } ```  ### Example response body for Azure  ```json {   \"id\": \"a1b2c3\",   \"provider\": \"azure\",   \"azure\": {     \"credential\": {       \"client_id\": \"c93bf55e-5bf7-4966-ad2b-e6f6e7721d50\",       \"subscription_id\": \"b388b7c7-4479-4040-9ac5-1e13edd6b1cd\",       \"tenant_id\": \"3dd2e94a-92ba-434c-99be-32bb65864a99\"     }   } } ```
     * @summary Get credential details
     * @param organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param credentialId Unique ID of a credential set
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getCredential(params: {
        "organizationId": string;
        "credentialId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GetCredentialResponse>;
    /**
     * Returns credentials for an organization, if available. For more information on credentials, see [Set credentials](#operation/addCredentials).  Here is another paragraph.  ### Example response body for AWS  ```json [   {     \"id\": \"a1b2c3\",     \"provider\": \"aws\",     \"aws\": {       \"roles\": {         \"admin\": \"arn:aws:iam::123456789012:role/GiantSwarmAdmin\",         \"awsoperator\": \"arn:aws:iam::123456789012:role/GiantSwarmAWSOperator\"       }     }   } ] ```  ### Example response body for Azure  ```json [   {     \"id\": \"a1b2c3\",     \"provider\": \"azure\",     \"azure\": {       \"credential\": {         \"client_id\": \"c93bf55e-5bf7-4966-ad2b-e6f6e7721d50\",         \"subscription_id\": \"b388b7c7-4479-4040-9ac5-1e13edd6b1cd\",         \"tenant_id\": \"3dd2e94a-92ba-434c-99be-32bb65864a99\"       }     }   } ] ```
     * @summary Get credentials
     * @param organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getCredentials(params: {
        "organizationId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GetCredentialsResponse>;
    /**
     * This operation fetches organization details.
     * @summary Get organization details
     * @param organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getOrganization(params: {
        "organizationId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4Organization>;
    /**
     * This operation allows to fetch a list of organizations the user is a member of. In the case of an admin user, the result includes all existing organizations.
     * @summary Get organizations
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getOrganizations(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4OrganizationListItem[]>;
    /**
     * This operation allows you to modify an existing organization. You must be a member of the organization or an admin in order to use this endpoint.  The following attributes can be modified:  - `members`: By modifying the array of members, members can be added to or removed from the organization  The request body must conform with the [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386) standard. Requests have to be sent with the `Content-Type: application/merge-patch+json` header.  The full request must be valid before it will be executed, currently this means every member you attempt to add to the organization must actually exist in the system. If any member you attempt to add is invalid, the entire patch operation will fail, no members will be added or removed, and an error message will explain which members in your request are invalid.
     * @summary Modify organization
     * @param organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param body
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    modifyOrganization(params: {
        "organizationId": string;
        "body": Body;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4Organization>;
}
/**
 * OrganizationsApi - factory interface
 */
export declare const OrganizationsApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    addCredentials(params: {
        "organizationId": string;
        "body": V4AddCredentialsRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    addOrganization(params: {
        "organizationId": string;
        "body": V4Organization;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4Organization>;
    deleteOrganization(params: {
        "organizationId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    getCredential(params: {
        "organizationId": string;
        "credentialId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GetCredentialResponse>;
    getCredentials(params: {
        "organizationId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GetCredentialsResponse>;
    getOrganization(params: {
        "organizationId": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4Organization>;
    getOrganizations(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4OrganizationListItem[]>;
    modifyOrganization(params: {
        "organizationId": string;
        "body": Body;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4Organization>;
};
/**
 * ReleasesApi - fetch parameter creator
 */
export declare const ReleasesApiFetchParamCreator: {
    getReleases(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
};
/**
 * ReleasesApi - functional programming interface
 */
export declare const ReleasesApiFp: {
    getReleases(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4ReleaseListItem[]>;
};
/**
 * ReleasesApi - object-oriented interface
 */
export declare class ReleasesApi extends BaseAPI {
    /**
     * Lists all releases available for new clusters or for upgrading existing clusters. Might also serve as an archive to obtain details on older releases.
     * @summary Get releases
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getReleases(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4ReleaseListItem[]>;
}
/**
 * ReleasesApi - factory interface
 */
export declare const ReleasesApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    getReleases(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4ReleaseListItem[]>;
};
/**
 * UsersApi - fetch parameter creator
 */
export declare const UsersApiFetchParamCreator: {
    createUser(params: {
        "email": string;
        "body": V4CreateUserRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    deleteUser(params: {
        "email": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getCurrentUser(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getUser(params: {
        "email": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    getUsers(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    modifyPassword(params: {
        "email": string;
        "body": V4ModifyUserPasswordRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
    modifyUser(params: {
        "email": string;
        "body": V4ModifyUserRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): FetchArgs;
};
/**
 * UsersApi - functional programming interface
 */
export declare const UsersApiFp: {
    createUser(params: {
        "email": string;
        "body": V4CreateUserRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
    deleteUser(params: {
        "email": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
    getCurrentUser(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4UserListItem>;
    getUser(params: {
        "email": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4UserListItem>;
    getUsers(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4UserListItem[]>;
    modifyPassword(params: {
        "email": string;
        "body": V4ModifyUserPasswordRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4GenericResponse>;
    modifyUser(params: {
        "email": string;
        "body": V4ModifyUserRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V4UserListItem>;
};
/**
 * UsersApi - object-oriented interface
 */
export declare class UsersApi extends BaseAPI {
    /**
     * Creates a users in the system. Currently this endpoint is only available to users with admin permissions.
     * @summary Create user
     * @param email The user&#39;s email address
     * @param body User account details
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    createUser(params: {
        "email": string;
        "body": V4CreateUserRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    /**
     * Deletes a users in the system. Currently this endpoint is only available to users with admin permissions.
     * @summary Delete user
     * @param email The user&#39;s email address
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    deleteUser(params: {
        "email": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    /**
     * Returns details about the currently authenticated user
     * @summary Get current user
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getCurrentUser(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4UserListItem>;
    /**
     * Returns details about a specific user
     * @summary Get user
     * @param email The user&#39;s email address
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getUser(params: {
        "email": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4UserListItem>;
    /**
     * Returns a list of all users in the system. Currently this endpoint is only available to users with admin permissions.
     * @summary Get users
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    getUsers(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4UserListItem[]>;
    /**
     * This operation allows you to change your password. Admins are able to change passwords of other users.
     * @summary Modify password
     * @param email The user&#39;s email address
     * @param body Modify password request
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    modifyPassword(params: {
        "email": string;
        "body": V4ModifyUserPasswordRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    /**
     * This operation allows you to change details of a given user. Only administrators can edit accounts of other users.
     * @summary Modify user
     * @param email The user&#39;s email address
     * @param body User account details
     * @param xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     */
    modifyUser(params: {
        "email": string;
        "body": V4ModifyUserRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4UserListItem>;
}
/**
 * UsersApi - factory interface
 */
export declare const UsersApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    createUser(params: {
        "email": string;
        "body": V4CreateUserRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    deleteUser(params: {
        "email": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    getCurrentUser(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4UserListItem>;
    getUser(params: {
        "email": string;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4UserListItem>;
    getUsers(params: {
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4UserListItem[]>;
    modifyPassword(params: {
        "email": string;
        "body": V4ModifyUserPasswordRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4GenericResponse>;
    modifyUser(params: {
        "email": string;
        "body": V4ModifyUserRequest;
        "xRequestID"?: string;
        "xGiantSwarmActivity"?: string;
        "xGiantSwarmCmdLine"?: string;
    }, options?: any): Promise<V4UserListItem>;
};
