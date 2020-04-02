import * as request from "superagent";
declare type CallbackHandler = (err: any, res?: request.Response) => void;
declare type Logger = {
    log: (line: string) => any;
};
/**
 * This is the documentation for the Giant Swarm API.

For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).

The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.

Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.

Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.

Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.

## Source

The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).

 * @class GiantSwarm
 * @param {(string)} [domainOrOptions] - The project domain.
 */
export default class GiantSwarm {
    private logger?;
    private domain;
    private errorHandlers;
    constructor(domain?: string, logger?: Logger | undefined);
    getDomain(): string;
    addErrorHandler(handler: CallbackHandler): void;
    private request;
    getAppCatalogsURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Returns an array of app catalog objects, which contains further metadata,
    including a URL to fetch the full index of each catalog.


    #### About the Labels

    - `application.giantswarm.io/catalog-type`
      Describes the type of catalog.

      - `managed` - Apps in this catalog are managed by Giant Swarm.
      - `incubator` - Apps in this catalog are a work in progress. They're
                      made with your Giant Swarm cluster in mind though, so
                      they should work. Feedback is appreciated on these apps.
      - `test` - Apps in this catalog will soon graduate to incubator status,
                 you most likely will not see any `test` catalogs on your
                 installations.
      - `community` - Apps in this catalog are provided by the kubernetes
                      community. They will most likely not work without making
                      some changes to the security settings of your cluster.

      App Catalogs can also be labeled as `internal`, however these catalogs
      contain apps that run on our control planes. These `internal` app catalogs
      will be filtered out and never shown when calling this endpoint.

      For more details on app catalogs visit: https://docs.giantswarm.io/basics/app-catalog/


    ### Example
    ```json
      [
        {
          "metadata": {
            "name": "sample-catalog",
            "labels": {
              "application.giantswarm.io/catalog-type": "test",
              "app-operator.giantswarm.io/version": "1.0.0",
            },
          },

          "spec": {
            "description": "Giant Swarm's Sample Catalog with a few apps to test things out.",
            "logoURL": "https://s.giantswarm.io/app-catalog/1/images/sample-catalog.png",

            "storage": {
              "URL": "https://giantswarm.github.com/sample-catalog/",
              "type": "helm"
            },
            "title": "Sample Catalog"
          }
        }
      ]
    ```

    * @method
    * @name GiantSwarm#getAppCatalogs
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

    */
    getAppCatalogs(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getInfoURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Returns a set of details on the installation. The output varies based
    on the provider used in the installation.

    This information is useful for example when creating new cluster, to
    prevent creating clusters with more worker nodes than possible.

    ### Example for an AWS-based installation

    ```json
    {
      "general": {
        "installation_name": "shire",
        "provider": "aws",
        "datacenter": "eu-central-1",
        "availability_zones": {
          "max": 3,
          "default": 1,
          "zones": [
            "eu-central-1a", "eu-central-1b", "eu-central-1c"
          ]
        }
      },
      "stats": {
        "cluster_creation_duration": {
          "median": 750,
          "p25": 700,
          "p75": 800
        }
      },
      "workers": {
        "count_per_cluster": {
          "max": null,
          "default": 3
        },
        "instance_type": {
          "options": [
            "m3.medium", "m3.large", "m3.xlarge"
          ],
          "default": "m3.large"
        }
      }
    }
    ```

    ### Example for a KVM-based installation

    ```json
    {
      "general": {
        "installation_name": "isengard",
        "provider": "kvm",
        "datacenter": "string",
        "availability_zones": {
          "max": 1,
          "default": 1,
        }
      },
      "stats": {
        "cluster_creation_duration": {
          "median": 750,
          "p25": 700,
          "p75": 800
        }
      },
      "workers": {
        "count_per_cluster": {
          "max": 8,
          "default": 3
        },
      }
    }
    ```

    * @method
    * @name GiantSwarm#getInfo
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

    */
    getInfo(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    createAuthTokenURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'body': {
            'email'?: string;
            'password_base64'?: string;
        };
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Creates a Auth Token for a given user. Must authenticate with email and password.

    * @method
    * @name GiantSwarm#createAuthToken
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {} body - Create Auth Token Request
    */
    createAuthToken(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'body': {
            'email'?: string;
            'password_base64'?: string;
        };
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    deleteAuthTokenURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Deletes the authentication token provided in the Authorization header. This effectively logs you out.

    * @method
    * @name GiantSwarm#deleteAuthToken
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

    */
    deleteAuthToken(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getUsersURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Returns a list of all users in the system. Currently this endpoint is only available to users with admin permissions.

    * @method
    * @name GiantSwarm#getUsers
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

    */
    getUsers(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getCurrentUserURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Returns details about the currently authenticated user

    * @method
    * @name GiantSwarm#getCurrentUser
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

    */
    getCurrentUser(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getUserURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'email': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Returns details about a specific user

    * @method
    * @name GiantSwarm#getUser
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} email - The user's email address
    */
    getUser(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'email': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    createUserURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'email': string;
        'body': {
            'password': string;
            'expiry'?: string;
        };
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Creates a users in the system. Currently this endpoint is only available to users with admin permissions.

    * @method
    * @name GiantSwarm#createUser
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} email - The user's email address
         * @param {} body - User account details
    */
    createUser(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'email': string;
        'body': {
            'password': string;
            'expiry'?: string;
        };
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    modifyUserURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'email': string;
        'body': {
            'email'?: string;
            'expiry'?: string;
        };
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows you to change details of a given user. Only administrators can edit accounts of other users.

    * @method
    * @name GiantSwarm#modifyUser
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} email - The user's email address
         * @param {} body - User account details
    */
    modifyUser(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'email': string;
        'body': {
            'email'?: string;
            'expiry'?: string;
        };
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    deleteUserURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'email': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Deletes a users in the system. Currently this endpoint is only available
    to users with admin permissions.

    * @method
    * @name GiantSwarm#deleteUser
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} email - The user's email address
    */
    deleteUser(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'email': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    modifyPasswordURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'email': string;
        'body': {
            'current_password_base64'?: string;
            'new_password_base64': string;
        };
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows you to change your password. Admins are able to change passwords of other users.

    * @method
    * @name GiantSwarm#modifyPassword
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} email - The user's email address
         * @param {} body - Modify password request
    */
    modifyPassword(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'email': string;
        'body': {
            'current_password_base64'?: string;
            'new_password_base64': string;
        };
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getClustersURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation fetches a list of clusters.

    The result depends on the permissions of the user.
    A normal user will get all the clusters the user has access
    to, via organization membership.
    A user with admin permission will receive a list of all existing
    clusters.

    The result array items are sparse representations of the cluster
    objects. To fetch more details on a cluster, use the
    [getClusterStatus](#operation/getClusterStatus) operation.

    * @method
    * @name GiantSwarm#getClusters
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

    */
    getClusters(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    addClusterURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'body': {
            'owner': string;
            'name'?: string;
            'release_version'?: string;
            'availability_zones'?: number;
            'scaling'?: {
                'min'?: number;
                'max'?: number;
            };
            'workers'?: Array<{
                'aws'?: {
                    'instance_type'?: string;
                };
                'azure'?: {
                    'vm_size'?: string;
                };
                'memory'?: {
                    'size_gb'?: number;
                };
                'storage'?: {
                    'size_gb'?: number;
                };
                'cpu'?: {
                    'cores'?: number;
                };
                'labels'?: {};
            }> | {
                'aws'?: {
                    'instance_type'?: string;
                };
                'azure'?: {
                    'vm_size'?: string;
                };
                'memory'?: {
                    'size_gb'?: number;
                };
                'storage'?: {
                    'size_gb'?: number;
                };
                'cpu'?: {
                    'cores'?: number;
                };
                'labels'?: {};
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation is used to create a new Kubernetes cluster or
    "tenant cluster".

    ### Cluster definition

    The cluster definition format allows to set a number of optional
    configuration details, like worker node configuration, with node
    specification depending on the provider (e. g. on <span class="badge azure">Azure</span> the
    VM size, or on <span class="badge kvm">KVM</span> the memory size and number of CPU cores).

    One attribute is __mandatory__ upon creation: The `owner`
    attribute must carry the name of the organization the cluster will
    belong to. Note that the acting user must be a member of that
    organization in order to create a cluster.

    For all other attributes, defaults will be applied if the attribute
    is not set. Check out the [getInfo](#operation/getInfo) operation for
    more info about defaults. If no `release_version` is set, the latest
    release version available for the provider will be used.

    * @method
    * @name GiantSwarm#addCluster
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {} body - New cluster definition
    */
    addCluster(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'body': {
            'owner': string;
            'name'?: string;
            'release_version'?: string;
            'availability_zones'?: number;
            'scaling'?: {
                'min'?: number;
                'max'?: number;
            };
            'workers'?: Array<{
                'aws'?: {
                    'instance_type'?: string;
                };
                'azure'?: {
                    'vm_size'?: string;
                };
                'memory'?: {
                    'size_gb'?: number;
                };
                'storage'?: {
                    'size_gb'?: number;
                };
                'cpu'?: {
                    'cores'?: number;
                };
                'labels'?: {};
            }> | {
                'aws'?: {
                    'instance_type'?: string;
                };
                'azure'?: {
                    'vm_size'?: string;
                };
                'memory'?: {
                    'size_gb'?: number;
                };
                'storage'?: {
                    'size_gb'?: number;
                };
                'cpu'?: {
                    'cores'?: number;
                };
                'labels'?: {};
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getClusterURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows to obtain basic details on a particular cluster.

    * @method
    * @name GiantSwarm#getCluster
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
    */
    getCluster(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    modifyClusterURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'body': {
            'name'?: string;
            'owner'?: string;
            'release_version'?: string;
            'scaling'?: {
                'min'?: number;
                'max'?: number;
            };
            'workers'?: Array<{
                'aws'?: {
                    'instance_type'?: string;
                };
                'azure'?: {
                    'vm_size'?: string;
                };
                'memory'?: {
                    'size_gb'?: number;
                };
                'storage'?: {
                    'size_gb'?: number;
                };
                'cpu'?: {
                    'cores'?: number;
                };
                'labels'?: {};
            }> | {
                'aws'?: {
                    'instance_type'?: string;
                };
                'azure'?: {
                    'vm_size'?: string;
                };
                'memory'?: {
                    'size_gb'?: number;
                };
                'storage'?: {
                    'size_gb'?: number;
                };
                'cpu'?: {
                    'cores'?: number;
                };
                'labels'?: {};
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows to modify an existing cluster.

    A cluster modification is performed by submitting a `PATCH` request
    to the cluster resource (as described in the
    [addCluster](#operation/addCluster) and [getCluster](#operation/getCluster))
    in form of a [JSON Patch Merge
    (RFC 7386)](https://tools.ietf.org/html/rfc7386). This means, only the
    attributes to be modified have to be contained in the request body.

    The following attributes can be modified:

    - `name`: Rename the cluster to something more fitting.

    - `owner`: Changing the owner organization name means to change cluster
    ownership from one organization to another. The user performing the
    request has to be a member of both organizations.

    - `release_version`: By changing this attribute you can upgrade a
    cluster to a newer
    [release](https://docs.giantswarm.io/api/#tag/releases).

    - `scaling`: Adjust the cluster node limits to make use of auto scaling
    or to have full control over the node count. The latter can be
    achieved by setting `min` and `max` to the same values. Note that
    setting `min` and `max` to different values (effectively enabling
    autoscaling) is only available on AWS with releases from 6.2.0.

     - `workers` (deprecated): For backward compatibility reasons, it is
    possible to provide this attribute as an array, where the number of
    items contained in the array determines the intended number of worker
    nodes in the cluster. The item count will be applied as both `min` and
    `max` value of the scaling limits, effectively disabling autoscaling.
    This requires the `scaling` attribute must not be present in the same
    request.

    ### Limitations

    - As of now, existing worker nodes cannot be modified.
    - The number of availability zones cannot be modified.
    - When removing nodes (scaling down), it is not possible to determine
    which nodes will be removed.

    * @method
    * @name GiantSwarm#modifyCluster
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {} body - Merge-patch body
    */
    modifyCluster(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'body': {
            'name'?: string;
            'owner'?: string;
            'release_version'?: string;
            'scaling'?: {
                'min'?: number;
                'max'?: number;
            };
            'workers'?: Array<{
                'aws'?: {
                    'instance_type'?: string;
                };
                'azure'?: {
                    'vm_size'?: string;
                };
                'memory'?: {
                    'size_gb'?: number;
                };
                'storage'?: {
                    'size_gb'?: number;
                };
                'cpu'?: {
                    'cores'?: number;
                };
                'labels'?: {};
            }> | {
                'aws'?: {
                    'instance_type'?: string;
                };
                'azure'?: {
                    'vm_size'?: string;
                };
                'memory'?: {
                    'size_gb'?: number;
                };
                'storage'?: {
                    'size_gb'?: number;
                };
                'cpu'?: {
                    'cores'?: number;
                };
                'labels'?: {};
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    deleteClusterURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation triggers deleting a cluster with all resources attached to it.

    Deleting a cluster causes the termination of all workloads running on
    the cluster. Data stored on the worker nodes will be lost. There is no
    way to undo this operation.

    The response is sent as soon as the request is validated.
    At that point, workloads might still be running on the cluster and may be accessible for a little wile, until the cluster is actually deleted.

    * @method
    * @name GiantSwarm#deleteCluster
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
    */
    deleteCluster(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getKeyPairsURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Returns a list of information on all key pairs of a cluster as an array.

    The individual array items contain metadata on the key pairs, but neither the key nor the certificate. These can only be obtained upon creation, using the [addKeypair](#operation/addKeyPair) operation.

    * @method
    * @name GiantSwarm#getKeyPairs
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
    */
    getKeyPairs(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    addKeyPairURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'body': {
            'description': string;
            'ttl_hours'?: number;
            'cn_prefix'?: string;
            'certificate_organizations'?: string;
        };
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows to create a new key pair for accessing a specific cluster.

    A key pair consists of an unencrypted private RSA key and an X.509 certificate. In addition, when obtaining a key pair for a cluster, the cluster's certificate authority file (CA certificate) is delivered, which is required by TLS clients to establish trust to the cluster.

    In addition to the credentials itself, a key pair has some metadata like a unique ID, a creation timestamp and a free text `description` that you can use at will, for example to note for whom a key pair has been issued.

    ### Customizing the certificate's subject for K8s RBAC

    It is possible to set the Common Name and Organization fields of the generated certificate's subject.

    - `cn_prefix`: The certificate's common name uses this format: `<cn_prefix>.user.<clusterdomain>`.

      `clusterdomain` is specific to your cluster and is not editable.

      The `cn_prefix` however is editable. When left blank it will default
      to the email address of the Giant Swarm user that is performing the
      create key pair request.

      The common name is used as the username for requests to the Kubernetes API. This allows you
      to set up role-based access controls.


    - `certificate_organizations`: This will set the certificate's `organization` fields. Use a comma separated list of values.
      The Kubernetes API will use these values as group memberships.

    __Note:__ The actual credentials coming with the key pair (key, certificate) can only be accessed once, as the result of the `POST` request that triggers their creation. This restriction exists to minimize the risk of credentials being leaked. If you fail to capture the credentials upon creation, you'll have to repeat the creation request.

    * @method
    * @name GiantSwarm#addKeyPair
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {} body - While the `ttl_hours` attribute is optional and will be set to a default value when omitted, the `description` is mandatory.

    */
    addKeyPair(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'body': {
            'description': string;
            'ttl_hours'?: number;
            'cn_prefix'?: string;
            'certificate_organizations'?: string;
        };
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getClusterStatusURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Returns an object about a cluster's current state and past status transitions.

    This endpoint exposes the status content of the Kubernetes resources representing
    a cluster in the corresponding custom resource. That is, depending on the provider:

    - [`awsconfig.provider.giantswarm.io`](https://godoc.org/github.com/giantswarm/apiextensions/pkg/apis/provider/v1alpha1#AWSConfig)
    - [`azureconfig.provider.giantswarm.io`](https://godoc.org/github.com/giantswarm/apiextensions/pkg/apis/provider/v1alpha1#AzureConfig)
    - [`kvmconfig.provider.giantswarm.io`](https://godoc.org/github.com/giantswarm/apiextensions/pkg/apis/provider/v1alpha1#KVMConfig)

    Note that structure and style differ from the rest of the v4 API. Also note that
    the structure depends on the release version and changes can be expected frequently.

    * @method
    * @name GiantSwarm#getClusterStatus
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
    */
    getClusterStatus(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getClusterAppsV4URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Returns an array of apps installed on a given cluster.
    For apps on v5 clusters, please use the v5 version of this endpoint.

    ### Example
    ```json
      [
        {
          "metadata": {
            "name": "my-awesome-prometheus",
            "labels": {}
          },

          "spec": {
            "catalog": "sample-catalog"
            "name": "prometheus-chart",
            "namespace": "giantswarm",
            "version": "0.2.0",
            "user_config": {
              "configmap": {
                "name": "prometheus-user-values",
                "namespace": "123ab"
              }
            }
          },

          "status": {
            "app_version": "1.0.0",
            "release": {
              "last_deployed": "2019-04-08T12:34:00Z",
              "status": "DEPLOYED"
            },
            "version": "0.2.0",
          }
        }
      ]
    ```

    * @method
    * @name GiantSwarm#getClusterAppsV4
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
    */
    getClusterAppsV4(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    deleteClusterAppV4URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows a user to delete an app.
    For apps on v5 clusters, please use the v5 version of this endpoint.

    * @method
    * @name GiantSwarm#deleteClusterAppV4
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
    */
    deleteClusterAppV4(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    createClusterAppV4URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {
            'spec'?: {
                'name': string;
                'namespace': string;
                'version': string;
                'catalog': string;
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Install an app on a tenant cluster by posting to this endpoint.
    For apps on v5 clusters, please use the v5 version of this endpoint.

    The spec field represents the app we'll be installing, and so spec.name refers to
    the name of the chart that installs this app in the catalog.

    The response you get on a succesful create includes the status of the app. However
    since the App is still initialising and this is an asynchronous operation, it is
    likely that the fields in this status object will be all empty values.

    To check on the status of your app, perform a GET to /v4/clusters/{cluster_id}/apps/,
    and check the status field of the app.

    ### Example PUT request
    ```json
      {
        "spec": {
          "catalog": "sample-catalog",
          "name": "prometheus-chart",
          "namespace": "prometheus",
          "version": "0.2.0",
        }
      }
    ```

    ### About the user_config field in the response
    This field is not editable by you, but is set automatically by the API
    if a configmap named `{app_name}-user-values` exists in the tenant cluster
    namespace on the control plane.

    The `/v4/clusters/{cluster_id}/apps/{app_name}/config/` endpoints allows
    you to create such a configmap using this API.

    It is recommended to create your config before creating your app. This
    will result in a faster deploy.

    However, you can create your config after creating the app if you wish,
    this API will take care of setting the `user_config` field of the app
    correctly for you.

    ### Why can't I just set the `user_config` value myself?
    It simplifies usage while also being a security measure.

    Furthermore it is also a security measure and ensures that users of this
    API can't access arbitrary configmaps of the control plane.

    This API will only allow you to edit or access configmaps that adhere
    to a strict naming convention.

    * @method
    * @name GiantSwarm#createClusterAppV4
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
         * @param {} body - This is the documentation for the Giant Swarm API.

    For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).

    The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.

    Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.

    Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.

    Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.

    ## Source

    The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).

    */
    createClusterAppV4(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {
            'spec'?: {
                'name': string;
                'namespace': string;
                'version': string;
                'catalog': string;
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    modifyClusterAppV4URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {
            'spec'?: {
                'version'?: string;
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows you to modify an existing app.

    For apps on v5 clusters, please use the v5 version of this endpoint.

    The following attributes can be modified:

    - `version`: Changing this field lets you upgrade or downgrade an app.

    `catalog`, `name`, `namespace`, and `user_config` are not editable. If you need to move or rename an app, you should instead delete the app and make it again.

    The request body must conform with the [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386) standard.
    Requests have to be sent with the `Content-Type: application/merge-patch+json` header.

    * @method
    * @name GiantSwarm#modifyClusterAppV4
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
         * @param {} body - This is the documentation for the Giant Swarm API.

    For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).

    The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.

    Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.

    Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.

    Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.

    ## Source

    The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).

    */
    modifyClusterAppV4(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {
            'spec'?: {
                'version'?: string;
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getClusterAppConfigV4URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows you to fetch the user values configmap associated
    with an app.

    For apps on v5 clusters, please use the v5 version of this endpoint.

    * @method
    * @name GiantSwarm#getClusterAppConfigV4
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
    */
    getClusterAppConfigV4(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    createClusterAppConfigV4URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {};
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows you to create a values configmap for a specific app. The app does
    not have to exist before hand.

    If the app does exist, this endpoint will ensure that the App CR gets it's
    user_config field set correctly.

    However, if the app exists and the user_config is already set to something,
    then this request will fail. You will in that case most likely want to
    update the config using the `PATCH /v4/clusters/{cluster_id}/apps/{app_name}/config/`
    endpoint.

    For apps on v5 clusters, please use the v5 version of this endpoint.


    ### Example POST request
    ```json
      {
        "agent": {
          "key": "secret-key-here",
          "endpointHost": "saas-eu-west-1.instana.io",
          "endpointPort": "443",
        },
        "zone": {
          "name": "giantswarm-cluster"
        }
      }
    ```

    * @method
    * @name GiantSwarm#createClusterAppConfigV4
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
         * @param {} body - This is the documentation for the Giant Swarm API.

    For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).

    The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.

    Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.

    Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.

    Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.

    ## Source

    The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).

    */
    createClusterAppConfigV4(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {};
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    deleteClusterAppConfigV4URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows a user to delete an app's user config if it has been named according to the convention of {app-name}-user-values and
    stored in the cluster ID namespace.

    Calling this endpoint will delete the ConfigMap, but it does not remove the reference to the ConfigMap in the (spec.user_config.configmap field) from the app.

    Do make sure you also update the app and remove the reference.

    The preferred order is to first remove the reference to the configmap by
    updating the app, and only then delete the configmap using this endpoint.

    For apps on v5 clusters, please use the v5 version of this endpoint.

    * @method
    * @name GiantSwarm#deleteClusterAppConfigV4
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
    */
    deleteClusterAppConfigV4(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    modifyClusterAppConfigV4URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {};
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows you to modify the values configmap for a specific app.
    It's only possible to modify app configs that have been named according to the convention of
    {app-name}-user-values and stored in the cluster ID namespace.

    The full values key of the configmap will be replaced by the JSON body
    of your request.

    For apps on v5 clusters, please use the v5 version of this endpoint.

    ### Example PATCH request
    ```json
      {
        "agent": {
          "key": "a-new-key-here",
        }
      }
    ```

    If the configmap contained content like:

    ```json
      {
        "agent": {
          "key": "an-old-key-here",
          "admin": true,
        },
        "server": {
          "url": "giantswarm.io",
        }
      }
    ```

    Then the "server" and "admin" keys will be removed.

    * @method
    * @name GiantSwarm#modifyClusterAppConfigV4
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
         * @param {} body - This is the documentation for the Giant Swarm API.

    For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).

    The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.

    Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.

    Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.

    Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.

    ## Source

    The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).

    */
    modifyClusterAppConfigV4(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {};
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getClusterAppSecretV4URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows you to fetch the Secret associated
    with an app.

    For apps on v5 clusters, please use the v5 version of this endpoint.

    * @method
    * @name GiantSwarm#getClusterAppSecretV4
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
    */
    getClusterAppSecretV4(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    createClusterAppSecretV4URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {};
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows you to create a Secret for a specific app. The app does
    not have to exist before hand.

    If the app does exist, this endpoint will ensure that the App CR gets it's
    `spec.user_config.secret` field set correctly.

    However, if the app exists and the `spec.user_config.secret` is already set to something,
    then this request will fail. You will in that case most likely want to
    update the Secret using the `PATCH /v4/clusters/{cluster_id}/apps/{app_name}/secret/`
    endpoint.

    For apps on v5 clusters, please use the v5 version of this endpoint.

    ### Example POST request
    ```json
      {
        "secret": "value"
      }
    ```

    * @method
    * @name GiantSwarm#createClusterAppSecretV4
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
         * @param {} body - This is the documentation for the Giant Swarm API.

    For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).

    The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.

    Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.

    Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.

    Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.

    ## Source

    The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).

    */
    createClusterAppSecretV4(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {};
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    deleteClusterAppSecretV4URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows a user to delete an app's Secret if it has been named according to the convention of {app-name}-user-secrets and
    stored in the cluster ID namespace.

    Calling this endpoint will delete the Secret, and also remove the reference to the Secret in the (spec.user_config.secret field) from the app.

    For apps on v5 clusters, please use the v5 version of this endpoint.

    * @method
    * @name GiantSwarm#deleteClusterAppSecretV4
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
    */
    deleteClusterAppSecretV4(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    modifyClusterAppSecretV4URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {};
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows you to modify the Secret for a specific app.
    It's only possible to modify Secrets that have been named according to the convention of
    {app-name}-user-secrets and stored in the cluster ID namespace.

    The full values key of the Secret will be replaced by the JSON body
    of your request.

    For apps on v5 clusters, please use the v5 version of this endpoint.

    ### Example PATCH request
    ```json
      {
        "secret": "new-value"
      }
    ```

    If the Secret contained content like:

    ```json
      {
        "secret": "old-value",
        "secret2": "another-old-value"
      }
    ```

    Then the "secret2" will be removed, and "secret" will be set to "new-value"

    * @method
    * @name GiantSwarm#modifyClusterAppSecretV4
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
         * @param {} body - This is the documentation for the Giant Swarm API.

    For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).

    The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.

    Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.

    Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.

    Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.

    ## Source

    The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).

    */
    modifyClusterAppSecretV4(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {};
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getClusterAppsV5URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Returns an array of apps installed on a given cluster.

    ### Example
    ```json
      [
        {
          "metadata": {
            "name": "my-awesome-prometheus",
            "labels": {}
          },

          "spec": {
            "catalog": "sample-catalog"
            "name": "prometheus-chart",
            "namespace": "giantswarm",
            "version": "0.2.0",
            "user_config": {
              "configmap": {
                "name": "prometheus-user-values",
                "namespace": "123ab"
              }
            }
          },

          "status": {
            "app_version": "1.0.0",
            "release": {
              "last_deployed": "2019-04-08T12:34:00Z",
              "status": "DEPLOYED"
            },
            "version": "0.2.0",
          }
        }
      ]
    ```

    * @method
    * @name GiantSwarm#getClusterAppsV5
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
    */
    getClusterAppsV5(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    deleteClusterAppV5URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows a user to delete an app.

    * @method
    * @name GiantSwarm#deleteClusterAppV5
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
    */
    deleteClusterAppV5(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    createClusterAppV5URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {
            'spec'?: {
                'name': string;
                'namespace': string;
                'version': string;
                'catalog': string;
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Install an app on a tenant cluster by posting to this endpoint.

    The spec field represents the app we'll be installing, and so spec.name refers to
    the name of the chart that installs this app in the catalog.

    The response you get on a succesful create includes the status of the app. However
    since the App is still initialising and this is an asynchronous operation, it is
    likely that the fields in this status object will be all empty values.

    To check on the status of your app, perform a GET to /v5/clusters/{cluster_id}/apps/,
    and check the status field of the app.

    ### Example PUT request
    ```json
      {
        "spec": {
          "catalog": "sample-catalog",
          "name": "prometheus-chart",
          "namespace": "prometheus",
          "version": "0.2.0",
        }
      }
    ```

    ### About the user_config field in the response
    This field is not editable by you, but is set automatically by the API
    if a configmap named `{app_name}-user-values` exists in the tenant cluster
    namespace on the control plane.

    The `/v4/clusters/{cluster_id}/apps/{app_name}/config/` endpoints allows
    you to create such a configmap using this API.

    It is recommended to create your config before creating your app. This
    will result in a faster deploy.

    However, you can create your config after creating the app if you wish,
    this API will take care of setting the `user_config` field of the app
    correctly for you.

    ### Why can't I just set the `user_config` value myself?
    It simplifies usage while also being a security measure.

    Furthermore it is also a security measure and ensures that users of this
    API can't access arbitrary configmaps of the control plane.

    This API will only allow you to edit or access configmaps that adhere
    to a strict naming convention.

    * @method
    * @name GiantSwarm#createClusterAppV5
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
         * @param {} body - This is the documentation for the Giant Swarm API.

    For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).

    The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.

    Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.

    Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.

    Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.

    ## Source

    The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).

    */
    createClusterAppV5(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {
            'spec'?: {
                'name': string;
                'namespace': string;
                'version': string;
                'catalog': string;
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    modifyClusterAppV5URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {
            'spec'?: {
                'version'?: string;
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows you to modify an existing app.

    The following attributes can be modified:

    - `version`: Changing this field lets you upgrade or downgrade an app.

    `catalog`, `name`, `namespace`, and `user_config` are not editable. If you need to move or rename an app, you should instead delete the app and make it again.

    The request body must conform with the [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386) standard.
    Requests have to be sent with the `Content-Type: application/merge-patch+json` header.

    * @method
    * @name GiantSwarm#modifyClusterAppV5
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
         * @param {} body - This is the documentation for the Giant Swarm API.

    For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).

    The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.

    Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.

    Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.

    Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.

    ## Source

    The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).

    */
    modifyClusterAppV5(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {
            'spec'?: {
                'version'?: string;
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getClusterAppConfigV5URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows you to fetch the user values configmap associated
    with an app.

    * @method
    * @name GiantSwarm#getClusterAppConfigV5
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
    */
    getClusterAppConfigV5(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    createClusterAppConfigV5URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {};
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows you to create a values configmap for a specific app. The app does
    not have to exist before hand.

    If the app does exist, this endpoint will ensure that the App CR gets it's
    user_config field set correctly.

    However, if the app exists and the user_config is already set to something,
    then this request will fail. You will in that case most likely want to
    update the config using the `PATCH /v5/clusters/{cluster_id}/apps/{app_name}/config/`
    endpoint.

    ### Example POST request
    ```json
      {
        "agent": {
          "key": "secret-key-here",
          "endpointHost": "saas-eu-west-1.instana.io",
          "endpointPort": "443",
        },
        "zone": {
          "name": "giantswarm-cluster"
        }
      }
    ```

    * @method
    * @name GiantSwarm#createClusterAppConfigV5
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
         * @param {} body - This is the documentation for the Giant Swarm API.

    For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).

    The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.

    Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.

    Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.

    Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.

    ## Source

    The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).

    */
    createClusterAppConfigV5(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {};
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    deleteClusterAppConfigV5URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows a user to delete an app's user config if it has been named according to the convention of {app-name}-user-values and
    stored in the cluster ID namespace.

    Calling this endpoint will delete the ConfigMap, but it does not remove the reference to the ConfigMap in the (spec.user_config.configmap field) from the app.

    Do make sure you also update the app and remove the reference.

    The preferred order is to first remove the reference to the configmap by
    updating the app, and only then delete the configmap using this endpoint.

    * @method
    * @name GiantSwarm#deleteClusterAppConfigV5
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
    */
    deleteClusterAppConfigV5(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    modifyClusterAppConfigV5URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {};
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows you to modify the values configmap for a specific app.
    It's only possible to modify app configs that have been named according to the convention of
    {app-name}-user-values and stored in the cluster ID namespace.

    The full values key of the configmap will be replaced by the JSON body
    of your request.

    ### Example PATCH request
    ```json
      {
        "agent": {
          "key": "a-new-key-here",
        }
      }
    ```

    If the configmap contained content like:

    ```json
      {
        "agent": {
          "key": "an-old-key-here",
          "admin": true,
        },
        "server": {
          "url": "giantswarm.io",
        }
      }
    ```

    Then the "server" and "admin" keys will be removed.

    * @method
    * @name GiantSwarm#modifyClusterAppConfigV5
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
         * @param {} body - This is the documentation for the Giant Swarm API.

    For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).

    The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.

    Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.

    Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.

    Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.

    ## Source

    The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).

    */
    modifyClusterAppConfigV5(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {};
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getClusterAppSecretV5URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows you to fetch the Secret associated
    with an app.

    * @method
    * @name GiantSwarm#getClusterAppSecretV5
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
    */
    getClusterAppSecretV5(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    createClusterAppSecretV5URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {};
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows you to create a Secret for a specific app. The app does
    not have to exist before hand.

    If the app does exist, this endpoint will ensure that the App CR gets it's
    `spec.user_config.secret` field set correctly.

    However, if the app exists and the `spec.user_config.secret` is already set to something,
    then this request will fail. You will in that case most likely want to
    update the Secret using the `PATCH /v5/clusters/{cluster_id}/apps/{app_name}/secret/`
    endpoint.

    ### Example POST request
    ```json
      {
        "secret": "value"
      }
    ```

    * @method
    * @name GiantSwarm#createClusterAppSecretV5
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
         * @param {} body - This is the documentation for the Giant Swarm API.

    For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).

    The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.

    Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.

    Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.

    Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.

    ## Source

    The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).

    */
    createClusterAppSecretV5(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {};
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    deleteClusterAppSecretV5URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows a user to delete an app's Secret if it has been named according to the convention of {app-name}-user-secrets and
    stored in the cluster ID namespace.

    Calling this endpoint will delete the Secret, and also remove the reference to the Secret in the (spec.user_config.secret field) from the app.

    * @method
    * @name GiantSwarm#deleteClusterAppSecretV5
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
    */
    deleteClusterAppSecretV5(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    modifyClusterAppSecretV5URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {};
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows you to modify the Secret for a specific app.
    It's only possible to modify Secrets that have been named according to the convention of
    {app-name}-user-secrets and stored in the cluster ID namespace.

    The full values key of the Secret will be replaced by the JSON body
    of your request.

    ### Example PATCH request
    ```json
      {
        "secret": "new-value"
      }
    ```

    If the Secret contained content like:

    ```json
      {
        "secret": "old-value",
        "secret2": "another-old-value"
      }
    ```

    Then the "secret2" will be removed, and "secret" will be set to "new-value"

    * @method
    * @name GiantSwarm#modifyClusterAppSecretV5
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} appName - App Name
         * @param {} body - This is the documentation for the Giant Swarm API.

    For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).

    The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.

    Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.

    Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.

    Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.

    ## Source

    The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).

    */
    modifyClusterAppSecretV5(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'appName': string;
        'body'?: {};
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getOrganizationsURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows to fetch a list of organizations the user is a
    member of. In the case of an admin user, the result includes all
    existing organizations.

    * @method
    * @name GiantSwarm#getOrganizations
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

    */
    getOrganizations(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getOrganizationURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'organizationId': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation fetches organization details.

    * @method
    * @name GiantSwarm#getOrganization
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} organizationId - An ID for the organization.
    This ID must be unique and match this regular
    expression: ^[a-z0-9_]{4,30}$

    */
    getOrganization(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'organizationId': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    addOrganizationURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'organizationId': string;
        'body': {
            'id'?: string;
            'members'?: Array<{
                'email'?: string;
            }> | {
                'email'?: string;
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows a user to create an organization.

    * @method
    * @name GiantSwarm#addOrganization
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} organizationId - An ID for the organization.
    This ID must be unique and match this regular
    expression: ^[a-z0-9_]{4,30}$

         * @param {} body - This is the documentation for the Giant Swarm API.

    For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).

    The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.

    Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.

    Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.

    Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.

    ## Source

    The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).

    */
    addOrganization(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'organizationId': string;
        'body': {
            'id'?: string;
            'members'?: Array<{
                'email'?: string;
            }> | {
                'email'?: string;
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    modifyOrganizationURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'organizationId': string;
        'body': {
            'members'?: Array<{
                'email'?: string;
            }> | {
                'email'?: string;
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows you to modify an existing organization. You must be
    a member of the organization or an admin in order to use this endpoint.

    The following attributes can be modified:

    - `members`: By modifying the array of members, members can be added to or removed from the organization

    The request body must conform with the [JSON Patch Merge (RFC 7386)](https://tools.ietf.org/html/rfc7386) standard.
    Requests have to be sent with the `Content-Type: application/merge-patch+json` header.

    The full request must be valid before it will be executed, currently this
    means every member you attempt to add to the organization must actually
    exist in the system. If any member you attempt to add is invalid, the entire
    patch operation will fail, no members will be added or removed, and an error message
    will explain which members in your request are invalid.

    * @method
    * @name GiantSwarm#modifyOrganization
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} organizationId - An ID for the organization.
    This ID must be unique and match this regular
    expression: ^[a-z0-9_]{4,30}$

         * @param {} body - This is the documentation for the Giant Swarm API.

    For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).

    The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.

    Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.

    Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.

    Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.

    ## Source

    The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).

    */
    modifyOrganization(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'organizationId': string;
        'body': {
            'members'?: Array<{
                'email'?: string;
            }> | {
                'email'?: string;
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    deleteOrganizationURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'organizationId': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This operation allows a user to delete an organization that they are a member of.
    Admin users can delete any organization.

    * @method
    * @name GiantSwarm#deleteOrganization
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} organizationId - An ID for the organization.
    This ID must be unique and match this regular
    expression: ^[a-z0-9_]{4,30}$

    */
    deleteOrganization(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'organizationId': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getCredentialsURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'organizationId': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Returns credentials for an organization, if available.
    For more information on credentials,
    see [Set credentials](#operation/addCredentials).

    Here is another paragraph.

    ### Example response body for AWS

    ```json
    [
      {
        "id": "a1b2c3",
        "provider": "aws",
        "aws": {
          "roles": {
            "admin": "arn:aws:iam::123456789012:role/GiantSwarmAdmin",
            "awsoperator": "arn:aws:iam::123456789012:role/GiantSwarmAWSOperator"
          }
        }
      }
    ]
    ```

    ### Example response body for Azure

    ```json
    [
      {
        "id": "a1b2c3",
        "provider": "azure",
        "azure": {
          "credential": {
            "client_id": "c93bf55e-5bf7-4966-ad2b-e6f6e7721d50",
            "subscription_id": "b388b7c7-4479-4040-9ac5-1e13edd6b1cd",
            "tenant_id": "3dd2e94a-92ba-434c-99be-32bb65864a99"
          }
        }
      }
    ]
    ```

    * @method
    * @name GiantSwarm#getCredentials
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} organizationId - An ID for the organization.
    This ID must be unique and match this regular
    expression: ^[a-z0-9_]{4,30}$

    */
    getCredentials(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'organizationId': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    addCredentialsURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'organizationId': string;
        'body': {
            'provider': string;
            'aws'?: {
                'roles': {
                    'admin': string;
                    'awsoperator': string;
                };
            };
            'azure'?: {
                'credential': {
                    'client_id': string;
                    'secret_key': string;
                    'subscription_id': string;
                    'tenant_id': string;
                };
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Add a set of credentials to the organization allowing the creation and
    operation of clusters within a cloud provider account/subscription.

    The actual type of these credentials depends on the cloud provider the
    installation is running on. AWS and Azure are currently supported.

    Credentials in an organization are immutable. Each organization can only
    have one set of credentials.

    Once credentials have been set for an organization, they are used for
    every new cluster that will be created for the organization.

    ### Example request body for AWS

    ```json
    {
      "provider": "aws",
      "aws": {
        "roles": {
          "admin": "arn:aws:iam::123456789012:role/GiantSwarmAdmin",
          "awsoperator": "arn:aws:iam::123456789012:role/GiantSwarmAWSOperator"
        }
      }
    }
    ```

    ### Example request body for Azure

    ```json
    {
      "provider": "azure",
      "azure": {
        "credential": {
          "client_id": "c93bf55e-5bf7-4966-ad2b-e6f6e7721d50",
          "secret_key": "720e38f7-3af4-463c-9313-abcdf2ead612",
          "subscription_id": "b388b7c7-4479-4040-9ac5-1e13edd6b1cd",
          "tenant_id": "3dd2e94a-92ba-434c-99be-32bb65864a99"
        }
      }
    }
    ```

    * @method
    * @name GiantSwarm#addCredentials
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} organizationId - An ID for the organization.
    This ID must be unique and match this regular
    expression: ^[a-z0-9_]{4,30}$

         * @param {} body - This is the documentation for the Giant Swarm API.

    For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).

    The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.

    Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.

    Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.

    Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.

    ## Source

    The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).

    */
    addCredentials(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'organizationId': string;
        'body': {
            'provider': string;
            'aws'?: {
                'roles': {
                    'admin': string;
                    'awsoperator': string;
                };
            };
            'azure'?: {
                'credential': {
                    'client_id': string;
                    'secret_key': string;
                    'subscription_id': string;
                    'tenant_id': string;
                };
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getCredentialURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'organizationId': string;
        'credentialId': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Returns details for a particular set of credentials, identified by its
    ID. The returned data does not contain any secrets (i. e.
    passphrase, secret key). For more information on credentials, see
    [Set credentials](#operation/addCredentials).

    ### Example response body for AWS

    ```json
    {
      "id": "a1b2c3",
      "provider": "aws",
      "aws": {
        "roles": {
          "admin": "arn:aws:iam::123456789012:role/GiantSwarmAdmin",
          "awsoperator": "arn:aws:iam::123456789012:role/GiantSwarmAWSOperator"
        }
      }
    }
    ```

    ### Example response body for Azure

    ```json
    {
      "id": "a1b2c3",
      "provider": "azure",
      "azure": {
        "credential": {
          "client_id": "c93bf55e-5bf7-4966-ad2b-e6f6e7721d50",
          "subscription_id": "b388b7c7-4479-4040-9ac5-1e13edd6b1cd",
          "tenant_id": "3dd2e94a-92ba-434c-99be-32bb65864a99"
        }
      }
    }
    ```

    * @method
    * @name GiantSwarm#getCredential
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} organizationId - An ID for the organization.
    This ID must be unique and match this regular
    expression: ^[a-z0-9_]{4,30}$

         * @param {string} credentialId - Unique ID of a credential set
    */
    getCredential(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'organizationId': string;
        'credentialId': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getReleasesURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Lists all releases available for new clusters or for upgrading existing
    clusters. Might also serve as an archive to obtain details on older
    releases.

    * @method
    * @name GiantSwarm#getReleases
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

    */
    getReleases(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    addClusterV5URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'body': {
            'owner': string;
            'name'?: string;
            'release_version'?: string;
            'master'?: {
                'availability_zone'?: string;
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Allows to create clusters supporting node pools on AWS installations.

    The cluster will not have any worker nodes until you create a first node pool.

    See
    [node pools](#tag/nodepools) and
    [create node pool](#operation/addNodePool) for details.

    * @method
    * @name GiantSwarm#addClusterV5
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {} body - New cluster definition
    */
    addClusterV5(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'body': {
            'owner': string;
            'name'?: string;
            'release_version'?: string;
            'master'?: {
                'availability_zone'?: string;
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getClusterV5URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Allows to retrieve details of a cluster supporting node pools on AWS installations.

    * @method
    * @name GiantSwarm#getClusterV5
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
    */
    getClusterV5(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    modifyClusterV5URL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'body': {
            'name'?: string;
            'release_version'?: string;
        };
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Allows to change properties of a cluster supporting node pools on AWS installations.

    The following attributes allow to be modified:

    - `name`
    - `release_version`

    * @method
    * @name GiantSwarm#modifyClusterV5
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {} body - Merge-patch body
    */
    modifyClusterV5(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'body': {
            'name'?: string;
            'release_version'?: string;
        };
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getNodePoolsURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Returns a list of node pools from a given cluster.

    * @method
    * @name GiantSwarm#getNodePools
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
    */
    getNodePools(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    addNodePoolURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'body': {
            'name'?: string;
            'availability_zones'?: {
                'number'?: number;
                'zones'?: Array<string> | string;
            };
            'scaling'?: {
                'min'?: number;
                'max'?: number;
            };
            'node_spec'?: {
                'aws'?: {
                    'instance_type'?: string;
                };
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This allows to add a node pool to a cluster.

    Some, but not all, node pool configuration can be changed after
    creation. The following settings will have a permanent effect:

    - `availability_zones`
    - `node_spec.aws.instance_type`

    * @method
    * @name GiantSwarm#addNodePool
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {} body - This is the documentation for the Giant Swarm API.

    For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).

    The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.

    Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.

    Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.

    Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.

    ## Source

    The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).

    */
    addNodePool(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'body': {
            'name'?: string;
            'availability_zones'?: {
                'number'?: number;
                'zones'?: Array<string> | string;
            };
            'scaling'?: {
                'min'?: number;
                'max'?: number;
            };
            'node_spec'?: {
                'aws'?: {
                    'instance_type'?: string;
                };
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    getNodePoolURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'nodepoolId': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Returns all available details on a specific node pool.

    * @method
    * @name GiantSwarm#getNodePool
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} nodepoolId - Node Pool ID
    */
    getNodePool(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'nodepoolId': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    modifyNodePoolURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'nodepoolId': string;
        'body': {
            'name'?: string;
            'scaling'?: {
                'min'?: number;
                'max'?: number;
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Allows to rename a node pool or change its scaling settings.

    * @method
    * @name GiantSwarm#modifyNodePool
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} nodepoolId - Node Pool ID
         * @param {} body - Merge-patch body
    */
    modifyNodePool(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'nodepoolId': string;
        'body': {
            'name'?: string;
            'scaling'?: {
                'min'?: number;
                'max'?: number;
            };
        };
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    deleteNodePoolURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'nodepoolId': string;
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * Triggers the deletion of a node pool.

    Nodes in the pool will first be cordoned and drained. Note that it is
    your responsibililty to make sure that workloads using the node pool can
    be scheduled elsewhere. We recommend to double-check the available
    capacity of remaining node pools, as well as any node selectors and
    taints. Also you can do the draining yourself before issuing the
    delete request, to observe the outcome. Use

    ```
    kubectl drain nodes -l giantswarm.io/machine-deployment=<nodepool_id> ...
    ```

    * @method
    * @name GiantSwarm#deleteNodePool
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {string} clusterId - Cluster ID
         * @param {string} nodepoolId - Node Pool ID
    */
    deleteNodePool(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'clusterId': string;
        'nodepoolId': string;
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
    addExceptionNotificationURL(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'body': {};
        $queryParameters?: any;
        $domain?: string;
    }): string;
    /**
    * This endpoint is used to notify Giant Swarm that an error has occured in one of our clients (like our Web UI or gsctl). It is not intended to be called manually, our clients are configured to report errors when they occur.

    Find us in your Slack support channel if you want to contact us about any immediate issues.

    * @method
    * @name GiantSwarm#addExceptionNotification
         * @param {string} xRequestId - A randomly generated key that can be used to track a request throughout
    services of Giant Swarm.

         * @param {string} xGiantSwarmActivity - Name of an activity to track, like "list-clusters". This allows to
    analyze several API requests sent in context and gives an idea on
    the purpose.

         * @param {string} xGiantSwarmCmdLine - If activity has been issued by a CLI, this header can contain the
    command line

         * @param {} body - This is the documentation for the Giant Swarm API.

    For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).

    The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you access resources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.

    Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.

    Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.

    Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.

    ## Source

    The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec).

    */
    addExceptionNotification(parameters: {
        'xRequestId'?: string;
        'xGiantSwarmActivity'?: string;
        'xGiantSwarmCmdLine'?: string;
        'body': {};
        $queryParameters?: any;
        $domain?: string;
    }): Promise<request.Response>;
}
export {};
