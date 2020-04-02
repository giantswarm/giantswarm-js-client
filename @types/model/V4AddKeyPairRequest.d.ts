/**
* The V4AddKeyPairRequest model module.
* @module model/V4AddKeyPairRequest
* @version 4.0.0
*/
export default class V4AddKeyPairRequest {
    /**
    * Constructs a <code>V4AddKeyPairRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AddKeyPairRequest} obj Optional instance to populate.
    * @return {module:model/V4AddKeyPairRequest} The populated <code>V4AddKeyPairRequest</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Constructs a new <code>V4AddKeyPairRequest</code>.
    * @alias module:model/V4AddKeyPairRequest
    * @class
    * @param description {String} Free text information about the key pair
    */
    constructor(description: string);
    /**
    * Free text information about the key pair
    * @member {String} description
    */
    description: string;
    /**
    * Expiration time (from creation) in hours
    * @member {Number} ttl_hours
    */
    ttl_hours: number;
    /**
    * The common name prefix of the certificate subject. This only allows characters that are usable in domain names (`a-z`, `0-9`, and `.-`, where `.-` must not occur at either the start or the end).
    * @member {String} cn_prefix
    */
    cn_prefix: string;
    /**
    * This will set the certificate subject's `organization` fields. Use a comma seperated list of values.
    * @member {String} certificate_organizations
    */
    certificate_organizations: string;
}
