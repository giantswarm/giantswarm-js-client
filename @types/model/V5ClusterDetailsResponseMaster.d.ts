/**
* The V5ClusterDetailsResponseMaster model module.
* @module model/V5ClusterDetailsResponseMaster
* @version 4.0.0
*/
export default class V5ClusterDetailsResponseMaster {
    /**
    * Constructs a <code>V5ClusterDetailsResponseMaster</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5ClusterDetailsResponseMaster} obj Optional instance to populate.
    * @return {module:model/V5ClusterDetailsResponseMaster} The populated <code>V5ClusterDetailsResponseMaster</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Name of the availability zone the master node is placed in
    * @member {String} availability_zone
    */
    availability_zone: any;
}
