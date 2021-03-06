import V5ModifyNodePoolRequestScaling from "./V5ModifyNodePoolRequestScaling";

/**
* The V5ModifyNodePoolRequest model module.
* @module model/V5ModifyNodePoolRequest
* @version 4.0.0
*/
export default class V5ModifyNodePoolRequest {
    /**
    * Constructs a <code>V5ModifyNodePoolRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5ModifyNodePoolRequest} obj Optional instance to populate.
    * @return {module:model/V5ModifyNodePoolRequest} The populated <code>V5ModifyNodePoolRequest</code> instance.
    */
   static constructFromObject(data: Partial<V5ModifyNodePoolRequest>, obj: V5ModifyNodePoolRequest): V5ModifyNodePoolRequest;
    /**
    * New name of the node pool
    * @member {String} name
    */
    name: string;
    /**
    * @member {module:model/V5ModifyNodePoolRequestScaling} scaling
    */
    scaling: V5ModifyNodePoolRequestScaling;
}
