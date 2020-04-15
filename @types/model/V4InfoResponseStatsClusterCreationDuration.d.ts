/**
* The V4InfoResponseStatsClusterCreationDuration model module.
* @module model/V4InfoResponseStatsClusterCreationDuration
* @version 4.0.0
*/
export default class V4InfoResponseStatsClusterCreationDuration {
    /**
    * Constructs a <code>V4InfoResponseStatsClusterCreationDuration</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4InfoResponseStatsClusterCreationDuration} obj Optional instance to populate.
    * @return {module:model/V4InfoResponseStatsClusterCreationDuration} The populated <code>V4InfoResponseStatsClusterCreationDuration</code> instance.
    */
    static constructFromObject(data: Partial<V4InfoResponseStatsClusterCreationDuration>, obj: V4InfoResponseStatsClusterCreationDuration): V4InfoResponseStatsClusterCreationDuration;
    /**
    * Median of the value distribution
    * @member {Number} median
    */
    median: number;
    /**
    * 25th percentile of the value distribution
    * @member {Number} p25
    */
    p25: number;
    /**
    * 75th percentile of the value distribution
    * @member {Number} p75
    */
    p75: number;
}
