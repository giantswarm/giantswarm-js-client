/**
* The V5AddNodePoolRequest model module.
* @module model/V5AddNodePoolRequest
* @version 4.0.0
*/
export default class V5AddNodePoolRequest {
    /**
    * Constructs a <code>V5AddNodePoolRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5AddNodePoolRequest} obj Optional instance to populate.
    * @return {module:model/V5AddNodePoolRequest} The populated <code>V5AddNodePoolRequest</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Node pool name. _(Length between 1-100, cannot contain control codes such as newline.)_
    * @member {String} name
    */
    name: any;
    /**
    * @member {module:model/V5AddNodePoolRequestAvailabilityZones} availability_zones
    */
    availability_zones: any;
    /**
    * @member {module:model/V5AddNodePoolRequestScaling} scaling
    */
    scaling: any;
    /**
    * Worker node specification
    * @member {module:model/V5AddNodePoolRequestNodeSpec} node_spec
    */
    node_spec: any;
}
