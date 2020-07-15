# GiantSwarm.V5AddClusterRequestMasterNodes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**highAvailability** | **Boolean** | Specifies whether or not this cluster should run with redundant master nodes (high availability).  When &#x60;true&#x60;, three master nodes will be started, each one in a different availability zone that is selected randomly. This is the recommended setting for production clusters. However, note that this is only available on &lt;span class&#x3D;\&quot;badge aws\&quot;&gt;AWS&lt;/span&gt; starting with release v11.4.0.  When &#x60;false&#x60;, only one master node will be created, also in a randomly selected availability zone.  | [optional] [default to true]


