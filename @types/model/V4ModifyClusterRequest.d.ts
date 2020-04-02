/**
* The V4ModifyClusterRequest model module.
* @module model/V4ModifyClusterRequest
* @version 4.0.0
*/
export default class V4ModifyClusterRequest {
    /**
    * Constructs a <code>V4ModifyClusterRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4ModifyClusterRequest} obj Optional instance to populate.
    * @return {module:model/V4ModifyClusterRequest} The populated <code>V4ModifyClusterRequest</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Name for the cluster
    * @member {String} name
    */
    name: any;
    /**
    * Name of the organization owning the cluster
    * @member {String} owner
    */
    owner: any;
    /**
    * Release version to use after an upgrade
    * @member {String} release_version
    */
    release_version: any;
    /**
    * @member {module:model/V4ModifyClusterRequestScaling} scaling
    */
    scaling: any;
    /**
    * Worker node array (deprecated)
    * @member {Array.<module:model/V4NodeDefinition>} workers
    */
    workers: any;
}
