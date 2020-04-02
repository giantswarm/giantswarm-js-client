/**
* The V4AppStatusRelease model module.
* @module model/V4AppStatusRelease
* @version 4.0.0
*/
export default class V4AppStatusRelease {
    /**
    * Constructs a <code>V4AppStatusRelease</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AppStatusRelease} obj Optional instance to populate.
    * @return {module:model/V4AppStatusRelease} The populated <code>V4AppStatusRelease</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Date and time that the app was last last deployed
    * @member {String} last_deployed
    */
    last_deployed: string;
    /**
    * A string representing the status of the app. (Can be: empty, DEPLOYED or FAILED)
    * @member {String} status
    */
    status: string;
}
//# sourceMappingURL=V4AppStatusRelease.d.ts.map