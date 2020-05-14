/**
* The V5AddNodePoolRequestNodeSpecAwsInstanceDistribution model module.
* @module model/V5AddNodePoolRequestNodeSpecAwsInstanceDistribution
* @version 4.0.0
*/
export default class V5AddNodePoolRequestNodeSpecAwsInstanceDistribution {
    /**
    * Constructs a <code>V5AddNodePoolRequestNodeSpecAwsInstanceDistribution</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5AddNodePoolRequestNodeSpecAwsInstanceDistribution} obj Optional instance to populate.
    * @return {module:model/V5AddNodePoolRequestNodeSpecAwsInstanceDistribution} The populated <code>V5AddNodePoolRequestNodeSpecAwsInstanceDistribution</code> instance.
    */
    static constructFromObject(data: Partial<V5AddNodePoolRequestNodeSpecAwsInstanceDistribution>, obj: V5AddNodePoolRequestNodeSpecAwsInstanceDistribution): V5AddNodePoolRequestNodeSpecAwsInstanceDistribution;
    /**
    * Base capacity of on-demand EC2 instances to use for worker nodes in this pools. When this is larger than 0, this value defines a number of worker nodes that will be created using on-demand EC2 instances, regardless of the value configured as `on_demand_percentage_above_base_capacity`.
    * @member {Number} on_demand_base_capacity
    */
    on_demand_base_capacity: number;
    /**
    * Percentage of on-demand EC2 instances to use for worker nodes, instead of spot instances, for instances exceeding `on_demand_base_capacity`. For example, to have half of the worker nodes use spot instances and half use on-demand, set this value to 50.
    * @member {Number} on_demand_percentage_above_base_capacity
    */
    on_demand_percentage_above_base_capacity: number;
}
