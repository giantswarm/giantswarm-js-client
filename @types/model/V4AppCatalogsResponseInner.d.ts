/**
* The V4AppCatalogsResponseInner model module.
* @module model/V4AppCatalogsResponseInner
* @version 4.0.0
*/
export default class V4AppCatalogsResponseInner {
    /**
    * Constructs a <code>V4AppCatalogsResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AppCatalogsResponseInner} obj Optional instance to populate.
    * @return {module:model/V4AppCatalogsResponseInner} The populated <code>V4AppCatalogsResponseInner</code> instance.
    */
   static constructFromObject(data: Partial<V4AppCatalogsResponseInner>, obj: V4AppCatalogsResponseInner): V4AppCatalogsResponseInner;
    /**
    * @member {module:model/V4AppCatalogsResponseInnerMetadata} metadata
    */
    metadata: any;
    /**
    * @member {module:model/V4AppCatalogsResponseInnerSpec} spec
    */
    spec: any;
}
