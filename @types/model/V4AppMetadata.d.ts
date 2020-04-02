/**
* The V4AppMetadata model module.
* @module model/V4AppMetadata
* @version 4.0.0
*/
export default class V4AppMetadata {
    /**
    * Constructs a <code>V4AppMetadata</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AppMetadata} obj Optional instance to populate.
    * @return {module:model/V4AppMetadata} The populated <code>V4AppMetadata</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * The identifier you set when creating this app
    * @member {String} name
    */
    name: string;
    /**
    * The labels that are set on this App
    * @member {Object} labels
    */
    labels: any;
}
//# sourceMappingURL=V4AppMetadata.d.ts.map