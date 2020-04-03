/**
* The V4CreateAuthTokenRequest model module.
* @module model/V4CreateAuthTokenRequest
* @version 4.0.0
*/
export default class V4CreateAuthTokenRequest {
    /**
    * Constructs a <code>V4CreateAuthTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4CreateAuthTokenRequest} obj Optional instance to populate.
    * @return {module:model/V4CreateAuthTokenRequest} The populated <code>V4CreateAuthTokenRequest</code> instance.
    */
    static constructFromObject(data: Partial<V4CreateAuthTokenRequest>, obj: V4CreateAuthTokenRequest): V4CreateAuthTokenRequest;
    /**
    * Your email address
    * @member {String} email
    */
    email: string;
    /**
    * Your password as a base64 encoded string
    * @member {String} password_base64
    */
    password_base64: string;
}
