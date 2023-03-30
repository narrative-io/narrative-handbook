# Backup

::alert{type="info"}
This document describes the processes that support the following company policies:
- :PolicyLinks{policy-name="Backup Policy" policy-slug="backup-policy" :drata-policy-id="3"}
::

## Update Data Inventory

Task: Update Data Flow Map
- Performed by: Head of Engineering
- Frequency: Annually

TODO: describe how to proceed

## Retention of Security Documentation and Audit Trails

> All security documentation and audit trails are kept for a minimum of three years, unless otherwise specified by Narrative's Data Classification Policy, specific regulations, or contractual agreement.

> Backups are monitored and alerted by AWS Cloudwatch. Backup failures trigger an incident by alerting the Security Officer.

- When setting up a Cloudwatch log group, the log group should be exported to  (TODO)
- Set up AWS Cloudwatch alerts for backup failures

## RDS Multi-Region Backup

> An automated process will back up all data to a separate region in the same country (e.g. US East to US West). By default, data will be backed up monthly. The backups are encrypted in the same way as live production data. 

By default, the RDS snapshots are created in the same region/same availability zone as the database. When creating a new database, it is important to replicate the snapshots to a different region. The replicated snapshot should use the KMS key of the other region.

## Source Code Repositories

> Source code repositories are backed up to Narrative’s AWS account on a monthly basis.

- All Github repositories need to be backed up to a different region (and encrypted if stored outside of S3)
  