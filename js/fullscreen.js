'use strict';(function(){'use strict';var a='undefined'!=typeof window&&'undefined'!=typeof window.document?window.document:{},b='undefined'!=typeof module&&module.exports,c='undefined'!=typeof Element&&'ALLOW_KEYBOARD_INPUT'in Element,d=function(){for(var g,h=[['requestFullscreen','exitFullscreen','fullscreenElement','fullscreenEnabled','fullscreenchange','fullscreenerror'],['webkitRequestFullscreen','webkitExitFullscreen','webkitFullscreenElement','webkitFullscreenEnabled','webkitfullscreenchange','webkitfullscreenerror'],['webkitRequestFullScreen','webkitCancelFullScreen','webkitCurrentFullScreenElement','webkitCancelFullScreen','webkitfullscreenchange','webkitfullscreenerror'],['mozRequestFullScreen','mozCancelFullScreen','mozFullScreenElement','mozFullScreenEnabled','mozfullscreenchange','mozfullscreenerror'],['msRequestFullscreen','msExitFullscreen','msFullscreenElement','msFullscreenEnabled','MSFullscreenChange','MSFullscreenError']],j=0,k=h.length,m={};j<k;j++)if(g=h[j],g&&g[1]in a){for(j=0;j<g.length;j++)m[h[0][j]]=g[j];return m}return!1}(),e={change:d.fullscreenchange,error:d.fullscreenerror},f={request:function request(g){var h=d.requestFullscreen;g=g||a.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?g[h]():g[h](c&&Element.ALLOW_KEYBOARD_INPUT)},exit:function exit(){a[d.exitFullscreen]()},toggle:function toggle(g){this.isFullscreen?this.exit():this.request(g)},onchange:function onchange(g){this.on('change',g)},onerror:function onerror(g){this.on('error',g)},on:function on(g,h){var j=e[g];j&&a.addEventListener(j,h,!1)},off:function off(g,h){var j=e[g];j&&a.removeEventListener(j,h,!1)},raw:d};return d?void(Object.defineProperties(f,{isFullscreen:{get:function get(){return!!a[d.fullscreenElement]}},element:{enumerable:!0,get:function get(){return a[d.fullscreenElement]}},enabled:{enumerable:!0,get:function get(){return!!a[d.fullscreenEnabled]}}}),b?module.exports=f:window.screenfull=f):void(b?module.exports=!1:window.screenfull=!1)})();