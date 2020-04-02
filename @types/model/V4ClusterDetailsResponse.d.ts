/**
* The V4ClusterDetailsResponse model module.
* @module model/V4ClusterDetailsResponse
* @version 4.0.0
*/
export default class V4ClusterDetailsResponse {
    /**
    * Constructs a <code>V4ClusterDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4ClusterDetailsResponse} obj Optional instance to populate.
    * @return {module:model/V4ClusterDetailsResponse} The populated <code>V4ClusterDetailsResponse</code> instance.
    */
    static constructFromObject(data: Partial<V4ClusterDetailsResponse>, obj: V4ClusterDetailsResponse): V4ClusterDetailsResponse;
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
    * ID of the credentials used to operate the cluster (only on AWS and Azure). See [Set credentials](#operation/addCredentials) for details.
    * @member {String} credential_id
    */
    credential_id: any;
    /**
    * The [release](https://docs.giantswarm.io/api/#tag/releases) version currently running this cluster.
    * @member {String} release_version
    */
    release_version: any;
    /**
    * @member {module:model/V4ClusterDetailsResponseScaling} scaling
    */
    scaling: any;
    /**
    * List of availability zones a cluster is spread across.
    * @member {Array.<String>} availability_zones
    */
    availability_zones: any;
    /**
    * Information about worker nodes in the cluster (deprecated)
    * @member {Array.<module:model/V4NodeDefinition>} workers
    */
    workers: any;
    /**
    * @member {module:model/V4ClusterDetailsResponseKvm} kvm
    */
    kvm: any;
}
