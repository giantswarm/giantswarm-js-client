/**
* The V4OrganizationListItem model module.
* @module model/V4OrganizationListItem
* @version 4.0.0
*/
export default class V4OrganizationListItem {
    /**
    * Constructs a <code>V4OrganizationListItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4OrganizationListItem} obj Optional instance to populate.
    * @return {module:model/V4OrganizationListItem} The populated <code>V4OrganizationListItem</code> instance.
    */
   static constructFromObject(data: Partial<V4OrganizationListItem>, obj: V4OrganizationListItem): V4OrganizationListItem;
    /**
    * Unique name/identifier of the organization
    * @member {String} id
    */
    id: string;
}
