/**
* The V4InfoResponseGeneral model module.
* @module model/V4InfoResponseGeneral
* @version 4.0.0
*/
export default class V4InfoResponseGeneral {
    /**
    * Constructs a <code>V4InfoResponseGeneral</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4InfoResponseGeneral} obj Optional instance to populate.
    * @return {module:model/V4InfoResponseGeneral} The populated <code>V4InfoResponseGeneral</code> instance.
    */
    static constructFromObject(data: Partial<V4InfoResponseGeneral>, obj: V4InfoResponseGeneral): V4InfoResponseGeneral;
    /**
    * Unique name of the installation
    * @member {String} installation_name
    */
    installation_name: any;
    /**
    * The technical provider used in this installation. Either \"kvm\", \"aws\", or \"azure\".
    * @member {String} provider
    */
    provider: any;
    /**
    * Identifier of the datacenter or cloud provider region, e. g. \"eu-west-1\"
    * @member {String} datacenter
    */
    datacenter: any;
    /**
    * @member {module:model/V4InfoResponseGeneralAvailabilityZones} availability_zones
    */
    availability_zones: any;
}
