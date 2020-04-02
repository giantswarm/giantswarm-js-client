/**
* The V4ReleaseListItemChangelog model module.
* @module model/V4ReleaseListItemChangelog
* @version 4.0.0
*/
export default class V4ReleaseListItemChangelog {
    /**
    * Constructs a <code>V4ReleaseListItemChangelog</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4ReleaseListItemChangelog} obj Optional instance to populate.
    * @return {module:model/V4ReleaseListItemChangelog} The populated <code>V4ReleaseListItemChangelog</code> instance.
    */
    static constructFromObject(data: Partial<V4ReleaseListItemChangelog>, obj: V4ReleaseListItemChangelog): V4ReleaseListItemChangelog;
    /**
    * If the changed item was a component, this attribute is the name of the component.
    * @member {String} component
    */
    component: any;
    /**
    * Human-friendly description of the change
    * @member {String} description
    */
    description: any;
}
