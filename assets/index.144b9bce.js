import{r as s,a as o,j as e}from"./react-libs.44673a99.js";import{c as C}from"./rc-cli_site-mobile-demo.ce60b371.js";import"./index.480ed395.js";import{i as t,j as p}from"./Watermark.dcb2a79d.js";import"./index.13648a01.js";import{a as E}from"./index.489cba37.js";import{C as d}from"./index.e7687415.js";import"./index.8f8c982e.js";import"./constant.7b24af74.js";import"./Rate.fd4178e6.js";import"./TextEllipsis.e35b87ce.js";import"./index.e705ead8.js";import"./ConfigProviderContext.7a187239.js";import"./locales.fc745e15.js";import"./mobile.d3589cb2.js";import"./use-event-listener.ea22182e.js";import"./use-touch.58689077.js";const r=[{text:"\u5168\u90E8\u5546\u54C1",value:0},{text:"\u65B0\u6B3E\u5546\u54C1",value:1,icon:"location-o"},{text:"\u6D3B\u52A8\u5546\u54C1",value:2}],l=[{text:"\u9ED8\u8BA4\u6392\u5E8F",value:"a"},{text:"\u597D\u8BC4\u6392\u5E8F",value:"b"},{text:"\u9500\u91CF\u6392\u5E8F",value:"c"}],f=()=>new Array(30).fill(1).map((a,n)=>({text:`scroll${n}`,value:`${n}`})),M=()=>{const[m,a]=s.exports.useState({}),n=s.exports.useRef(null),{DemoBlock:i,DemoSection:h}=C,x=u=>{var c;t(u),(c=n.current)==null||c.close()};return o(h,{className:"demo-badge",children:[e(i,{title:"\u57FA\u7840\u7528\u6CD5",children:o(t,{onChange:u=>{console.log(u)},children:[e(t.Item,{name:"item1",defaultValue:{text:"\u5168\u90E8\u5546\u54C1",value:0},value:m,options:r,onChange:u=>a(u)}),e(t.Item,{name:"item2",defaultValue:{text:"\u9ED8\u8BA4\u6392\u5E8F",value:"a"},value:m,options:l,onChange:u=>a(u)})]})}),e(i,{title:"\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9",children:o(t,{ref:n,children:[e(t.Item,{name:"item1",options:r}),o(t.Item,{title:"\u7B5B\u9009",name:"item2",children:[e(d,{center:!0,title:"\u5305\u90AE",rightIcon:e(p,{size:24})}),e(d,{center:!0,title:"\u56E2\u8D2D",rightIcon:e(p,{size:24})}),e("div",{style:{height:"40px",paddingTop:"20px",paddingRight:"15px",paddingBottom:"20px",paddingLeft:"15px"},children:e(E,{type:"danger",block:!0,round:!0,onClick:x,children:"\u786E\u5B9A"})})]})]})}),e(i,{title:"\u81EA\u5B9A\u4E49\u9009\u4E2D\u989C\u8272",children:o(t,{activeColor:"#1900ff",zIndex:"3000",children:[e(t.Item,{name:"item1",options:r,teleport:document.body}),e(t.Item,{name:"item2",options:l})]})}),e(i,{title:"\u5411\u4E0A\u5C55\u5F00",children:o(t,{direction:"up",activeColor:"#1900ff",children:[e(t.Item,{name:"item1",options:r}),e(t.Item,{name:"item2",options:l})]})}),e(i,{title:"\u7981\u7528\u83DC\u5355",children:o(t,{children:[e(t.Item,{disabled:!0,name:"item1",options:r}),e(t.Item,{disabled:!0,name:"item2",options:l})]})}),e(i,{title:"\u6EDA\u52A8",children:e(t,{direction:"up",children:e(t.Item,{name:"item1",options:f()})})})]})};export{M as default};
