/**
* The V4ClusterDetailsResponseKvmPortMappings model module.
* @module model/V4ClusterDetailsResponseKvmPortMappings
* @version 4.0.0
*/
export default class V4ClusterDetailsResponseKvmPortMappings {
    /**
    * Constructs a <code>V4ClusterDetailsResponseKvmPortMappings</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4ClusterDetailsResponseKvmPortMappings} obj Optional instance to populate.
    * @return {module:model/V4ClusterDetailsResponseKvmPortMappings} The populated <code>V4ClusterDetailsResponseKvmPortMappings</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * The port on the control plane that will forward traffic to the tenant cluster
    * @member {Number} port
    */
    port: any;
    /**
    * The protocol this port mapping is made for.
    * @member {String} protocol
    */
    protocol: any;
}
//# sourceMappingURL=V4ClusterDetailsResponseKvmPortMappings.d.ts.map