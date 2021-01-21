# GiantSwarm.V4ReleaseListItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **String** | The semantic version number | 
**timestamp** | **String** | Date and time of the release creation | 
**active** | **Boolean** | If &#x60;true&#x60;, the version is recommended for use in cluster creation and cluster upgrades. Older versions become unavailable and thus have the value &#x60;false&#x60; here. Cluster creation with this version is still possible but not recommended.  | 
**changelog** | [**[V4ReleaseListItemChangelog]**](V4ReleaseListItemChangelog.md) | Structured list of changes in this release, in comparison to the previous version, with respect to the contained components.  | 
**components** | [**[V4ReleaseListItemComponents]**](V4ReleaseListItemComponents.md) | List of components and their version contained in the release  | 


