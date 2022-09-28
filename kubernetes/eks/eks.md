#  Kubernetes on AWS(Amazon EKS)

* Introduction : 
    > **EKS (Elastic Kubernetes Service)**  is Amazon Managed Kubernetes Cluster. That means :
    > * AWS manages master nodes 
    > * Install all the applications and tools necessary ( Ex: Kubernetes controll plane process, Container Runtime)
    > * Does Autoscaling
    > * Does Backups 

* Cluster Creation Process
    1. **Method 1: Manual Setup**
        * Account Setup 
          * Create Account 
          * Create **VPC**
          * Create **IAM Role** with required **Security Groups** ( AWS user with required permissions list)
        * Create Control Plane ( Can be done from **Aws Console** or **Aws CLI**)
          * Details required : 
            * Cluster Name
            * Kubernetes version
            * Region for cluster
            * VPC for cluster
            * security settings
        * Create Worker Nodes and connect to cluster
          * Details Required
            * Create a NodeGroup 
            * Cluster name to add nodes
            * Define Security group, instance type, and resources required
            * Min Nodes
            * Max Nodes
        * Install and Setup Kubernetes Client (kubectl)
    
    1. **Method 2: Use eksctl**
        * Description
            > eksctl is a command line utiliy create by **Weaveworks** and supported by large community
        * Installation
          * Windows
            > ``` shell
            > choco install eksctl 
            > ```
          * MacOS
              >  ``` shell
              > brew tap weaveworks/tap
              > brew install weaveworks/tap/eksctl
              > ```
        * Command:
          * Syntax: 
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
              > ```  eksctl create  cluster \
              > --name kube-demo-cluster \
              > --region us-east-1a \
              > --nodegroup-name kube-demo-nodegroup \
              > --node-type t2.micro \
              > --nodes 2 \
              > --min-nodes 2 \
              > --max-nodes 3 \
              > --managed --asg-access
              > ```



## References: 
  * Videos
    * [Create Kubernetes cluster on Amazon EKS](https://www.youtube.com/watch?v=p6xDCz00TxU&ab_channel=TechWorldwithNana)
  * Documentation
    * kubectl installation :
      * Amazon: [Kubectl Installation](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html)
      * Official: [Kubectl Installation](https://kubernetes.io/docs/tasks/tools/#kubectl)
    * eksctl Installation
      * Official : [Installation](https://eksctl.io/introduction/#installation)
