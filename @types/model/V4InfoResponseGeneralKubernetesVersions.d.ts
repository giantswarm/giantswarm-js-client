/**
* The V4InfoResponseGeneralKubernetesVersions model module.
* @module model/V4InfoResponseGeneralKubernetesVersions
* @version 4.0.0
*/
export default class V4InfoResponseGeneralKubernetesVersions {
    /**
    * Constructs a <code>V4InfoResponseGeneralKubernetesVersions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4InfoResponseGeneralKubernetesVersions} obj Optional instance to populate.
    * @return {module:model/V4InfoResponseGeneralKubernetesVersions} The populated <code>V4InfoResponseGeneralKubernetesVersions</code> instance.
    */
    static constructFromObject(data: Partial<V4InfoResponseGeneralKubernetesVersions>, obj: V4InfoResponseGeneralKubernetesVersions): V4InfoResponseGeneralKubernetesVersions;
    /**
    * Constructs a new <code>V4InfoResponseGeneralKubernetesVersions</code>.
    * @alias module:model/V4InfoResponseGeneralKubernetesVersions
    * @class
    * @param minorVersion {String} The version of the Kubernetes release.
    * @param eolDate {Date} The date when the release becomes EOL.
    */
    constructor(minorVersion: string, eolDate: Date);
    /**
    * The version of the Kubernetes release.
    * @member {String} minor_version
    */
    minor_version: string;
    /**
    * The date when the release becomes EOL.
    * @member {Date} eol_date
    */
    eol_date: Date;
}
