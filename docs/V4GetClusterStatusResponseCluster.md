# GiantSwarmV4.V4GetClusterStatusResponseCluster

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**[V4GetClusterStatusResponseClusterConditions]**](V4GetClusterStatusResponseClusterConditions.md) | Conditions is a list of status information expressing the current conditional state of a guest cluster. This may reflect the status of the guest cluster being updating or being up to date.  | [optional] 
**network** | [**V4GetClusterStatusResponseClusterNetwork**](V4GetClusterStatusResponseClusterNetwork.md) |  | [optional] 
**nodes** | [**[V4GetClusterStatusResponseClusterNodes]**](V4GetClusterStatusResponseClusterNodes.md) | null | [optional] 
**resources** | [**[V4GetClusterStatusResponseClusterResources]**](V4GetClusterStatusResponseClusterResources.md) | Resource is structure holding arbitrary conditions of operatorkit resource implementations. Imagine an operator implements an instance resource. This resource may operates sequentially but has to operate based on a certain system state it manages. So it tracks the status as needed here specific to its own implementation and means in order to fulfil its premise.  | [optional] 
**scaling** | [**V4GetClusterStatusResponseClusterScaling**](V4GetClusterStatusResponseClusterScaling.md) |  | [optional] 
**versions** | [**[V4GetClusterStatusResponseClusterVersions]**](V4GetClusterStatusResponseClusterVersions.md) | Guest cluster release version history. | [optional] 


