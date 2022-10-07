
<style>
    :root{
        color-scheme:"one";
        --primary-line-color: #388e3c;
        --primary: #388e3c;
        --secondary: #8bc34a;
        --primary-background-color: #dce775;
        --secondary-background-color: #fff59d;
        --code-background: rgba(242, 242, 242, .5);
        --code-border: rgba(204, 204, 204, 1);
    }

    [color-scheme="one"] {
        --primary: #0f2a08;
        --secondary: #274814;
        --primary-background-color: #4c711f;
        --secondary-background-color: #80a52c;
        --primary-line-color: #c7e538;
        --code-background: #e5f6c6;
    }

    [color-scheme="two"] {
        --primary: #563045;
        --secondary: #763c52;
        --primary-background-color: #a75762;
        --secondary-background-color: #ed7d78;
        --primary-line-color: #ffbe9d;
    }

    [color-scheme="three"] {
        --primary-line-color: #092c1f;
        --primary: #388e3c;
        --secondary: #8bc34a;
        --primary-background-color: #dce775;
        --secondary-background-color: #fff59d;
     }

    * { margin: 0; padding: 0; }

    headerOne {
        color: var(--primary);
    }
    
    headerTwo {
        color: var(--primary);
    }

    quote
    {
        display: block;
        width: 600px;
        padding: 2px;
        /* background-color: var(--primary-background-color); */
        # color: var(--primary);
        # font-style: italic;
        # font-weight: bold;
        font-size: 18px;
        # border: 1px solid var(--secondary);
        # border-left: 5px solid var(--secondary);
        padding-left:40px;
        
    }

    quote:before{
        content:"\201c";
        font-size: 40px;
    }

    .code {
        padding: 10px .25em;
        white-space: pre;
        font-family: Source Code Pro, monospace;
        background-color: var(--code-background) !important;
        border: 1px solid var(--code-border);
        border-radius: 2px;
        margin: 15px 0 15px 0;
    }


</style>

## <headerTwo> Page Header

<quote>
AWS manages master nodes Install all the applications and tools necessary ( Ex: Kubernetes controll plane process, Container Runtime)
</quote>


``` python {.code .numberLines .lineAnchors}

import boto3
from botocore.exceptions import ClientError

def invalidate_key(id, secret):
    iam = boto3.client('iam', aws_access_key_id=id, aws_secret_access_key=secret)

    try:
        iam.update_access_key(
            AccessKeyId=id,
            Status='Inactive'
        )
        print('Access key invalidated')
    except ClientError as e:
        print("Something went wrong...")
        print(e)


if __name__ == "__main__":
    access_key = input("AWS KEY: ")
    access_secret = input("AWS SECRET: ")
    invalidate_key(access_key, access_secret)
```

 