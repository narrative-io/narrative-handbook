import J from"./DocsAside.e57c40ef.js";import K from"./ProseCodeInline.c07dc4ba.js";import O from"./Alert.e174cbf0.js";import R from"./DocsPageBottom.af27f5cd.js";import U from"./DocsPrevNext.cfbb39a6.js";import{i as Q,G as W,E as X,I as Y,j as m,s as V,J as Z,K as ee,L as oe,o as u,c as A,w as h,u as t,b as g,e as r,x,q as _,r as te,f as y,t as ne,M as se,l as k,h as ae,N as ce,p as le,m as re,a as ie}from"./entry.4000d500.js";import pe from"./DocsToc.2fe93db8.js";/* empty css                           *//* empty css                      *//* empty css                            */import"./ContentSlot.5c4f3199.js";/* empty css                  */import"./ProseA.0f9db508.js";/* empty css                   */import"./EditOnLink.vue.b6a6cc72.js";/* empty css                           *//* empty css                         */import"./DocsTocLinks.5cc2734c.js";/* empty css                         *//* empty css                    */const ue=d=>(le("data-v-8c521bc1"),d=d(),re(),d),_e={class:"page-body"},de={key:1,class:"toc"},me={class:"toc-wrapper"},fe=ue(()=>_("span",{class:"title"},"Table of Contents",-1)),ve=Q({__name:"DocsPageLayout",setup(d){const{page:s}=W(),{config:f,tree:T}=X(),M=Y(),j=(e,o=!0)=>{var n;return typeof((n=s.value)==null?void 0:n[e])<"u"?s.value[e]:o},b=m(()=>{var e,o,n;return!s.value||((n=(o=(e=s.value)==null?void 0:e.body)==null?void 0:o.children)==null?void 0:n.length)>0}),S=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.toc)!==!1&&((l=(c=(n=(o=s.value)==null?void 0:o.body)==null?void 0:n.toc)==null?void 0:c.links)==null?void 0:l.length)>=2}),C=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.aside)!==!1&&(((o=T.value)==null?void 0:o.length)>1||((l=(c=(n=T.value)==null?void 0:n[0])==null?void 0:c.children)==null?void 0:l.length))}),E=m(()=>j("bottom",!0)),i=V(!1),a=V(null),v=()=>M.path.split("/").slice(0,2).join("/"),p=Z("asideScroll",()=>{var e;return{parentPath:v(),scrollTop:((e=a.value)==null?void 0:e.scrollTop)||0}});function P(){a.value&&(a.value.scrollHeight===0&&setTimeout(P,0),a.value.scrollTop=p.value.scrollTop)}return ee(()=>{p.value.parentPath!==v()?(p.value.parentPath=v(),p.value.scrollTop=0):P()}),oe(()=>{a.value&&(p.value.scrollTop=a.value.scrollTop)}),(e,o)=>{var N,w,B,D,I,$;const n=J,c=K,l=O,H=R,L=U,q=ae,z=pe,F=ce;return u(),A(F,{fluid:(w=(N=t(f))==null?void 0:N.main)==null?void 0:w.fluid,padded:(D=(B=t(f))==null?void 0:B.main)==null?void 0:D.padded,class:k(["docs-page-content",{fluid:($=(I=t(f))==null?void 0:I.main)==null?void 0:$.fluid,"has-toc":t(S),"has-aside":t(C)}])},{default:h(()=>[t(C)?(u(),g("aside",{key:0,ref_key:"asideNav",ref:a,class:"aside-nav"},[r(n,{class:"app-aside"})],512)):x("",!0),_("article",_e,[t(b)?te(e.$slots,"default",{key:0},void 0,!0):(u(),A(l,{key:1,type:"info"},{default:h(()=>[y(" Start writing in "),r(c,null,{default:h(()=>[y("content/"+ne(t(s)._file),1)]),_:1}),y(" to see this page taking shape. ")]),_:1})),t(b)&&t(s)&&t(E)?(u(),g(se,{key:2},[r(H),r(L)],64)):x("",!0)]),t(S)?(u(),g("div",de,[_("div",me,[_("button",{onClick:o[0]||(o[0]=G=>i.value=!t(i))},[fe,r(q,{name:"heroicons-outline:chevron-right",class:k(["icon",[t(i)&&"rotate"]])},null,8,["class"])]),_("div",{class:k(["docs-toc-wrapper",[t(i)&&"opened"]])},[r(z,{onMove:o[1]||(o[1]=G=>i.value=!1)})],2)])])):x("",!0)]),_:3},8,["fluid","padded","class"])}}}),Ee=ie(ve,[["__scopeId","data-v-8c521bc1"]]);export{Ee as default};
