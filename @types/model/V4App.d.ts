/**
* The V4App model module.
* @module model/V4App
* @version 4.0.0
*/
export default class V4App {
    /**
    * Constructs a <code>V4App</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4App} obj Optional instance to populate.
    * @return {module:model/V4App} The populated <code>V4App</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * @member {module:model/V4AppMetadata} metadata
    */
    metadata: any;
    /**
    * @member {module:model/V4AppSpec} spec
    */
    spec: any;
    /**
    * @member {module:model/V4AppStatus} status
    */
    status: any;
}
