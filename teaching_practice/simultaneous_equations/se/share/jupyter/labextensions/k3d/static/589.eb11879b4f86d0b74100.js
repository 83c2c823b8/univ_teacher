(self.webpackChunkk3d=self.webpackChunkk3d||[]).push([[589],{3589:function(e,t,n){var o,a;void 0===(a="function"==typeof(o=function(){"use strict";function t(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){c(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,r=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(e,n,r){var c=i.URL||i.webkitURL,s=document.createElement("a");n=n||e.name||"download",s.download=n,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?a(s):o(s.href)?t(e,n,r):a(s,s.target="_blank")):(s.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(s.href)}),4e4),setTimeout((function(){a(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,i),n);else if(o(e))t(e,n,i);else{var r=document.createElement("a");r.href=e,r.target="_blank",setTimeout((function(){a(r)}))}}:function(e,n,o,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,o);var c="application/octet-stream"===e.type,s=/constructor/i.test(i.HTMLElement)||i.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||c&&s||r)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},u.readAsDataURL(e)}else{var f=i.URL||i.webkitURL,d=f.createObjectURL(e);a?a.location=d:location.href=d,a=null,setTimeout((function(){f.revokeObjectURL(d)}),4e4)}});i.saveAs=c.saveAs=c,e.exports=c})?o.apply(t,[]):o)||(e.exports=a)}}]);