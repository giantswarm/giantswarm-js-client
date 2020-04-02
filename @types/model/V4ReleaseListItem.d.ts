import V4ReleaseListItemChangelog from "./V4ReleaseListItemChangelog";
import V4ReleaseListItemComponents from "./V4ReleaseListItemComponents";

/**
* The V4ReleaseListItem model module.
* @module model/V4ReleaseListItem
* @version 4.0.0
*/
export default class V4ReleaseListItem {
    /**
    * Constructs a <code>V4ReleaseListItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/V4ReleaseListItem} obj Optional instance to populate.
    * @return {module:model/V4ReleaseListItem} The populated <code>V4ReleaseListItem</code> instance.
    */
    static constructFromObject(data: Partial<V4ReleaseListItem>, obj: V4ReleaseListItem): V4ReleaseListItem;
    /**
    * Constructs a new <code>V4ReleaseListItem</code>.
    * @alias module:model/V4ReleaseListItem
    * @class
    * @param version {String} The semantic version number
    * @param timestamp {String} Date and time of the release creation
    * @param changelog {Array.<module:model/V4ReleaseListItemChangelog>} Structured list of changes in this release, in comparison to the previous version, with respect to the contained components.
    * @param components {Array.<module:model/V4ReleaseListItemComponents>} List of components and their version contained in the release
    */
    constructor(version: string, timestamp: string, changelog: NodeModule[], components: NodeModule[]);
    /**
    * The semantic version number
    * @member {String} version
    */
    version: string;
    /**
    * Date and time of the release creation
    * @member {String} timestamp
    */
    timestamp: string;
    /**
    * Structured list of changes in this release, in comparison to the previous version, with respect to the contained components.
    * @member {Array.<module:model/V4ReleaseListItemChangelog>} changelog
    */
    changelog: V4ReleaseListItemChangelog[];
    /**
    * List of components and their version contained in the release
    * @member {Array.<module:model/V4ReleaseListItemComponents>} components
    */
    components: V4ReleaseListItemComponents[];
    /**
    * If true, the version is available for new clusters and cluster upgrades. Older versions become unavailable and thus have the value `false` here.
    * @member {Boolean} active
    */
    active: boolean;
}
