/**
* The V4AddCredentialsRequestAzure model module.
* @module model/V4AddCredentialsRequestAzure
* @version 4.0.0
*/
export default class V4AddCredentialsRequestAzure {
    /**
    * Constructs a <code>V4AddCredentialsRequestAzure</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AddCredentialsRequestAzure} obj Optional instance to populate.
    * @return {module:model/V4AddCredentialsRequestAzure} The populated <code>V4AddCredentialsRequestAzure</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * @member {module:model/V4AddCredentialsRequestAzureCredential} credential
    */
    credential: any;
}
