# GiantSwarm.V4InfoResponseGeneral

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**installationName** | **String** | Unique name of the installation | [optional] 
**provider** | **String** | The technical provider used in this installation. Either \&quot;kvm\&quot;, \&quot;aws\&quot;, or \&quot;azure\&quot;. | [optional] 
**datacenter** | **String** | Identifier of the datacenter or cloud provider region, e. g. \&quot;eu-west-1\&quot; | [optional] 
**kubernetesVersions** | [**[V4InfoResponseGeneralKubernetesVersions]**](V4InfoResponseGeneralKubernetesVersions.md) | Information on some kubernetes versions and their end of life dates. | [optional] 
**availabilityZones** | [**V4InfoResponseGeneralAvailabilityZones**](V4InfoResponseGeneralAvailabilityZones.md) |  | [optional] 


