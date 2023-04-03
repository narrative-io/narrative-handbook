# System Access Control

::alert{type="info"}
This document describes the processes that support the following company policies:
- :PolicyLinks{policy-name="System Access Control Policy" policy-slug="system-access-control-policy" :drata-policy-id="18"}
::


## System Access Change 

Performed by Security Officer

### General Procedure: Common Steps

Onboarding, Offboarding, Additional Permissions, MFA Reset, or Password Reset  Procedures:

- Initiate the access request by creating a ticket in [:icon{name="openmoji:locked"} Shortcut](https://app.shortcut.com/) 
  - that is assigned to the [:icon{name="openmoji:locked"} System Access Control label](https://app.shortcut.com/narrative-security/label/22180) 
  - using the [:icon{name="openmoji:locked"} System Access Control - Access Change](https://app.shortcut.com/narrative-security/stories/new?template_id=642acd0f-9402-4b7b-b327-0ddcac45f4b4) Story Template.
- Perform extra steps for the specific request type
- Complete the ticket
  - If the request is rejected, it goes back for further review and documentation.
  - If the review is approved, the request is marked as “Done”, and any pertinent notes are added.

Information that must be provided in the ticket:
- System Access Control Request Type: Onboarding/Offboarding/Additional Permissions Requested/Password Reset
- How user identity has been verified: By Phone/ By Videocall/In Person (Onboarding, Password Reset only) 
- Role / Job Title / Responsibilities: ???
- Additional access required outside of the minimum necessary to perform job functions with rationale: ???

### Onboarding Procedure
- Follow the [:icon{name="openmoji:locked"} Onboarding Plan Template](https://www.notion.so/narrativeio/Onboarding-Plan-Template-21ef9b53174a4becb373313d1483b2a2) checklists and related procedures (onboarding only)
- MFA should be set-up as soon as possible on all accounts (In particular: Google, AWS, Github)
- Update account status/info in Drata:
  - [:icon{name="openmoji:locked"} Personnel](https://app.drata.com/governance/personnel)
  - [:icon{name="openmoji:locked"} Github](https://app.drata.com/manage-accounts/version-control?clientType=GITHUB)
  - [:icon{name="openmoji:locked"} AWS](https://app.drata.com/manage-accounts/infrastructure?clientType=AWS)
  
### Offboarding Procedure
- Terminate all the accounts created during the onboarding process highlighted in the [:icon{name="openmoji:locked"} Onboarding Plan Template](https://www.notion.so/narrativeio/Onboarding-Plan-Template-21ef9b53174a4becb373313d1483b2a2)

## System Access Review 

Performed by Security Officer

- Once a year, in January, initiate the review of user access by creating a ticket in [:icon{name="openmoji:locked"} Shortcut](https://app.shortcut.com/)
  - that is assigned to the [:icon{name="openmoji:locked"} System Access Control label](https://app.shortcut.com/narrative-security/label/22180) 
  - from the [:icon{name="openmoji:locked"} System Access Control - Access Review Story Template](https://app.shortcut.com/narrative-security/stories/new?template_id=642acecb-21d7-479d-a60a-547dd7107cea)
- Review levels of access for each workforce member
- If user access is found during review that is not in line with the least privilege principle, modify user access and notify the user of access changes
- Mark the ticket as “Done”, adding any pertinent notes required.

