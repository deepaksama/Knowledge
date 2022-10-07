<style>
    :root {
      --primary: #07575B;
      --secondary: #66A5AD;
      --tertiary: #C4DFE6;
      --lineColor: #003B46;
      
      --primary: #355438;
      --secondary: #416044;
      --tertiary: #4c7450;
      --lineColor: #68946c;
      

    }
    primary { color: #07575B }
    secondary { color: #66A5AD }
    tertiary { color: #C4DFE6 }
    lineColor { color: #003B46 }
    /*
    primary { color: #355438 }
    secondary { color: #416044 }
    tertiary { color: #4c7450 }
    lineColor { color: #68946c}
    */

    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Fasthand&family=Handlee&display=swap');
    
    blockquote {
      padding: 60px 80px 40px;
      position: relative;
        font-family: "Utopia-italic";
        font-size: 35px;
        font-weight: 700px;
        text-align: center;
    }
    
    blockquote p {
      display: inline;
    }

    heading1 {
      color: #355438;
      color:  var(--primary);;
      font-size:32px;
      font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;

    }
    heading2 {
      color: var(--secondary);
      font-size:28px;
      font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    paragraph {
      font-size:16px;
      font-family: source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif;
    }

    quoted {
      font-size:16px;
      font-family: source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif;
      font-family: 'Dancing Script', cursive;
    }

</style>

# <heading1> Kubernetes on AWS(Amazon EKS)

<paragraph>

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
    
    2. **Method 2: Use eksctl**
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



## <heading2> References: 
  * Videos
    * [Create Kubernetes cluster on Amazon EKS](https://www.youtube.com/watch?v=p6xDCz00TxU&ab_channel=TechWorldwithNana)
  * Documentation
    * kubectl installation :
      * Amazon: [Kubectl Installation](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html)
      * Official: [Kubectl Installation](https://kubernetes.io/docs/tasks/tools/#kubectl)
    * eksctl Installation
      * Official : [Installation](https://eksctl.io/introduction/#installation)

</paragraph>