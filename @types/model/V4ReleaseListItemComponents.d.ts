/**
* The V4ReleaseListItemComponents model module.
* @module model/V4ReleaseListItemComponents
* @version 4.0.0
*/
export default class V4ReleaseListItemComponents {
    /**
    * Constructs a <code>V4ReleaseListItemComponents</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4ReleaseListItemComponents} obj Optional instance to populate.
    * @return {module:model/V4ReleaseListItemComponents} The populated <code>V4ReleaseListItemComponents</code> instance.
    */
    static constructFromObject(data: Partial<V4ReleaseListItemComponents>, obj: V4ReleaseListItemComponents): V4ReleaseListItemComponents;
    /**
    * Constructs a new <code>V4ReleaseListItemComponents</code>.
    * @alias module:model/V4ReleaseListItemComponents
    * @class
    * @param name {String} Name of the component
    * @param version {String} Version number of the component
    */
    constructor(name: string, version: string);
    /**
    * Name of the component
    * @member {String} name
    */
    name: any;
    /**
    * Version number of the component
    * @member {String} version
    */
    version: any;
}
