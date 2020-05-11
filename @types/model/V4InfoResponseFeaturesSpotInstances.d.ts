/**
* The V4InfoResponseFeaturesSpotInstances model module.
* @module model/V4InfoResponseFeaturesSpotInstances
* @version 4.0.0
*/
export default class V4InfoResponseFeaturesSpotInstances {
    /**
    * Constructs a <code>V4InfoResponseFeaturesSpotInstances</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4InfoResponseFeaturesSpotInstances} obj Optional instance to populate.
    * @return {module:model/V4InfoResponseFeaturesSpotInstances} The populated <code>V4InfoResponseFeaturesSpotInstances</code> instance.
    */
    static constructFromObject(data: Partial<V4InfoResponseFeaturesSpotInstances>, obj: V4InfoResponseFeaturesSpotInstances): V4InfoResponseFeaturesSpotInstances;
    /**
    * The minimum release version number required to have support for spot instances.
    * @member {String} release_version_minimum
    */
    release_version_minimum: string;
}
