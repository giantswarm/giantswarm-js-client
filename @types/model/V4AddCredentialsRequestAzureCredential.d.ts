/**
* The V4AddCredentialsRequestAzureCredential model module.
* @module model/V4AddCredentialsRequestAzureCredential
* @version 4.0.0
*/
export default class V4AddCredentialsRequestAzureCredential {
    /**
    * Constructs a <code>V4AddCredentialsRequestAzureCredential</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AddCredentialsRequestAzureCredential} obj Optional instance to populate.
    * @return {module:model/V4AddCredentialsRequestAzureCredential} The populated <code>V4AddCredentialsRequestAzureCredential</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Constructs a new <code>V4AddCredentialsRequestAzureCredential</code>.
    * Service principal credential
    * @alias module:model/V4AddCredentialsRequestAzureCredential
    * @class
    * @param clientId {String} Client ID of the service principal
    * @param secretKey {String} Secret key of the service principal
    * @param subscriptionId {String} Azure subscription ID
    * @param tenantId {String} Tenant ID of the Azure subscription
    */
    constructor(clientId: string, secretKey: string, subscriptionId: string, tenantId: string);
    /**
    * Client ID of the service principal
    * @member {String} client_id
    */
    client_id: string;
    /**
    * Secret key of the service principal
    * @member {String} secret_key
    */
    secret_key: string;
    /**
    * Azure subscription ID
    * @member {String} subscription_id
    */
    subscription_id: string;
    /**
    * Tenant ID of the Azure subscription
    * @member {String} tenant_id
    */
    tenant_id: string;
}
