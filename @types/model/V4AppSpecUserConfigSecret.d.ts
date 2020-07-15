/**
* The V4AppSpecUserConfigSecret model module.
* @module model/V4AppSpecUserConfigSecret
* @version 4.0.0
*/
export default class V4AppSpecUserConfigSecret {
    /**
    * Constructs a <code>V4AppSpecUserConfigSecret</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4AppSpecUserConfigSecret} obj Optional instance to populate.
    * @return {module:model/V4AppSpecUserConfigSecret} The populated <code>V4AppSpecUserConfigSecret</code> instance.
    */
   static constructFromObject(data: Partial<V4AppSpecUserConfigSecret>, obj: V4AppSpecUserConfigSecret): V4AppSpecUserConfigSecret;
    /**
    * Name of the Secret containing user-secrets to apply, e.g. prometheus-user-secrets
    * @member {String} name
    */
    name: string;
    /**
    * Namespace of the user-secrets Secret on the control plane, e.g. 123ab
    * @member {String} namespace
    */
    namespace: string;
}
