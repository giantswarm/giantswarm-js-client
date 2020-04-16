/**
* The V5ClusterLabelsResponse model module.
* @module model/V5ClusterLabelsResponse
* @version 4.0.0
*/
export default class V5ClusterLabelsResponse {
    /**
    * Constructs a <code>V5ClusterLabelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5ClusterLabelsResponse} obj Optional instance to populate.
    * @return {module:model/V5ClusterLabelsResponse} The populated <code>V5ClusterLabelsResponse</code> instance.
    */
    static constructFromObject(data: Partial<V5ClusterLabelsResponse>, obj: V5ClusterLabelsResponse): V5ClusterLabelsResponse;
    /**
    * @member {module:model/V5ClusterLabels} labels
    */
    labels: V5ClusterLabels;
}
