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
    static constructFromObject(data: any, obj: any): any;
    /**
    * @member {module:model/V4InfoResponseGeneral} general
    */
    general: any;
    /**
    * @member {module:model/V4InfoResponseFeatures} features
    */
    features: any;
    /**
    * @member {module:model/V4InfoResponseStats} stats
    */
    stats: any;
    /**
    * @member {module:model/V4InfoResponseWorkers} workers
    */
    workers: any;
}
//# sourceMappingURL=V4InfoResponse.d.ts.map