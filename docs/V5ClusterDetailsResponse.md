# GiantSwarm.V5ClusterDetailsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique cluster identifier | [optional] 
**apiEndpoint** | **String** | URI of the Kubernetes API endpoint | [optional] 
**createDate** | **String** | Date/time of cluster creation | [optional] 
**deleteDate** | **Date** | Date/time when cluster has been deleted | [optional] 
**owner** | **String** | Name of the organization owning the cluster  | [optional] 
**name** | **String** | Cluster name | [optional] 
**credentialId** | **String** | ID of the credentials used to operate the cluster. See [Set credentials](#operation/addCredentials) for details.  | [optional] 
**releaseVersion** | **String** | The [release](https://docs.giantswarm.io/api/#tag/releases) version used by the cluster  | [optional] 
**master** | [**V5ClusterDetailsResponseMaster**](V5ClusterDetailsResponseMaster.md) |  | [optional] 
**masterNodes** | [**V5ClusterDetailsResponseMasterNodes**](V5ClusterDetailsResponseMasterNodes.md) |  | [optional] 
**conditions** | [**[V5ClusterDetailsResponseConditions]**](V5ClusterDetailsResponseConditions.md) | List of conditions the cluster has gone through | [optional] 
**versions** | [**[V5ClusterDetailsResponseVersions]**](V5ClusterDetailsResponseVersions.md) | List of release versions the cluster has used. | [optional] 
**labels** | [**V5ClusterLabelsProperty**](V5ClusterLabelsProperty.md) |  | [optional] 


