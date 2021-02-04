/**
 * The V5GetNodePoolResponseNodeSpecAzureSpotInstances model module.
 * @module model/V5GetNodePoolResponseNodeSpecAzureSpotInstances
 * @version 4.0.0
 */
export default class V5GetNodePoolResponseNodeSpecAzureSpotInstances {
  /**
   * Constructs a <code>V5GetNodePoolResponseNodeSpecAzureSpotInstances</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V5GetNodePoolResponseNodeSpecAzureSpotInstances} obj Optional instance to populate.
   * @return {module:model/V5GetNodePoolResponseNodeSpecAzureSpotInstances} The populated <code>V5GetNodePoolResponseNodeSpecAzureSpotInstances</code> instance.
   */
  static constructFromObject(
    data: Partial<V5GetNodePoolResponseNodeSpecAzureSpotInstances>,
    obj: V5GetNodePoolResponseNodeSpecAzureSpotInstances
  ): V5GetNodePoolResponseNodeSpecAzureSpotInstances;
  /**
   * Whether the feature is enabled or not.
   * @member {Boolean} enabled
   */
  enabled: boolean;
  /**
   * The maximum price that a single node pool VM instance can reach before it is deallocated. Find details on this attribute in the [addNodePool](#operation/addNodePool) operation.
   * @member {Number} max_price
   */
  max_price: number;
}
