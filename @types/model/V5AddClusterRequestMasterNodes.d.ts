import V5AddClusterRequestMasterNodesAzure from "./V5AddClusterRequestMasterNodesAzure";

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
   * Specifies whether or not this cluster should run with redundant master nodes (high availability).  When `true`, three master nodes will be started, each one in a different availability zone that is selected randomly. This is the recommended setting for production clusters. However, note that this is only available on <span class=\"badge aws\">AWS</span> starting with release v11.4.0.  When `false`, only one master node will be created, also in a randomly selected availability zone.
   * @member {Boolean} high_availability
   * @default true
   */
  high_availability: boolean;
  /**
   * This field allows manually specifying the availability zone(s) where the master node(s) should be created in.  This parameter is currently only supported on <span class=\"badge azure\">Azure</span>.
   * @member {Array.<String>} availability_zones
   */
  availability_zones: string[];
  /**
   * @member {module:model/V5AddClusterRequestMasterNodesAzure} azure
   */
  azure: V5AddClusterRequestMasterNodesAzure;
}
