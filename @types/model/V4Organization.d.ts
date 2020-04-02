/**
* The V4Organization model module.
* @module model/V4Organization
* @version 4.0.0
*/
export default class V4Organization {
    /**
    * Constructs a <code>V4Organization</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4Organization} obj Optional instance to populate.
    * @return {module:model/V4Organization} The populated <code>V4Organization</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Unique name/identifier of the organization
    * @member {String} id
    */
    id: string;
    /**
    * List of members that belong to this organization
    * @member {Array.<module:model/V4OrganizationMember>} members
    */
    members: any;
}
