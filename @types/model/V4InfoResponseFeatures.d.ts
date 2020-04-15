import V4InfoResponseFeaturesNodepools from "./V4InfoResponseFeaturesNodepools";

/**
* The V4InfoResponseFeatures model module.
* @module model/V4InfoResponseFeatures
* @version 4.0.0
*/
export default class V4InfoResponseFeatures {
    /**
    * Constructs a <code>V4InfoResponseFeatures</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4InfoResponseFeatures} obj Optional instance to populate.
    * @return {module:model/V4InfoResponseFeatures} The populated <code>V4InfoResponseFeatures</code> instance.
    */
    static constructFromObject(data: Partial<V4InfoResponseFeatures>, obj: V4InfoResponseFeatures): V4InfoResponseFeatures;
    /**
    * @member {module:model/V4InfoResponseFeaturesNodepools} nodepools
    */
    nodepools: V4InfoResponseFeaturesNodepools;
}
