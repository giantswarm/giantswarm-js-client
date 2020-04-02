/**
* The V5GetNodePoolResponse model module.
* @module model/V5GetNodePoolResponse
* @version 4.0.0
*/
export default class V5GetNodePoolResponse {
    /**
    * Constructs a <code>V5GetNodePoolResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5GetNodePoolResponse} obj Optional instance to populate.
    * @return {module:model/V5GetNodePoolResponse} The populated <code>V5GetNodePoolResponse</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Node pool identifier. Unique within a tenant cluster.
    * @member {String} id
    */
    id: any;
    /**
    * Node pool name
    * @member {String} name
    */
    name: any;
    /**
    * Names of the availability zones used by the nodes of this pool.
    * @member {Array.<String>} availability_zones
    */
    availability_zones: any;
    /**
    * @member {module:model/V5GetNodePoolResponseScaling} scaling
    */
    scaling: any;
    /**
    * IP address block used by the node pool
    * @member {String} subnet
    */
    subnet: any;
    /**
    * Worker node specification
    * @member {module:model/V5GetNodePoolResponseNodeSpec} node_spec
    */
    node_spec: any;
    /**
    * @member {module:model/V5GetNodePoolResponseStatus} status
    */
    status: any;
}
//# sourceMappingURL=V5GetNodePoolResponse.d.ts.map