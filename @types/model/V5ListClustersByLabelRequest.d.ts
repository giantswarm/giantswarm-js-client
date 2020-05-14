/**
* The V5ListClustersByLabelRequest model module.
* @module model/V5ListClustersByLabelRequest
* @version 4.0.0
*/
export default class V5ListClustersByLabelRequest {
    /**
    * Constructs a <code>V5ListClustersByLabelRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5ListClustersByLabelRequest} obj Optional instance to populate.
    * @return {module:model/V5ListClustersByLabelRequest} The populated <code>V5ListClustersByLabelRequest</code> instance.
    */
    static constructFromObject(data: Partial<V5ListClustersByLabelRequest>, obj: V5ListClustersByLabelRequest): V5ListClustersByLabelRequest;
    /**
    * Constructs a new <code>V5ListClustersByLabelRequest</code>.
    * @alias module:model/V5ListClustersByLabelRequest
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
