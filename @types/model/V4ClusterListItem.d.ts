import V5ClusterLabelsProperty from './V5ClusterLabelsProperty';

/**
* The V4ClusterListItem model module.
* @module model/V4ClusterListItem
* @version 4.0.0
*/
export default class V4ClusterListItem {
    /**
    * Constructs a <code>V4ClusterListItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4ClusterListItem} obj Optional instance to populate.
    * @return {module:model/V4ClusterListItem} The populated <code>V4ClusterListItem</code> instance.
    */
    static constructFromObject(data: Partial<V4ClusterListItem>, obj: V4ClusterListItem): V4ClusterListItem;
    /**
    * Unique cluster identifier
    * @member {String} id
    */
    id: string;
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
    * Cluster name
    * @member {String} name
    */
    name: string;
    /**
    * Name of the organization owning the cluster
    * @member {String} owner
    */
    owner: string;
    /**
    * The semantic version number of this cluster
    * @member {String} release_version
    */
    release_version: string;
    /**
    * API path of the cluster resource
    * @member {String} path
    */
    path: string;
    /**
    * @member {module:model/V5ClusterLabelsProperty} labels
    */
    labels: V5ClusterLabelsProperty;
}
