/**
* The V4CreateAuthTokenResponse model module.
* @module model/V4CreateAuthTokenResponse
* @version 4.0.0
*/
export default class V4CreateAuthTokenResponse {
    /**
    * Constructs a <code>V4CreateAuthTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4CreateAuthTokenResponse} obj Optional instance to populate.
    * @return {module:model/V4CreateAuthTokenResponse} The populated <code>V4CreateAuthTokenResponse</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * The newly created API token
    * @member {String} auth_token
    */
    auth_token: any;
}
