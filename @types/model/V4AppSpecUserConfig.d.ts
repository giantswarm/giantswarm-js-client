/**
* The V4AppSpecUserConfig model module.
* @module model/V4AppSpecUserConfig
* @version 4.0.0
*/
export default class V4AppSpecUserConfig {
    /**
    * Constructs a <code>V4AppSpecUserConfig</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AppSpecUserConfig} obj Optional instance to populate.
    * @return {module:model/V4AppSpecUserConfig} The populated <code>V4AppSpecUserConfig</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * @member {module:model/V4AppSpecUserConfigConfigmap} configmap
    */
    configmap: any;
    /**
    * @member {module:model/V4AppSpecUserConfigSecret} secret
    */
    secret: any;
}
