"use strict";(self.webpackChunkterrascope=self.webpackChunkterrascope||[]).push([[304],{95:(e,a,t)=>{t.d(a,{A:()=>i});var n=t(43),s=t(108),l=t(579);const i=()=>{const{state:e}=(0,s.V)(),[a,t]=(0,n.useState)(null),[i,r]=(0,n.useState)(null),o=["date","supplier","region","amount"];(0,n.useEffect)((()=>{a?i||r(o.find((e=>e!==a))):r(null)}),[a,i,o]);const d=(0,n.useMemo)((()=>o.filter((e=>e!==a&&e!==i))),[a,i]),c=(0,n.useMemo)((()=>{if(!a||!i)return e.data;const t={};return e.data.forEach((e=>{const n=e[a],s=d.map((a=>e[a])).join(" | ");t[n]||(t[n]={}),t[n][s]||(t[n][s]=""),t[n][s]+=e[i]})),t}),[e.data,a,i,d]),u=a?Object.keys(c):[],h=a?Array.from(new Set(e.data.map((e=>d.map((a=>e[a])).join(" | "))))):d;return(0,l.jsxs)("div",{className:"pivot-table-container",children:[(0,l.jsxs)("div",{className:"pivot-controls",children:[(0,l.jsxs)("label",{children:["Row",(0,l.jsxs)("select",{value:a||"",onChange:e=>t(e.target.value||null),children:[(0,l.jsx)("option",{value:"",children:"None"}),o.map((e=>(0,l.jsx)("option",{value:e,children:e},e)))]})]}),(0,l.jsxs)("label",{children:["Value",(0,l.jsxs)("select",{value:i||"",onChange:e=>r(e.target.value||null),style:{pointerEvents:a?"all":"none"},children:[(0,l.jsx)("option",{value:"",children:"None"}),o.map((e=>(0,l.jsx)("option",{value:e,children:e},e)))]})]})]}),(0,l.jsx)("div",{className:"pivot-table-wrapper",children:(0,l.jsxs)("table",{className:"pivot-table",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[a&&(0,l.jsx)("th",{children:a}),h.map((e=>(0,l.jsx)("th",{children:e},e)))]})}),(0,l.jsx)("tbody",{children:a?u.map((e=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:e}),h.map((a=>(0,l.jsx)("td",{children:c[e][a]},a)))]},e))):e.data.map(((e,a)=>(0,l.jsx)("tr",{children:d.map((a=>(0,l.jsx)("td",{children:e[a]},a)))},a)))})]})})]})}},214:(e,a,t)=>{t.d(a,{A:()=>s});t(43);var n=t(579);const s=e=>{let{message:a}=e;return(0,n.jsx)("div",{className:"error-container",children:(0,n.jsx)("div",{className:"error-box",children:(0,n.jsx)("p",{className:"error-text",children:a||"Something went wrong!"})})})}},304:(e,a,t)=>{t.r(a),t.d(a,{default:()=>u});var n=t(43),s=t(404),l=t(108),i=t(970),r=t(911),o=t(95),d=t(214),c=t(579);const u=()=>{const[e,a]=(0,n.useState)({dateRange:["2023-01-01","2023-01-30"],region:"All",supplier:"All",amountRange:{min:"",max:""},dimension:"region"}),{state:t,dispatch:u}=(0,l.V)(),[h,p]=(0,n.useState)(0),x=e=>{a((a=>({...a,...e})))};(0,n.useEffect)((()=>{1===h&&p(2)}),[t]);(0,n.useEffect)((()=>{u({type:"FETCH_DATA",payload:e}),0===h&&p(1)}),[e,u]);const j=(0,n.useMemo)((()=>{const a=t.data.reduce(((a,t)=>{const n=t[e.dimension];return a[n]=(a[n]||0)+t.amount,a}),{});return{labels:Object.keys(a),datasets:[{label:`Total Procurement by ${e.dimension.charAt(0).toUpperCase()+e.dimension.slice(1)}`,data:Object.values(a),backgroundColor:["#FF6384","#36A2EB","#FFCE56","#4BC0C0","#9966FF"]}]}}),[t.data,e.dimension]);return(0,c.jsx)(c.Fragment,{children:t.isLoading||2!==h?(0,c.jsx)(r.A,{}):t.error?(0,c.jsx)(d.A,{message:"Service Unavailable!"}):(0,c.jsxs)("div",{className:"data-insights-page",children:[(0,c.jsx)(i.B,{AnomaliesFilters:null,dataInsightsFilters:{onChange:(t,n)=>{let s=Array.from(e.dateRange);t?s[0]=n:s[1]=n,a((e=>({...e,dateRange:s})))},startDate:e.dateRange[0],endDate:e.dateRange[1],region:e.region,setSelectedRegion:e=>x({region:e}),amountRange:e.amountRange,setAmountRange:e=>x({amountRange:e}),selectedDimension:e.dimension,setSelectedDimension:e=>x({dimension:e})},DashboardHomeFilters:null}),(0,c.jsxs)("div",{className:"data-insights-content",children:[(0,c.jsx)("h2",{children:"Data Insights"}),(0,c.jsx)("div",{className:"chart-container",children:(0,c.jsx)(s.A,{type:"bar",data:j,options:{responsive:!0,maintainAspectRatio:!1}})}),(0,c.jsx)("h3",{children:"Detailed Overview"}),(0,c.jsx)(o.A,{})]})]})})}},404:(e,a,t)=>{t.d(a,{A:()=>i});t(43);var n=t(58),s=t(461),l=t(579);s.t1.register(s.PP,s.kc,s.FN,s.No,s.Bs,s.E8,s.hE,s.m_,s.s$);const i=e=>{let{type:a,data:t,options:s}=e;return(0,l.jsxs)("div",{style:{width:"100%",height:"100%",minWidth:600},children:["bar"===a&&(0,l.jsx)(n.yP,{data:t,options:s}),"line"===a&&(0,l.jsx)(n.N1,{data:t,options:s}),"pie"===a&&(0,l.jsx)(n.Fq,{data:t,options:s}),"bubble"===a&&(0,l.jsx)(n.Zh,{data:t,options:s})]})}},970:(e,a,t)=>{t.d(a,{B:()=>r});var n=t(43),s=t(579);const l=e=>{let{onChange:a,startDate:t,endDate:l,region:i,setSelectedRegion:r,amountRange:o,setAmountRange:d,supplier:c,setSelectedSupplier:u}=e;const[h,p]=(0,n.useState)(o.min),[x,j]=(0,n.useState)(o.max),[g,v]=(0,n.useState)(t),[m,A]=(0,n.useState)(l);return(0,n.useEffect)((()=>{a(!0,g)}),[g]),(0,n.useEffect)((()=>{a(!1,m)}),[m]),(0,s.jsxs)("div",{className:"anomaliesFilters",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"Date Range Start"}),(0,s.jsx)("input",{type:"date",onChange:e=>v(e.target.value),value:g}),(0,s.jsx)("p",{children:"Date Range End"}),(0,s.jsx)("input",{type:"date",onChange:e=>A(e.target.value),value:m})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"Region"}),(0,s.jsxs)("select",{onChange:e=>r(e.target.value),value:i,children:[(0,s.jsx)("option",{value:"All",children:"All"}),(0,s.jsx)("option",{value:"North America",children:"North America"}),(0,s.jsx)("option",{value:"Europe",children:"Europe"}),(0,s.jsx)("option",{value:"Asia",children:"Asia"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"Supplier"}),(0,s.jsxs)("select",{onChange:e=>u(e.target.value),value:c,children:[(0,s.jsx)("option",{value:"All",children:"All"}),(0,s.jsx)("option",{value:"Supplier A",children:"Supplier A"}),(0,s.jsx)("option",{value:"Supplier B",children:"Supplier B"}),(0,s.jsx)("option",{value:"Supplier C",children:"Supplier C"}),(0,s.jsx)("option",{value:"Supplier D",children:"Supplier D"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"Amount Range"}),(0,s.jsx)("input",{type:"number",placeholder:"Min",value:h,onChange:e=>p(e.target.value),onKeyDown:e=>{"Enter"===e.key&&d({...o,min:e.target.value?parseFloat(e.target.value):""})}}),(0,s.jsx)("input",{type:"number",placeholder:"Max",value:x,onChange:e=>j(e.target.value),onKeyDown:e=>{"Enter"===e.key&&d({...o,max:e.target.value?parseFloat(e.target.value):""})}})]})]})},i=e=>{let{onChange:a,startDate:t,endDate:l,region:i,setSelectedRegion:r,amountRange:o,setAmountRange:d,selectedDimension:c,setSelectedDimension:u}=e;const[h,p]=(0,n.useState)(o.min),[x,j]=(0,n.useState)(o.max),[g,v]=(0,n.useState)(t),[m,A]=(0,n.useState)(l);return(0,n.useEffect)((()=>{a(!0,g)}),[g]),(0,n.useEffect)((()=>{a(!1,m)}),[m]),(0,s.jsxs)("div",{className:"dataInsightsFilters",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"Date Range Start"}),(0,s.jsx)("input",{type:"date",onChange:e=>v(e.target.value),value:g}),(0,s.jsx)("p",{children:"Date Range End"}),(0,s.jsx)("input",{type:"date",onChange:e=>A(e.target.value),value:m})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"Region"}),(0,s.jsxs)("select",{onChange:e=>r(e.target.value),value:i,children:[(0,s.jsx)("option",{value:"All",children:"All"}),(0,s.jsx)("option",{value:"North America",children:"North America"}),(0,s.jsx)("option",{value:"Europe",children:"Europe"}),(0,s.jsx)("option",{value:"Asia",children:"Asia"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"Amount Range"}),(0,s.jsx)("input",{type:"number",placeholder:"Min",value:h,onChange:e=>p(e.target.value),onKeyDown:e=>{"Enter"===e.key&&d({...o,min:e.target.value?parseFloat(e.target.value):""})}}),(0,s.jsx)("input",{type:"number",placeholder:"Max",value:x,onChange:e=>j(e.target.value),onKeyDown:e=>{"Enter"===e.key&&d({...o,max:e.target.value?parseFloat(e.target.value):""})}})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"Select Dimension"}),(0,s.jsxs)("select",{id:"dimension-select",value:c,onChange:e=>u(e.target.value),children:[(0,s.jsx)("option",{value:"region",children:"Region"}),(0,s.jsx)("option",{value:"supplier",children:"Supplier"})]})]})]})},r=e=>{let{anomaliesFilters:a,dataInsightsFilters:t,DashboardHomeFilters:r}=e;const[o,d]=(0,n.useState)(!1);return(0,s.jsxs)("div",{className:"sidebar-container "+(o?"open":""),children:[(0,s.jsx)("button",{className:"toggle-button",onClick:()=>{d(!o)},children:o?(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-x-lg",viewBox:"0 0 16 16",children:(0,s.jsx)("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"})}):(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-funnel-fill",viewBox:"0 0 16 16",children:(0,s.jsx)("path",{d:"M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"})})}),(0,s.jsxs)("aside",{className:"sidebar",children:[(0,s.jsx)("h3",{children:"Filters"}),(0,s.jsx)("div",{className:"filter-group",children:(()=>{switch(window.location.pathname){case"/supply-chain-dashboard/anomalies":return(0,s.jsx)(l,{...a});case"/supply-chain-dashboard/data-insights":return(0,s.jsx)(i,{...t});case"/supply-chain-dashboard":return(0,s.jsx)(r,{});default:return null}})()})]})]})}}}]);
//# sourceMappingURL=304.e8c2df67.chunk.js.map