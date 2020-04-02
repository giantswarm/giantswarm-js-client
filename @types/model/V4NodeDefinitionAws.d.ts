/**
* The V4NodeDefinitionAws model module.
* @module model/V4NodeDefinitionAws
* @version 4.0.0
*/
export default class V4NodeDefinitionAws {
    /**
    * Constructs a <code>V4NodeDefinitionAws</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4NodeDefinitionAws} obj Optional instance to populate.
    * @return {module:model/V4NodeDefinitionAws} The populated <code>V4NodeDefinitionAws</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * EC2 instance type name. Must be the same for all worker nodes of a cluster.
    * @member {String} instance_type
    */
    instance_type: any;
}
