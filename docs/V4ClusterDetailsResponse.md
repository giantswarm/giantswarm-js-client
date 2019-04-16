# GiantSwarmV4.V4ClusterDetailsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique cluster identifier | [optional] 
**apiEndpoint** | **String** | URI of the Kubernetes API endpoint | [optional] 
**createDate** | **String** | Date/time of cluster creation | [optional] 
**owner** | **String** | Name of the organization owning the cluster | [optional] 
**name** | **String** | Cluster name | [optional] 
**credentialId** | **String** | ID of the credentials used to operate the cluster (only on AWS and Azure). See [Set credentials](#operation/addCredentials) for details.  | [optional] 
**releaseVersion** | **String** | The [release](https://docs.giantswarm.io/api/#tag/releases) version currently running this cluster.  | [optional] 
**kvm** | [**V4ClusterDetailsResponseKvm**](V4ClusterDetailsResponseKvm.md) |  | [optional] 


