/**
 * The Giant Swarm API v4
 * This is the documentation for the Giant Swarm API starting at version `v4`.  For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).  The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you acess recources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.  Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.  Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.  Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.  ## Source  The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec). 
 *
 * OpenAPI spec version: 4.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The V4InfoResponseWorkersStorageSizeGb model module.
* @module model/V4InfoResponseWorkersStorageSizeGb
* @version 4.0.0
*/
export default class V4InfoResponseWorkersStorageSizeGb {
    /**
    * Constructs a new <code>V4InfoResponseWorkersStorageSizeGb</code>.
    * Local storage per worker node, in GB. Only available for KVM clusters.
    * @alias module:model/V4InfoResponseWorkersStorageSizeGb
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V4InfoResponseWorkersStorageSizeGb</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4InfoResponseWorkersStorageSizeGb} obj Optional instance to populate.
    * @return {module:model/V4InfoResponseWorkersStorageSizeGb} The populated <code>V4InfoResponseWorkersStorageSizeGb</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V4InfoResponseWorkersStorageSizeGb();

            
            
            

            if (data.hasOwnProperty('max')) {
                obj['max'] = ApiClient.convertToType(data['max'], 'Number');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Maximum amount of storage allowed in a worker node.
    * @member {Number} max
    */
    max = undefined;
    /**
    * Default amount of storage provided in a worker node.
    * @member {Number} default
    */
    default = undefined;








}


