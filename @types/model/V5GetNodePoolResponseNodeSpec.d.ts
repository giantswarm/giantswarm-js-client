import V5GetNodePoolResponseNodeSpecAws from "./V5GetNodePoolResponseNodeSpecAws";
import V5GetNodePoolResponseNodeSpecAzure from "./V5GetNodePoolResponseNodeSpecAzure";
import V5GetNodePoolResponseNodeSpecVolumeSizesGb from "./V5GetNodePoolResponseNodeSpecVolumeSizesGb";

/**
* The V5GetNodePoolResponseNodeSpec model module.
* @module model/V5GetNodePoolResponseNodeSpec
* @version 4.0.0
*/
export default class V5GetNodePoolResponseNodeSpec {
    /**
    * Constructs a <code>V5GetNodePoolResponseNodeSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5GetNodePoolResponseNodeSpec} obj Optional instance to populate.
    * @return {module:model/V5GetNodePoolResponseNodeSpec} The populated <code>V5GetNodePoolResponseNodeSpec</code> instance.
    */
    static constructFromObject(data: Partial<V5GetNodePoolResponseNodeSpec>, obj: V5GetNodePoolResponseNodeSpec): V5GetNodePoolResponseNodeSpec;
    /**
    * @member {module:model/V5GetNodePoolResponseNodeSpecAws} aws
    */
    aws: V5GetNodePoolResponseNodeSpecAws | null;
    /**
     * @member {module:model/V5GetNodePoolResponseNodeSpecAws} azure
     */
    azure: V5GetNodePoolResponseNodeSpecAzure | null;
    /**
    * @member {module:model/V5GetNodePoolResponseNodeSpecVolumeSizesGb} volume_sizes_gb
    */
    volume_sizes_gb: V5GetNodePoolResponseNodeSpecVolumeSizesGb;
}
