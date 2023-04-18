# SOC 2 Evidence Gathering

This document provides guidance on how to gather the evidence needed for SOC 2 certification purposes. We will cover the types of evidence that our auditors typically request for the controls that are not monitored by [:icon{name="openmoji:locked"} Drata](https://app.drata.com), as well as best practices for collecting and organizing the evidence. 

## Evidence Repository

We keep the evidence we gather in the following places:
- In the [:icon{name="openmoji:locked"} Evidence Repository](https://github.com/narrative-io/narrative-playbooks/tree/main/soc2-drata) under `<control-id>/YYYY-MM-DD` to keep a record of the evidence we previously gathered
- We upload it in Drata under the appropriate control to make it available for auditors

## DCF-7: Separate Testing and Production Environments

[:icon{name="openmoji:locked"} DCF-7: Separate Testing and Production Environments](https://app.drata.com/compliance/controls/details/id/127)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Screenshots from test and production environments for the application

How to gather the evidence:
- Screenshot [app-dev.narrative.io](https://app-dev.narrative.io)
- Screenshot [:icon{name="openmoji:locked"} app.narrative.io](https://app.narrative.io)

## DCF-11: Annual Access Control Review

[:icon{name="openmoji:locked"} DCF-11: Annual Access Control Review](https://app.drata.com/compliance/controls/details/id/89)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Tickets documenting the access control lists that were reviewed for in scope cloud environments, SaaS applications, infrastructure as code tools, and security protection tools (as applicable)
2. Tickets should be marked as completed/closed and the reviewer should provide comments on the results of the reviews.

How to gather the evidence:
- [Follow the System Access Review Process](/playbooks/system-access-control#system-access-review)
- Print/sreenshot the [resulting ticket](/shortcut#system-access-control). [Example access review ticket from April 2023](https://app.shortcut.com/narrative-security/story/22633/system-access-control-access-review-2023-04).

## DCF-12: Hardening Standards in Place

[:icon{name="openmoji:locked"} DCF-12: Hardening Standards in Place](https://app.drata.com/compliance/controls/details/id/92)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Evidence from infrastructure as code tools showing configurations that would be implemented when new infrastructure is deployed.
2. Any type of document that formally documents the configurations that should be implemented for newly deployed infrastructure.

How to gather the evidence:
- Screenshot the [:icon{name="openmoji:locked"} marketplace ASG config](https://github.com/narrative-io/marketplace/blob/main/marketplace-terraform/modules/marketplace-webapp/asg.tf) showing that no SSH key is configured
- Screenshot the [:icon{name="openmoji:locked"} open-api IAM S3 policy](https://github.com/narrative-io/open-api/blob/main/infra/modules/iam/s3.tf) showing that app-specific access controls are in place
- Screenshot the [:icon{name="openmoji:locked"} open-api config](https://github.com/narrative-io/open-api/blob/main/config/src/main/scala/io/narrative/api/config/config.scala) showing that SSM is used for retrieving secrets
- Screenshot the [:icon{name="openmoji:locked"}  open-api load_balancer module instantiation](https://github.com/narrative-io/open-api/blob/ce584651ef9f5a79d2b561f3f5de37f9fc503085/infra/prod/main.tf#L94) showing that different VPCs are used based on the environment (using main-vpc-lookup)
- Print the [System Hardening Guide](/playbooks/system-hardening) that formally documents the configurations that should be implemented for newly deployed infrastructure

## DCF-22: Network segmentation in place
[:icon{name="openmoji:locked"} DCF-22: Network segmentation in place](https://app.drata.com/compliance/controls/details/id/18)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Formal, documented network/architecture diagram evidencing network segmentation of your cloud environments.

How to gather the evidence:
- [:icon{name="openmoji:locked"}  Network Segmentation diagram](https://github.com/narrative-io/narrative-network-infra/blob/main/network-diagrams/network_segmentation.png)

## DCF-35: Security Team Communicates in a Timely Manner

[:icon{name="openmoji:locked"} DCF-35: Security Team Communicates in a Timely Manner](https://app.drata.com/compliance/controls/details/id/76)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Screenshots from communication tools (Slack, PagerDuty) showing the process for security events to be communicated to appropriate personnel.

How to gather the evidence:
- Screenshot the [:icon{name="openmoji:locked"} #auto-security Slack channel](https://narrative-io.slack.com/archives/C03KEF22C86)


## DCF-43: Termination/Offboarding Checklist
[:icon{name="openmoji:locked"} DCF-43: Termination/Offboarding Checklist](https://app.drata.com/compliance/controls/details/id/34)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Formal documented termination checklist/help desk ticket for a recent terminated employee.

How to gather the evidence:
- Print the [Offboarding procedure](/playbooks/hiring#offboarding)
- Print the [Account Deprovisioning procedure](/playbooks/system-access-control#account-deprovisioning)

## DCF-56: Vendor Agreements Maintained (TODO: Seth)
[:icon{name="openmoji:locked"} DCF-56: Vendor Agreements Maintained](https://app.drata.com/compliance/controls/details/id/80)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Executed Agreement/contract between the entity and key vendors.

How to gather the evidence:
- TODO: Seth

## DCF-57: Vendor Compliance Reports (TODO: Seth)
[:icon{name="openmoji:locked"} DCF-57: Vendor Compliance Reports](https://app.drata.com/compliance/controls/details/id/81)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Screenshots from the vendor directory showing that vendors are categorized based on impact /risk.
2. Review documents showing that vendors' SOC2 reports were reviewed (Drata can provide a review template for this).

How to gather the evidence:
- TODO: Seth

## DCF-58: Authentication Protocol
[:icon{name="openmoji:locked"} DCF-58: Authentication Protocol](https://app.drata.com/compliance/controls/details/id/20)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. If SSO is an option, screenshots of a user logging in with SSO.
2. If username and password is an option, screenshots of a user logging in with a username and password.
3. Screenshots of MFA being required for employee users.
4. If customer users have the option to enable MFA, screenshots showing they are provided the option to enable MFA.

How to gather the evidence:
- Screenshot [app.narrative.io](https://app.narrative.io) login screen

## DCF-59: Role-Based Security Implementation
[:icon{name="openmoji:locked"} DCF-59: Role-Based Security Implementation](https://app.drata.com/compliance/controls/details/id/21)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Screenshots from the application showing how users are assigned roles.

How to gather the evidence:
- Screenshot the [:icon{name="openmoji:locked"}  AWS IAM config granting role-based access to developers](https://github.com/narrative-io/narrative-security/blob/main/iam-users/developers.tf)

## DCF-60: Password Storage
[:icon{name="openmoji:locked"} DCF-60: Password Storage](https://app.drata.com/compliance/controls/details/id/96)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. If username and password is required, screenshots from the database showing that password are stored using a salted hash.

How to gather the evidence:
- Execute the following query and screenshot the result
    ```bash
    $ nio-db connect -d marketplace -s dev
    marketplace> select password from users order by random() limit 10;
    ```

## DCF-61: Customer Data Segregation
[:icon{name="openmoji:locked"} DCF-61: Customer Data Segregation](https://app.drata.com/compliance/controls/details/id/22)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Screenshots from the database showing that customers are assigned separate IDs.
2. Screenshots from the application showing that a customer cannot see data of another customer (attempt to show one customer trying to access data of another customer).
How to gather the evidence:
- Execute the following query and screenshot the result
    ```bash
    $ nio-db connect -d marketplace -s dev
    marketplace> select id,name from companies order by id limit 10;
    ```
- Screenshot the [Datasets](https://app.narrative.io/apps/dataset-manager) page for two different companies

## DCF-62: Inactivity and Browser Exit Logout (TODO: Marko)
[:icon{name="openmoji:locked"} DCF-62: Inactivity and Browser Exit Logout](https://app.drata.com/compliance/controls/details/id/105)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Screenshots of users being logged out of the application when browser/tab is closed and being forced to reauthenticate upon next login.
2. Screenshots showing that a user is logged out after pre-defined activity timeout and being forced to reauthenticate upon next login.

How to gather the evidence:
- TODO: Marko

## DCF-63: Accepting The Terms of Service (TODO: Marko)
[:icon{name="openmoji:locked"} DCF-63: Accepting The Terms of Service](https://app.drata.com/compliance/controls/details/id/100)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Screenshots of the new account creation process showing that new users must explicitly or implicitly accept the terms of service.

How to gather the evidence:
- TODO: Marko

## DCF-69: System Access Granted
[:icon{name="openmoji:locked"} DCF-69: System Access Granted](https://app.drata.com/compliance/controls/details/id/25)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1.Formal, documented access request form/help desk ticket for a recent new hire.

How to gather the evidence:
- Follow the [Onboarding procedure](/hiring#onboarding)
- Screenshot/Print the [resulting tickets](http://localhost:3000/conventions/shortcut#hiring)

## DCF-72: Unique SSH
[:icon{name="openmoji:locked"} DCF-72: Unique SSH](https://app.drata.com/compliance/controls/details/id/106)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Screenshots of a user logging into the production systems, showing that they have to use a unique SSH account.
2. Screenshot of the setting from the production servers showing that the "root" account cannot be used to login to production.

How to gather the evidence:
- Screenshot access to a [:icon{name="openmoji:locked"} production machine using SSM](https://github.com/narrative-io/marketplace/blob/main/operations.md#launch-a-shell-on-the-ec2-instances)
- Add additional explanation: 
    > We use AWS SSM instead of SSH to access production machines. Additionally, all machines are hidden behind a VPC and connecting to the VPC is done through a VPN using SSO. https://aws.amazon.com/blogs/mt/vr-beneficios-session-manager/

## DCF-74: Customers Informed of Changes (TODO: Seth)
[:icon{name="openmoji:locked"} DCF-74: Customers Informed of Changes](https://app.drata.com/compliance/controls/details/id/85)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Example emails communicating changes to customers.
2. Screenshots of banners warning customers of downtime prior to system maintenance.

How to gather the evidence:
- TODO: Seth

## DCF-79: Logs Centrally Stored
[:icon{name="openmoji:locked"} DCF-79: Logs Centrally Stored](https://app.drata.com/compliance/controls/details/id/121)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Screenshots from the location where logs of system activity are stored.

How to gather the evidence:
- Screenshot [:icon{name="openmoji:locked"}AWS CloudWatch Log Groups](https://us-east-1.console.aws.amazon.com/cloudwatch/home?region=us-east-1#logsV2:log-groups)


## DCF-80: Log Management System
[:icon{name="openmoji:locked"} DCF-80: Log Management System](https://app.drata.com/compliance/controls/details/id/122)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Screenshots from the location where logs of system activity are stored.

How to gather the evidence:
- Screenshot [:icon{name="openmoji:locked"}AWS CloudWatch Log Groups](https://us-east-1.console.aws.amazon.com/cloudwatch/home?region=us-east-1#logsV2:log-groups)

## DCF-86: Operational Audit
[:icon{name="openmoji:locked"} DCF-86: Operational Audit](https://app.drata.com/compliance/controls/details/id/5)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Screenshots from the systems used to monitor for system availability issues.
2. Screenshots showing how personnel would be alerted of availability issues and who would be alerted.

How to gather the evidence:
- Screenshot [:icon{name="openmoji:locked"}AWS CloudWatch Alarms](https://us-east-1.console.aws.amazon.com/cloudwatch/home?region=us-east-1#alarmsV2:?)
- Screenshot sample alerts sent to the [:icon{name="openmoji:locked"} #auto-techops Slack channel](https://narrative-io.slack.com/archives/C0J3L74CA)
- Screenshot the [:icon{name="openmoji:locked"} #auto-techops Slack channel](https://narrative-io.slack.com/archives/C0J3L74CA) user list


## DCF-92: VPN Required for Production Access
[:icon{name="openmoji:locked"} DCF-92: VPN Required for Production Access](https://app.drata.com/compliance/controls/details/id/27)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. screenshots of a user trying to access production systems without being connected to a VPN and providing access is denied.
2. Screenshots of a user accessing production after connecting to a VPN to show a successful connection.

How to gather the evidence:
- Screenshot access to the marketplace database with and without the VPN connection
    ```bash
    nio-db connect -d marketplace -s prod
    ```

## DCF-105: Employee Non-Disclosure Agreement (NDA) (TODO: Seth)
[:icon{name="openmoji:locked"} DCF-105: Employee Non-Disclosure Agreement (NDA)](https://app.drata.com/compliance/controls/details/id/31)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Example new hire employee agreement, with NDA included.

How to gather the evidence:
- TODO: Seth

## DCF-108: Storage of Sensitive Data on Paper (TODO: Seth)
[:icon{name="openmoji:locked"} DCF-108: Storage of Sensitive Data on Paper](https://app.drata.com/compliance/controls/details/id/37)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Pictures of secure storage bins from office locations.

How to gather the evidence:
- TODO: Seth

## DCF-109: Disposal of Sensitive Data on Hardware
[:icon{name="openmoji:locked"} DCF-109: Disposal of Sensitive Data on Hardware](https://app.drata.com/compliance/controls/details/id/38)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Data Deletion Policy or equivalent policy documenting this policy and procedure.

How to gather the evidence:
- Print [Disposal of Sensitive Data on Hardware](/playbooks/asset-management#disposal-of-sensitive-data-on-hardware): Formal, documented hard disk drive destruction process
- Print [Hiring - Offboarding procedure](/playbooks/hiring#offboarding): Employee termination checklist includes properly destroying hard disks

## DCF-143: Board Oversight Briefings Conducted (TODO: Seth)
[:icon{name="openmoji:locked"} DCF-143: Board Oversight Briefings Conducted](https://app.drata.com/compliance/controls/details/id/52)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Meeting minutes from the Board of Directors meeting showing that the state of cybersecurity and privacy risks were discussed.

How to gather the evidence:
- TODO: Seth

## DCF-144: Board Charter Documented (TODO: Seth)
[:icon{name="openmoji:locked"} DCF-144: Board Charter Documented](https://app.drata.com/compliance/controls/details/id/53)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Copy of Board Charter

How to gather the evidence:
- TODO: Seth

## DCF-145: Board Expertise Developed (TODO: Seth)
[:icon{name="openmoji:locked"} DCF-145: Board Expertise Developed](https://app.drata.com/compliance/controls/details/id/54)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Board of Directors Backgrounds

How to gather the evidence:
- TODO: Seth


## DCF-146: Board Meetings Conducted (TODO: Seth)
[:icon{name="openmoji:locked"} DCF-146: Board Meetings Conducted](https://app.drata.com/compliance/controls/details/id/55)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Board of Directors Bios
2. Meeting minutes from Board meetings

How to gather the evidence:
- TODO: Seth


## DCF-149: Board Meetings Conducted (TODO: Seth)
[:icon{name="openmoji:locked"} DCF-149: Board Meetings Conducted](https://app.drata.com/compliance/controls/details/id/113)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. If removable media devices are issued by the company to employees, provide evidence that removable media devices are encrypted.

How to gather the evidence:
- TODO: Seth

## DCF-152: Virtual Machine OS are Patched Monthly (TODO: Sami)
[:icon{name="openmoji:locked"} DCF-152: Virtual Machine OS are Patched Monthly](https://app.drata.com/compliance/controls/details/id/118)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Evidence from servers or patching systems showing that operating systems were patched monthly.

How to gather the evidence:
- TODO: Sami

## DCF-153: Conduct Control Self-Assessments (TODO: Seth)
[:icon{name="openmoji:locked"} DCF-153: Conduct Control Self-Assessments](https://app.drata.com/compliance/controls/details/id/69)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Screenshots of how Drata is used for continuous monitoring of controls.

How to gather the evidence:
- TODO: Seth

## DCF-154: Annual Incident Response Test (TODO: Seth)
[:icon{name="openmoji:locked"} DCF-154: Annual Incident Response Test](https://app.drata.com/compliance/controls/details/id/125)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Most recently completed incident response tabletop test.

How to gather the evidence:
- TODO: Seth


## DCF-155: Code Changes are Tested

[:icon{name="openmoji:locked"} DCF-155: Code Changes are Tested](https://app.drata.com/compliance/controls/details/id/129)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Screenshots from the ticketing system for a few changes showing that changes were tested.

How to gather the evidence:
- Take a screenshot of [:icon{name="openmoji:locked"} the latest Github Actions CI run](https://github.com/narrative-io/narrative-marketplace-backend/actions/) showing that some tests have run
- If the automated tests end up not being considered enough evidence by the auditor, ask the Product Manager for recent tickets showing that product changes have been tested and undergone bugfixes before being rolled out to production.

### DCF-156: Production Code Released by Appropriate Personnel

[:icon{name="openmoji:locked"}  DCF-156: Production Code Released by Appropriate Personnel](https://app.drata.com/compliance/controls/details/id/130)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Screenshots from the ticketing system for a few changes showing that changes were approved by appropriate personnel.

How to gather the evidence:
- Print the content of the [:icon{name="openmoji:locked"} Product Strategy and Strategic Roadmap](https://www.notion.so/narrativeio/2023-Product-Strategy-and-Strategic-Roadmap-157f164b17ff45fd86fe756ed02f147a) showing the changes that have been approved by management
- Print the content of the [:icon{name="openmoji:locked"} Product Backlog](https://www.notion.so/narrativeio/36d405fa43a64b08b2e8f66153d4eda0?v=d55acd808220443ca11c1c90738762b7) showing the changes that have been approved by management


## DCF-157: Cybersecurity Insurance Maintained (TODO: Seth)
[:icon{name="openmoji:locked"} DCF-157: Cybersecurity Insurance Maintained](https://app.drata.com/compliance/controls/details/id/131)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Cybersecurity insurance certificate.

How to gather the evidence:
- TODO: Seth

## DCF-160: Continuous Control Monitoring (TODO: Seth)
[:icon{name="openmoji:locked"} DCF-160: Continuous Control Monitoring](https://app.drata.com/compliance/controls/details/id/70)

[:icon{name="openmoji:locked"} Drata Example Evidence for Not Monitored Controls Sheet](https://docs.google.com/spreadsheets/d/1dUTb2kRfCNy6Il5BaYMO4Th2MMacFZHtEoXyVvKzmIU/edit?usp=sharing) suggests the following evidence for this control:
1. Screenshots of how Drata is used for continuous monitoring of controls.

How to gather the evidence:
- TODO: Seth