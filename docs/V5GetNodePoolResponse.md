# GiantSwarmV4.V5GetNodePoolResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Node pool identifier. Unique within a tenant cluster. | [optional] 
**name** | **String** | Node pool name | [optional] 
**availabilityZones** | **[String]** | Names of the availability zones used by the nodes of this pool.  | [optional] 
**scaling** | [**V5GetNodePoolResponseScaling**](V5GetNodePoolResponseScaling.md) |  | [optional] 
**nodeSpec** | [**V5GetNodePoolResponseNodeSpec**](V5GetNodePoolResponseNodeSpec.md) | Worker node specification | [optional] 


