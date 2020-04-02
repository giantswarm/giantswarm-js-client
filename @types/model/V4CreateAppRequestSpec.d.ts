/**
* The V4CreateAppRequestSpec model module.
* @module model/V4CreateAppRequestSpec
* @version 4.0.0
*/
export default class V4CreateAppRequestSpec {
    /**
    * Constructs a <code>V4CreateAppRequestSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4CreateAppRequestSpec} obj Optional instance to populate.
    * @return {module:model/V4CreateAppRequestSpec} The populated <code>V4CreateAppRequestSpec</code> instance.
    */
    static constructFromObject(data: Partial<V4CreateAppRequestSpec>, obj: V4CreateAppRequestSpec): V4CreateAppRequestSpec;
    /**
    * Constructs a new <code>V4CreateAppRequestSpec</code>.
    * @alias module:model/V4CreateAppRequestSpec
    * @class
    * @param name {String} Name of the chart that should be used to install this app
    * @param namespace {String} Namespace that this app will be installed to
    * @param version {String} Version of the chart that should be used to install this app
    * @param catalog {String} The catalog where the chart for this app can be found
    */
    constructor(name: string, namespace: string, version: string, catalog: string);
    /**
    * Name of the chart that should be used to install this app
    * @member {String} name
    */
    name: any;
    /**
    * Namespace that this app will be installed to
    * @member {String} namespace
    */
    namespace: any;
    /**
    * Version of the chart that should be used to install this app
    * @member {String} version
    */
    version: any;
    /**
    * The catalog where the chart for this app can be found
    * @member {String} catalog
    */
    catalog: any;
}
