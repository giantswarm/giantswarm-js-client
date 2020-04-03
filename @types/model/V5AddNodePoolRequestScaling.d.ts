/**
* The V5AddNodePoolRequestScaling model module.
* @module model/V5AddNodePoolRequestScaling
* @version 4.0.0
*/
export default class V5AddNodePoolRequestScaling {
    /**
    * Constructs a <code>V5AddNodePoolRequestScaling</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5AddNodePoolRequestScaling} obj Optional instance to populate.
    * @return {module:model/V5AddNodePoolRequestScaling} The populated <code>V5AddNodePoolRequestScaling</code> instance.
    */
   static constructFromObject(data: Partial<V5AddNodePoolRequestScaling>, obj: V5AddNodePoolRequestScaling): V5AddNodePoolRequestScaling;
    /**
    * Minimum number of nodes in the pool.
    * @member {Number} min
    */
    min: number;
    /**
    * Maximum number of nodes in the pool.
    * @member {Number} max
    */
    max: number;
}
