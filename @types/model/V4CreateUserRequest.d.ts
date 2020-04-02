/**
* The V4CreateUserRequest model module.
* @module model/V4CreateUserRequest
* @version 4.0.0
*/
export default class V4CreateUserRequest {
    /**
    * Constructs a <code>V4CreateUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4CreateUserRequest} obj Optional instance to populate.
    * @return {module:model/V4CreateUserRequest} The populated <code>V4CreateUserRequest</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Constructs a new <code>V4CreateUserRequest</code>.
    * Request model for creating a new user
    * @alias module:model/V4CreateUserRequest
    * @class
    * @param password {String} A Base64 encoded password
    */
    constructor(password: string);
    /**
    * A Base64 encoded password
    * @member {String} password
    */
    password: any;
    /**
    * The date and time when this account will expire
    * @member {String} expiry
    */
    expiry: any;
}
