/**
* The V4UserListItem model module.
* @module model/V4UserListItem
* @version 4.0.0
*/
export default class V4UserListItem {
    /**
    * Constructs a <code>V4UserListItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4UserListItem} obj Optional instance to populate.
    * @return {module:model/V4UserListItem} The populated <code>V4UserListItem</code> instance.
    */
    static constructFromObject(data: Partial<V4UserListItem>, obj: V4UserListItem): V4UserListItem;
    /**
    * Email address of the user
    * @member {String} email
    */
    email: string;
    /**
    * The date and time that this account was created
    * @member {String} created
    */
    created: string;
    /**
    * The date and time when this account will expire
    * @member {String} expiry
    */
    expiry: string;
}
