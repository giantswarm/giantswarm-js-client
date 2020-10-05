# GiantSwarm.V5AddNodePoolRequestAvailabilityZones

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_number** | **Number** | Number of zones to use. If given, the zones are picked automatically. _(Maximum limit of 4 supported.)_  On Azure, to increase the chances of finding available GPU instances, set the value to &#x60;-1&#x60; (no specific AZ selected).  | [optional] 
**zones** | **[String]** | Names of the availability zones to use. _(Must be same region as the cluster.)_  | [optional] 


