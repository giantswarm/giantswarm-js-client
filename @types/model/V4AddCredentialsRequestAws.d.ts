import V4AddCredentialsRequestAwsRoles from "./V4AddCredentialsRequestAwsRoles";

/**
* The V4AddCredentialsRequestAws model module.
* @module model/V4AddCredentialsRequestAws
* @version 4.0.0
*/
export default class V4AddCredentialsRequestAws {
    /**
    * Constructs a <code>V4AddCredentialsRequestAws</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AddCredentialsRequestAws} obj Optional instance to populate.
    * @return {module:model/V4AddCredentialsRequestAws} The populated <code>V4AddCredentialsRequestAws</code> instance.
    */
   static constructFromObject(data: Partial<V4AddCredentialsRequestAws>, obj: V4AddCredentialsRequestAws): V4AddCredentialsRequestAws;
    /**
    * @member {module:model/V4AddCredentialsRequestAwsRoles} roles
    */
    roles: V4AddCredentialsRequestAwsRoles;
}
