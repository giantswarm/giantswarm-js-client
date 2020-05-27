/**
 * The V5ModifyClusterRequestMasterNodes model module.
 * @module model/V5ModifyClusterRequestMasterNodes
 * @version 4.0.0
 */
export default class V5ModifyClusterRequestMasterNodes {
  /**
   * Constructs a <code>V5ModifyClusterRequestMasterNodes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V5ModifyClusterRequestMasterNodes} obj Optional instance to populate.
   * @return {module:model/V5ModifyClusterRequestMasterNodes} The populated <code>V5ModifyClusterRequestMasterNodes</code> instance.
   */
  static constructFromObject(
    data: Partial<V5ModifyClusterRequestMasterNodes>,
    obj: V5ModifyClusterRequestMasterNodes
  ): V5ModifyClusterRequestMasterNodes;
  /**
   * Setting this attribute to `true` allows to switch a cluster from using a single master node to multiple (3) master nodes in separate availability zones for high availability. Note that the switch from multiple master nodes to a single master node is not supported.
   * @member {Boolean} high_availability
   */
  high_availability: boolean;
}
