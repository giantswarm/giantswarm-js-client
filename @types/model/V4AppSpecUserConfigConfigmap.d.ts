/**
* The V4AppSpecUserConfigConfigmap model module.
* @module model/V4AppSpecUserConfigConfigmap
* @version 4.0.0
*/
export default class V4AppSpecUserConfigConfigmap {
    /**
    * Constructs a <code>V4AppSpecUserConfigConfigmap</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AppSpecUserConfigConfigmap} obj Optional instance to populate.
    * @return {module:model/V4AppSpecUserConfigConfigmap} The populated <code>V4AppSpecUserConfigConfigmap</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Name of the config map containing values to apply, e.g. prometheus-user-values
    * @member {String} name
    */
    name: any;
    /**
    * Namespace of the values config map on the control plane, e.g. 123ab
    * @member {String} namespace
    */
    namespace: any;
}
//# sourceMappingURL=V4AppSpecUserConfigConfigmap.d.ts.map