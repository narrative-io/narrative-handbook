import{_ as m}from"./NuxtImg.vue.b1292657.js";import{a as f,b as i,l as _,o as s,f as a,u as e,c as h,v as u,M as v,U as k,h as b,p as w,i as g,j as x,k as B}from"./entry.20ffb4fc.js";/* empty css                        */const I=t=>(w("data-v-637db270"),t=t(),g(),t),S={key:1,class:"loaded"},C=["poster"],V=["src"],$=["src","type"],N=["autoplay","src"],j=I(()=>x("button",null,null,-1)),E=[j],P=f({__name:"VideoPlayer",props:{poster:{type:String,default:""},src:{type:String,default:""},sources:{type:Array,default:()=>[]},autoplay:{type:Boolean,default:!1}},setup(t){const r=t,c=i(()=>{if(r.src&&r.src.includes("youtube.com/watch")){const o=r.src.match(/\?v=([^&]*)/);return{name:"youtube",src:`https://www.youtube-nocookie.com/embed/${(o==null?void 0:o[1])||""}?autoplay=1`,poster:r.poster||`https://i3.ytimg.com/vi/${(o==null?void 0:o[1])||""}/hqdefault.jpg`}}}),p=_(!1);if(!r.src&&!r.sources.length)throw new Error("VideoPlayer: you need to provide either `src` or `sources` props");const d=i(()=>{var o,l;return r.src||((l=(o=r.sources)==null?void 0:o[0])==null?void 0:l.src)||!1});return(o,l)=>{const y=m;return s(),a("div",{class:b(["video-player",{loaded:e(p)}])},[(e(c)?e(c).poster:t.poster)?(s(),h(y,{key:0,src:e(c)?e(c).poster:t.poster},null,8,["src"])):u("",!0),e(p)?(s(),a("div",S,[e(c)?e(c).name==="youtube"?(s(),a("iframe",{key:1,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true",autoplay:t.autoplay,src:e(c).src},null,8,N)):u("",!0):(s(),a("video",{key:0,poster:t.poster,controls:"",autoplay:""},[e(d)?(s(),a("source",{key:0,src:e(d)},null,8,V)):u("",!0),(s(!0),a(v,null,k(t.sources,n=>(s(),a("source",{key:n.src||n,src:n.src||n,type:n.type},null,8,$))),128))],8,C))])):u("",!0),e(p)?u("",!0):(s(),a("div",{key:2,class:"play-button",onClick:l[0]||(l[0]=n=>p.value=!0)},E))],2)}}}),F=B(P,[["__scopeId","data-v-637db270"]]);export{F as default};
