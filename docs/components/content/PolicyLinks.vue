<script>
export default {
  props: {
    policyName: {
      type: String,
      required: true,
      validator: (value) => value !== ""
    },
    policySlug: {
      type: String,
      required: true,
      validator: (value) => value !== ""
    },
    drataPolicyId: {
      type: Number,
      required: true,
      validator: (value) => value > 0
    }
  },
  // data() {
  //   return {
  //     githubPolicyUrl: `https://github.com/narrative-io/narrative-playbooks/blob/main/policies/${this.policySlug}.md`,
  //     drataPolicyUrl: `https://app.drata.com/policy-builder/${this.drataPolicyId}`
  //   }
  // },
  computed: {
    githubPolicyUrl() {
      return `https://github.com/narrative-io/narrative-playbooks/blob/main/policies/${this.policySlug}.md`
    },
    githubPolicyNotesUrl() {
      return `https://github.com/narrative-io/narrative-playbooks/blob/main/policy-notes/${this.policySlug}-notes.md`
    },
    drataPolicyUrl() {
      return `https://app.drata.com/policy-builder/${this.drataPolicyId}`
    }
  }
}
</script>

<template>
  <span>
    <icon name="openmoji:locked" />
    {{ policyName }}:

    <ProseA :href="githubPolicyUrl">Annotated
      <icon name="openmoji:github" />
    </ProseA>
    <icon name="majesticons:more-menu-vertical" />
    <ProseA :href="githubPolicyNotesUrl">Notes
      <icon name="openmoji:github" />
    </ProseA>
    <icon name="majesticons:more-menu-vertical" />
    <ProseA :href="drataPolicyUrl">Drata Policy
      <icon name="carbon:ibm-cloud-security-compliance-center" />
  </ProseA>
</span></template>

