/**
* The V5AddNodePoolRequestAvailabilityZones model module.
* @module model/V5AddNodePoolRequestAvailabilityZones
* @version 4.0.0
*/
export default class V5AddNodePoolRequestAvailabilityZones {
    /**
    * Constructs a <code>V5AddNodePoolRequestAvailabilityZones</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5AddNodePoolRequestAvailabilityZones} obj Optional instance to populate.
    * @return {module:model/V5AddNodePoolRequestAvailabilityZones} The populated <code>V5AddNodePoolRequestAvailabilityZones</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Number of zones to use. If given, the zones are picked automatically. _(Maximum limit of 4 supported.)_
    * @member {Number} number
    */
    number: any;
    /**
    * Names of the availability zones to use. _(Must be same region as the cluster.)_
    * @member {Array.<String>} zones
    */
    zones: any;
}
//# sourceMappingURL=V5AddNodePoolRequestAvailabilityZones.d.ts.map