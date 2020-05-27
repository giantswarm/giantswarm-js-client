import V5ClusterDetailsResponseMaster from "./V5ClusterDetailsResponseMaster";
import V5ClusterDetailsResponseConditions from "./V5ClusterDetailsResponseConditions";
import V5ClusterDetailsResponseVersions from "./V5ClusterDetailsResponseVersions";
import V5ClusterLabelsProperty from "./V5ClusterLabelsProperty";
import V5ClusterDetailsResponseMasterNodes from "./V5ClusterDetailsResponseMasterNodes";

/**
 * The V5ClusterDetailsResponse model module.
 * @module model/V5ClusterDetailsResponse
 * @version 4.0.0
 */
export default class V5ClusterDetailsResponse {
  /**
   * Constructs a <code>V5ClusterDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V5ClusterDetailsResponse} obj Optional instance to populate.
   * @return {module:model/V5ClusterDetailsResponse} The populated <code>V5ClusterDetailsResponse</code> instance.
   */
  static constructFromObject(
    data: Partial<V5ClusterDetailsResponse>,
    obj: V5ClusterDetailsResponse
  ): V5ClusterDetailsResponse;
  /**
   * Unique cluster identifier
   * @member {String} id
   */
  id: string;
  /**
   * URI of the Kubernetes API endpoint
   * @member {String} api_endpoint
   */
  api_endpoint: string;
  /**
   * Date/time of cluster creation
   * @member {String} create_date
   */
  create_date: string;
  /**
   * Date/time when cluster has been deleted
   * @member {Date} delete_date
   */
  delete_date: Date;
  /**
   * Name of the organization owning the cluster
   * @member {String} owner
   */
  owner: string;
  /**
   * Cluster name
   * @member {String} name
   */
  name: string;
  /**
   * ID of the credentials used to operate the cluster. See [Set credentials](#operation/addCredentials) for details.
   * @member {String} credential_id
   */
  credential_id: string;
  /**
   * The [release](https://docs.giantswarm.io/api/#tag/releases) version used by the cluster
   * @member {String} release_version
   */
  release_version: string;
  /**
   * @member {module:model/V5ClusterDetailsResponseMaster} master
   */
  master: V5ClusterDetailsResponseMaster;
  /**
   * @member {module:model/V5ClusterDetailsResponseMasterNodes} master_nodes
   */
  master_nodes: V5ClusterDetailsResponseMasterNodes;
  /**
   * List of conditions the cluster has gone through
   * @member {Array.<module:model/V5ClusterDetailsResponseConditions>} conditions
   */
  conditions: V5ClusterDetailsResponseConditions[];
  /**
   * @member {Array.<module:model/V5ClusterDetailsResponseVersions>} versions
   */
  versions: V5ClusterDetailsResponseVersions[];
  /**
   * @member {module:model/V5ClusterLabelsProperty} labels
   */
  labels: V5ClusterLabelsProperty;
}
