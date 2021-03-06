import V4GetCredentialResponseAws from "./V4GetCredentialResponseAws";
import V4GetCredentialResponseAzure from "./V4GetCredentialResponseAzure";

/**
* The V4GetCredentialResponse model module.
* @module model/V4GetCredentialResponse
* @version 4.0.0
*/
export default class V4GetCredentialResponse {
    /**
    * Constructs a <code>V4GetCredentialResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4GetCredentialResponse} obj Optional instance to populate.
    * @return {module:model/V4GetCredentialResponse} The populated <code>V4GetCredentialResponse</code> instance.
    */
    static constructFromObject(data: Partial<V4GetCredentialResponse>, obj: V4GetCredentialResponse): V4GetCredentialResponse;
    /**
    * Unique ID of the credentials
    * @member {String} id
    */
    id: string;
    /**
    * Either 'aws' or 'azure'
    * @member {String} provider
    */
    provider: string;
    /**
    * @member {module:model/V4GetCredentialResponseAws} aws
    */
    aws: V4GetCredentialResponseAws;
    /**
    * @member {module:model/V4GetCredentialResponseAzure} azure
    */
    azure: V4GetCredentialResponseAzure;
}
