/**
* The V5GetNodePoolResponseNodeSpecAzure model module.
* @module model/V5GetNodePoolResponseNodeSpecAzure
* @version 4.0.0
*/
export default class V5GetNodePoolResponseNodeSpecAzure {
    /**
    * Constructs a <code>V5GetNodePoolResponseNodeSpecAzure</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5GetNodePoolResponseNodeSpecAzure} obj Optional instance to populate.
    * @return {module:model/V5GetNodePoolResponseNodeSpecAzure} The populated <code>V5GetNodePoolResponseNodeSpecAzure</code> instance.
    */
    static constructFromObject(data: Partial<V5GetNodePoolResponseNodeSpecAzure>, obj: V5GetNodePoolResponseNodeSpecAzure): V5GetNodePoolResponseNodeSpecAzure;
    /**
    * Azure virtual machine size used by all nodes in this pool.
    * @member {String} vm_size
    */
    vm_size: string;
}
