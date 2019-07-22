# GiantSwarmV4.V4AddClusterRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner** | **String** | Name of the organization owning the cluster | 
**name** | **String** | Cluster name | [optional] 
**releaseVersion** | **String** | The [release](https://docs.giantswarm.io/api/#tag/releases) version to use in the new cluster  | [optional] 
**availabilityZones** | **Number** | Number of availability zones a cluster should be spread across. The default is provided via the [info](#operation/getInfo) endpoint.  | [optional] 
**scaling** | [**V4AddClusterRequestScaling**](V4AddClusterRequestScaling.md) |  | [optional] 
**workers** | [**[V4NodeDefinition]**](V4NodeDefinition.md) | Worker node definition on KVM and Azure. If present, the first item of the array is expected to contain the specification for all worker nodes. Not available on AWS.  | [optional] 


