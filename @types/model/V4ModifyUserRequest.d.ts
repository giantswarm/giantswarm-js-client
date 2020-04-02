/**
* The V4ModifyUserRequest model module.
* @module model/V4ModifyUserRequest
* @version 4.0.0
*/
export default class V4ModifyUserRequest {
    /**
    * Constructs a <code>V4ModifyUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4ModifyUserRequest} obj Optional instance to populate.
    * @return {module:model/V4ModifyUserRequest} The populated <code>V4ModifyUserRequest</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * New email address
    * @member {String} email
    */
    email: any;
    /**
    * New expiry date. (Only editable by admins)
    * @member {String} expiry
    */
    expiry: any;
}
//# sourceMappingURL=V4ModifyUserRequest.d.ts.map