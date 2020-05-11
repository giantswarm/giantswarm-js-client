import V5AddNodePoolRequestNodeSpecAwsInstanceDistribution from "./V5AddNodePoolRequestNodeSpecAwsInstanceDistribution"
/**
* The V5AddNodePoolRequestNodeSpecAws model module.
* @module model/V5AddNodePoolRequestNodeSpecAws
* @version 4.0.0
*/
export default class V5AddNodePoolRequestNodeSpecAws {
    /**
    * Constructs a <code>V5AddNodePoolRequestNodeSpecAws</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5AddNodePoolRequestNodeSpecAws} obj Optional instance to populate.
    * @return {module:model/V5AddNodePoolRequestNodeSpecAws} The populated <code>V5AddNodePoolRequestNodeSpecAws</code> instance.
    */
   static constructFromObject(data: Partial<V5AddNodePoolRequestNodeSpecAws>, obj: V5AddNodePoolRequestNodeSpecAws): V5AddNodePoolRequestNodeSpecAws;
    /**
    * @member {module:model/V5AddNodePoolRequestNodeSpecAwsInstanceDistribution} instance_distribution
    */
    instance_distribution: V5AddNodePoolRequestNodeSpecAwsInstanceDistribution;
    /**
    * EC2 instance type to use for all nodes in the node pool. _(Validated against available instance types.)_
    * @member {String} instance_type
    */
    instance_type: string;
    /**
    * If true, instance types alike the type set via `instance_type` will be used. This can increase the likelihood to get instances for this pool, especially spot instances at a low rate. If false, only the exact type set as `instance_type` is used. Added with AWS release v11.2.0.
    * @member {Boolean} use_alike_instance_types
    * @default false
    */
    use_alike_instance_types: boolean;
}
