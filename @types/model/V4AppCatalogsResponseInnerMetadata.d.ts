/**
* The V4AppCatalogsResponseInnerMetadata model module.
* @module model/V4AppCatalogsResponseInnerMetadata
* @version 4.0.0
*/
export default class V4AppCatalogsResponseInnerMetadata {
    /**
    * Constructs a <code>V4AppCatalogsResponseInnerMetadata</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AppCatalogsResponseInnerMetadata} obj Optional instance to populate.
    * @return {module:model/V4AppCatalogsResponseInnerMetadata} The populated <code>V4AppCatalogsResponseInnerMetadata</code> instance.
    */
   static constructFromObject(data: Partial<V4AppCatalogsResponseInnerMetadata>, obj: V4AppCatalogsResponseInnerMetadata): V4AppCatalogsResponseInnerMetadata;
    /**
    * A URL friendly identifier for the catalog.
    * @member {String} name
    */
    name: string;
    /**
    * @member {module:model/V4AppCatalogsResponseInnerMetadataLabels} labels
    */
    labels: any;
}
