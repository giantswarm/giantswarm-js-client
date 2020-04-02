/**
* The V4NodeDefinitionStorage model module.
* @module model/V4NodeDefinitionStorage
* @version 4.0.0
*/
export default class V4NodeDefinitionStorage {
    /**
    * Constructs a <code>V4NodeDefinitionStorage</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4NodeDefinitionStorage} obj Optional instance to populate.
    * @return {module:model/V4NodeDefinitionStorage} The populated <code>V4NodeDefinitionStorage</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Node storage size in GB. Can be an integer or float.
    * @member {Number} size_gb
    */
    size_gb: any;
}
