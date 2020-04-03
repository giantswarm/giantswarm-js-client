/**
* The V5ModifyNodePoolRequestScaling model module.
* @module model/V5ModifyNodePoolRequestScaling
* @version 4.0.0
*/
export default class V5ModifyNodePoolRequestScaling {
    /**
    * Constructs a <code>V5ModifyNodePoolRequestScaling</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5ModifyNodePoolRequestScaling} obj Optional instance to populate.
    * @return {module:model/V5ModifyNodePoolRequestScaling} The populated <code>V5ModifyNodePoolRequestScaling</code> instance.
    */
    static constructFromObject(data: Partial<V5ModifyNodePoolRequestScaling>, obj: V5ModifyNodePoolRequestScaling): V5ModifyNodePoolRequestScaling;
    /**
    * Minimum number of nodes in the pool
    * @member {Number} min
    */
    min: number;
    /**
    * Maximum number of nodes in the pool
    * @member {Number} max
    */
    max: number;
}
