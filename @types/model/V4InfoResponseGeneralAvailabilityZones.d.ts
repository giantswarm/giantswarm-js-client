/**
* The V4InfoResponseGeneralAvailabilityZones model module.
* @module model/V4InfoResponseGeneralAvailabilityZones
* @version 4.0.0
*/
export default class V4InfoResponseGeneralAvailabilityZones {
    /**
    * Constructs a <code>V4InfoResponseGeneralAvailabilityZones</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4InfoResponseGeneralAvailabilityZones} obj Optional instance to populate.
    * @return {module:model/V4InfoResponseGeneralAvailabilityZones} The populated <code>V4InfoResponseGeneralAvailabilityZones</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Constructs a new <code>V4InfoResponseGeneralAvailabilityZones</code>.
    * Number of availability zones which a cluster can be spread across.
    * @alias module:model/V4InfoResponseGeneralAvailabilityZones
    * @class
    * @param max {Number} Number of availability zones in the region of this installation.
    * @param _default {Number} Default number of availability zones for a cluster.
    */
    constructor(max: number, _default: number);
    /**
    * Number of availability zones in the region of this installation.
    * @member {Number} max
    */
    max: any;
    /**
    * Default number of availability zones for a cluster.
    * @member {Number} default
    */
    default: any;
    /**
    * The availability zones available in the installation's region for use with tenant clusters.
    * @member {Array.<String>} zones
    */
    zones: any;
}
//# sourceMappingURL=V4InfoResponseGeneralAvailabilityZones.d.ts.map