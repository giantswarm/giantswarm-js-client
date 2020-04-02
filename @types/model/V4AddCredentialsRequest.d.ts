/**
* The V4AddCredentialsRequest model module.
* @module model/V4AddCredentialsRequest
* @version 4.0.0
*/
export default class V4AddCredentialsRequest {
    /**
    * Constructs a <code>V4AddCredentialsRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AddCredentialsRequest} obj Optional instance to populate.
    * @return {module:model/V4AddCredentialsRequest} The populated <code>V4AddCredentialsRequest</code> instance.
    */
   static constructFromObject(data: Partial<V4AddCredentialsRequest>, obj: V4AddCredentialsRequest): V4AddCredentialsRequest;
    /**
    * Constructs a new <code>V4AddCredentialsRequest</code>.
    * Request model for adding a set of credentials
    * @alias module:model/V4AddCredentialsRequest
    * @class
    * @param provider {String}
    */
    constructor(provider: string);
    /**
    * @member {String} provider
    */
    provider: string;
    /**
    * @member {module:model/V4AddCredentialsRequestAws} aws
    */
    aws: any;
    /**
    * @member {module:model/V4AddCredentialsRequestAzure} azure
    */
    azure: any;
}
