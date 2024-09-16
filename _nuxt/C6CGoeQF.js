import{_ as Z,a as K}from"./DJvotm0y.js";import{_ as Q}from"./BRarqgDV.js";import{R as q,aq as X,S as $,d as j,V as A,W as x,G as p,ar as Y,as as ee,Z as O,at as te,au as U,I as E,av as ae,aw as se,ax as D,ay as re,c as i,e as d,n as g,ab as a,O as m,h as S,P as f,g as c,f as z,N as v,w as y,k as G,t as B,F,M as R,az as ne,ao as ie,ah as V,ai as le,aj as oe,al as I,am as ue,s as M}from"./pUHJgJQ8.js";const ce={wrapper:"inline-flex flex-row-reverse justify-end",ring:"ring-2 ring-white dark:ring-gray-900",margin:"-me-1.5 first:me-0"},T=q($.ui.strategy,$.ui.avatar,X),de=q($.ui.strategy,$.ui.avatarGroup,ce),ge=j({inheritAttrs:!1,props:{size:{type:String,default:null,validator(e){return Object.keys(T.size).includes(e)}},max:{type:Number,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:n}){const{ui:s,attrs:l}=A("avatarGroup",x(e,"ui"),de,x(e,"class")),r=p(()=>Y(n)),o=p(()=>typeof e.max=="string"?parseInt(e.max,10):e.max),_=p(()=>r.value.map((h,b)=>{const t={};return!e.max||o.value&&b<o.value?(e.size&&(t.size=e.size),t.class=h.props.class||"",t.class=ee(O(t.class,s.value.ring,s.value.margin),t.class),te(h,t)):o.value!==void 0&&b===o.value?U(E,{size:e.size||T.default.size,text:`+${r.value.length-o.value}`,class:O(s.value.ring,s.value.margin)}):null}).filter(Boolean).reverse());return()=>U("div",{class:s.value.wrapper,...l.value},_.value)}}),me=z("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),fe=z("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),pe=["datetime"],ve=j({inheritAttrs:!1,__name:"BlogPost",props:{...ae,title:{type:String,default:void 0},description:{type:String,default:void 0},date:{type:[String,Date],default:void 0},image:{type:[String,Object],default:void 0},badge:{type:Object,default:void 0},authors:{type:Array,default:void 0},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const n=se(),s=e,l=p(()=>({wrapper:O("relative group flex flex-col w-full gap-y-6",s.orientation==="horizontal"&&(s.image||n.image)?"lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center":void 0),image:{wrapper:"ring-1 ring-gray-200 dark:ring-gray-800 relative overflow-hidden aspect-[16/9] w-full rounded-lg pointer-events-none",base:"object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105"},container:"flex flex-col justify-between flex-1",inner:"flex-1",badge:{wrapper:"mb-3",base:""},title:"text-gray-900 dark:text-white text-xl font-semibold truncate group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200",description:"text-base text-gray-500 dark:text-gray-400 mt-1",date:"text-sm text-gray-500 dark:text-gray-400 font-medium pointer-events-none",authors:{wrapper:"relative flex items-center gap-x-3 mt-4",avatar:{base:"relative ring-1 lg:hover:scale-105 lg:hover:ring-primary-500 dark:lg:hover:ring-primary-400 transition-transform",size:"xs"}}})),{ui:r,attrs:o}=A("blog.post",x(s,"ui"),l,x(s,"class"),!0),_=p(()=>D(s)),h=p(()=>(s.title||n.title&&re(n.title())||"Post link").trim()),b=p(()=>{if(s.date)try{return new Date(s.date).toISOString()}catch{return}});return(t,P)=>{var N;const C=Q,u=ne,w=ie,H=E,J=ge;return i(),d("article",f({class:a(r).wrapper},a(o)),[e.image||t.$slots.image?(i(),d("div",{key:0,class:g(a(r).image.wrapper)},[m(t.$slots,"image",{},()=>[S(C,f(typeof e.image=="string"?{src:e.image,alt:e.title}:{alt:e.title,...e.image},{class:a(r).image.base}),null,16,["class"])])],2)):c("",!0),z("div",{class:g(a(r).container)},[z("div",{class:g(a(r).inner)},[t.to?(i(),v(u,f({key:0,"aria-label":a(h)},a(_),{class:"focus:outline-none",tabindex:"-1"}),{default:y(()=>[me]),_:1},16,["aria-label"])):c("",!0),e.badge||t.$slots.badge?(i(),d("div",{key:1,class:g(a(r).badge.wrapper)},[m(t.$slots,"badge",{},()=>[e.badge?(i(),v(w,f({key:0},{variant:"subtle",...e.badge},{class:a(r).badge.base}),null,16,["class"])):c("",!0)])],2)):c("",!0),e.title||t.$slots.title?(i(),d("h2",{key:2,class:g(a(r).title)},[m(t.$slots,"title",{},()=>[G(B(e.title),1)])],2)):c("",!0),e.description||t.$slots.description?(i(),d("div",{key:3,class:g(a(r).description)},[m(t.$slots,"description",{},()=>[G(B(e.description),1)])],2)):c("",!0),m(t.$slots,"default")],2),(N=e.authors)!=null&&N.length||e.date?(i(),d("div",{key:0,class:g(a(r).authors.wrapper)},[m(t.$slots,"authors",{},()=>{var L;return[(L=e.authors)!=null&&L.length?(i(),v(J,{key:0},{default:y(()=>[(i(!0),d(F,null,R(e.authors,(k,W)=>(i(),v(H,f({key:W,alt:k.name,class:a(r).authors.avatar.base,ref_for:!0},{size:a(r).authors.avatar.size,...k.avatar}),{default:y(()=>[k.to?(i(),v(u,f({key:0,ref_for:!0},{target:"_blank",...a(D)(k)},{class:"focus:outline-none",tabindex:"-1"}),{default:y(()=>[fe]),_:2},1040)):c("",!0)]),_:2},1040,["alt","class"]))),128))]),_:1})):c("",!0)]}),m(t.$slots,"date",{},()=>[e.date?(i(),d("time",{key:0,datetime:a(b),class:g(a(r).date)},B(e.date),11,pe)):c("",!0)])],2)):c("",!0)],2)],16)}}}),ye=j({inheritAttrs:!1,__name:"BlogList",props:{orientation:{type:String,default:"horizontal"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const n=e,s=p(()=>({wrapper:{horizontal:"flex flex-col lg:grid lg:grid-cols-3 gap-x-8 gap-y-16",vertical:"flex flex-col gap-y-16 w-full"}[n.orientation]})),{ui:l,attrs:r}=A("blog.list",x(n,"ui"),s,x(n,"class"),!0);return(o,_)=>(i(),d("div",f({class:a(l).wrapper},a(r)),[m(o.$slots,"default")],16))}}),_e=j({__name:"index",async setup(e){let n,s;const{data:l}=([n,s]=V(()=>I("blog",()=>M("/blog").findOne())),n=await n,s(),n);if(!l.value)throw le({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:r}=([n,s]=V(()=>I("posts",()=>M("/blog").where({_extension:"md"}).sort({date:-1}).find())),n=await n,s(),n);return oe({title:l.value.title,ogTitle:l.value.title,description:l.value.description,ogDescription:l.value.description}),(o,_)=>{const h=Z,b=ve,t=ye,P=K,C=ue;return i(),v(C,null,{default:y(()=>[S(h,f(a(l),{class:"py-[50px]"}),null,16),S(P,null,{default:y(()=>[S(t,null,{default:y(()=>[(i(!0),d(F,null,R(a(r),(u,w)=>(i(),v(b,{key:w,to:u._path,title:u.title,description:u.description,image:u.image,date:new Date(u.date).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"}),authors:u.authors,badge:u.badge,orientation:w===0?"horizontal":"vertical",class:g([w===0&&"col-span-full"]),ui:{description:"line-clamp-2"}},null,8,["to","title","description","image","date","authors","badge","orientation","class"]))),128))]),_:1})]),_:1})]),_:1})}}});export{_e as default};
