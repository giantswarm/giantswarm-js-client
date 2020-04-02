/**
* The V4InfoResponseWorkers model module.
* @module model/V4InfoResponseWorkers
* @version 4.0.0
*/
export default class V4InfoResponseWorkers {
    /**
    * Constructs a <code>V4InfoResponseWorkers</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4InfoResponseWorkers} obj Optional instance to populate.
    * @return {module:model/V4InfoResponseWorkers} The populated <code>V4InfoResponseWorkers</code> instance.
    */
    static constructFromObject(data: Partial<V4InfoResponseWorkers>, obj: V4InfoResponseWorkers): V4InfoResponseWorkers;
    /**
    * @member {module:model/V4InfoResponseWorkersCountPerCluster} count_per_cluster
    */
    count_per_cluster: any;
    /**
    * @member {module:model/V4InfoResponseWorkersInstanceType} instance_type
    */
    instance_type: any;
    /**
    * @member {module:model/V4InfoResponseWorkersVmSize} vm_size
    */
    vm_size: any;
}
