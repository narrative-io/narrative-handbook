# Asset Management

::alert{type="info"}
This document describes the processes that support the following company policies:
- :PolicyLinks{policy-name="Asset Management Policy" policy-slug="asset-management-policy" :drata-policy-id="2"}
::

## Data Wipe

Performed by role: IT Manager

> All company-owned devices are subject to a complete data wipe if deemed necessary, such as in the case of device infection or repurpose.

## Data Asset Retirement

Approval performed by role: Information Resource Owner

The Information Resource Owner needs to provide approval before retiring certain data assets:
- Hubspot (Marketing Data)
- Narrative Customers (marketplace database)

Approval is requested by creating a ticket in the [:icon{name="openmoji:locked"} Information Owner Resource Requests](https://app.shortcut.com/narrativeio/project/21302/process-exception-requests) project using the [:icon{name="openmoji:locked"} Information Owner Resource Requests - Data Asset Retirement](https://app.shortcut.com/narrativeio/stories/new?template_id=64064559-7b7c-4ea2-8e7e-0ccacfe0346c) Story Template.

The ticket must contain the following information
- Review of data retention requirements
- Migration plan if needed for legal/regulatory scrutiny

> The information resource owner determines when an asset is no longer needed or is obsolete and can be retired. If the asset to be replaced/retired supports mandatory legal and regulatory requirements of critical business processes, the information resource owner must ensure that any replacement asset can support these processes before the current asset is retired. 

> Before retiring/replacing any asset that retains data, data retention requirements for all data stored or managed by that asset must be reviewed, and a plan for complying with all applicable data retention requirements must be developed and executed. This is particularly important for assets that manage data subject to legal/regulatory scrutiny. Any data subject to data retention requirements must be migrated to an appropriate destination and tested for appropriateness, completeness, accessibility and retrievability from the destination before the original data is deleted from the original asset as part of the system retirement process. 

## Disposal of Sensitive Data on Hardware

This section describes the procedures to dispose of sensitive data when hardware is returned following a termination or upgrade.

### Computers

Follow [Apple's procedure to erase the Mac](https://support.apple.com/en-us/HT212030)

### USB Hard Drives

Follow [Apple's procedure to erase the USB's disk partition](https://support.apple.com/guide/disk-utility/partition-a-physical-disk-dskutl14027/mac)
