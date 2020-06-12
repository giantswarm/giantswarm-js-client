/**
 * The V5ClusterDetailsResponseMasterNodes model module.
 * @module model/V5ClusterDetailsResponseMasterNodes
 * @version 4.0.0
 */
export default class V5ClusterDetailsResponseMasterNodes {
  /**
   * Constructs a <code>V5ClusterDetailsResponseMasterNodes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V5ClusterDetailsResponseMasterNodes} obj Optional instance to populate.
   * @return {module:model/V5ClusterDetailsResponseMasterNodes} The populated <code>V5ClusterDetailsResponseMasterNodes</code> instance.
   */
  static constructFromObject(
    data: Partial<V5ClusterDetailsResponseMasterNodes>,
    obj: V5ClusterDetailsResponseMasterNodes
  ): V5ClusterDetailsResponseMasterNodes;
  /**
   * When true, the cluster has (or should have) three master nodes. Otherwise it should have one.
   * @member {Boolean} high_availability
   */
  high_availability: boolean;
  /**
   * Availability zones of the master node(s) of this cluster.
   * @member {Array.<String>} availability_zones
   */
  availability_zones: string[] | null;
  /**
   * Number of master nodes that are reported as `Ready`.
   * @member {Number} num_ready
   */
  num_ready?: number | null;
}
