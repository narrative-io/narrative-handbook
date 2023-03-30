---
title: "Software Develoment Life Cycle (SDLC)"
description: "The Software Development Process, from design to maintenance."
---
# Software Development Life Cycle (SDLC)

::alert{type="info"}
This document describes the processes that support the following company policies:
- :PolicyLinks{policy-name="Software Development Life Cycle (SDLC) Policy" policy-slug="software-development-life-cycle-policy" :drata-policy-id="5"}
::

## General Principles

The planning, development, testing, deployment, and maintenance cycles are performed iteratively. 

## Planning

The first step in the SDLC process is planning. During this stage, the product and development teams work together to create a high-level plan for the project, identify key stakeholders, and establish clear project objectives. 

The outcome of this step depends on the scope of the changes :
- If the project is a major change to the system, the product team defines the product goals used to meet the high-level company objectives and the development team writes a design document that describes the technological choices that are considered to implement the changes. A number of milestones, epics, stories, and tasks are created in Shortcut to track the progress of the project.

  The design document should address the [System Requirements Security Checklist](/checklists/system-requirements#security-checklist).
- If the project is a small change that results from a production incident or support request, a set of tasks are created to track the progress of the mini project, but no additional documentation is produced to address the issue in a timely manner. These tasks are created in the  [:icon{name="openmoji:locked"} Techops project](https://app.shortcut.com/narrativeio/project/10791/) using the [:icon{name="openmoji:locked"} Techops template](https://app.shortcut.com/narrativeio/stories/new?template_id=61b239b5-2438-430d-a90f-91dba0e2f99b). See [:icon{name="openmoji:locked"} Techops Issue Tracking Notion page](https://www.notion.so/narrativeio/Techops-Issue-Tracking-c4d1e4138adf4d3196f67821a0967d13) for more information about this process.

The development cycle is chunked into regular (currently: 2-week sprints/checkpoints). At the end of each sprint / beginning of the next sprint, developers post asynchronous high-level updates (currently to the [:icon{name="openmoji:locked"} #daily-gsd](https://narrative-io.slack.com/archives/C4A2JMVAP) slack channel) describing the milestones they are working on, what has been completed since the last update, what is in progress, and the roadblocks and issues that have been encountered. This is an opportunity to surface any problems or improvement suggestions that arise and prioritize next tasks/projects in the product backlog, look at who will be free soon, where we need to intervene to cut a project's scope, and assign out next tasks for people who are ready for them. Refer to the [:icon{name="openmoji:locked"} Sprint Planning Process](https://www.notion.so/narrativeio/Sprint-Planning-ef2719d82e79432998288690a5d24c8a) page for more information on the related processes.

## Development

Developers post daily updates to the [:icon{name="openmoji:locked"} #daily-gsd](https://narrative-io.slack.com/archives/C4A2JMVAP) Slack channel to inform on the tasks currently being worked on and any blockers preventing completion of these tasks.

[Git](https://git-scm.com/) is used to manage the codebase and track changes throughout the development process. In order to facilitate linking the tasks to the actual work performed, developers use [Shortcut built-in Git Support](https://help.shortcut.com/hc/en-us/articles/207540323-Using-Branches-and-Pull-Requests-with-the-Shortcut-VCS-Integrations) to link tasks to Git branches and pull requests.

Commit messages are written using the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) convention.

[Github Actions](https://github.com/features/actions) is used to run tests and perform continuous integration.

Each change is done using a branch that is merged (no fast forward) to the main branch, in order to preserve the history. While developing, the local branch should be rebased onto the latest `main` to avoid drifting for too long and causing merge hell.

We do not currently protect the `main` branches because of technical constraints (the release pipeline / sbt-release-plugin should be updated to support this), but we should generally act as if the main branches were protected to make the eventual transition smoother.

## Testing

The nature and amount of testing is context-specific and includes, where relevant
  - Automated unit-tests
  - Automated integration tests
  - Automated end to end tests
  - Manual tests
  - Monitors and alerts
  
The development environment is used to perform manual testing prior to deployment in production.

An automated test suite runs on the CI server ([Github Actions](https://github.com/features/actions)), and these tests may be executed before or after the merge of the code to the main branch, depending on the circumstances. We do not commit to running all tests before merging for productivity concerns, but the developer merging
a build that eventually fails is responsible for fixing the build.

In general, testing should not be done with production data, but when there is a good reason to do so, the Information Resource Owner needs to provide approval. Approval is requested by creating a ticket in the [:icon{name="openmoji:locked"} Information Owner Resource Requests](https://app.shortcut.com/narrativeio/project/21302/process-exception-requests) project
using the [:icon{name="openmoji:locked"} Information Owner Resource Requests - Testing With Production Data story template](https://app.shortcut.com/narrativeio/stories/new?template_id=6406411b-f4e2-41b0-98e1-812fbc408917)

## Deployment

Deployment procedure slightly varies from project to project, but is generally performed using [Terraform](https://www.terraform.io/) and [Jenkinsfiles](https://www.jenkins.io/doc/book/pipeline/jenkinsfile/). Deployment information (versions, config) is tracked by committing the Terraform/Jenkinsfiles to Git along with the code.

All deployment and infrastructure changes can be done thanks to a specific role that developers can assume. The deployments may be performed directly by the CI server, but may also be performed by developers themselves (by assuming the centralized role). Regardless of how these deployment are performed, any changes to the infrastructure / any assumption of the role are tracked using Cloudtrail.

Deployable software components should be listed in the [:icon{name="openmoji:locked"} service inventory](https://github.com/narrative-io/narrative-playbooks/blob/main/services.md) and should come with operational documentation (`operations.md`) describing 
- The deployment procedure
- How to operate the service/application
- The monitoring and alerts that the component provides
- Links to the relevant logs
- Important troubleshooting / failure handling procedures
  
They also come with high-level architecture documents (`architecture.md`) describing
- Background information
- High-Level Logic and Data Flow Diagrams
- Links to the Design Documentation
- Components
- Architectural Deficiencies

For major releases, the code review associated with the deployment should address the [System Deployment](/checklists/system-deployment) checklists.

## Code and Infrastructure Review

Code and infrastructure reviews are created manually by developers (each code review may link to one or several branches / pull requests) and may be performed before or after the merge of the code and/or the deployment of the code. The code reviews are tracked to completion, but there is no software guaranteeing that all of the pull requests are reviewed, it is a matter of practice / habit to do so.

## Monitoring and Maintenance

The final step in the SDLC process is maintenance. During this stage, the team should provide ongoing support for the software, including bug fixes, updates, and enhancements.

We have set up a [VictorOps](https://portal.victorops.com/) rotation. The on-call developer is responsible for monitoring the following places to address any pressing issues:
- VictorOps alerts
- The [:icon{name="openmoji:locked"} #auto-techops](https://narrative-io.slack.com/archives/C0J3L74CA)  Slack channel
- The [:icon{name="openmoji:locked"} #auto-app-notifications`](https://narrative-io.slack.com/archives/C035FAWCJF7) Slack channel 
- The [:icon{name="openmoji:locked"} #helpdesk` Slack channel](https://narrative-io.slack.com/archives/CAUMQ6K3M)

More information on our monitoring infrastructure and conventions:
- [:icon{name="openmoji:locked"} narrative-network-infra/monitoring](https://github.com/narrative-io/narrative-network-infra/tree/main/monitoring), and in particular
  - [:icon{name="openmoji:locked"} notification-publisher-infra](https://github.com/narrative-io/narrative-network-infra/tree/main/monitoring/notification-publisher-infra)
  - [:icon{name="openmoji:locked"} victorops-integration](https://github.com/narrative-io/narrative-network-infra/tree/main/monitoring/victorops-integration)


## Process Improvements Under Consideration

Ideas being currently discussed to improve our processes:

- [6-week appetites](https://www.notion.so/narrativeio/Project-Execution-Appetite-395c6a4eeec94a9db05618f35d4b8050): [Shape Up](https://basecamp.com/shapeup/0.3-chapter-01) defines the rationale for such 6-week- windows.
- Security: Marko and Seth are currently working on an internal vulnerability disclosure policy and a way of tracking security issues internally.
- [:icon{name="openmoji:locked"} Project Execution](https://www.notion.so/narrativeio/WIP-Project-Execution-5e77f694fcec48919a8ae8e3c7768fe8)
  - Standardization of project delivery, covering everything from “we have an idea” to delivery.
  - Explicit definition of what we consider best practices when delivering a project.
  - Change the bot logic to track code reviews to completion.

