/**
 * The V5AddNodePoolRequestNodeSpecAzureSpotInstances model module.
 * @module model/V5AddNodePoolRequestNodeSpecAzureSpotInstances
 * @version 4.0.0
 */
export default class V5AddNodePoolRequestNodeSpecAzureSpotInstances {
  /**
   * Constructs a <code>V5AddNodePoolRequestNodeSpecAzureSpotInstances</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V5AddNodePoolRequestNodeSpecAzureSpotInstances} obj Optional instance to populate.
   * @return {module:model/V5AddNodePoolRequestNodeSpecAzureSpotInstances} The populated <code>V5AddNodePoolRequestNodeSpecAzureSpotInstances</code> instance.
   */
  static constructFromObject(
    data: Partial<V5AddNodePoolRequestNodeSpecAzureSpotInstances>,
    obj: V5AddNodePoolRequestNodeSpecAzureSpotInstances
  ): V5AddNodePoolRequestNodeSpecAzureSpotInstances;
  /**
   * Whether the feature is enabled or not.
   * @member {Boolean} enabled
   * @default false
   */
  enabled: boolean;
  /**
   * The maximum price that a single node pool VM instance can reach before it is deallocated. By setting this value to `0`, the maximum price will be fixed to the on-demand price of the instance. The value can be a floating point number with a maximum of 5 decimal places.
   * @member {Number} max_price
   */
  max_price: number;
}
