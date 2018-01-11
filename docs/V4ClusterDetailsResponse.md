# GiantSwarmV4.V4ClusterDetailsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique cluster identifier | [optional] 
**apiEndpoint** | **String** | URI of the Kubernetes API endpoint | [optional] 
**createDate** | **String** | Date/time of cluster creation | [optional] 
**owner** | **String** | Name of the organization owning the cluster | [optional] 
**name** | **String** | Cluster name | [optional] 
**releaseVersion** | **String** | The [release](https://docs.giantswarm.io/api/#tag/releases) version currently running this cluster.  | [optional] 
**kubernetesVersion** | **String** | Deprecated. Will be removed in a future API version. | [optional] 
**workers** | [**[V4NodeDefinition]**](V4NodeDefinition.md) |  | [optional] 


