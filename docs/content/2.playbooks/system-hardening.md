# System Hardening

The purpose of this document is to outline the hardening standards that should be implemented for newly deployed infrastructure. These standards are designed to ensure the security and integrity of our systems and data by mitigating the risks associated with potential security threats.

## System Configuration
All systems should be configured according to the following guidelines:

### Roles and Permissions

Each deployable system/application/job/service should run using a dedicated IAM role with permissions granting it minimal access to the operations and resources it requires.

Examples:
- [:icon{name="openmoji:locked"} open-api](https://github.com/narrative-io/open-api/tree/main/infra/modules/iam)
- [:icon{name="openmoji:locked"} marketplace](https://github.com/narrative-io/marketplace/blob/main/marketplace-terraform/modules/marketplace-webapp/iam.tf)
- [:icon{name="openmoji:locked"} narrative-s3-connector](https://github.com/narrative-io/narrative-s3-connector/tree/main/infra/modules/iam)

### Credentials

All secrets, passwords, and tokens that applications need access to must be stored using [AWS SSM ParamStore](https://us-east-1.console.aws.amazon.com/systems-manager/parameters/) or [AWS Secrets Manager](https://us-east-1.console.aws.amazon.com/secretsmanager/listsecrets)

- AWS Secrets Manager is the preferred option for database passwords and connection details, given that it provides mechanisms to facilitate [RDS credential rotations](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_turn-on-for-db.html).
- SSM can be used for everything else

Examples:
- [:icon{name="openmoji:locked"} open-api](https://github.com/narrative-io/open-api/blob/cc33aa640e4e2857f6635295692b33c242e8a06d/config/src/main/scala/io/narrative/api/config/config.scala#L20)
- [:icon{name="openmoji:locked"} marketplace](https://github.com/narrative-io/marketplace/blob/d5ef8917f012625e3e720c2a647e79ba2215d1d7/marketplace-backend/marketplace-api/src/main/scala/io/narrative/marketplace/api/Config.scala#L147)
- [:icon{name="openmoji:locked"} ingestion-staging](https://github.com/narrative-io/narrative-analytics-warehouse/blob/de5442cd5c0924594674cef4b47011ecaf71f26a/ingestion-staging-lambda/src/main/scala/io/narrative/datashops/ingestion/IngestionStagingLambda.scala#L115)
  

### EC2 Remote Access

When creating EC2 instances, remote access through SSH should be disabled and SSM StartSession should be used instead.

Examples:
- [:icon{name="openmoji:locked"} marketplace: SSH key disabled](https://github.com/narrative-io/marketplace/blob/82ef586a76c292544c12a62354ca8aa5e2a21ef3/marketplace-terraform/modules/marketplace-webapp/asg.tf#L11)
- [:icon{name="openmoji:locked"} marketplace: SSM Managed Instance Core permissions](https://github.com/narrative-io/marketplace/blob/82ef586a76c292544c12a62354ca8aa5e2a21ef3/marketplace-terraform/modules/marketplace-webapp/iam.tf#L124)
- [:icon{name="openmoji:locked"} marketplace: AMI compatible with SSM](https://github.com/narrative-io/marketplace/blob/82ef586a76c292544c12a62354ca8aa5e2a21ef3/marketplace-terraform/modules/marketplace-webapp/asg.tf#L19)


## Network Configuration

Applications and services should be deployed to the VPC that matches the target environment.

[:icon{name="openmoji:locked"} main-vpc-lookup](https://github.com/narrative-io/narrative-network-infra/tree/main/main-vpc-lookup) can be used to lookup the VPCs, subnet ids, and other network characteristics of the target environment.

Examples:
- [:icon{name="openmoji:locked"} open-api](https://github.com/narrative-io/open-api/blob/cd4537022a6ca61e0200399f4d31e9808676b40f/infra/prod/main.tf#L99)

## Programming

Refer to the [System Deployment Security Checklists](/checklists/system-deployment#security).