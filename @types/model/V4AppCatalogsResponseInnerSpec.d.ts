/**
* The V4AppCatalogsResponseInnerSpec model module.
* @module model/V4AppCatalogsResponseInnerSpec
* @version 4.0.0
*/
export default class V4AppCatalogsResponseInnerSpec {
    /**
    * Constructs a <code>V4AppCatalogsResponseInnerSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AppCatalogsResponseInnerSpec} obj Optional instance to populate.
    * @return {module:model/V4AppCatalogsResponseInnerSpec} The populated <code>V4AppCatalogsResponseInnerSpec</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * A display friendly title for this catalog.
    * @member {String} title
    */
    title: string;
    /**
    * A description of the catalog.
    * @member {String} description
    */
    description: string;
    /**
    * A URL to a logo representing this catalog.
    * @member {String} logoURL
    */
    logoURL: string;
    /**
    * @member {module:model/V4AppCatalogsResponseInnerSpecStorage} storage
    */
    storage: any;
}
