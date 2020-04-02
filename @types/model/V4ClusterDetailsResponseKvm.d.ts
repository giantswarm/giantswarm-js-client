/**
* The V4ClusterDetailsResponseKvm model module.
* @module model/V4ClusterDetailsResponseKvm
* @version 4.0.0
*/
export default class V4ClusterDetailsResponseKvm {
    /**
    * Constructs a <code>V4ClusterDetailsResponseKvm</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4ClusterDetailsResponseKvm} obj Optional instance to populate.
    * @return {module:model/V4ClusterDetailsResponseKvm} The populated <code>V4ClusterDetailsResponseKvm</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Reveals the ports on the control plane that are mapped to this tenant cluster's ingress and which protocol that port supports. Only shown and relevant on our on-prem KVM clusters.
    * @member {Array.<module:model/V4ClusterDetailsResponseKvmPortMappings>} port_mappings
    */
    port_mappings: any;
}
