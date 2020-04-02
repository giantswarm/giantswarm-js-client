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
    static constructFromObject(data: any, obj: any): any;
    /**
    * Unique cluster identifier
    * @member {String} id
    */
    id: any;
    /**
    * URI of the Kubernetes API endpoint
    * @member {String} api_endpoint
    */
    api_endpoint: any;
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
    * ID of the credentials used to operate the cluster. See [Set credentials](#operation/addCredentials) for details.
    * @member {String} credential_id
    */
    credential_id: any;
    /**
    * The [release](https://docs.giantswarm.io/api/#tag/releases) version used by the cluster
    * @member {String} release_version
    */
    release_version: any;
    /**
    * @member {module:model/V5ClusterDetailsResponseMaster} master
    */
    master: any;
    /**
    * List of conditions the cluster has gone through
    * @member {Array.<module:model/V5ClusterDetailsResponseConditions>} conditions
    */
    conditions: any;
    /**
    * @member {Array.<module:model/V5ClusterDetailsResponseVersions>} versions
    */
    versions: any;
}
//# sourceMappingURL=V5ClusterDetailsResponse.d.ts.map