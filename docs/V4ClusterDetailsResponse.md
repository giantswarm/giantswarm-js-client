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
**scaling** | [**V4ClusterDetailsResponseScaling**](V4ClusterDetailsResponseScaling.md) |  | [optional] 
**availabilityZones** | **[String]** | List of availability zones a cluster is spread across. | [optional] 
**workers** | [**[V4NodeDefinition]**](V4NodeDefinition.md) | Information about worker nodes in the cluster (deprecated) | [optional] 
**kvm** | [**V4ClusterDetailsResponseKvm**](V4ClusterDetailsResponseKvm.md) |  | [optional] 


