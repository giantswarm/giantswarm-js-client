/**
* The V5GetNodePoolResponseScaling model module.
* @module model/V5GetNodePoolResponseScaling
* @version 4.0.0
*/
export default class V5GetNodePoolResponseScaling {
    /**
    * Constructs a <code>V5GetNodePoolResponseScaling</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5GetNodePoolResponseScaling} obj Optional instance to populate.
    * @return {module:model/V5GetNodePoolResponseScaling} The populated <code>V5GetNodePoolResponseScaling</code> instance.
    */
    static constructFromObject(data: Partial<V5GetNodePoolResponseScaling>, obj: V5GetNodePoolResponseScaling): V5GetNodePoolResponseScaling;
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
