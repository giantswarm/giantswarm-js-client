# GiantSwarm.V5ClusterDetailsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique cluster identifier | [optional] 
**apiEndpoint** | **String** | URI of the Kubernetes API endpoint | [optional] 
**createDate** | **String** | Date/time of cluster creation | [optional] 
**owner** | **String** | Name of the organization owning the cluster  | [optional] 
**name** | **String** | Cluster name | [optional] 
**credentialId** | **String** | ID of the credentials used to operate the cluster. See [Set credentials](#operation/addCredentials) for details.  | [optional] 
**releaseVersion** | **String** | The [release](https://docs.giantswarm.io/api/#tag/releases) version used by the cluster  | [optional] 
**master** | [**V5ClusterDetailsResponseMaster**](V5ClusterDetailsResponseMaster.md) |  | [optional] 


