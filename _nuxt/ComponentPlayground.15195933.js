import{a5 as s,u as i,s as p,e as c,a9 as u,h as l,B as n,a as d}from"./entry.1d7714b5.js";import{u as f}from"./asyncData.bff2af31.js";import y from"./Ellipsis.79004d2a.js";import g from"./ComponentPlaygroundData.bd276643.js";/* empty css                                *//* empty css                     */import"./TabsHeader.51a4f012.js";/* empty css                       */import"./ComponentPlaygroundProps.f673ec4f.js";import"./ProseH4.1f487cad.js";/* empty css                    */import"./ProseCodeInline.8ecb3aee.js";/* empty css                            */import"./Badge.ea815d9c.js";import"./ContentSlot.a40f1248.js";/* empty css                  */import"./ProseP.68fa68b6.js";/* empty css                   */import"./index.f21c82b7.js";/* empty css                                     */import"./ComponentPlaygroundSlots.vue.d5343c20.js";import"./ComponentPlaygroundTokens.vue.775045b5.js";/* empty css                                    */async function h(o){s();const t=i(o);{const{data:e}=await f(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const _=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await h(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const m=r.replace("component-","");e[m]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(y,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(g,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}}),F=d(_,[["__scopeId","data-v-5e699dca"]]);export{F as default};
