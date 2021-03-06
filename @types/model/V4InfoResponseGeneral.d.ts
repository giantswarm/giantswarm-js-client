import V4InfoResponseGeneralAvailabilityZones from "./V4InfoResponseGeneralAvailabilityZones";
import V4InfoResponseGeneralKubernetesVersions
    from './V4InfoResponseGeneralKubernetesVersions';

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
    installation_name: string;
    /**
    * The technical provider used in this installation. Either \"kvm\", \"aws\", or \"azure\".
    * @member {String} provider
    */
    provider: string;
    /**
    * Identifier of the datacenter or cloud provider region, e. g. \"eu-west-1\"
    * @member {String} datacenter
    */
    datacenter: string;
    /**
    * Information on some kubernetes versions and their end of life dates.
    * @member {Array.<module:model/V4InfoResponseGeneralKubernetesVersions>} kubernetes_versions
    */
    kubernetes_versions: V4InfoResponseGeneralKubernetesVersions;
    /**
    * @member {module:model/V4InfoResponseGeneralAvailabilityZones} availability_zones
    */
    availability_zones: V4InfoResponseGeneralAvailabilityZones;
}
