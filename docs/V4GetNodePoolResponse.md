# GiantSwarmV4.V4GetNodePoolResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Node pool identifier. Unique within a tenant cluster. | [optional] 
**name** | **String** | Node pool name | [optional] 
**availabilityZones** | **[String]** | Names of the availability zones used by the nodes of this pool.  | [optional] 
**scaling** | [**V4GetNodePoolResponseScaling**](V4GetNodePoolResponseScaling.md) |  | [optional] 
**nodeSpec** | [**V4GetNodePoolResponseNodeSpec**](V4GetNodePoolResponseNodeSpec.md) | Worker node specification | [optional] 


