/**
* The V4InfoResponseFeaturesNodepools model module.
* @module model/V4InfoResponseFeaturesNodepools
* @version 4.0.0
*/
export default class V4InfoResponseFeaturesNodepools {
    /**
    * Constructs a <code>V4InfoResponseFeaturesNodepools</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4InfoResponseFeaturesNodepools} obj Optional instance to populate.
    * @return {module:model/V4InfoResponseFeaturesNodepools} The populated <code>V4InfoResponseFeaturesNodepools</code> instance.
    */
    static constructFromObject(data: Partial<V4InfoResponseFeaturesNodepools>, obj: V4InfoResponseFeaturesNodepools): V4InfoResponseFeaturesNodepools;
    /**
    * The minimum release version number required to have support for node pools.
    * @member {String} release_version_minimum
    */
    release_version_minimum: string;
}
