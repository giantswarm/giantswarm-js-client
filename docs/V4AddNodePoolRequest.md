# GiantSwarmV4.V4AddNodePoolRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Node pool name. Must be unique within the cluster.  | [optional] 
**availabilityZones** | **Number** | Number of availability zones a cluster should be spread across. The default is provided via the [info](#operation/getInfo) endpoint.  | [optional] 
**scaling** | [**V4AddNodePoolRequestScaling**](V4AddNodePoolRequestScaling.md) |  | [optional] 
**nodeSpec** | [**V4AddNodePoolRequestNodeSpec**](V4AddNodePoolRequestNodeSpec.md) | Worker node specification | [optional] 


