/**
 * The V5AddClusterRequestMasterNodes model module.
 * @module model/V5AddClusterRequestMasterNodes
 * @version 4.0.0
 */
export default class V5AddClusterRequestMasterNodes {
  /**
   * Constructs a <code>V5AddClusterRequestMasterNodes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V5AddClusterRequestMasterNodes} obj Optional instance to populate.
   * @return {module:model/V5AddClusterRequestMasterNodes} The populated <code>V5AddClusterRequestMasterNodes</code> instance.
   */
  static constructFromObject(
    data: Partial<V5AddClusterRequestMasterNodes>,
    obj: V5AddClusterRequestMasterNodes
  ): V5AddClusterRequestMasterNodes;
  /**
   * Specifies whether or not this cluster should run with redundant master nodes (high availability). When true, three master nodes will be started, each one in a different availability zone that is selected randomly. This is the recommended setting for production clusters. When false, only one master node will be created, also in a randomly selected availability zone.
   * @member {Boolean} high_availability
   * @default true
   */
  high_availability: boolean;
}
