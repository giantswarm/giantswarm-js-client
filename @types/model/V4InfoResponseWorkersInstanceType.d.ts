/**
* The V4InfoResponseWorkersInstanceType model module.
* @module model/V4InfoResponseWorkersInstanceType
* @version 4.0.0
*/
export default class V4InfoResponseWorkersInstanceType {
    /**
    * Constructs a <code>V4InfoResponseWorkersInstanceType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4InfoResponseWorkersInstanceType} obj Optional instance to populate.
    * @return {module:model/V4InfoResponseWorkersInstanceType} The populated <code>V4InfoResponseWorkersInstanceType</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * List of available instance types
    * @member {Array.<String>} options
    */
    options: string[];
    /**
    * The instance type used in new cluster, if not specified
    * @member {String} default
    */
    default: string;
}
