import ApiClient from "../ApiClient";
import V4ReleaseListItem from "../model/V4ReleaseListItem";

/**
* Releases service.
* @module api/ReleasesApi
* @version 4.0.0
*/
export default class ReleasesApi {
    /**
    * Constructs a new ReleasesApi.
    * @alias module:api/ReleasesApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClient);
    apiClient: ApiClient;
    /**
     * Get releases
     * Lists all releases available for new clusters or for upgrading existing clusters. Might also serve as an archive to obtain details on older releases.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/V4ReleaseListItem>} and HTTP response
     */
    getReleasesWithHttpInfo(opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4ReleaseListItem>;
    /**
     * Get releases
     * Lists all releases available for new clusters or for upgrading existing clusters. Might also serve as an archive to obtain details on older releases.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/V4ReleaseListItem>}
     */
    getReleases(opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<V4ReleaseListItem>;
}
