import V4GetCredentialResponseAwsRoles from "./V4GetCredentialResponseAwsRoles";

/**
* The V4GetCredentialResponseAws model module.
* @module model/V4GetCredentialResponseAws
* @version 4.0.0
*/
export default class V4GetCredentialResponseAws {
    /**
    * Constructs a <code>V4GetCredentialResponseAws</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4GetCredentialResponseAws} obj Optional instance to populate.
    * @return {module:model/V4GetCredentialResponseAws} The populated <code>V4GetCredentialResponseAws</code> instance.
    */
    static constructFromObject(data: Partial<V4GetCredentialResponseAws>, obj: V4GetCredentialResponseAws): V4GetCredentialResponseAws;
    /**
    * @member {module:model/V4GetCredentialResponseAwsRoles} roles
    */
    roles: V4GetCredentialResponseAwsRoles;
}
