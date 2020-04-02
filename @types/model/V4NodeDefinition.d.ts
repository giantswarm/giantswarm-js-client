/**
* The V4NodeDefinition model module.
* @module model/V4NodeDefinition
* @version 4.0.0
*/
export default class V4NodeDefinition {
    /**
    * Constructs a <code>V4NodeDefinition</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4NodeDefinition} obj Optional instance to populate.
    * @return {module:model/V4NodeDefinition} The populated <code>V4NodeDefinition</code> instance.
    */
    static constructFromObject(data: Partial<V4NodeDefinition>, obj: V4NodeDefinition): V4NodeDefinition;
    /**
    * @member {module:model/V4NodeDefinitionAws} aws
    */
    aws: any;
    /**
    * @member {module:model/V4NodeDefinitionAzure} azure
    */
    azure: any;
    /**
    * @member {module:model/V4NodeDefinitionMemory} memory
    */
    memory: any;
    /**
    * @member {module:model/V4NodeDefinitionStorage} storage
    */
    storage: any;
    /**
    * @member {module:model/V4NodeDefinitionCpu} cpu
    */
    cpu: any;
    /**
    * @member {Object} labels
    */
    labels: any;
}
