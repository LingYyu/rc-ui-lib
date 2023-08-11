import{r as f,R as z,a as E,j as d}from"./react-libs.513007de.js";import{c as o}from"./locales.fc745e15.js";import{a as I}from"./index.b2a8bc00.js";import{B as O,W as L,L as S}from"./constant.382f3d18.js";import{C as b}from"./ConfigProviderContext.ed273b22.js";const C=e=>{const{tag:u,type:r,color:n,plain:a,disabled:i,loading:l,hairline:m,className:N,iconPrefix:h,loadingText:y,iconPosition:x}=e,{prefixCls:B,createNamespace:k}=f.exports.useContext(b),[s]=k("button",B),P=o(N,s([r,e.size,{plain:a,loading:l,disabled:i,hairline:m,block:e.block,round:e.round,square:e.square,shadow:e.shadow,[`shadow-${+e.shadow}`]:e.shadow}]),{[O]:m}),c={...e.style};n&&(c.color=a?n:L,a||(c.background=n),n.indexOf("gradient")!==-1?c.border=0:c.borderColor=n);function R(t){!l&&!i&&e.onClick&&e.onClick(t)}const v=()=>{if(l){const{loadingSize:t="20px",loadingType:j}=e;return d(S,{className:o(s("loading")),size:t,type:j,color:r==="default"?void 0:""})}return null},g=()=>e.loading?v():typeof e.icon=="string"?d(I,{name:e.icon,className:o(s("icon")),classPrefix:h}):f.exports.isValidElement(e.icon)?e.icon:null,w=()=>{let t;return l?t=y:t=e.children||e.text,t?d("span",{className:o(s("text")),children:t},"text"):null},T=()=>E("div",{className:o(s("content")),children:[x==="left"&&g(),w(),x==="right"&&g()]});return z.createElement(u,{style:c,className:P,type:e.nativeType,disabled:i,onClick:R},T())};C.defaultProps={size:"normal",type:"default",tag:"button",iconPosition:"left"};const q=({className:e,style:u,children:r})=>{const{prefixCls:n,createNamespace:a}=f.exports.useContext(b),[i]=a("button-group",n);return d("div",{style:u,className:o(e,i()),children:r})},D=Object.assign(C,{Group:q}),V=D;export{D as B,V as a};
