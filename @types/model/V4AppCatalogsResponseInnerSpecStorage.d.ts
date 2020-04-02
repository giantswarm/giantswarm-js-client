/**
* The V4AppCatalogsResponseInnerSpecStorage model module.
* @module model/V4AppCatalogsResponseInnerSpecStorage
* @version 4.0.0
*/
export default class V4AppCatalogsResponseInnerSpecStorage {
    /**
    * Constructs a <code>V4AppCatalogsResponseInnerSpecStorage</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AppCatalogsResponseInnerSpecStorage} obj Optional instance to populate.
    * @return {module:model/V4AppCatalogsResponseInnerSpecStorage} The populated <code>V4AppCatalogsResponseInnerSpecStorage</code> instance.
    */
   static constructFromObject(data: Partial<V4AppCatalogsResponseInnerSpecStorage>, obj: V4AppCatalogsResponseInnerSpecStorage): V4AppCatalogsResponseInnerSpecStorage;
    /**
    * A URL where clients can download the full catalog.
    * @member {String} URL
    */
    URL: string;
    /**
    * The format of this catalog. (Currently only helm is supported.)
    * @member {String} type
    */
    type: string;
}
