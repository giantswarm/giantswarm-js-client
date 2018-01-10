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
import V4InfoResponseWorkersCountPerCluster from './V4InfoResponseWorkersCountPerCluster';
import V4InfoResponseWorkersCpuCores from './V4InfoResponseWorkersCpuCores';
import V4InfoResponseWorkersInstanceType from './V4InfoResponseWorkersInstanceType';
import V4InfoResponseWorkersRamSizeGb from './V4InfoResponseWorkersRamSizeGb';
import V4InfoResponseWorkersStorageSizeGb from './V4InfoResponseWorkersStorageSizeGb';





/**
* The V4InfoResponseWorkers model module.
* @module model/V4InfoResponseWorkers
* @version 4.0.0
*/
export default class V4InfoResponseWorkers {
    /**
    * Constructs a new <code>V4InfoResponseWorkers</code>.
    * Information related to worker nodes
    * @alias module:model/V4InfoResponseWorkers
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V4InfoResponseWorkers</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4InfoResponseWorkers} obj Optional instance to populate.
    * @return {module:model/V4InfoResponseWorkers} The populated <code>V4InfoResponseWorkers</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V4InfoResponseWorkers();

            
            
            

            if (data.hasOwnProperty('count_per_cluster')) {
                obj['count_per_cluster'] = V4InfoResponseWorkersCountPerCluster.constructFromObject(data['count_per_cluster']);
            }
            if (data.hasOwnProperty('instance_type')) {
                obj['instance_type'] = V4InfoResponseWorkersInstanceType.constructFromObject(data['instance_type']);
            }
            if (data.hasOwnProperty('cpu_cores')) {
                obj['cpu_cores'] = V4InfoResponseWorkersCpuCores.constructFromObject(data['cpu_cores']);
            }
            if (data.hasOwnProperty('ram_size_gb')) {
                obj['ram_size_gb'] = V4InfoResponseWorkersRamSizeGb.constructFromObject(data['ram_size_gb']);
            }
            if (data.hasOwnProperty('storage_size_gb')) {
                obj['storage_size_gb'] = V4InfoResponseWorkersStorageSizeGb.constructFromObject(data['storage_size_gb']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/V4InfoResponseWorkersCountPerCluster} count_per_cluster
    */
    count_per_cluster = undefined;
    /**
    * @member {module:model/V4InfoResponseWorkersInstanceType} instance_type
    */
    instance_type = undefined;
    /**
    * @member {module:model/V4InfoResponseWorkersCpuCores} cpu_cores
    */
    cpu_cores = undefined;
    /**
    * @member {module:model/V4InfoResponseWorkersRamSizeGb} ram_size_gb
    */
    ram_size_gb = undefined;
    /**
    * @member {module:model/V4InfoResponseWorkersStorageSizeGb} storage_size_gb
    */
    storage_size_gb = undefined;








}


