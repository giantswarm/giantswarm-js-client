import V4OrganizationMember from "./V4OrganizationMember";

/**
* The Body model module.
* @module model/Body
* @version 4.0.0
*/
export default class Body {
    /**
    * Constructs a <code>Body</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body} obj Optional instance to populate.
    * @return {module:model/Body} The populated <code>Body</code> instance.
    */
    static constructFromObject(data: Partial<Body>, obj: Body): Body;
    /**
    * List of members that belong to this organization
    * @member {Array.<module:model/V4OrganizationMember>} members
    */
    members: V4OrganizationMember[];
}
