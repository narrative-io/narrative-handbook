# System Access Control

::alert{type="info"}
This document describes the processes that support the following company policies:
- :PolicyLinks{policy-name="System Access Control Policy" policy-slug="system-access-control-policy" :drata-policy-id="18"}
::

## System Access Change 

Performed by Security Officer


### Account Provisioning

1. Initiate the access request by creating a ticket in [:icon{name="openmoji:locked"} Shortcut](https://app.shortcut.com/) using the [:icon{name="openmoji:locked"} System Access Control - Account Provisioning Story Template](https://app.shortcut.com/narrative-security/stories/new?template_id=642fe706-a9fd-4e4b-9340-712b8e82703f):
   - Assign the [:icon{name="openmoji:locked"} System Access Control label](https://app.shortcut.com/narrative-security/label/22180) to it 
2. Perform the account provisioning
   - Verify user identity prior to granting access/additional permissions
   - Fill the [required information](#account-provisioning-required-info) in the ticket
   - Grant permissions to the [systems that are relevant](#managed-systems) to the user
   - Inform user that MFA should be set-up as soon as possible on all accounts (In particular: Google, AWS, Github)
   - Update account status/info/mappings in Drata
     
3. Complete the ticket
   - If the request is rejected, it goes back for further review and documentation.
   - If the review is approved, the request is marked as “Done”, and any pertinent notes are added.
  
### Account Provisioning Required Info
Information that must be provided in the ticket:

| Information                                                                                         | Description                      |
| --------------------------------------------------------------------------------------------------- | -------------------------------- |
| Name                                                                                                | ???                              |
| Narrative Email                                                                                     | ???                              |
| How user identity has been verified                                                                 | By Phone/ By Videocall/In Person |
| Role / Job Title / Responsibilities                                                                 | ???                              |
| Additional access required outside of the minimum necessary to perform job functions with rationale | ??                               |


### Account Deprovisioning
1. Initiate the access request by creating a ticket in [:icon{name="openmoji:locked"} Shortcut](https://app.shortcut.com/) using the [:icon{name="openmoji:locked"} System Access Control - Account Deprovisioning Story Template](https://app.shortcut.com/narrative-security/stories/new?template_id=642ff08f-fff2-4db8-a425-b9c1266c5022):
  - Assign the [:icon{name="openmoji:locked"} System Access Control label](https://app.shortcut.com/narrative-security/label/22180) to it 
2. Perform the account deprovisioning
   - Fill the [required information](#account-provisioning-required-info) in the ticket
   - Cut access from [all systems](#managed-systems)
   - Update account status/info/mappings in Drata
3. Complete the ticket
  - If the request is rejected, it goes back for further review and documentation.
  - If the review is approved, the request is marked as “Done”, and any pertinent notes are added.

#### Account Deprovisioning Required Info

Information that must be provided in the ticket:

| Information     | Description |
| --------------- | ----------- |
| Name            | ???         |
| Narrative Email | ???         |


### Access Change

Additional Permissions, MFA Reset, or Password Reset Procedure:

1. Initiate the access request by creating a ticket in [:icon{name="openmoji:locked"} Shortcut](https://app.shortcut.com/) using the [:icon{name="openmoji:locked"} System Access Control - Access Change Story Template](https://app.shortcut.com/narrative-security/stories/new?template_id=642acd0f-9402-4b7b-b327-0ddcac45f4b4):
  - Assign the [:icon{name="openmoji:locked"} System Access Control label](https://app.shortcut.com/narrative-security/label/22180) to it 
2. Perform the access change
   - Very user identity prior to granting access to new accounts for Onboarding and Password Reset requests
   - Validate that requested permissions are reasonable
   - Perform requested changes
   - Update account status/info in Drata if needed (e.g. merge access in Github)
3. Complete the ticket
  - If the request is rejected, it goes back for further review and documentation.
  - If the review is approved, the request is marked as “Done”, and any pertinent notes are added.

#### Access Change Required Info
Information that must be provided in the ticket:

| Information                                                                                         | Description                                               |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Name                                                                                                | ???                                                       |
| Narrative Email                                                                                     | ???                                                       |
| System Access Control Request Type                                                                  | Additional Permissions Requested/Password Reset/MFA Reset |
| How user identity has been verified                                                                 | By Phone/ By Videocall/In Person                          |
| Role / Job Title / Responsibilities                                                                 | ???                                                       |
| Additional access required outside of the minimum necessary to perform job functions with rationale | ??                                                        |


## System Access Review 

Performed by Security Officer

- Once a year, initiate the review of user access by creating a ticket in [:icon{name="openmoji:locked"} Shortcut](https://app.shortcut.com/)
  - that is assigned to the [:icon{name="openmoji:locked"} System Access Control label](https://app.shortcut.com/narrative-security/label/22180) 
  - from the [:icon{name="openmoji:locked"} System Access Control - Access Review Story Template](https://app.shortcut.com/narrative-security/stories/new?template_id=642acecb-21d7-479d-a60a-547dd7107cea)
- Review levels of access for each workforce member
- Summarize the result of the review in the ticket using the [System Access Review Summary table](#system-access-review-summary)
- Write down any additional remarks or comments in the ticket
- If user access is found during review that is not in line with the least privilege principle, modify user access and notify the user of access changes
- Upload evidence to Drata
- Mark the ticket as “Done”, adding any pertinent notes required.

Relevant information:
- [:icon{name="openmoji:locked"} Drata's personnel list](https://app.drata.com/governance/personnel?limit=50) is the up to date resource to use to determine the list of current employees.
- The [:icon{name="openmoji:locked"} Account Provisioning Notion page](https://www.notion.so/narrativeio/Account-Provisioning-786cc0f982fd4a32b8da50815e32460e#f09e5058b5d14c92bb099ccac1099bd5) lists who has admin access to each system to perform the review and corrective actions.

### System Access Review Summary

The review can be summarized using the following table:

| Service                       | Review Status | Corrective Actions Performed |
| ----------------------------- | ------------- | ---------------------------- |
| Google Workspace              |               |                              |
| Github                        |               |                              |
| Notion                        |               |                              |
| Slack                         |               |                              |
| AWS                           |               |                              |
| Shortcut (narrative-security) |               |                              |
| Shortcut (narrative-io)       |               |                              |
| Cron                          |               |                              |
| Datadog                       |               |                              |
| Splunk On-call                |               |                              |
| Stripe                        |               |                              |
| Drata                         |               |                              |
| HubSpot                       |               |                              |

## Managed Systems

This section contains the list of systems relevant to the access change and system access review processes.

See [:icon{name="openmoji:locked"} Account Provisioning (Notion)](https://www.notion.so/narrativeio/Account-Provisioning-786cc0f982fd4a32b8da50815e32460e#87ad528e9281417fb8bc99f231ff9fd5) for help on setting up each of the below:
- [ ]  Google Workspace
- [ ]  Github
- [ ]  Notion
- [ ]  Slack
- [ ]  AWS
- [ ]  Shortcut
- [ ]  Cron
- [ ]  Datadog
- [ ]  Splunk On-call
- [ ]  Stripe
- [ ]  Drata
    - [:icon{name="openmoji:locked"} Personnel](https://app.drata.com/governance/personnel)
    - [:icon{name="openmoji:locked"} Github](https://app.drata.com/manage-accounts/version-control?clientType=GITHUB)
    - [:icon{name="openmoji:locked"} AWS](https://app.drata.com/manage-accounts/infrastructure?clientType=AWS)
- [ ]  HubSpot

