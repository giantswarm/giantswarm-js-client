import V4NodeDefinitionAws from "./V4NodeDefinitionAws";
import V4NodeDefinitionAzure from "./V4NodeDefinitionAzure";
import V4NodeDefinitionMemory from "./V4NodeDefinitionMemory";
import V4NodeDefinitionStorage from "./V4NodeDefinitionStorage";
import V4NodeDefinitionCpu from "./V4NodeDefinitionCpu";

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
    aws: V4NodeDefinitionAws;
    /**
    * @member {module:model/V4NodeDefinitionAzure} azure
    */
    azure: V4NodeDefinitionAzure;
    /**
    * @member {module:model/V4NodeDefinitionMemory} memory
    */
    memory: V4NodeDefinitionMemory;
    /**
    * @member {module:model/V4NodeDefinitionStorage} storage
    */
    storage: V4NodeDefinitionStorage;
    /**
    * @member {module:model/V4NodeDefinitionCpu} cpu
    */
    cpu: V4NodeDefinitionCpu;
    /**
    * @member {Object} labels
    */
    labels: Record<string, string>;
}
