/**
* The V5GetNodePoolResponseNodeSpecAwsInstanceDistribution model module.
* @module model/V5GetNodePoolResponseNodeSpecAwsInstanceDistribution
* @version 4.0.0
*/
export default class V5GetNodePoolResponseNodeSpecAwsInstanceDistribution {
    /**
    * Constructs a <code>V5GetNodePoolResponseNodeSpecAwsInstanceDistribution</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5GetNodePoolResponseNodeSpecAwsInstanceDistribution} obj Optional instance to populate.
    * @return {module:model/V5GetNodePoolResponseNodeSpecAwsInstanceDistribution} The populated <code>V5GetNodePoolResponseNodeSpecAwsInstanceDistribution</code> instance.
    */
    static constructFromObject(data: Partial<V5GetNodePoolResponseNodeSpecAwsInstanceDistribution>, obj: V5GetNodePoolResponseNodeSpecAwsInstanceDistribution): V5GetNodePoolResponseNodeSpecAwsInstanceDistribution;
    /**
    * Base capacity of on-demand EC2 instances to use for worker nodes in this pools. Find details on this attribute in the [addNodePool](#operation/addNodePool) operation.
    * @member {Number} on_demand_base_capacity
    */
    on_demand_base_capacity: number;
    /**
    * Percentage of on-demand EC2 instances to use for worker nodes, instead of spot instances, for instances exceeding `on_demand_base_capacity`. Find details on this attribute in the [addNodePool](#operation/addNodePool) operation.
    * @member {Number} on_demand_percentage_above_base_capacity
    */
    on_demand_percentage_above_base_capacity: number;
}
