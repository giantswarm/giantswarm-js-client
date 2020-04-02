/**
* The V4InfoResponseWorkersCountPerCluster model module.
* @module model/V4InfoResponseWorkersCountPerCluster
* @version 4.0.0
*/
export default class V4InfoResponseWorkersCountPerCluster {
    /**
    * Constructs a <code>V4InfoResponseWorkersCountPerCluster</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4InfoResponseWorkersCountPerCluster} obj Optional instance to populate.
    * @return {module:model/V4InfoResponseWorkersCountPerCluster} The populated <code>V4InfoResponseWorkersCountPerCluster</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Maximum number of worker a cluster can have. Might be null when unknown.
    * @member {Number} max
    */
    max: any;
    /**
    * Default number of workers in a new cluster will have, if not specifiec otherwise
    * @member {Number} default
    */
    default: any;
}
//# sourceMappingURL=V4InfoResponseWorkersCountPerCluster.d.ts.map