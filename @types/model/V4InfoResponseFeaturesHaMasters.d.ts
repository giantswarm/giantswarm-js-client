/**
 * The V4InfoResponseFeaturesHaMasters model module.
 * @module model/V4InfoResponseFeaturesHaMasters
 * @version 4.0.0
 */
export default class V4InfoResponseFeaturesHaMasters {
  /**
   * Constructs a <code>V4InfoResponseFeaturesHaMasters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V4InfoResponseFeaturesHaMasters} obj Optional instance to populate.
   * @return {module:model/V4InfoResponseFeaturesHaMasters} The populated <code>V4InfoResponseFeaturesHaMasters</code> instance.
   */
  static constructFromObject(
    data: Partial<V4InfoResponseFeaturesHaMasters>,
    obj: V4InfoResponseFeaturesHaMasters
  ): V4InfoResponseFeaturesHaMasters;
  /**
   * The minimum release version number required to have support for multiple master nodes.
   * @member {String} release_version_minimum
   */
  release_version_minimum: string;
}
