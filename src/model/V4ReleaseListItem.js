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
import V4ReleaseListItemChangelog from './V4ReleaseListItemChangelog';
import V4ReleaseListItemComponents from './V4ReleaseListItemComponents';





/**
* The V4ReleaseListItem model module.
* @module model/V4ReleaseListItem
* @version 4.0.0
*/
export default class V4ReleaseListItem {
    /**
    * Constructs a new <code>V4ReleaseListItem</code>.
    * @alias module:model/V4ReleaseListItem
    * @class
    * @param version {String} The semantic version number
    * @param timestamp {String} Date and time of the release creation
    * @param changelog {Array.<module:model/V4ReleaseListItemChangelog>} Structured list of changes in this release, in comparison to the previous version, with respect to the contained components. 
    * @param components {Array.<module:model/V4ReleaseListItemComponents>} List of components and their version contained in the release 
    */

    constructor(version, timestamp, changelog, components) {
        

        
        

        this['version'] = version;this['timestamp'] = timestamp;this['changelog'] = changelog;this['components'] = components;

        
    }

    /**
    * Constructs a <code>V4ReleaseListItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4ReleaseListItem} obj Optional instance to populate.
    * @return {module:model/V4ReleaseListItem} The populated <code>V4ReleaseListItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V4ReleaseListItem();

            
            
            

            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('changelog')) {
                obj['changelog'] = ApiClient.convertToType(data['changelog'], [V4ReleaseListItemChangelog]);
            }
            if (data.hasOwnProperty('components')) {
                obj['components'] = ApiClient.convertToType(data['components'], [V4ReleaseListItemComponents]);
            }
        }
        return obj;
    }

    /**
    * The semantic version number
    * @member {String} version
    */
    version = undefined;
    /**
    * Date and time of the release creation
    * @member {String} timestamp
    */
    timestamp = undefined;
    /**
    * If true, the version is available for new clusters and cluster upgrades. Older versions become unavailable and thus have the value `false` here. 
    * @member {Boolean} active
    */
    active = undefined;
    /**
    * Structured list of changes in this release, in comparison to the previous version, with respect to the contained components. 
    * @member {Array.<module:model/V4ReleaseListItemChangelog>} changelog
    */
    changelog = undefined;
    /**
    * List of components and their version contained in the release 
    * @member {Array.<module:model/V4ReleaseListItemComponents>} components
    */
    components = undefined;








}


