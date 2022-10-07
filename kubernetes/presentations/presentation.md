
<style>
    primary { color: #07575B }
    secondary { color: #66A5AD }
    tertiary { color: #C4DFE6 }
    lineColor { color: #003B46 }
</style>

## <primary> Kubernetes 

### <secondary> Agenda

``` plantuml
@startmindmap Agenda
<style>
mindmapDiagram {
    /'
        1. #FFD3B5, #FFAAA6, #F  F8C94
        2. #727077, #EED8C9 #E99787, #A49592
        3. #07575B, 66A5AD, #C4DFE6, #003B46
    '/
    .primary {
        BackgroundColor #FFD3B5
    }
    .secondary {
        BackgroundColor #FFAAA6
    }
    .tertiary {
        BackgroundColor #FF8C94
    }

    node {
        BackgroundColor #07575B
        RoundCorner: 25
        Padding 7
        LineColor #003B46
        LineThickness 0.6
        Shadowing 10.0
    }
    :depth(0) {
        LineColor #003B46
    }
    :depth(1) {
      BackGroundColor #66A5AD
      LineColor #003B46
    }
    :depth(2) {
      BackGroundColor #C4DFE6
      LineColor #003B46
    }

    boxless {
        FontColor #003B46
    }
}
</style>

+ Kubernetes
++ Introduction 
+++ Container Acrchestrators
+++ Terminology
++++_ Clusters
++++_ Control Plane  
++++_ Nodes

++ Architecture 
+++ Control Plane 
++++_ API Server
++++_ Contoller Managers
++++_ Schedular
++++_ etcd 

+++ Worker Nodes 
++++_ Kubelet
++++_ Kube proxy
++++_ Runtime & CRI Shim

++ Hosted Kubernetes

++ Pricatical Kubernetes 
+++ Available Options
++++_ Docker desktop
++++_ Mini Kube 
++++_ Kubernetes playground
++++_ A cloud guru 

+++ Setup tools
++++_ awscli
++++_ kubectl
++++_ eksctl 

+++ Configure tools
++++_ create cluster
++++_ kubectl configuration

+++ Kubernetes Components
++++_ Pods 
++++_ ReplicaSet 
++++_ Services 
++++_ Deployment 

+++ Hands-On
++++_ kubectl commands

+++ Technical terms
++++_ Desired state 
++++_ Actual State 
++++_ Imperative style
++++_ Declarative style 

+++ Deep dive

@endmindmap
```

### <secondary> Architecture

<img src="./../design/architecture.drawio.svg" width="900px">

### <secondary> Hosted Kubernetes

<img src="./../design/hosted-kubernetes.drawio.svg" width="900px">

### <secondary> Hands-On

#### <secondary> a. Installations
##### awscli
##### eksctl
  * Installation
    * Windows
      > ``` choco install eksctl ```
    * MacOS
        >  ```
        > brew tap weaveworks/tap
        > brew install weaveworks/tap/eksctl
        > ```
  * Verify
    > ``` shell
    > eksctl version
    > ```

##### kubectl
  * Installation
    * Windows
      > ``` shell 
      > choco kubectl
      > ```
    * MasOS
      > ``` shell
      > brew install kubectl
      > ```
  * Verify
    > ``` shell
    > kubectl version --output=json
    > ```

#### <secondary> b. Confugration
##### <secondary> Create Cluster
  * Command:  
    * Syntax: 
      > 
      > ``` shell
      > eksctl create  cluster <OPTIONS>
      > ```
    * OPTIONS
        > ```
        > OPTIONS : 
        >    --name <RESOURCE_NAME>
        >    --region <REGION>
        >    --nodegroup-name <GROUP_NAME>
        >    --node-type <NODE_TYPE>
        >    --nodes <NUMBER_OF_NODES>
        >    --min-nodes <NUMBER_OF_NODES>
        >    --max-nodes <NUMBER_OF_NODES>
        > FLAGS:   
        >    --managed
        >    --asg-access 
        > ```
    * Example:
        > ``` shell 
        > eksctl create  cluster \
        > --name kube-demo-cluster \
        > --region us-east-1a \
        > --nodegroup-name kube-demo-nodegroup \
        > --node-type t2.micro \
        > --nodes 2 \
        > --min-nodes 2 \
        > --max-nodes 3 \
        > --managed --asg-access
        > ```
##### <secondary> _kubectl_ configuration
  * Step 1: Setup Kube config
    * Step a: Check if the .kube folder in the home directory exists and create one if does not exist.
    * Step b: Copy the file [config](https://confluence.ancestry.int/download/attachments/207359792/config?version=1&modificationDate=1662432987000&api=v2) to the .kube folder
    * Step c: Update namespace with OMS stack id in the config file
    * Step d: Verify Configuration
      > ``` 
      > kubectl config get-contexts
      > ```
  * Step 2:  Add user credentials and token to the configuration
    * Step a: Go to the HAL app and run the below command  
      > ``` eks_user_credentials --cluster eks-soxapps --account ancestry-l3-sox ```
    * Step b: Copy the output of the above command to the placeholder at the bottom of the config file.  
      > Note: copy only the name and user part of the output
    * Step c: Repeat the above command for L2 and L1 also
  * Step 3: Set current context
### <secondary> Deep dive

**Declarative**:

> ```
> - 10 copies of XYZ service
> - PQR Image
> - Port 8080
> - "env=prod" label
> ```



**Sample config file** : 
> **File**: _deployment.yml_
> 
> ``` yml
> apiVersion: apps/v1
> kind: Deployment
> metadata:
> name: kube-demo-deployment
> spec:
>   selector:
>     matchLabels:
>     app: kube-demo
> replicas: 3
> template:
>   metadata:
>     labels:
>       app: kube-demo
>     spec:
>       containers:
>         - name: kube-demo-ctnr
>         image: deepaksama26/kube-demo:0.0.4-SNAPSHOT
>         ports:
>           - containerPort: 80
> ```