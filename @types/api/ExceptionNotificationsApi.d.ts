/**
* ExceptionNotifications service.
* @module api/ExceptionNotificationsApi
* @version 4.0.0
*/
export default class ExceptionNotificationsApi {
    /**
    * Constructs a new ExceptionNotificationsApi.
    * @alias module:api/ExceptionNotificationsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient: any);
    apiClient: any;
    /**
     * Notifies Giant Swarm that an error has occured in one of our clients.
     * This endpoint is used to notify Giant Swarm that an error has occured in one of our clients (like our Web UI or gsctl). It is not intended to be called manually, our clients are configured to report errors when they occur.  Find us in your Slack support channel if you want to contact us about any immediate issues.
     * @param {Object} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4GenericResponse} and HTTP response
     */
    addExceptionNotificationWithHttpInfo(body: any, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
    /**
     * Notifies Giant Swarm that an error has occured in one of our clients.
     * This endpoint is used to notify Giant Swarm that an error has occured in one of our clients (like our Web UI or gsctl). It is not intended to be called manually, our clients are configured to report errors when they occur.  Find us in your Slack support channel if you want to contact us about any immediate issues.
     * @param {Object} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
     * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
     * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4GenericResponse}
     */
    addExceptionNotification(body: any, opts: {
        xRequestID: string;
        xGiantSwarmActivity: string;
        xGiantSwarmCmdLine: string;
    }): Promise<any>;
}
//# sourceMappingURL=ExceptionNotificationsApi.d.ts.map