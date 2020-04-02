/**
* The V4AddKeyPairResponse model module.
* @module model/V4AddKeyPairResponse
* @version 4.0.0
*/
export default class V4AddKeyPairResponse {
    /**
    * Constructs a <code>V4AddKeyPairResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AddKeyPairResponse} obj Optional instance to populate.
    * @return {module:model/V4AddKeyPairResponse} The populated <code>V4AddKeyPairResponse</code> instance.
    */
   static constructFromObject(data: Partial<V4AddKeyPairResponse>, obj: V4AddKeyPairResponse): V4AddKeyPairResponse;
    /**
    * Unique identifier of the key pair
    * @member {String} id
    */
    id: string;
    /**
    * Free text information about the key pair
    * @member {String} description
    */
    description: string;
    /**
    * Expiration time (from creation) in hours
    * @member {Number} ttl_hours
    */
    ttl_hours: number;
    /**
    * Date/time of creation
    * @member {String} create_date
    */
    create_date: string;
    /**
    * PEM-encoded CA certificate of the cluster
    * @member {String} certificate_authority_data
    */
    certificate_authority_data: string;
    /**
    * PEM-encoded RSA private key
    * @member {String} client_key_data
    */
    client_key_data: string;
    /**
    * PEM-encoded certificate
    * @member {String} client_certificate_data
    */
    client_certificate_data: string;
}
