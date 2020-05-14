import V5GetNodePoolResponseNodeSpecAwsInstanceDistribution from "./V5GetNodePoolResponseNodeSpecAwsInstanceDistribution";
/**
* The V5GetNodePoolResponseNodeSpecAws model module.
* @module model/V5GetNodePoolResponseNodeSpecAws
* @version 4.0.0
*/
export default class V5GetNodePoolResponseNodeSpecAws {
    /**
    * Constructs a <code>V5GetNodePoolResponseNodeSpecAws</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5GetNodePoolResponseNodeSpecAws} obj Optional instance to populate.
    * @return {module:model/V5GetNodePoolResponseNodeSpecAws} The populated <code>V5GetNodePoolResponseNodeSpecAws</code> instance.
    */
    static constructFromObject(data: Partial<V5GetNodePoolResponseNodeSpecAws>, obj: V5GetNodePoolResponseNodeSpecAws): V5GetNodePoolResponseNodeSpecAws;
    /**
    * @member {module:model/V5GetNodePoolResponseNodeSpecAwsInstanceDistribution} instance_distribution
    */
    instance_distribution: V5GetNodePoolResponseNodeSpecAwsInstanceDistribution;
    /**
    * EC2 instance type used by all nodes in this pool.
    * @member {String} instance_type
    */
    instance_type: string;
    /**
    * Whether this node pool can use different instance types alike the configured one. Find details on this attribute in the [addNodePool](#operation/addNodePool) operation.
    * @member {Boolean} use_alike_instance_types
    */
    use_alike_instance_types: boolean;
}
