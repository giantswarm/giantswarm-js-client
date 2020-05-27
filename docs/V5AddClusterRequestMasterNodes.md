# GiantSwarm.V5AddClusterRequestMasterNodes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**highAvailability** | **Boolean** | Specifies whether or not this cluster should run with redundant master nodes (high availability). When true, three master nodes will be started, each one in a different availability zone that is selected randomly. This is the recommended setting for production clusters. When false, only one master node will be created, also in a randomly selected availability zone.  | [optional] [default to true]


