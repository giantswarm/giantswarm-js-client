import V5ClusterLabelsRequestProperty from "./V5ClusterLabelsRequestProperty";
/**
* The V5SetClusterLabelsRequest model module.
* @module model/V5SetClusterLabelsRequest
* @version 4.0.0
*/
export default class V5SetClusterLabelsRequest {
    /**
    * Constructs a <code>V5SetClusterLabelsRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5SetClusterLabelsRequest} obj Optional instance to populate.
    * @return {module:model/V5SetClusterLabelsRequest} The populated <code>V5SetClusterLabelsRequest</code> instance.
    */
    static constructFromObject(data: Partial<V5SetClusterLabelsRequest>, obj: V5SetClusterLabelsRequest): V5SetClusterLabelsRequest;
    /**
    * @member {module:model/V5ClusterLabelsRequestProperty} labels
    */
    labels: V5ClusterLabelsRequestProperty;
}
