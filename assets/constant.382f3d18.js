import{r as d,a as O,j as s,F as B}from"./react-libs.513007de.js";import{c as a}from"./locales.fc745e15.js";import{C as N}from"./ConfigProviderContext.ed273b22.js";import{g as x,b as C}from"./index.b2a8bc00.js";const S=({bem:t})=>s(B,{children:Array(12).fill(null).map((l,n)=>s("i",{className:a(t("line",String(n+1)))},n))}),g=({bem:t})=>s("svg",{className:a(t("circular")),viewBox:"25 25 50 50",children:s("circle",{cx:"50",cy:"50",r:"20",fill:"none"})}),v=({bem:t})=>O("div",{className:a(t("ball")),children:[s("div",{}),s("div",{}),s("div",{})]}),D=t=>({spinner:s(S,{bem:t}),circular:s(g,{bem:t}),ball:s(v,{bem:t})}),_=t=>{const{prefixCls:l,createNamespace:n}=d.exports.useContext(N),[e]=n("loading",l),{className:f,type:o,vertical:R,color:r,size:p,textColor:i,children:m,textSize:T}=t,E=d.exports.useMemo(()=>({color:r,...x(p)}),[r,p]),u=()=>m?s("span",{className:a(e("text")),style:{fontSize:C(T),color:i!=null?i:r},children:m}):null;return O("div",{className:a(f,e([o,{vertical:R}])),children:[s("span",{className:a(e("spinner",o)),style:E,children:D(e)[o]}),u()]})};_.defaultProps={type:"circular"};const b=_,$="#fff",c="rc-hairline",M=`${c}--top`,L=`${c}--left`,U=`${c}--bottom`,z=`${c}--surround`,F=`${c}--top-bottom`,j=`${c}-unset--top-bottom`,A="__RC_UI_LIB_COMPONENT",H="rc-haptics-feedback";export{z as B,A as C,H,b as L,$ as W,F as a,j as b,M as c,L as d,c as e,U as f};
