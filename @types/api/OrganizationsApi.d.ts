import ApiClient from "../ApiClient";
import V4AddCredentialsRequest from "../model/V4AddCredentialsRequest";
import V4Organization from "../model/V4Organization";
import Body from "../model/Body";
import V4GenericResponse from "../model/V4GenericResponse";
import V4GetCredentialResponse from "../model/V4GetCredentialResponse";
import V4GetCredentialsResponse from "../model/V4GetCredentialsResponse";
import V4OrganizationListItem from "../model/V4OrganizationListItem";

/**
* Organizations service.
* @module api/OrganizationsApi
* @version 4.0.0
*/
export default class OrganizationsApi {
    /**
    * Constructs a new OrganizationsApi.
    * @alias module:api/OrganizationsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClient);
    apiClient: ApiClient;
    /**
     * Set credentials
     * Add a set of credentials to the organization allowing the creation and operation of clusters within a cloud provider account/subscription.  The actual type of these credentials depends on the cloud provider the installation is running on. AWS and Azure are currently supported.  Credentials in an organization are immutable. Each organization can only have one set of credentials.  Once credentials have been set for an organization, they are used for every new cluster that will be created for the organization.  ### Example request body for AWS  &#x60;&#x60;&#x60;json {   \&quot;provider\&quot;: \&quot;aws\&quot;,   \&quot;aws\&quot;: {     \&quot;roles\&quot;: {       \&quot;admin\&quot;: \&quot;arn:aws:iam::123456789012:role/GiantSwarmAdmin\&quot;,       \&quot;awsoperator\&quot;: \&quot;arn:aws:iam::123456789012:role/GiantSwarmAWSOperator\&quot;     }   } } &#x60;&#x60;&#x60;  ### Example request body for Azure  &#x60;&#x60;&#x60;json {   \&quot;provider\&quot;: \&quot;azure\&quot;,   \&quot;azure\&quot;: {     \&quot;credential\&quot;: {       \&quot;client_id\&quot;: \&quot;c93bf55e-5bf7-4966-ad2b-e6f6e7721d50\&quot;,       \&quot;secret_key\&quot;: \&quot;720e38f7-3af4-463c-9313-abcdf2ead612\&quot;,       \&quot;subscription_id\&quot;: \&quot;b388b7c7-4479-4040-9ac5-1e13edd6b1cd\&quot;,       \&quot;tenant_id\&quot;: \&quot;3dd2e94a-92ba-434c-99be-32bb65864a99\&quot;     }   } } &#x60;&#x60;&#x60;
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param {module:model/V4AddCredentialsRequest} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    addCredentialsWithHttpInfo(organizationId: string, body: V4AddCredentialsRequest, opts?: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4GenericResponse>;
    /**
     * Set credentials
     * Add a set of credentials to the organization allowing the creation and operation of clusters within a cloud provider account/subscription.  The actual type of these credentials depends on the cloud provider the installation is running on. AWS and Azure are currently supported.  Credentials in an organization are immutable. Each organization can only have one set of credentials.  Once credentials have been set for an organization, they are used for every new cluster that will be created for the organization.  ### Example request body for AWS  &#x60;&#x60;&#x60;json {   \&quot;provider\&quot;: \&quot;aws\&quot;,   \&quot;aws\&quot;: {     \&quot;roles\&quot;: {       \&quot;admin\&quot;: \&quot;arn:aws:iam::123456789012:role/GiantSwarmAdmin\&quot;,       \&quot;awsoperator\&quot;: \&quot;arn:aws:iam::123456789012:role/GiantSwarmAWSOperator\&quot;     }   } } &#x60;&#x60;&#x60;  ### Example request body for Azure  &#x60;&#x60;&#x60;json {   \&quot;provider\&quot;: \&quot;azure\&quot;,   \&quot;azure\&quot;: {     \&quot;credential\&quot;: {       \&quot;client_id\&quot;: \&quot;c93bf55e-5bf7-4966-ad2b-e6f6e7721d50\&quot;,       \&quot;secret_key\&quot;: \&quot;720e38f7-3af4-463c-9313-abcdf2ead612\&quot;,       \&quot;subscription_id\&quot;: \&quot;b388b7c7-4479-4040-9ac5-1e13edd6b1cd\&quot;,       \&quot;tenant_id\&quot;: \&quot;3dd2e94a-92ba-434c-99be-32bb65864a99\&quot;     }   } } &#x60;&#x60;&#x60;
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param {module:model/V4AddCredentialsRequest} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    addCredentials(organizationId: string, body: V4AddCredentialsRequest, opts?: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4GenericResponse>;
    /**
     * Create an organization
     * This operation allows a user to create an organization.
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param {module:model/V4Organization} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4Organization} and HTTP response
     */
    addOrganizationWithHttpInfo(organizationId: string, body: V4Organization, opts?: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4Organization>;
    /**
     * Create an organization
     * This operation allows a user to create an organization.
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param {module:model/V4Organization} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4Organization}
     */
    addOrganization(organizationId: string, body: V4Organization, opts?: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4Organization>;
    /**
     * Delete an organization
     * This operation allows a user to delete an organization that they are a member of. Admin users can delete any organization.
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    deleteOrganizationWithHttpInfo(organizationId: string, opts?: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4GenericResponse>;
    /**
     * Delete an organization
     * This operation allows a user to delete an organization that they are a member of. Admin users can delete any organization.
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    deleteOrganization(organizationId: string, opts?: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4GenericResponse>;
    /**
     * Get credential details
     * Returns details for a particular set of credentials, identified by its ID. The returned data does not contain any secrets (i. e. passphrase, secret key). For more information on credentials, see [Set credentials](#operation/addCredentials).  ### Example response body for AWS  &#x60;&#x60;&#x60;json {   \&quot;id\&quot;: \&quot;a1b2c3\&quot;,   \&quot;provider\&quot;: \&quot;aws\&quot;,   \&quot;aws\&quot;: {     \&quot;roles\&quot;: {       \&quot;admin\&quot;: \&quot;arn:aws:iam::123456789012:role/GiantSwarmAdmin\&quot;,       \&quot;awsoperator\&quot;: \&quot;arn:aws:iam::123456789012:role/GiantSwarmAWSOperator\&quot;     }   } } &#x60;&#x60;&#x60;  ### Example response body for Azure  &#x60;&#x60;&#x60;json {   \&quot;id\&quot;: \&quot;a1b2c3\&quot;,   \&quot;provider\&quot;: \&quot;azure\&quot;,   \&quot;azure\&quot;: {     \&quot;credential\&quot;: {       \&quot;client_id\&quot;: \&quot;c93bf55e-5bf7-4966-ad2b-e6f6e7721d50\&quot;,       \&quot;subscription_id\&quot;: \&quot;b388b7c7-4479-4040-9ac5-1e13edd6b1cd\&quot;,       \&quot;tenant_id\&quot;: \&quot;3dd2e94a-92ba-434c-99be-32bb65864a99\&quot;     }   } } &#x60;&#x60;&#x60;
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param {String} credentialId Unique ID of a credential set
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GetCredentialResponse} and HTTP response
     */
    getCredentialWithHttpInfo(organizationId: string, credentialId: string, opts?: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4GetCredentialResponse>;
    /**
     * Get credential details
     * Returns details for a particular set of credentials, identified by its ID. The returned data does not contain any secrets (i. e. passphrase, secret key). For more information on credentials, see [Set credentials](#operation/addCredentials).  ### Example response body for AWS  &#x60;&#x60;&#x60;json {   \&quot;id\&quot;: \&quot;a1b2c3\&quot;,   \&quot;provider\&quot;: \&quot;aws\&quot;,   \&quot;aws\&quot;: {     \&quot;roles\&quot;: {       \&quot;admin\&quot;: \&quot;arn:aws:iam::123456789012:role/GiantSwarmAdmin\&quot;,       \&quot;awsoperator\&quot;: \&quot;arn:aws:iam::123456789012:role/GiantSwarmAWSOperator\&quot;     }   } } &#x60;&#x60;&#x60;  ### Example response body for Azure  &#x60;&#x60;&#x60;json {   \&quot;id\&quot;: \&quot;a1b2c3\&quot;,   \&quot;provider\&quot;: \&quot;azure\&quot;,   \&quot;azure\&quot;: {     \&quot;credential\&quot;: {       \&quot;client_id\&quot;: \&quot;c93bf55e-5bf7-4966-ad2b-e6f6e7721d50\&quot;,       \&quot;subscription_id\&quot;: \&quot;b388b7c7-4479-4040-9ac5-1e13edd6b1cd\&quot;,       \&quot;tenant_id\&quot;: \&quot;3dd2e94a-92ba-434c-99be-32bb65864a99\&quot;     }   } } &#x60;&#x60;&#x60;
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param {String} credentialId Unique ID of a credential set
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GetCredentialResponse}
     */
    getCredential(organizationId: string, credentialId: string, opts?: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4GetCredentialResponse>;
    /**
     * Get credentials
     * Returns credentials for an organization, if available. For more information on credentials, see [Set credentials](#operation/addCredentials).  Here is another paragraph.  ### Example response body for AWS  &#x60;&#x60;&#x60;json [   {     \&quot;id\&quot;: \&quot;a1b2c3\&quot;,     \&quot;provider\&quot;: \&quot;aws\&quot;,     \&quot;aws\&quot;: {       \&quot;roles\&quot;: {         \&quot;admin\&quot;: \&quot;arn:aws:iam::123456789012:role/GiantSwarmAdmin\&quot;,         \&quot;awsoperator\&quot;: \&quot;arn:aws:iam::123456789012:role/GiantSwarmAWSOperator\&quot;       }     }   } ] &#x60;&#x60;&#x60;  ### Example response body for Azure  &#x60;&#x60;&#x60;json [   {     \&quot;id\&quot;: \&quot;a1b2c3\&quot;,     \&quot;provider\&quot;: \&quot;azure\&quot;,     \&quot;azure\&quot;: {       \&quot;credential\&quot;: {         \&quot;client_id\&quot;: \&quot;c93bf55e-5bf7-4966-ad2b-e6f6e7721d50\&quot;,         \&quot;subscription_id\&quot;: \&quot;b388b7c7-4479-4040-9ac5-1e13edd6b1cd\&quot;,         \&quot;tenant_id\&quot;: \&quot;3dd2e94a-92ba-434c-99be-32bb65864a99\&quot;       }     }   } ] &#x60;&#x60;&#x60;
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GetCredentialsResponse} and HTTP response
     */
    getCredentialsWithHttpInfo(organizationId: string, opts?: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4GetCredentialsResponse>;
    /**
     * Get credentials
     * Returns credentials for an organization, if available. For more information on credentials, see [Set credentials](#operation/addCredentials).  Here is another paragraph.  ### Example response body for AWS  &#x60;&#x60;&#x60;json [   {     \&quot;id\&quot;: \&quot;a1b2c3\&quot;,     \&quot;provider\&quot;: \&quot;aws\&quot;,     \&quot;aws\&quot;: {       \&quot;roles\&quot;: {         \&quot;admin\&quot;: \&quot;arn:aws:iam::123456789012:role/GiantSwarmAdmin\&quot;,         \&quot;awsoperator\&quot;: \&quot;arn:aws:iam::123456789012:role/GiantSwarmAWSOperator\&quot;       }     }   } ] &#x60;&#x60;&#x60;  ### Example response body for Azure  &#x60;&#x60;&#x60;json [   {     \&quot;id\&quot;: \&quot;a1b2c3\&quot;,     \&quot;provider\&quot;: \&quot;azure\&quot;,     \&quot;azure\&quot;: {       \&quot;credential\&quot;: {         \&quot;client_id\&quot;: \&quot;c93bf55e-5bf7-4966-ad2b-e6f6e7721d50\&quot;,         \&quot;subscription_id\&quot;: \&quot;b388b7c7-4479-4040-9ac5-1e13edd6b1cd\&quot;,         \&quot;tenant_id\&quot;: \&quot;3dd2e94a-92ba-434c-99be-32bb65864a99\&quot;       }     }   } ] &#x60;&#x60;&#x60;
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GetCredentialsResponse}
     */
    getCredentials(organizationId: string, opts?: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4GetCredentialsResponse>;
    /**
     * Get organization details
     * This operation fetches organization details.
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4Organization} and HTTP response
     */
    getOrganizationWithHttpInfo(organizationId: string, opts?: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4Organization>;
    /**
     * Get organization details
     * This operation fetches organization details.
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4Organization}
     */
    getOrganization(organizationId: string, opts?: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4Organization>;
    /**
     * Get organizations
     * This operation allows to fetch a list of organizations the user is a member of. In the case of an admin user, the result includes all existing organizations.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/V4OrganizationListItem>} and HTTP response
     */
    getOrganizationsWithHttpInfo(opts?: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4OrganizationListItem[]>;
    /**
     * Get organizations
     * This operation allows to fetch a list of organizations the user is a member of. In the case of an admin user, the result includes all existing organizations.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/V4OrganizationListItem>}
     */
    getOrganizations(opts?: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4OrganizationListItem[]>;
    /**
     * Modify organization
     * This operation allows you to modify an existing organization. You must be a member of the organization or an admin in order to use this endpoint.  The following attributes can be modified:  - &#x60;members&#x60;: By modifying the array of members, members can be added to or removed from the organization  The request body must conform with the [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386) standard. Requests have to be sent with the &#x60;Content-Type: application/merge-patch+json&#x60; header.  The full request must be valid before it will be executed, currently this means every member you attempt to add to the organization must actually exist in the system. If any member you attempt to add is invalid, the entire patch operation will fail, no members will be added or removed, and an error message will explain which members in your request are invalid.
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param {module:model/Body} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4Organization} and HTTP response
     */
    modifyOrganizationWithHttpInfo(organizationId: string, body: Body, opts?: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4Organization>;
    /**
     * Modify organization
     * This operation allows you to modify an existing organization. You must be a member of the organization or an admin in order to use this endpoint.  The following attributes can be modified:  - &#x60;members&#x60;: By modifying the array of members, members can be added to or removed from the organization  The request body must conform with the [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386) standard. Requests have to be sent with the &#x60;Content-Type: application/merge-patch+json&#x60; header.  The full request must be valid before it will be executed, currently this means every member you attempt to add to the organization must actually exist in the system. If any member you attempt to add is invalid, the entire patch operation will fail, no members will be added or removed, and an error message will explain which members in your request are invalid.
     * @param {String} organizationId An ID for the organization. This ID must be unique and match this regular expression: ^[a-z0-9_]{4,30}$
     * @param {module:model/Body} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4Organization}
     */
    modifyOrganization(organizationId: string, body: Body, opts?: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4Organization>;
}
