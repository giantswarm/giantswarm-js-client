/**
* The V4GenericResponse model module.
* @module model/V4GenericResponse
* @version 4.0.0
*/
export default class V4GenericResponse {
    /**
    * Constructs a <code>V4GenericResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4GenericResponse} obj Optional instance to populate.
    * @return {module:model/V4GenericResponse} The populated <code>V4GenericResponse</code> instance.
    */
    static constructFromObject(data: Partial<V4GenericResponse>, obj: V4GenericResponse): V4GenericResponse;
    /**
    * A human readable message
    * @member {String} message
    */
    message: any;
    /**
    * A machine readable [response code](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) like e. g. `INVALID_CREDENTIALS`
    * @member {String} code
    */
    code: any;
}
