/**
* The V4AddClusterRequestScaling model module.
* @module model/V4AddClusterRequestScaling
* @version 4.0.0
*/
export default class V4AddClusterRequestScaling {
    /**
    * Constructs a <code>V4AddClusterRequestScaling</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AddClusterRequestScaling} obj Optional instance to populate.
    * @return {module:model/V4AddClusterRequestScaling} The populated <code>V4AddClusterRequestScaling</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Minimum number of cluster nodes
    * @member {Number} min
    */
    min: number;
    /**
    * Maximum number of cluster nodes
    * @member {Number} max
    */
    max: number;
}
//# sourceMappingURL=V4AddClusterRequestScaling.d.ts.map