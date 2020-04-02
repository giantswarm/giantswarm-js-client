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
    static constructFromObject(data: any, obj: any): any;
    /**
    * Unique cluster identifier
    * @member {String} id
    */
    id: any;
    /**
    * Date/time of cluster creation
    * @member {String} create_date
    */
    create_date: any;
    /**
    * Date/time when cluster has been deleted
    * @member {Date} delete_date
    */
    delete_date: any;
    /**
    * Cluster name
    * @member {String} name
    */
    name: any;
    /**
    * Name of the organization owning the cluster
    * @member {String} owner
    */
    owner: any;
    /**
    * The semantic version number of this cluster
    * @member {String} release_version
    */
    release_version: any;
    /**
    * API path of the cluster resource
    * @member {String} path
    */
    path: any;
}
//# sourceMappingURL=V4ClusterListItem.d.ts.map