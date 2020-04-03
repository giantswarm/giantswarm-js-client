/**
* The V5AddClusterRequestMaster model module.
* @module model/V5AddClusterRequestMaster
* @version 4.0.0
*/
export default class V5AddClusterRequestMaster {
    /**
    * Constructs a <code>V5AddClusterRequestMaster</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5AddClusterRequestMaster} obj Optional instance to populate.
    * @return {module:model/V5AddClusterRequestMaster} The populated <code>V5AddClusterRequestMaster</code> instance.
    */
    static constructFromObject(data: Partial<V5AddClusterRequestMaster>, obj: V5AddClusterRequestMaster): V5AddClusterRequestMaster;
    /**
    * Name of the availability zone to use for the master node. If not given, the master node will be placed automatically.
    * @member {String} availability_zone
    */
    availability_zone: string;
}
