import{u as m}from"./index.81f24013.js";import{i as v,s as h,j as f,o as e,b as o,u as i,x as p,q as t,M as y,U as C,p as k,m as g,t as x,a as S}from"./entry.bcc56c6c.js";/* empty css                     */const n=s=>(k("data-v-7f89c298"),s=s(),g(),s),b={key:0,class:"copied"},w=n(()=>t("div",{class:"scrim"},null,-1)),B=n(()=>t("div",{class:"content"}," Copied! ",-1)),I=[w,B],T=n(()=>t("div",{class:"header"},[t("div",{class:"controls"},[t("div"),t("div"),t("div")]),t("div",{class:"title"}," Bash ")],-1)),j={class:"window"},q=n(()=>t("span",{class:"sign"},"$",-1)),N={class:"content"},V={key:1,class:"prompt"},A=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(s){const a=s,{copy:l}=m(),c=h("init"),r=f(()=>typeof a.content=="string"?[a.content]:a.content),_=u=>{l(r.value.join(`
`)).then(()=>{c.value="copied",setTimeout(()=>{c.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,D)=>(e(),o("div",{class:"terminal",onClick:_},[i(c)==="copied"?(e(),o("div",b,I)):p("",!0),T,t("div",j,[(e(!0),o(y,null,C(i(r),d=>(e(),o("span",{key:d,class:"line"},[q,t("span",N,x(d),1)]))),128))]),i(c)!=="copied"?(e(),o("div",V," Click to copy ")):p("",!0)]))}}),M=S(A,[["__scopeId","data-v-7f89c298"]]);export{M as default};