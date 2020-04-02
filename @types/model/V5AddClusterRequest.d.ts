/**
* The V5AddClusterRequest model module.
* @module model/V5AddClusterRequest
* @version 4.0.0
*/
export default class V5AddClusterRequest {
    /**
    * Constructs a <code>V5AddClusterRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5AddClusterRequest} obj Optional instance to populate.
    * @return {module:model/V5AddClusterRequest} The populated <code>V5AddClusterRequest</code> instance.
    */
   static constructFromObject(data: Partial<V5AddClusterRequest>, obj: V5AddClusterRequest): V5AddClusterRequest;
    /**
    * Constructs a new <code>V5AddClusterRequest</code>.
    * @alias module:model/V5AddClusterRequest
    * @class
    * @param owner {String} Name of the organization owning the cluster
    */
    constructor(owner: string);
    /**
    * Name of the organization owning the cluster
    * @member {String} owner
    */
    owner: any;
    /**
    * Cluster name
    * @member {String} name
    */
    name: any;
    /**
    * The [release](https://docs.giantswarm.io/api/#tag/releases) version to use in the new cluster. If not given, the latest release will be used.
    * @member {String} release_version
    */
    release_version: any;
    /**
    * @member {module:model/V5AddClusterRequestMaster} master
    */
    master: any;
}
