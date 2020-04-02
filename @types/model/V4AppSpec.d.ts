/**
* The V4AppSpec model module.
* @module model/V4AppSpec
* @version 4.0.0
*/
export default class V4AppSpec {
    /**
    * Constructs a <code>V4AppSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AppSpec} obj Optional instance to populate.
    * @return {module:model/V4AppSpec} The populated <code>V4AppSpec</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Name of the chart that was used to install this app
    * @member {String} name
    */
    name: any;
    /**
    * Namespace that this app is installed to
    * @member {String} namespace
    */
    namespace: any;
    /**
    * Version of the chart that was used to install this app
    * @member {String} version
    */
    version: any;
    /**
    * The catalog that this app came from
    * @member {String} catalog
    */
    catalog: any;
    /**
    * @member {module:model/V4AppSpecUserConfig} user_config
    */
    user_config: any;
}
//# sourceMappingURL=V4AppSpec.d.ts.map