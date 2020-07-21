import V5AddNodePoolRequestNodeSpecAws from "./V5AddNodePoolRequestNodeSpecAws";
import V5AddNodePoolRequestNodeSpecAzure from "./V5AddNodePoolRequestNodeSpecAzure";

/**
* The V5AddNodePoolRequestNodeSpec model module.
* @module model/V5AddNodePoolRequestNodeSpec
* @version 4.0.0
*/
export default class V5AddNodePoolRequestNodeSpec {
    /**
    * Constructs a <code>V5AddNodePoolRequestNodeSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V5AddNodePoolRequestNodeSpec} obj Optional instance to populate.
    * @return {module:model/V5AddNodePoolRequestNodeSpec} The populated <code>V5AddNodePoolRequestNodeSpec</code> instance.
    */
   static constructFromObject(data: Partial<V5AddNodePoolRequestNodeSpec>, obj: V5AddNodePoolRequestNodeSpec): V5AddNodePoolRequestNodeSpec;
    /**
    * @member {module:model/V5AddNodePoolRequestNodeSpecAws} aws
    */
    aws: V5AddNodePoolRequestNodeSpecAws;
    /**
    * @member {module:model/V5AddNodePoolRequestNodeSpecAzure} azure
    */
    azure: V5AddNodePoolRequestNodeSpecAzure;
}
