import{i as _,s as l,Q as b,o as s,b as a,M as v,U as x,q as u,x as g,r as y,l as I,t as k,p as T,m as S,Z as C,a as $}from"./entry.4000d500.js";/* empty css                       */const U=t=>(T("data-v-e0f3c7d4"),t=t(),S(),t),q={class:"tabs-header"},w=["onClick"],B=U(()=>u("span",{class:"tab"},null,-1)),N=[B],H=_({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:p}){const h=t,n=l(),r=l(),o=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},f=(e,c)=>{p("update:activeTabIndex",c),C(()=>o(e.target))};return b(n,e=>{e&&setTimeout(()=>{o(n.value.children[h.activeTabIndex])},50)},{immediate:!0}),(e,c)=>(s(),a("div",q,[t.tabs?(s(),a("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(s(!0),a(v,null,x(t.tabs,({label:d},i)=>(s(),a("button",{key:`${i}${d}`,class:I([t.activeTabIndex===i?"active":"not-active"]),onClick:m=>f(m,i)},k(d),11,w))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},N,512)],512)):g("",!0),y(e.$slots,"footer",{},void 0,!0)]))}}),V=$(H,[["__scopeId","data-v-e0f3c7d4"]]);export{V as default};
