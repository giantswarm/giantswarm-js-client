/**
* The V4AppCatalogsResponseInnerMetadataLabels model module.
* @module model/V4AppCatalogsResponseInnerMetadataLabels
* @version 4.0.0
*/
export default class V4AppCatalogsResponseInnerMetadataLabels {
    /**
    * Constructs a <code>V4AppCatalogsResponseInnerMetadataLabels</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AppCatalogsResponseInnerMetadataLabels} obj Optional instance to populate.
    * @return {module:model/V4AppCatalogsResponseInnerMetadataLabels} The populated <code>V4AppCatalogsResponseInnerMetadataLabels</code> instance.
    */
   static constructFromObject(data: Partial<V4AppCatalogsResponseInnerMetadataLabels>, obj: V4AppCatalogsResponseInnerMetadataLabels): V4AppCatalogsResponseInnerMetadataLabels;
    /**
    * @member {String} application.giantswarm.io/catalog-type
    */
    "application.giantswarm.io/catalog-type": string;
    /**
    * @member {String} app-operator.giantswarm.io/version
    */
    "app-operator.giantswarm.io/version": string;
}
