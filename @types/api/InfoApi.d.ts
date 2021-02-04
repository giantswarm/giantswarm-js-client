import ApiClient from "../ApiClient";
import V4InfoResponse from "../model/V4InfoResponse";

/**
 * Info service.
 * @module api/InfoApi
 * @version 4.0.0
 */
export default class InfoApi {
  /**
   * Constructs a new InfoApi.
   * @alias module:api/InfoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient?: ApiClient);
  apiClient: ApiClient;
  /**
   * Get information on the installation
   * Returns a set of details on the installation. The output varies based on the provider used in the installation.  This information is useful for example when creating new cluster, to prevent creating clusters with more worker nodes than possible.  ### Example for an AWS-based installation  &#x60;&#x60;&#x60;json {   \&quot;general\&quot;: {     \&quot;installation_name\&quot;: \&quot;shire\&quot;,     \&quot;provider\&quot;: \&quot;aws\&quot;,     \&quot;datacenter\&quot;: \&quot;eu-central-1\&quot;,     \&quot;kubernetes_versions\&quot;: [       {         \&quot;minor_version\&quot;: \&quot;1.15\&quot;,         \&quot;eol_date\&quot;: \&quot;2020-03-24\&quot;       },       {         \&quot;minor_version\&quot;: \&quot;1.16\&quot;,         \&quot;eol_date\&quot;: \&quot;2020-08-26\&quot;       }     ],     \&quot;availability_zones\&quot;: {       \&quot;max\&quot;: 3,       \&quot;default\&quot;: 1,       \&quot;zones\&quot;: [         \&quot;eu-central-1a\&quot;, \&quot;eu-central-1b\&quot;, \&quot;eu-central-1c\&quot;       ]     }   },   \&quot;stats\&quot;: {     \&quot;cluster_creation_duration\&quot;: {       \&quot;median\&quot;: 750,       \&quot;p25\&quot;: 700,       \&quot;p75\&quot;: 800     }   },   \&quot;workers\&quot;: {     \&quot;count_per_cluster\&quot;: {       \&quot;max\&quot;: 999,       \&quot;default\&quot;: 3     },     \&quot;instance_type\&quot;: {       \&quot;options\&quot;: [         \&quot;m3.medium\&quot;, \&quot;m3.large\&quot;, \&quot;m3.xlarge\&quot;       ],       \&quot;default\&quot;: \&quot;m3.large\&quot;     }   } } &#x60;&#x60;&#x60;  ### Example for a KVM-based installation  &#x60;&#x60;&#x60;json {   \&quot;general\&quot;: {     \&quot;installation_name\&quot;: \&quot;isengard\&quot;,     \&quot;provider\&quot;: \&quot;kvm\&quot;,     \&quot;datacenter\&quot;: \&quot;string\&quot;,     \&quot;kubernetes_versions\&quot;: [       {         \&quot;minor_version\&quot;: \&quot;1.15\&quot;,         \&quot;eol_date\&quot;: \&quot;2020-03-24\&quot;       },       {         \&quot;minor_version\&quot;: \&quot;1.16\&quot;,         \&quot;eol_date\&quot;: \&quot;2020-08-26\&quot;       }     ],     \&quot;availability_zones\&quot;: {       \&quot;max\&quot;: 1,       \&quot;default\&quot;: 1,     }   },   \&quot;stats\&quot;: {     \&quot;cluster_creation_duration\&quot;: {       \&quot;median\&quot;: 750,       \&quot;p25\&quot;: 700,       \&quot;p75\&quot;: 800     }   },   \&quot;workers\&quot;: {     \&quot;count_per_cluster\&quot;: {       \&quot;max\&quot;: 8,       \&quot;default\&quot;: 3     },   } } &#x60;&#x60;&#x60;
   * @param {Object} opts Optional parameters
   * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
   * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
   * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V4InfoResponse} and HTTP response
   */
  getInfoWithHttpInfo(opts?: {
    xRequestID?: string;
    xGiantSwarmActivity?: string;
    xGiantSwarmCmdLine?: string;
  }): Promise<V4InfoResponse>;
  /**
   * Get information on the installation
   * Returns a set of details on the installation. The output varies based on the provider used in the installation.  This information is useful for example when creating new cluster, to prevent creating clusters with more worker nodes than possible.  ### Example for an AWS-based installation  &#x60;&#x60;&#x60;json {   \&quot;general\&quot;: {     \&quot;installation_name\&quot;: \&quot;shire\&quot;,     \&quot;provider\&quot;: \&quot;aws\&quot;,     \&quot;datacenter\&quot;: \&quot;eu-central-1\&quot;,     \&quot;kubernetes_versions\&quot;: [       {         \&quot;minor_version\&quot;: \&quot;1.15\&quot;,         \&quot;eol_date\&quot;: \&quot;2020-03-24\&quot;       },       {         \&quot;minor_version\&quot;: \&quot;1.16\&quot;,         \&quot;eol_date\&quot;: \&quot;2020-08-26\&quot;       }     ],     \&quot;availability_zones\&quot;: {       \&quot;max\&quot;: 3,       \&quot;default\&quot;: 1,       \&quot;zones\&quot;: [         \&quot;eu-central-1a\&quot;, \&quot;eu-central-1b\&quot;, \&quot;eu-central-1c\&quot;       ]     }   },   \&quot;stats\&quot;: {     \&quot;cluster_creation_duration\&quot;: {       \&quot;median\&quot;: 750,       \&quot;p25\&quot;: 700,       \&quot;p75\&quot;: 800     }   },   \&quot;workers\&quot;: {     \&quot;count_per_cluster\&quot;: {       \&quot;max\&quot;: 999,       \&quot;default\&quot;: 3     },     \&quot;instance_type\&quot;: {       \&quot;options\&quot;: [         \&quot;m3.medium\&quot;, \&quot;m3.large\&quot;, \&quot;m3.xlarge\&quot;       ],       \&quot;default\&quot;: \&quot;m3.large\&quot;     }   } } &#x60;&#x60;&#x60;  ### Example for a KVM-based installation  &#x60;&#x60;&#x60;json {   \&quot;general\&quot;: {     \&quot;installation_name\&quot;: \&quot;isengard\&quot;,     \&quot;provider\&quot;: \&quot;kvm\&quot;,     \&quot;datacenter\&quot;: \&quot;string\&quot;,     \&quot;kubernetes_versions\&quot;: [       {         \&quot;minor_version\&quot;: \&quot;1.15\&quot;,         \&quot;eol_date\&quot;: \&quot;2020-03-24\&quot;       },       {         \&quot;minor_version\&quot;: \&quot;1.16\&quot;,         \&quot;eol_date\&quot;: \&quot;2020-08-26\&quot;       }     ],     \&quot;availability_zones\&quot;: {       \&quot;max\&quot;: 1,       \&quot;default\&quot;: 1,     }   },   \&quot;stats\&quot;: {     \&quot;cluster_creation_duration\&quot;: {       \&quot;median\&quot;: 750,       \&quot;p25\&quot;: 700,       \&quot;p75\&quot;: 800     }   },   \&quot;workers\&quot;: {     \&quot;count_per_cluster\&quot;: {       \&quot;max\&quot;: 8,       \&quot;default\&quot;: 3     },   } } &#x60;&#x60;&#x60;
   * @param {Object} opts Optional parameters
   * @param {String} opts.xRequestID A randomly generated key that can be used to track a request throughout services of Giant Swarm.
   * @param {String} opts.xGiantSwarmActivity Name of an activity to track, like \&quot;list-clusters\&quot;. This allows to analyze several API requests sent in context and gives an idea on the purpose.
   * @param {String} opts.xGiantSwarmCmdLine If activity has been issued by a CLI, this header can contain the command line
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V4InfoResponse}
   */
  getInfo(opts?: {
    xRequestID?: string;
    xGiantSwarmActivity?: string;
    xGiantSwarmCmdLine?: string;
  }): Promise<V4InfoResponse>;
}
