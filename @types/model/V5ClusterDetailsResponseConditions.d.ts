/**
* The V5ClusterDetailsResponseConditions model module.
* @module model/V5ClusterDetailsResponseConditions
* @version 4.0.0
*/
export default class V5ClusterDetailsResponseConditions {
    /**
    * Constructs a <code>V5ClusterDetailsResponseConditions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5ClusterDetailsResponseConditions} obj Optional instance to populate.
    * @return {module:model/V5ClusterDetailsResponseConditions} The populated <code>V5ClusterDetailsResponseConditions</code> instance.
    */
    static constructFromObject(data: Partial<V5ClusterDetailsResponseConditions>, obj: V5ClusterDetailsResponseConditions): V5ClusterDetailsResponseConditions;
    /**
    * Date and time when the cluster transitioned into this condition
    * @member {String} last_transition_time
    */
    last_transition_time: any;
    /**
    * A string describing the condition, e. g. 'Created'
    * @member {String} condition
    */
    condition: any;
}
