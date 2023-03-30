import{a as l,o as p,b as s,e,f as r,t as m,w as i,h as u}from"./entry.4000d500.js";import d from"./ProseA.0f9db508.js";/* empty css                   */const y={props:{policyName:{type:String,required:!0,validator:t=>t!==""},policySlug:{type:String,required:!0,validator:t=>t!==""},drataPolicyId:{type:Number,required:!0,validator:t=>t>=0}},computed:{githubPolicyUrl(){return`https://github.com/narrative-io/narrative-playbooks/blob/main/policies/${this.policySlug}.md`},githubPolicyNotesUrl(){return`https://github.com/narrative-io/narrative-playbooks/blob/main/policy-notes/${this.policySlug}-notes.md`},drataPolicyUrl(){return`https://app.drata.com/policy-builder/${this.drataPolicyId}`}}};function h(t,_,c,b,f,n){const o=u,a=d;return p(),s("span",null,[e(o,{name:"openmoji:locked"}),r(" "+m(c.policyName)+": ",1),e(a,{href:n.githubPolicyUrl},{default:i(()=>[r("Annotated"),e(o,{name:"openmoji:github"})]),_:1},8,["href"]),e(o,{name:"majesticons:more-menu-vertical"}),e(a,{href:n.githubPolicyNotesUrl},{default:i(()=>[r("Notes"),e(o,{name:"openmoji:github"})]),_:1},8,["href"]),e(o,{name:"majesticons:more-menu-vertical"}),e(a,{href:"https://app.drata.com/policy-builder/5"},{default:i(()=>[r("Drata Policy"),e(o,{name:"carbon:ibm-cloud-security-compliance-center"})]),_:1})])}const N=l(y,[["render",h]]);export{N as default};