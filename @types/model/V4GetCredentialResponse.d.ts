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
    static constructFromObject(data: any, obj: any): any;
    /**
    * Unique ID of the credentials
    * @member {String} id
    */
    id: string;
    /**
    * Either 'aws' or 'azure'
    * @member {String} provider
    */
    provider: any;
    /**
    * @member {module:model/V4GetCredentialResponseAws} aws
    */
    aws: any;
    /**
    * @member {module:model/V4GetCredentialResponseAzure} azure
    */
    azure: any;
}
//# sourceMappingURL=V4GetCredentialResponse.d.ts.map