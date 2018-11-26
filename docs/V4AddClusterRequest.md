# GiantSwarmV4.V4AddClusterRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner** | **String** | Name of the organization owning the cluster | 
**name** | **String** | Cluster name | [optional] 
**releaseVersion** | **String** | The [release](https://docs.giantswarm.io/api/#tag/releases) version to use in the new cluster  | [optional] 
**availabilityZones** | **Number** | Number of availability zones a cluster should be spread across. The default is provided via the [info](#operation/getInfo) endpoint. | [optional] 
**workers** | [**[V4NodeDefinition]**](V4NodeDefinition.md) |  | [optional] 


