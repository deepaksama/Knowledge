# Vault
## Secret Management 
### What is Secret?
   * Definition
      > Secrets are set of credentials that can grant you Authentication(AuthN) or Autherization(AuthZ) to a system.  
   * Examples
      > * Usernames and Passwords
      > * DB credentials
      > * API tokens
      > * TLS certs
### What is Secret Management?
   * Centralizing  Secrets
   * Fine-grained Access Control 
   * Audit (Log access to Secrets)
   * Dynamic Credentials (Short lived)
   * Unique Credentials per service
   * Key management and Cryptography (Encrypt as a service)
   * 


## What is Vault?
  Vault is a secret manager.  Vault comes with various component called secret engines and authentication methods allowing you to integrate with external systems.  


## Installation
   * Windows
      > ``` choco install vault ```
   * MacOs
      > ``` 
      > brew tap hashicorp/tap
      > brew install hashicorp/tap/vault
      > ```  
   * Note: Verify install with ``` vault --version ```
Reference:
    Hashicorp Official : [Getting Started](https://learn.hashicorp.com/tutorials/vault/getting-started-intro)
