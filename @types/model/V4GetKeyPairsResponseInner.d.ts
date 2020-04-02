/**
* The V4GetKeyPairsResponseInner model module.
* @module model/V4GetKeyPairsResponseInner
* @version 4.0.0
*/
export default class V4GetKeyPairsResponseInner {
    /**
    * Constructs a <code>V4GetKeyPairsResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4GetKeyPairsResponseInner} obj Optional instance to populate.
    * @return {module:model/V4GetKeyPairsResponseInner} The populated <code>V4GetKeyPairsResponseInner</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Unique identifier of the key pair
    * @member {String} id
    */
    id: string;
    /**
    * Free text information about the key pair
    * @member {String} description
    */
    description: any;
    /**
    * Expiration time (from creation) in hours
    * @member {Number} ttl_hours
    */
    ttl_hours: any;
    /**
    * Date/time of creation
    * @member {String} create_date
    */
    create_date: any;
    /**
    * The common name of the certificate subject.
    * @member {String} common_name
    */
    common_name: any;
    /**
    * The certificate subject's `organization` fields.
    * @member {String} certificate_organizations
    */
    certificate_organizations: any;
}
//# sourceMappingURL=V4GetKeyPairsResponseInner.d.ts.map