import{r as o,a as d,j as e}from"./react-libs.513007de.js";import{c as s}from"./rc-cli_site-mobile-demo.203e14c7.js";import"./index.04a2bc9a.js";import{D as a,F as p}from"./Uploader.20929da2.js";import"./index.b2a8bc00.js";import"./index.c6871036.js";import{T as E,P as w}from"./index.f78b1094.js";import"./index.6309d016.js";import"./constant.382f3d18.js";import"./Rate.4ef94079.js";import"./TextEllipsis.263e4d6b.js";import"./index.666defff.js";import"./ConfigProviderContext.ed273b22.js";import"./locales.fc745e15.js";import"./mobile.195d2672.js";import"./use-event-listener.b568d872.js";import"./use-touch.89e2aa83.js";const T=()=>{const{DemoBlock:r,DemoSection:l}=s,[m,D]=o.exports.useState(""),[c,n]=o.exports.useState(!1);return d(l,{children:[e(r,{card:!0,title:"\u9009\u62E9\u5E74\u6708\u65E5",children:e(a,{title:"\u9009\u62E9\u5E74\u6708\u65E5",type:"date",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:new Date,onChange:t=>console.log(t)})}),e(r,{card:!0,title:"\u9009\u62E9\u5E74\u6708",children:e(a,{type:"year-month",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:new Date,formatter:(t,u)=>t==="year"?`${u}\u5E74`:t==="month"?`${u}\u6708`:u,onChange:t=>console.log(t)})}),e(r,{card:!0,title:"\u9009\u62E9\u6708\u65E5",children:e(a,{type:"month-day",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:new Date,formatter:(t,u)=>t==="month"?`${u}\u6708`:t==="day"?`${u}\u65E5`:u})}),e(r,{card:!0,title:"\u9009\u62E9\u65F6\u95F4",children:e(a,{type:"time",minHour:"10",maxHour:"20",value:"12:00",onChange:t=>console.log(t),onConfirm:t=>console.log(t)})}),e(r,{card:!0,title:"\u9009\u62E9\u5B8C\u6574\u65F6\u95F4",children:e(a,{type:"datetime",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:new Date})}),e(r,{card:!0,title:"\u9009\u62E9\u5E74\u6708\u65E5\u5C0F\u65F6",children:e(a,{type:"datehour",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:new Date})}),e(r,{card:!0,title:"\u9009\u62E9\u8FC7\u6EE4\u5668",children:e(a,{type:"time",minHour:"10",maxHour:"20",value:"12:00",filter:(t,u)=>t==="minute"?u.filter(i=>+i%5===0):u})}),e(r,{card:!0,title:"\u81EA\u5B9A\u4E49\u5217\u6392\u5E8F",children:e(a,{type:"date",columnsOrder:["month","day","year"],minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:new Date})}),e(r,{card:!0,title:"\u786E\u8BA4\u6309\u94AE",children:e(a,{onConfirm:t=>E(`\u786E\u8BA4\u7684\u65E5\u671F\uFF1A${t}`),type:"date",minDate:new Date(2021,0,1),maxDate:new Date(2021,2,1),value:new Date})}),e(r,{card:!0,title:"\u642D\u914D\u5F39\u51FA\u5C42\u4F7F\u7528",children:e(p,{readonly:!0,clickable:!0,label:"\u65E5\u671F",value:m,placeholder:"\u9009\u62E9\u9009\u62E9\u65E5\u671F",onClick:()=>n(!0)})}),e(w,{title:"\u8BF7\u9009\u62E9\u65E5\u671F",closeable:!0,visible:c,round:!0,position:"bottom",onClose:()=>n(!1),children:e("div",{style:{padding:"0 8px"},children:e(a,{onConfirm:t=>{D(t.toISOString()),n(!1)},type:"date",filter:(t,u)=>t==="minute"?u.filter(i=>+i%5===0):u,minDate:new Date(2021,0,1),maxDate:new Date(2021,2,1),value:new Date})})})]})};export{T as default};
