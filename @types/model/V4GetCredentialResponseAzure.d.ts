import V4GetCredentialResponseAzureCredential from "./V4GetCredentialResponseAzureCredential";

/**
* The V4GetCredentialResponseAzure model module.
* @module model/V4GetCredentialResponseAzure
* @version 4.0.0
*/
export default class V4GetCredentialResponseAzure {
    /**
    * Constructs a <code>V4GetCredentialResponseAzure</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4GetCredentialResponseAzure} obj Optional instance to populate.
    * @return {module:model/V4GetCredentialResponseAzure} The populated <code>V4GetCredentialResponseAzure</code> instance.
    */
    static constructFromObject(data: Partial<V4GetCredentialResponseAzure>, obj: V4GetCredentialResponseAzure): V4GetCredentialResponseAzure;
    /**
    * @member {module:model/V4GetCredentialResponseAzureCredential} credential
    */
    credential: V4GetCredentialResponseAzureCredential;
}
