# GiantSwarm.V5AddClusterRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner** | **String** | Name of the organization owning the cluster  | 
**name** | **String** | Cluster name | [optional] 
**releaseVersion** | **String** | The [release](https://docs.giantswarm.io/api/#tag/releases) version to use in the new cluster. If not given, the latest release will be used.  | [optional] 
**master** | [**V5AddClusterRequestMaster**](V5AddClusterRequestMaster.md) |  | [optional] 
**nodepools** | [**[V5AddNodePoolRequest]**](V5AddNodePoolRequest.md) | Specification of node pools to be created immediately with the cluster.  | [optional] 


