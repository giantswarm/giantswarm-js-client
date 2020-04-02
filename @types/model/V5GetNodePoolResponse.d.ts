import V5GetNodePoolResponseScaling from "./V5GetNodePoolResponseScaling";
import V5GetNodePoolResponseNodeSpec from "./V5GetNodePoolResponseNodeSpec";
import V5GetNodePoolResponseStatus from "./V5GetNodePoolResponseStatus";

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
    static constructFromObject(data: Partial<V5GetNodePoolResponse>, obj: V5GetNodePoolResponse): V5GetNodePoolResponse;
    /**
    * Node pool identifier. Unique within a tenant cluster.
    * @member {String} id
    */
    id: string;
    /**
    * Node pool name
    * @member {String} name
    */
    name: string;
    /**
    * Names of the availability zones used by the nodes of this pool.
    * @member {Array.<String>} availability_zones
    */
    availability_zones: string[];
    /**
    * @member {module:model/V5GetNodePoolResponseScaling} scaling
    */
    scaling: V5GetNodePoolResponseScaling;
    /**
    * IP address block used by the node pool
    * @member {String} subnet
    */
    subnet: string;
    /**
    * Worker node specification
    * @member {module:model/V5GetNodePoolResponseNodeSpec} node_spec
    */
    node_spec: V5GetNodePoolResponseNodeSpec;
    /**
    * @member {module:model/V5GetNodePoolResponseStatus} status
    */
    status: V5GetNodePoolResponseStatus;
}
