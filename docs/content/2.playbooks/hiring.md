# Hiring

::alert{type="info"}
This document describes the processes that support the following company policies:
- :PolicyLinks{policy-name="Acceptable Use Policy" policy-slug="acceptable-use-policy" :drata-policy-id="1"}
- :PolicyLinks{policy-name="Information Security Policy" policy-slug="information-security-policy" :drata-policy-id="13"}

Additionally, the following process reviews are relevant to this playbook:
See [:icon{name="openmoji:locked"} 2022 Dev Hiring Process Review](https://www.notion.so/narrativeio/Process-Review-2022-4c7c9857dd324198934221c385bf8595) in Notion.
::

## Storage of HR data

::alert{type="danger"}
TODO: fix Google Drive link
::

::alert{type="info"}
:icon{name="fxemoji:lightbulb"} The reason we use Google Drive (instead of, let's say, Notion) to store HR data is because Google Drive is protected by SSO and, as a result, is a better fit for sensitive data. 
::


All information relevant to the hiring process should be saved in the [:icon{name="openmoji:locked"} HR Google Drive](https://TODO):
- Interview notes
- Reference emails and call notes

## Onboarding
The following activities should be completed within 30 days of the employee being hired:
1. Assign a Hiring Manager to the new hire
2. Execute the employment contract
3. Create a task in Shortcut and track it to completion:
   - Create a story using the [:icon{name="openmoji:locked"} Hiring - Onboarding Shortcut Story Template](https://app.shortcut.com/narrative-security/stories/new?template_id=642efffc-4a07-4655-870c-d8c88d84c411)
   - Assign the [:icon{name="openmoji:locked"} Hiring Label](https://app.shortcut.com/narrative-security/label/22435) to it
   - Perform the tasks described below
   - Check the tasks as they are completed, and mark the story as done when completed

### Before Day 1

| Who | What | When |
| --- | ---- | ---- ||  |
| Hiring Manager | [:icon{name="openmoji:locked"} Provision laptop](https://www.notion.so/Laptop-Provisioning-cf1740c93d0f413b8a90524a6df5da3e)                                 | As soon as a contract is signed and the hire is official to avoid any delays.     |
| Hiring Manager | [:icon{name="openmoji:locked"} Assign a buddy/mentor](https://www.notion.so/6053e8c54686472597a15c1c2363dfdb) to the new hire.                                         | As early as possible so that the mentor has advance notice.                                                 |
| Hiring Manager | [Kick-off the account provisioning process](/playbooks/system-access-control#account-provisioning)                              | A week before the new hire’s start date to avoid any surprises.                     |
| Hiring Manager | [Schedule the security training](#security-training) session.                         | A week before the new hire’s start date so that everyone has advance notice. The security training should be scheduled on the new hire's first day.                                                                    |
| Hiring Manager | [Set up introductory, “coffee chats”](#coffee-chat) with team members | A week before the new hire’s start date so that everyone has advance notice.                                                                    |
| Hiring Manager | [Set up system overview](#system-and-product-overviews) chats.                         | A week before the new hire’s start date so that everyone has advance notice.                                                                     |
| Hiring Manager | [:icon{name="openmoji:locked"} Set up chat to welcome](https://www.notion.so/Onboarding-Plan-Template-21ef9b53174a4becb373313d1483b2a2) the new hire.                  | Before sending the welcome email as this session will be the first thing in the new hire’s calendar.        |
| Hiring Manager | [:icon{name="openmoji:locked"} Send welcome email](https://www.notion.so/c20552c658aa4d469f47e03d78bf2929).                                                            |
| Hiring Manager | Schedule recurring 1:1                                                            |


#### Coffee Chat

Coffee chats are informal 15 minute chats to get a new hire introduced to everybody in the org. There are no rules here, the only topics that should be covered by tenured employees is some basics about roles, how long someone’s been at Narrative, where they’re based out of, etc.

At our size we should connect the new developer with everyone in Engineering and Product. Spread the meetings out over the first week.

- [ ]  Schedule chats with Engineering.
- [ ]  Schedule chats with Product.

#### System and Product Overviews

An opportunity for a new hire to get some face-to-face time with a subject-matter expert about our major systems and products.

The sessions are informal and the agenda is, but usually involves:

- Describing the problem the system solves and how it serves our customers.
- Presenting an overview of the system architecture and how it plugs into the larger platform architecture.
- Giving a brief history of how the system came to be.
- Articulating our vision for the system is: what we want it to be.
- An honest assessment of where we are relative to our vision: what works, what doesn’t.
- Going over relevant repos and spending briefly pointing out where any interesting code might be.

Which exact systems will need to be reviewed depends on the new hire’s role, the timing of each overview depends on what they will be working on in their first few weeks. Ideally the sessions build on top of each other.

An example checklist is below:

- [ ]  Product Overview: a willing member of the Product team will give the new hire a whirlwind tour of the product from the customer’s perspective.
- [ ]  Datasets and Ingestion
- [ ]  Transaction
- [ ]  Narrative API
- [ ]  App Framework
- [ ]  Connectors

#### Welcome Chat
A quick 1:1 between the new hire and the hiring manager **at the start of the new hire’s first day** to get them oriented. This should be the first thing the new hire opens their laptop to do on their first day.

- A quick summary of [:icon{name="openmoji:locked"} Narrative from 10,000 ft](https://www.notion.so/Narrative-from-10-000-ft-68b3327262e847e589406ff6a533dee5) to contextualize our systems in our business. The new hire isn’t expected to absorb everything here, but it should help orient them they have questions over their first week.
- Review the [:icon{name="openmoji:locked"} Org Tree](https://www.notion.so/Org-Tree-a20106bdf71f40d0a1d7ce83c5e8eb66) so that the new hire knows who is who and what they do.
- Go over relevant [:icon{name="openmoji:locked"} Processes](https://www.notion.so/Processes-33a75c8aece54c6cb7593a649469f980), particularly the meeting in which they will be participating that day.
- Go over the onboarding checklist for the first day: set clear expectations and goals.

#### Security Training
Should be scheduled on the first day of the new hire.

Training performed by role: Security Officer

1. Brief hires on their information security roles and responsibilities prior to being granted access to covered information or information systems
2. Ensure that new hires complete the information security awareness in Drata[^1]
3. Brief them on their information security roles and responsibilities prior to being granted access to covered information or information systems
4. Provide them with guidelines which state security expectations of their role within the organization;
5. (Onboarding of developers only) Have the new developer complete the [OWASP Top 10 training](https://www.udemy.com/course/an-introduction-to-owasp-top-10-vulnerabilities/)
   - Create a ticket in [Shortcut](https://app.shortcut.com/) using the [:icon{name="openmoji:locked"} Security Training - OWASP Top 10 Story Template](https://app.shortcut.com/narrativeio/stories/new?template_id=6400e5bc-b86a-484c-84b1-a53ea02484d4) 
      - Assign the [:icon{name="openmoji:locked"} Training Sessions label](https://app.shortcut.com/narrativeio/label/22181) to it
      - Assigned the ticket to the developer
   - Track to completion


### Week 1
Our goal for any new hire is to have them commit something and deploy it to production in their first week while giving them the breathing room they need to learn, ask questions, and get up to speed with our product and systems.

Good first tasks are small in scope (e.g. simple bug fixes that touch exactly one system or product), mutate functionality that is well covered by tests, and are low stakes (there’s no pressure to deliver on a timeline and the blast radius of any failure is minimal).


| Who            | What                                                                                    |
| -------------- | --------------------------------------------------------------------------------------- |
| Hiring Manager | Schedule first 1:1                                                                      |
| Hiring Manager | [Reflect on first week](#reflect-on-first-week) sometime close to end-of-day on Friday. |

 

#### Reflect on First Week
Quick chat to reflect on the new hire’s first week and discuss:

- What’s went well?
- What didn’t go well?
- What would you change about onboarding?
- What would you change about our processes?
- How comfortable are you at the org? 


### Onboarding Required Info
Information that must be provided in the ticket:

| Information     | Description |
| --------------- | ----------- |
| Name            | ???         |
| Narrative Email | ???         |

## Offboarding

The following activities should be completed within 30 days of the employee being hired:
1. Assign a Hiring Manager to the new hire
2. Execute the employment contract
3. Create a task in Shortcut and track it to completion:
   - Create a story using the [:icon{name="openmoji:locked"} Hiring - Offboarding Shortcut Story Template](https://app.shortcut.com/narrative-security/stories/new?template_id=6430143e-538d-4fa6-bd35-be7c9e79b699)
   - Assign the [:icon{name="openmoji:locked"} Hiring Label](https://app.shortcut.com/narrative-security/label/22435) to it
   - [Kick-off the account deprovisioning process](/playbooks/system-access-control#account-deprovisioning)
   - Kandji: [Lock and erase device](https://support.kandji.io/support/solutions/articles/72000560469-lock-device-and-erase-device)
   - Arrange return of Narrative-owned devices
   - Check the tasks as they are completed, and mark the story as done when completed


### Offboarding Required Info

Information that must be provided in the ticket:

| Information     | Description |
| --------------- | ----------- |
| Name            | ???         |
| Narrative Email | ???         |

[^1]: [:icon{name="openmoji:locked"} The Information Security Policy](https://github.com/narrative-io/narrative-playbooks/blob/main/policies/information-security-policy.md) states: "All new hires are required to complete information security awareness training as part of their new employee onboarding process and annually thereafter. New hire onboarding will be completed within 30 Days after the date the employee or contractor is hired. Ongoing training will include security and privacy requirements as well as training in the correct use of information assets and facilities."