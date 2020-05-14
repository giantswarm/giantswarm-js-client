# GiantSwarm.V5AddNodePoolRequestNodeSpecAwsInstanceDistribution

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**onDemandBaseCapacity** | **Number** | Base capacity of on-demand EC2 instances to use for worker nodes in this pools. When this is larger than 0, this value defines a number of worker nodes that will be created using on-demand EC2 instances, regardless of the value configured as &#x60;on_demand_percentage_above_base_capacity&#x60;.  | [optional] 
**onDemandPercentageAboveBaseCapacity** | **Number** | Percentage of on-demand EC2 instances to use for worker nodes, instead of spot instances, for instances exceeding &#x60;on_demand_base_capacity&#x60;. For example, to have half of the worker nodes use spot instances and half use on-demand, set this value to 50.  | [optional] 


