/**
* The V4AppStatus model module.
* @module model/V4AppStatus
* @version 4.0.0
*/
export default class V4AppStatus {
    /**
    * Constructs a <code>V4AppStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AppStatus} obj Optional instance to populate.
    * @return {module:model/V4AppStatus} The populated <code>V4AppStatus</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Version of the installed app
    * @member {String} app_version
    */
    app_version: string;
    /**
    * Version of the chart that was used to install this app
    * @member {String} version
    */
    version: string;
    /**
    * @member {module:model/V4AppStatusRelease} release
    */
    release: any;
}
