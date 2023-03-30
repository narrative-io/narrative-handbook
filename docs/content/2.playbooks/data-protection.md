# Data Protection

::alert{type="info"}
This document describes the processes that support the following company policies:
- :PolicyLinks{policy-name="Data Protection Policy" policy-slug="data-protection-policy" :drata-policy-id="9"}
::

## Customer Data Protection

TODO:
> - Implement and/or review controls designed to protect Production Data from improper alteration or destruction.
> - Ensure that confidential data is stored in a manner that supports user access logs and automated monitoring for potential security incidents.
> - Ensure Narrative I/O, Inc. Customer Production Data is segmented and only accessible to Customers authorized to access data.
> - All Production Data at rest is stored on encrypted volumes using encryption keys managed by Narrative I/O, Inc..
> - Volume encryption keys and machines that generate volume encryption keys are protected from unauthorized access. Volume encryption key material is protected with access controls such that the key material is only accessible by privileged accounts.

Access to production is guarded by an approval process and by default is disabled as dictated by the [System Access Change](/playbooks/system-access-control#system-access-change) process.


Monitoring of the services is performed according to the processes described in [Maintenance and Monitoring](/playbooks/software-development-life-cycle#monitoring-and-maintenance) section of the SDLC playbook.