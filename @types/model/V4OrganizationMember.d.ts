/**
* The V4OrganizationMember model module.
* @module model/V4OrganizationMember
* @version 4.0.0
*/
export default class V4OrganizationMember {
    /**
    * Constructs a <code>V4OrganizationMember</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4OrganizationMember} obj Optional instance to populate.
    * @return {module:model/V4OrganizationMember} The populated <code>V4OrganizationMember</code> instance.
    */
    static constructFromObject(data: Partial<V4OrganizationMember>, obj: V4OrganizationMember): V4OrganizationMember;
    /**
    * Email address of the user
    * @member {String} email
    */
    email: string;
}
