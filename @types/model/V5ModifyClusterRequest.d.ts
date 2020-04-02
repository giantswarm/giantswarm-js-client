/**
* The V5ModifyClusterRequest model module.
* @module model/V5ModifyClusterRequest
* @version 4.0.0
*/
export default class V5ModifyClusterRequest {
    /**
    * Constructs a <code>V5ModifyClusterRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5ModifyClusterRequest} obj Optional instance to populate.
    * @return {module:model/V5ModifyClusterRequest} The populated <code>V5ModifyClusterRequest</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * New cluster name
    * @member {String} name
    */
    name: any;
    /**
    * Release version to upgrade to
    * @member {String} release_version
    */
    release_version: any;
}
