"use strict";(self.webpackChunkk3d=self.webpackChunkk3d||[]).push([[456],{9456:(e,n,l)=>{l.r(n),l.d(n,{default:()=>u});const r=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],c=(()=>{if("undefined"==typeof document)return!1;const e=r[0],n={};for(const l of r){const r=l?.[1];if(r in document){for(const[r,c]of l.entries())n[e[r]]=c;return n}}return!1})(),t={change:c.fullscreenchange,error:c.fullscreenerror};let s={request:(e=document.documentElement,n)=>new Promise(((l,r)=>{const t=()=>{s.off("change",t),l()};s.on("change",t);const u=e[c.requestFullscreen](n);u instanceof Promise&&u.then(t).catch(r)})),exit:()=>new Promise(((e,n)=>{if(!s.isFullscreen)return void e();const l=()=>{s.off("change",l),e()};s.on("change",l);const r=document[c.exitFullscreen]();r instanceof Promise&&r.then(l).catch(n)})),toggle:(e,n)=>s.isFullscreen?s.exit():s.request(e,n),onchange(e){s.on("change",e)},onerror(e){s.on("error",e)},on(e,n){const l=t[e];l&&document.addEventListener(l,n,!1)},off(e,n){const l=t[e];l&&document.removeEventListener(l,n,!1)},raw:c};Object.defineProperties(s,{isFullscreen:{get:()=>Boolean(document[c.fullscreenElement])},element:{enumerable:!0,get:()=>document[c.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>Boolean(document[c.fullscreenEnabled])}}),c||(s={isEnabled:!1});const u=s}}]);