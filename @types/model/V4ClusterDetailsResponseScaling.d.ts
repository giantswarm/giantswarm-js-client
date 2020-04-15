/**
* The V4ClusterDetailsResponseScaling model module.
* @module model/V4ClusterDetailsResponseScaling
* @version 4.0.0
*/
export default class V4ClusterDetailsResponseScaling {
    /**
    * Constructs a <code>V4ClusterDetailsResponseScaling</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4ClusterDetailsResponseScaling} obj Optional instance to populate.
    * @return {module:model/V4ClusterDetailsResponseScaling} The populated <code>V4ClusterDetailsResponseScaling</code> instance.
    */
    static constructFromObject(data: Partial<V4ClusterDetailsResponseScaling>, obj: V4ClusterDetailsResponseScaling): V4ClusterDetailsResponseScaling;
    /**
    * Minimum number of cluster nodes as configured
    * @member {Number} min
    */
    min: number;
    /**
    * Maximum number of cluster nodes as configured
    * @member {Number} max
    */
    max: number;
}
