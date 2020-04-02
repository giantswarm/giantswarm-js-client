/**
* The V4GetCredentialResponseAwsRoles model module.
* @module model/V4GetCredentialResponseAwsRoles
* @version 4.0.0
*/
export default class V4GetCredentialResponseAwsRoles {
    /**
    * Constructs a <code>V4GetCredentialResponseAwsRoles</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4GetCredentialResponseAwsRoles} obj Optional instance to populate.
    * @return {module:model/V4GetCredentialResponseAwsRoles} The populated <code>V4GetCredentialResponseAwsRoles</code> instance.
    */
    static constructFromObject(data: Partial<V4GetCredentialResponseAwsRoles>, obj: V4GetCredentialResponseAwsRoles): V4GetCredentialResponseAwsRoles;
    /**
    * ARN of the IAM role Giant Swarm support staff will use
    * @member {String} admin
    */
    admin: any;
    /**
    * ARN of the IAM role assumed by the software operating the clusters
    * @member {String} awsoperator
    */
    awsoperator: any;
}
