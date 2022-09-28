
<style>
r { color: Red }
o { color: Orange }
g { color: Green }
</style>

## Introduction

![architecture](design/architecture.drawio.svg)

Docker containers are awsome .. however as teams create more and more containers to run applications.. its more and more challenging to manage things like
* Controlling storage for them
* Making sure that they get created on right set of machines
* Discovering them on network

 Container archestrators were created to solve this problem.

 #### What does Container archestrators do?
 * They manage machines (Physical or Virtual machines) that create and run containers
 * And create and Manage those containers

There are many exaples of container archestrators, however kubernetes is by far the most popular option

#### Terminology
As a container archestrator Kubernetes manages machines/servers

* AWS calls them EC2
* Azure calls them Virtual machines
* GCP calls them Compute Engines
* Kubernetes call them in very generic terms as Nodes

When we have huge number of machines to manage ... what we do is elect one of them as leader/manager to manage rest of them 
* The leader is called **Mater Node/ Control plane**
* Other nodes are called **Nodes/ Worker Nodes**
* Master node(s) and Worker Nodes together called **Cluster**

## Architecture

#### Control Plane
Control Plane contains 3 components

#### Woker Nodes
Every Worker Nodes runs with 3 major components
* **Kubelet**
  > This is kubernetes agent. Initially it talks to control plane gives the information like CPU, RAM availble to Node, so that work can be scheduled to the Node. And listens to control plane for new tasks that it needs to run and reports back the status. And all this communication happens with **API server** on control plane

* **Container Runtime**
  > We know that the workers nodes are where our applications run.  So we need a container runtime to run our application in containers.  Intially Kubernetes opted Docker as the container runtime. But now it can support any container runtime which is CRI (Container Runtime Interface)

* **Service Proxy/ Kube Proxy**
  > This is the component that makes the kubernetes networking works.  When you run your applications on cluster, we need a network that spans across nodes even though so that all your application can talk to each other. Service poxy makes this magic happen.

#### Hosted Kubernetes
When we see the architecture we have Control Plane and Worker Nodes.  In this application focused world we only care about Nodes that run applications.  We do not want to spend time and effort planing high availability, performanace stuff.  And we do not want them get in the way.


#### Declarative deployments, Desired state vs Actual state
Like container as atomic units of deployment.. In kubernetes an atomic unit of deployment is **Pod**
What that means is we cannot deploy containers directly on kubernetes. In order for a container to run on kubernestes it should be wrapped in a Pod.

Kubernetes like us describe things declaratively.  
>
> ```
> - 10 copies of XYZ service
> - PQR Image
> - Port 8080
> - "env=prod" label
> ```
> 
Technical term for this is _**Desired State**_.  We write this in a config file and we give it to kubernetes and say Hey kubernetes make this happen please.
If you see this sudo we are not specifying any commands to pull images, to start containers, add them to network, expose port number, add some tags/labels.  Compare this with humongus script with all those commands and logic. The technical term for this way of describing is called _**Declarative**_ way.

**Sample config file** 
> **File:** _deployment.yml_
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
>

## Demo

#### Options
* Docker Desktop
* Kubernetes Paygrond
* Mini Kube
* A cloud guru account












Kubernetes can manage clusters of upto 5000 nodes and upto 150,000 pods
It also provides convenient attractions

The smallest unit of compute in kubernetes is called Pod
Kubernetes pod group related containers into a logical unit






## References
* [AWS EKS Kubernetes - Masterclass](https://github.com/stacksimplify/aws-eks-kubernetes-masterclass)
* [Docker Fundamentals](https://github.com/stacksimplify/docker-fundamentals)
* [Kubernetes Fundamentals](https://github.com/stacksimplify/kubernetes-fundamentals)