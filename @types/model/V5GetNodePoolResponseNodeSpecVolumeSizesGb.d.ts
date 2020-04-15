/**
* The V5GetNodePoolResponseNodeSpecVolumeSizesGb model module.
* @module model/V5GetNodePoolResponseNodeSpecVolumeSizesGb
* @version 4.0.0
*/
export default class V5GetNodePoolResponseNodeSpecVolumeSizesGb {
    /**
    * Constructs a <code>V5GetNodePoolResponseNodeSpecVolumeSizesGb</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5GetNodePoolResponseNodeSpecVolumeSizesGb} obj Optional instance to populate.
    * @return {module:model/V5GetNodePoolResponseNodeSpecVolumeSizesGb} The populated <code>V5GetNodePoolResponseNodeSpecVolumeSizesGb</code> instance.
    */
   static constructFromObject(data: Partial<V5GetNodePoolResponseNodeSpecVolumeSizesGb>, obj: V5GetNodePoolResponseNodeSpecVolumeSizesGb): V5GetNodePoolResponseNodeSpecVolumeSizesGb;
    /**
    * Size of the Docker volume, used to store docker images and overlay file system data, in GB.
    * @member {Number} docker
    */
    docker: number;
    /**
    * Size of the kubelet volume of the worker, used e. g. for volumes of type EmptyDir, in GB.
    * @member {Number} kubelet
    */
    kubelet: number;
}
