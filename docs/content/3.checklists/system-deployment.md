# System Deployment 

::alert{type="info"}
:icon{name="fxemoji:lightbulb"} These checklists are copy-pastable in Markdown and can be used in Github Pull Requests.
::

## Asset Management

Removal of assets that mandatory legal and regulatory requirements of critical business processes: Hubspot (Marketing Data) and Narrative Customers (marketplace database):


```
- [ ] When removing an asset, if the asset contains data, has the [Data Asset Retirement](../playbooks/asset-management#data-asset-retirement) process been followed?
```

## Backups and Data Retention

```
- [ ] When creating Cloudwatch Log Groups, is the data kept for 3 years, as instructed in the [Backup Playbook](/playbooks/backup)
- [ ] When creating a RDS Database, is the data backed up to a different AWS region, , as instructed in the [Backup Playbook](/playbooks/backup)
```

## Maintainability

```
- [ ] Does the project provide up to date `README.md`, `architecture.md`, and `operation.md` documentation files following the [README Template](../templates/project-readme/)?
- [ ] Have the software components been added to the [Service Inventory](../services.md) to maintain a global view of what exactly is running in production?
- [ ] Have all the pull-requests been mapped to the corresponding Shortcut stories using the appropriate git support in Shortcut (namely: push code using the branch name suggested in the Shortcut story)?
- [ ] Has the code review ticket URL been added to the corresponding Shortcut story?
```

## Monitoring

```
- [ ] Have the monitoring infrastructure and alarms been updated to support the [Monitoring and Maintenance](../playbooks/software-development-life-cycle#monitoring-and-maintenance) needs?
```

## Security

```
- [ ] Have authentication and authorization mechanisms been implemented for the new functionality?
  - [ ] Role-based Access Control (RBAC)
  - [ ] Principle of least permissions
- [ ] Has the new functionality been built in a way that protects against [OWASP 10 security risks](https://owasp.org/Top10/)?
  - A01:2021-Broken Access Control
  - A02:2021-Cryptographic Failures
  - A03:2021-Injection
  - A04:2021-Insecure Design
  - A05:2021-Security Misconfiguration
  - A06:2021-Vulnerable and Outdated Components
  - A07:2021-Identification and Authentication Failures
  - A08:2021-Software and Data Integrity Failures 
  - A09:2021-Security Logging and Monitoring Failures 
  - A10:2021-Server-Side Request Forgery
- [ ] When creating a database, has the database been setup with daily backups to satisfy the [Daily Database Backups](https://app.drata.com/compliance/monitoring/107) Drata test?
- [ ] Have all passwords been stored with a unique salt and as a one-way hash using an approved password hashing algorithm (pbkdf2, bcrypt, scrypt) and an HMAC-SHA256 according to the [Password Policy](https://app.drata.com/policy-builder/14)
```