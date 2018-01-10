# GiantSwarmV4.V4AddClusterRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner** | **String** | Name of the organization owning the cluster | 
**name** | **String** | Cluster name | [optional] 
**releaseVersion** | **String** | The [release](https://docs.giantswarm.io/api/#tag/releases) version to use in the new cluster  | [optional] 
**kubernetesVersion** | **String** | Kubernetes version number (deprecated). Doesn&#39;t have any effect. This attribute is going to be removed in future API versions.  | [optional] 
**workers** | [**[V4NodeDefinition]**](V4NodeDefinition.md) |  | [optional] 


