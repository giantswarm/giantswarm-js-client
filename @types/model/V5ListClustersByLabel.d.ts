/**
* The V5ListClustersByLabel model module.
* @module model/V5ListClustersByLabel
* @version 4.0.0
*/
export default class V5ListClustersByLabel {
    /**
    * Constructs a <code>V5ListClustersByLabel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5ListClustersByLabel} obj Optional instance to populate.
    * @return {module:model/V5ListClustersByLabel} The populated <code>V5ListClustersByLabel</code> instance.
    */
    static constructFromObject(data: Partial<V5ListClustersByLabel>, obj: V5ListClustersByLabel): V5ListClustersByLabel;
    /**
    * Constructs a new <code>V5ListClustersByLabel</code>.
    * @alias module:model/V5ListClustersByLabel
    * @class
    * @param labels {String} The label selector string for filtering the clusters
    */
    constructor(labels: string);
    /**
    * The label selector string for filtering the clusters
    * @member {String} labels
    */
    labels: string;
}
