/**
* The V4AddClusterRequest model module.
* @module model/V4AddClusterRequest
* @version 4.0.0
*/
export default class V4AddClusterRequest {
    /**
    * Constructs a <code>V4AddClusterRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AddClusterRequest} obj Optional instance to populate.
    * @return {module:model/V4AddClusterRequest} The populated <code>V4AddClusterRequest</code> instance.
    */
    static constructFromObject(data: Partial<V4AddClusterRequest>, obj: V4AddClusterRequest): V4AddClusterRequest;
    /**
    * Constructs a new <code>V4AddClusterRequest</code>.
    * Request model for creating a new cluster
    * @alias module:model/V4AddClusterRequest
    * @class
    * @param owner {String} Name of the organization owning the cluster
    */
    constructor(owner: string);
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
    * The [release](https://docs.giantswarm.io/api/#tag/releases) version to use in the new cluster
    * @member {String} release_version
    */
    release_version: string;
    /**
    * Number of availability zones a cluster should be spread across. The default is provided via the [info](#operation/getInfo) endpoint.
    * @member {Number} availability_zones
    */
    availability_zones: any;
    /**
    * @member {module:model/V4AddClusterRequestScaling} scaling
    */
    scaling: any;
    /**
    * Worker node definition on KVM and Azure. If present, the first item of the array is expected to contain the specification for all worker nodes. Not available on AWS.
    * @member {Array.<module:model/V4NodeDefinition>} workers
    */
    workers: any;
}
