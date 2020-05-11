# GiantSwarm.V5AddNodePoolRequestNodeSpecAws

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instanceDistribution** | [**V5AddNodePoolRequestNodeSpecAwsInstanceDistribution**](V5AddNodePoolRequestNodeSpecAwsInstanceDistribution.md) |  | [optional] 
**instanceType** | **String** | EC2 instance type to use for all nodes in the node pool. _(Validated against available instance types.)_  | [optional] 
**useAlikeInstanceTypes** | **Boolean** | If true, instance types alike the type set via &#x60;instance_type&#x60; will be used. This can increase the likelihood to get instances for this pool, especially spot instances at a low rate. If false, only the exact type set as &#x60;instance_type&#x60; is used. Added with AWS release v11.2.0.  | [optional] [default to false]


