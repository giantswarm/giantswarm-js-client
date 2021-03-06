import V4AppMetadata from "./V4AppMetadata";
import V4AppSpec from "./V4AppSpec";
import V4AppStatus from "./V4AppStatus";

/**
* The V4App model module.
* @module model/V4App
* @version 4.0.0
*/
export default class V4App {
    /**
    * Constructs a <code>V4App</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4App} obj Optional instance to populate.
    * @return {module:model/V4App} The populated <code>V4App</code> instance.
    */
   static constructFromObject(data: Partial<V4App>, obj: V4App): V4App;
    /**
    * @member {module:model/V4AppMetadata} metadata
    */
    metadata: V4AppMetadata;
    /**
    * @member {module:model/V4AppSpec} spec
    */
    spec: V4AppSpec;
    /**
    * @member {module:model/V4AppStatus} status
    */
    status: V4AppStatus;
}
