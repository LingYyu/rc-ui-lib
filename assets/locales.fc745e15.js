(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();const h="modulepreload",m=function(o,n){return new URL(o,n).href},u={},L=function(n,r,s){return!r||r.length===0?n():Promise.all(r.map(t=>{if(t=m(t,s),t in u)return;u[t]=!0;const e=t.endsWith(".css"),c=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${c}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":h,e||(i.as="script",i.crossOrigin=""),i.href=t,document.head.appendChild(i),e)return new Promise((l,d)=>{i.addEventListener("load",l),i.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>n())},p=navigator.userAgent.toLowerCase(),S=/ios|iphone|ipod|ipad|android/.test(p);function w(o,n="-"){return o.replace(/([a-z\d])([A-Z])/g,`$1${n}$2`).replace(/([A-Z]+)([A-Z][a-z\d]+)/g,`$1${n}$2`).toLowerCase()}var f={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(o){(function(){var n={}.hasOwnProperty;function r(){for(var s=[],t=0;t<arguments.length;t++){var e=arguments[t];if(!!e){var c=typeof e;if(c==="string"||c==="number")s.push(e);else if(Array.isArray(e)){if(e.length){var i=r.apply(null,e);i&&s.push(i)}}else if(c==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){s.push(e.toString());continue}for(var l in e)n.call(e,l)&&e[l]&&s.push(l)}}}return s.join(" ")}o.exports?(r.default=r,o.exports=r):window.classNames=r})()})(f);const $=f.exports,g="zh-CN",v="en-US",y="vant-cli-lang";let a=g;function C(){return a}function A(o){const n=localStorage.getItem(y);if(n){a=n;return}a=o||v}export{L as _,$ as c,w as d,C as g,S as i,A as s};
