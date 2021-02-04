import V5AddNodePoolRequestNodeSpecAzureSpotInstances from "./V5AddNodePoolRequestNodeSpecAzureSpotInstances";

/**
 * The V5AddNodePoolRequestNodeSpecAzure model module.
 * @module model/V5AddNodePoolRequestNodeSpecAzure
 * @version 4.0.0
 */
export default class V5AddNodePoolRequestNodeSpecAzure {
  /**
   * Constructs a <code>V5AddNodePoolRequestNodeSpecAzure</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V5AddNodePoolRequestNodeSpecAzure} obj Optional instance to populate.
   * @return {module:model/V5AddNodePoolRequestNodeSpecAzure} The populated <code>V5AddNodePoolRequestNodeSpecAzure</code> instance.
   */
  static constructFromObject(
    data: Partial<V5AddNodePoolRequestNodeSpecAzure>,
    obj: V5AddNodePoolRequestNodeSpecAzure
  ): V5AddNodePoolRequestNodeSpecAzure;
  /**
   * Azure VM size to use for all nodes in the node pool. _(Validated against available VM sizes.)_
   * @member {String} vm_size
   */
  vm_size: string;
  /**
   * @member {module:model/V5AddNodePoolRequestNodeSpecAzureSpotInstances} spot_instances
   */
  spot_instances: V5AddNodePoolRequestNodeSpecAzureSpotInstances;
}
