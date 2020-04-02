/**
* The V4ModifyAppRequest model module.
* @module model/V4ModifyAppRequest
* @version 4.0.0
*/
export default class V4ModifyAppRequest {
    /**
    * Constructs a <code>V4ModifyAppRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4ModifyAppRequest} obj Optional instance to populate.
    * @return {module:model/V4ModifyAppRequest} The populated <code>V4ModifyAppRequest</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * @member {module:model/V4ModifyAppRequestSpec} spec
    */
    spec: any;
}
