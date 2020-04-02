/**
* The V4AddCredentialsRequestAwsRoles model module.
* @module model/V4AddCredentialsRequestAwsRoles
* @version 4.0.0
*/
export default class V4AddCredentialsRequestAwsRoles {
    /**
    * Constructs a <code>V4AddCredentialsRequestAwsRoles</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AddCredentialsRequestAwsRoles} obj Optional instance to populate.
    * @return {module:model/V4AddCredentialsRequestAwsRoles} The populated <code>V4AddCredentialsRequestAwsRoles</code> instance.
    */
    static constructFromObject(data: any, obj: any): any;
    /**
    * Constructs a new <code>V4AddCredentialsRequestAwsRoles</code>.
    * IAM roles to assume by certain entities
    * @alias module:model/V4AddCredentialsRequestAwsRoles
    * @class
    * @param admin {String} ARN of the IAM role to assume by Giant Swarm support staff
    * @param awsoperator {String} ARN of the IAM role to assume by the software operating clusters
    */
    constructor(admin: string, awsoperator: string);
    /**
    * ARN of the IAM role to assume by Giant Swarm support staff
    * @member {String} admin
    */
    admin: any;
    /**
    * ARN of the IAM role to assume by the software operating clusters
    * @member {String} awsoperator
    */
    awsoperator: any;
}
//# sourceMappingURL=V4AddCredentialsRequestAwsRoles.d.ts.map