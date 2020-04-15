import V4CreateAppRequestSpec from "./V4CreateAppRequestSpec";

/**
* The V4CreateAppRequest model module.
* @module model/V4CreateAppRequest
* @version 4.0.0
*/
export default class V4CreateAppRequest {
    /**
    * Constructs a <code>V4CreateAppRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4CreateAppRequest} obj Optional instance to populate.
    * @return {module:model/V4CreateAppRequest} The populated <code>V4CreateAppRequest</code> instance.
    */
    static constructFromObject(data: Partial<V4CreateAppRequest>, obj: V4CreateAppRequest): V4CreateAppRequest;
    /**
    * @member {module:model/V4CreateAppRequestSpec} spec
    */
    spec: V4CreateAppRequestSpec;
}
