/**
* The V5GetNodePoolResponseStatus model module.
* @module model/V5GetNodePoolResponseStatus
* @version 4.0.0
*/
export default class V5GetNodePoolResponseStatus {
    /**
    * Constructs a <code>V5GetNodePoolResponseStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5GetNodePoolResponseStatus} obj Optional instance to populate.
    * @return {module:model/V5GetNodePoolResponseStatus} The populated <code>V5GetNodePoolResponseStatus</code> instance.
    */
   static constructFromObject(data: Partial<V5GetNodePoolResponseStatus>, obj: V5GetNodePoolResponseStatus): V5GetNodePoolResponseStatus;
    /**
    * Desired number of nodes in the pool
    * @member {Number} nodes
    */
    nodes: number;
    /**
    * Number of nodes in state NodeReady
    * @member {Number} nodes_ready
    */
    nodes_ready: number;
}
