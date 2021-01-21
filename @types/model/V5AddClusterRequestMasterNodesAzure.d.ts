/**
 * The V5AddClusterRequestMasterNodesAzure model module.
 * @module model/V5AddClusterRequestMasterNodesAzure
 * @version 4.0.0
 */
export default class V5AddClusterRequestMasterNodesAzure {
  /**
   * Constructs a <code>V5AddClusterRequestMasterNodesAzure</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V5AddClusterRequestMasterNodesAzure} obj Optional instance to populate.
   * @return {module:model/V5AddClusterRequestMasterNodesAzure} The populated <code>V5AddClusterRequestMasterNodesAzure</code> instance.
   */
  static constructFromObject(
    data: Partial<V5AddClusterRequestMasterNodesAzure>,
    obj: V5AddClusterRequestMasterNodesAzure
  ): V5AddClusterRequestMasterNodesAzure;
  /**
   * If this field is set to true, the content of the `availability_zones' field will be ignored and the master nodes will be placed in no availability zone.
   * @member {Boolean} availability_zones_unspecified
   */
  availability_zones_unspecified: boolean;
}
