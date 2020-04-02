/**
* The V4ModifyUserPasswordRequest model module.
* @module model/V4ModifyUserPasswordRequest
* @version 4.0.0
*/
export default class V4ModifyUserPasswordRequest {
    /**
    * Constructs a <code>V4ModifyUserPasswordRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4ModifyUserPasswordRequest} obj Optional instance to populate.
    * @return {module:model/V4ModifyUserPasswordRequest} The populated <code>V4ModifyUserPasswordRequest</code> instance.
    */
    static constructFromObject(data: Partial<V4ModifyUserPasswordRequest>, obj: V4ModifyUserPasswordRequest): V4ModifyUserPasswordRequest;
    /**
    * Constructs a new <code>V4ModifyUserPasswordRequest</code>.
    * Request model for modifying a user&#39;s password
    * @alias module:model/V4ModifyUserPasswordRequest
    * @class
    * @param newPasswordBase64 {String} New password encoded in Base64
    */
    constructor(newPasswordBase64: string);
    /**
    * New password encoded in Base64
    * @member {String} new_password_base64
    */
    new_password_base64: any;
    /**
    * Current password encoded in Base64. Not required for admins
    * @member {String} current_password_base64
    */
    current_password_base64: any;
}
