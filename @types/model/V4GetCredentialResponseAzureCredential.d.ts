/**
* The V4GetCredentialResponseAzureCredential model module.
* @module model/V4GetCredentialResponseAzureCredential
* @version 4.0.0
*/
export default class V4GetCredentialResponseAzureCredential {
    /**
    * Constructs a <code>V4GetCredentialResponseAzureCredential</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4GetCredentialResponseAzureCredential} obj Optional instance to populate.
    * @return {module:model/V4GetCredentialResponseAzureCredential} The populated <code>V4GetCredentialResponseAzureCredential</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Client ID of the service principal
    * @member {String} client_id
    */
    client_id: any;
    /**
    * Azure subscription ID
    * @member {String} subscription_id
    */
    subscription_id: any;
    /**
    * Tenant ID of the Azure subscription
    * @member {String} tenant_id
    */
    tenant_id: any;
}
//# sourceMappingURL=V4GetCredentialResponseAzureCredential.d.ts.map