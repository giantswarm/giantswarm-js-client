import V4InfoResponseGeneral from "./V4InfoResponseGeneral";
import V4InfoResponseFeatures from "./V4InfoResponseFeatures";
import V4InfoResponseStats from "./V4InfoResponseStats";
import V4InfoResponseWorkers from "./V4InfoResponseWorkers";

/**
* The V4InfoResponse model module.
* @module model/V4InfoResponse
* @version 4.0.0
*/
export default class V4InfoResponse {
    /**
    * Constructs a <code>V4InfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4InfoResponse} obj Optional instance to populate.
    * @return {module:model/V4InfoResponse} The populated <code>V4InfoResponse</code> instance.
    */
   static constructFromObject(data: Partial<V4InfoResponse>, obj: V4InfoResponse): V4InfoResponse;
    /**
    * @member {module:model/V4InfoResponseGeneral} general
    */
    general: V4InfoResponseGeneral;
    /**
    * @member {module:model/V4InfoResponseFeatures} features
    */
    features: V4InfoResponseFeatures;
    /**
    * @member {module:model/V4InfoResponseStats} stats
    */
    stats: V4InfoResponseStats;
    /**
    * @member {module:model/V4InfoResponseWorkers} workers
    */
    workers: V4InfoResponseWorkers;
}
