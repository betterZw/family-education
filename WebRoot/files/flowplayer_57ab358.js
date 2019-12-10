define("common:widget/x-zm-player/libs/flowplayer-5.5.2/flowplayer.js",function(){!function(e){function n(n,t,i){i=i||"transparent";var o="obj"+(""+Math.random()).slice(2,15),a='<object class="fp-engine" id="'+o+'" name="'+o+'" ';a+=e.browser.msie?'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">':' data="'+n+'" type="application/x-shockwave-flash">';var r={width:"100%",height:"100%",allowscriptaccess:"always",wmode:i,quality:"high",flashvars:"",movie:n+(e.browser.msie?"?"+o:""),name:o};return e.each(t,function(e,n){r.flashvars+=e+"="+n+"&"}),e.each(r,function(e,n){a+='<param name="'+e+'" value="'+n+'"/>'}),a+="</object>",e(a)}function t(e,n){return n=n||100,Math.round(e*n)/n}function i(e){return/mpegurl/i.test(e)?"application/x-mpegurl":"video/"+e}function o(e){return/^(video|application)/i.test(e)||(e=i(e)),!!b.canPlayType(e).replace("no","")}function a(n,t){var i=e.grep(n,function(e){return e.type===t});return i.length?i[0]:null}function r(e){var n=e.attr("src"),t=e.attr("type")||"",i=n.split(x)[1];return t=/mpegurl/i.test(t)?"mpegurl":t.replace("video/",""),{src:n,suffix:i||t,type:t||i}}function s(n){var t=this,i=[];e("source",n).each(function(){i.push(r(e(this)))}),i.length||i.push(r(n)),t.initialSources=i,t.resolve=function(n){return n?(e.isArray(n)?n={sources:e.map(n,function(n){var t,i=e.extend({},n);return e.each(n,function(e){t=e}),i.type=t,i.src=n[t],delete i[t],i})}:"string"==typeof n&&(n={src:n,sources:[]},e.each(i,function(e,t){"flash"!=t.type&&n.sources.push({type:t.type,src:n.src.replace(x,"."+t.suffix+"$2")})})),n):{sources:i}}}function l(e){return e=parseInt(e,10),e>=10?e:"0"+e}function u(e){e=e||0;var n=Math.floor(e/3600),t=Math.floor(e/60);return e-=60*t,n>=1?(t-=60*n,n+":"+l(t)+":"+l(e)):l(t)+":"+l(e)}!function(e){if(!e.browser){var n=e.browser={},t=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(t)||/(safari)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];i[1]&&(n[i[1]]=!0,n.version=i[2]||"0")}}(jQuery),e(function(){if("function"==typeof e.fn.flowplayer){var n=e("video").parent(".flowplayer");n.flowplayer()}});var d=[],c=[],f=window.navigator.userAgent;window.flowplayer=function(n){return e.isFunction(n)?c.push(n):"number"==typeof n||void 0===n?d[n||0]:e(n).data("flowplayer")},e(window).on("beforeunload",function(){e.each(d,function(n,t){t.conf.splash?t.unload():t.bind("error",function(){e(".flowplayer.is-error .fp-message").remove()})})});var p=!1;try{"object"==typeof window.localStorage&&(window.localStorage.flowplayerTestStorage="test",p=!0)}catch(v){}var g=/Safari/.exec(navigator.userAgent)&&!/Chrome/.exec(navigator.userAgent);m=/(\d+\.\d+) Safari/.exec(navigator.userAgent),safariVersion=m?Number(m[1]):100,e.extend(flowplayer,{version:"5.5.2",engine:{},conf:{},support:{},defaults:{debug:!1,disabled:!1,engine:"html5",fullscreen:window==window.top,keyboard:!0,ratio:9/16,adaptiveRatio:!1,flashfit:!1,rtmp:0,splash:!1,live:!1,swf:"//releases.flowplayer.org/5.5.2/flowplayer.swf",speeds:[.25,.5,1,1.5,2],tooltip:!0,volume:p?"true"==localStorage.muted?0:isNaN(localStorage.volume)?1:localStorage.volume||1:1,errors:["","Video loading aborted","Network error","Video not properly encoded","Video file not found","Unsupported video","Skin not found","SWF file not found","Subtitles not found","Invalid RTMP URL","Unsupported video format. Try installing Adobe Flash."],errorUrls:["","","","","","","","","","","http://get.adobe.com/flashplayer/"],playlist:[],hlsFix:g&&8>safariVersion}});var h=1;e.fn.flowplayer=function(n,t){return"string"==typeof n&&(n={swf:n}),e.isFunction(n)&&(t=n,n={}),!n&&this.data("flowplayer")||this.each(function(){var i,o,a=e(this).addClass("is-loading"),r=e.extend({},flowplayer.defaults,flowplayer.conf,n,a.data()),l=e("video",a).addClass("fp-engine").removeAttr("controls"),u=l.length?new s(l):null,f={};if(r.playlist.length){var v,g=r.preload||l.attr("preload");l.length&&l.replaceWith(v=e("<p />")),l=e("<video />").addClass("fp-engine"),v?v.replaceWith(l):a.prepend(l),flowplayer.support.video&&l.attr("preload",g),"string"==typeof r.playlist[0]?l.attr("src",r.playlist[0]):e.each(r.playlist[0],function(n,t){for(var i in t)t.hasOwnProperty(i)&&l.append(e("<source />").attr({type:"video/"+i,src:t[i]}))}),u=new s(l)}var m=a.data("flowplayer");m&&m.unload(),a.data("fp-player_id",a.data("fp-player_id")||h++);try{f=p?window.localStorage:f}catch(y){}var b=this.currentStyle&&"rtl"===this.currentStyle.direction||window.getComputedStyle&&"rtl"===window.getComputedStyle(this,null).getPropertyValue("direction");b&&a.addClass("is-rtl");var w=m||{conf:r,currentSpeed:1,volumeLevel:"undefined"==typeof r.volume?1*f.volume:r.volume,video:{},disabled:!1,finished:!1,loading:!1,muted:"true"==f.muted||r.muted,paused:!1,playing:!1,ready:!1,splash:!1,rtl:b,load:function(n,t){if(!(w.error||w.loading||w.disabled)){if(n=u.resolve(n),e.extend(n,o.pick(n.sources)),n.src){var i=e.Event("load");a.trigger(i,[w,n,o]),i.isDefaultPrevented()?w.loading=!1:(o.load(n),e.isFunction(n)&&(t=n),t&&a.one("ready",t))}return w}},pause:function(e){return!w.ready||w.seeking||w.disabled||w.loading||(o.pause(),w.one("pause",e)),w},resume:function(){return w.ready&&w.paused&&!w.disabled&&(o.resume(),w.finished&&(w.trigger("resume",[w]),w.finished=!1)),w},toggle:function(){return w.ready?w.paused?w.resume():w.pause():w.load()},seek:function(n,t){if(w.ready&&!w.live){if("boolean"==typeof n){var r=.1*w.video.duration;n=w.video.time+(n?r:-r)}n=i=Math.min(Math.max(n,0),w.video.duration).toFixed(1);var s=e.Event("beforeseek");a.trigger(s,[w,n]),s.isDefaultPrevented()?(w.seeking=!1,a.toggleClass("is-seeking",w.seeking)):(o.seek(n),e.isFunction(t)&&a.one("seek",t))}return w},seekTo:function(e,n){var t=void 0===e?i:.1*w.video.duration*e;return w.seek(t,n)},mute:function(e){return void 0===e&&(e=!w.muted),f.muted=w.muted=e,f.volume=isNaN(f.volume)?r.volume:f.volume,w.volume(e?0:f.volume,!0),w.trigger("mute",e),w},volume:function(e,n){return w.ready&&(e=Math.min(Math.max(e,0),1),n||(f.volume=e),o.volume(e)),w},speed:function(n,t){return w.ready&&("boolean"==typeof n&&(n=r.speeds[e.inArray(w.currentSpeed,r.speeds)+(n?1:-1)]||w.currentSpeed),o.speed(n),t&&a.one("speed",t)),w},stop:function(){return w.ready&&(w.pause(),w.seek(0,function(){a.trigger("stop")})),w},unload:function(){return a.hasClass("is-embedding")||(r.splash?(w.trigger("unload"),o.unload()):w.stop()),w},disable:function(e){return void 0===e&&(e=!w.disabled),e!=w.disabled&&(w.disabled=e,w.trigger("disable",e)),w}};w.conf=e.extend(w.conf,r),e.each(["bind","one","unbind"],function(e,n){w[n]=function(e,t){return a[n](e,t),w}}),w.trigger=function(e,n){return a.trigger(e,[w,n]),w},a.data("flowplayer")||a.bind("boot",function(){return e.each(["autoplay","loop","preload","poster"],function(e,n){var t=l.attr(n);void 0!==t&&(r[n]=t?t:!0)}),(r.splash||a.hasClass("is-splash")||!flowplayer.support.firstframe)&&(w.forcedSplash=!r.splash&&!a.hasClass("is-splash"),w.splash=r.splash=r.autoplay=!0,a.addClass("is-splash"),flowplayer.support.video&&l.attr("preload","none")),(r.live||a.hasClass("is-live"))&&(w.live=r.live=!0,a.addClass("is-live")),e.each(c,function(){this(w,a)}),o=flowplayer.engine[r.engine],o&&(o=o(w,a)),o.pick(u.initialSources)?w.engine=r.engine:e.each(flowplayer.engine,function(e){return e!=r.engine&&(o=this(w,a),o.pick(u.initialSources))?(w.engine=e,!1):void 0}),d.push(w),w.engine?(r.splash?w.unload():w.load(),r.disabled&&w.disable(),o.volume(w.volumeLevel),void a.one("ready",t)):w.trigger("error",{code:flowplayer.support.flashVideo?5:10})}).bind("load",function(n,t){r.splash&&e(".flowplayer").filter(".is-ready, .is-loading").not(a).each(function(){var n=e(this).data("flowplayer");n.conf.splash&&n.unload()}),a.addClass("is-loading"),t.loading=!0}).bind("ready",function(e,n,t){function i(){a.removeClass("is-loading"),n.loading=!1}t.time=0,n.video=t,r.splash?a.one("progress",i):i(),n.muted?n.mute(!0):n.volume(n.volumeLevel);var o=n.conf.hlsFix&&/mpegurl/i.exec(t.type);a.toggleClass("hls-fix",!!o)}).bind("unload",function(){r.splash&&l.remove(),a.removeClass("is-loading"),w.loading=!1}).bind("ready unload",function(e){var n="ready"==e.type;a.toggleClass("is-splash",!n).toggleClass("is-ready",n),w.ready=n,w.splash=!n}).bind("progress",function(e,n,t){n.video.time=t}).bind("speed",function(e,n,t){n.currentSpeed=t}).bind("volume",function(e,n,t){n.volumeLevel=Math.round(100*t)/100,n.muted?t&&n.mute(!1):f.volume=t}).bind("beforeseek seek",function(e){w.seeking="beforeseek"==e.type,a.toggleClass("is-seeking",w.seeking)}).bind("ready pause resume unload finish stop",function(e,n,t){w.paused=/pause|finish|unload|stop/.test(e.type),"ready"==e.type&&(w.paused="none"==r.preload,t&&(w.paused=!t.duration||!r.autoplay&&"none"!=r.preload)),w.playing=!w.paused,a.toggleClass("is-paused",w.paused).toggleClass("is-playing",w.playing),w.load.ed||w.pause()}).bind("finish",function(){w.finished=!0}).bind("error",function(){l.remove()}),a.trigger("boot",[w,a]).data("flowplayer",w)})},!function(){var n=function(e){var n=/Version\/(\d\.\d)/.exec(e);return n&&n.length>1?parseFloat(n[1],10):0},t=flowplayer.support,i=e.browser,o=e("<video loop autoplay preload/>")[0],a=navigator.userAgent,r=i.msie||/Trident\/7/.test(a),s=/iPad|MeeGo/.test(a)&&!/CriOS/.test(a),l=/iPad/.test(a)&&/CriOS/.test(a),u=/iP(hone|od)/i.test(a)&&!/iPad/.test(a),d=/Android/.test(a)&&!/Firefox/.test(a),c=/Android/.test(a)&&/Firefox/.test(a),f=/Silk/.test(a),p=/IEMobile/.test(a),v=p?parseFloat(/Windows\ Phone\ (\d+\.\d+)/.exec(a)[1],10):0,g=p?parseFloat(/IEMobile\/(\d+\.\d+)/.exec(a)[1],10):0,m=(s?n(a):0,d?parseFloat(/Android\ (\d\.\d)/.exec(a)[1],10):0);e.extend(t,{subtitles:!!o.addTextTrack,fullscreen:"function"==typeof document.webkitCancelFullScreen&&!/Mac OS X 10_5.+Version\/5\.0\.\d Safari/.test(a)||document.mozFullScreenEnabled||"function"==typeof document.exitFullscreen||"function"==typeof document.msExitFullscreen,inlineBlock:!(r&&i.version<8),touch:"ontouchstart"in window,dataload:!s&&!u&&!p,zeropreload:!r&&!d,volume:!(s||d||u||f||l),cachedVideoTag:!(s||u||l||p),firstframe:!(u||s||d||f||l||p||c),inlineVideo:!u&&(!p||v>=8.1&&g>=11)&&(!d||m>=3),hlsDuration:!d&&(!i.safari||s||u||l),seekable:!s&&!l});try{var h=navigator.plugins["Shockwave Flash"],y=r?new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version"):h.description;r||h[0].enabledPlugin?(y=y.split(/\D+/),y.length&&!y[0]&&(y=y.slice(1)),t.flashVideo=y[0]>9||9==y[0]&&y[3]>=115):t.flashVideo=!1}catch(b){}try{t.video=!!o.canPlayType,t.video&&o.canPlayType("video/mp4")}catch(w){t.video=!1}t.animation=function(){for(var n=["","Webkit","Moz","O","ms","Khtml"],t=e("<p/>")[0],i=0;i<n.length;i++)if("undefined"!==t.style[n[i]+"AnimationName"])return!0}()}(),window.attachEvent&&window.attachEvent("onbeforeunload",function(){__flash_savedUnloadHandler=__flash_unloadHandler=function(){}}),flowplayer.engine.flash=function(t,i){var o,a,r,s=t.conf,l=(t.video,e(window)),u=function(){if("webkit"==_||P){var n=e("object param[name='flashvars']",i),o=(n.attr("value")||"").split("&");e.each(o,function(e,i){return i=i.split("="),"url"==i[0]&&i[1]!=t.video.url?(o[e]="url="+t.video.url,n.attr({value:o.join("&")}),!1):void 0})}},d=function(n){var o=i.height(),a=i.width();if(t.conf.flashfit||/full/.test(n.type)){var r,s,u=t.isFullscreen,d=u&&A,c=!flowplayer.support.inlineBlock,f=u?d?screen.width:l.width():a,p=u?d?screen.height:l.height():o,v=0,g=0,m=c?a:"",h=c?o:"";(t.conf.flashfit||"fullscreen"===n.type)&&(r=t.video.width/t.video.height,s=t.video.height/t.video.width,h=Math.max(s*f),m=Math.max(r*p),h=h>p?m*s:h,h=Math.min(Math.round(h),p),m=m>f?h*r:m,m=Math.min(Math.round(m),f),g=Math.max(Math.round((p+g-h)/2),0),v=Math.max(Math.round((f+v-m)/2),0)),e("object",i).css({width:m,height:h,marginTop:g,marginLeft:v})}},c={pick:function(n){if(flowplayer.support.flashVideo){var t=e.grep(n,function(e){return"flash"==e.type})[0];if(t)return t;for(var i,o=0;o<n.length;o++)if(i=n[o],/mp4|flv/i.test(i.type))return i}},load:function(l){function c(e){return e.replace(/&amp;/g,"%26").replace(/&/g,"%26").replace(/=/g,"%3D")}var f=e("video",i),p=c(l.src);is_absolute=/^https?:/.test(p);var v=function(){f.remove()},g=function(n){return e.grep(n,function(e){return!!f[0].canPlayType("video/"+e.type)}).length>0};if(flowplayer.support.video&&f.prop("autoplay")&&g(l.sources)?f.one("timeupdate",v):v(),is_absolute||s.rtmp||(p=e("<img/>").attr("src",p)[0].src),r)r.__play(p);else{t.bind("ready",u).bind("ready fullscreen fullscreen-exit",d),o="fp"+(""+Math.random()).slice(3,15);var m={hostname:s.embedded?s.hostname:location.hostname,url:p,callback:"jQuery."+o};i.data("origin")&&(m.origin=i.data("origin")),is_absolute&&delete s.rtmp,e.each(["key","autoplay","preload","rtmp","subscribe","live","loop","debug","splash","poster","rtmpt"],function(e,n){s.hasOwnProperty(n)&&(m[n]=s[n])}),void 0!==s.bufferTime&&(m.bufferTime=s.bufferTime),m.rtmp&&(m.rtmp=c(m.rtmp)),m.initialVolume=t.volumeLevel,a=n(s.swf,m,s.wmode),a.prependTo(i),r=a[0],setTimeout(function(){try{if(!r.PercentLoaded())return i.trigger("error",[t,{code:7,url:s.swf}])}catch(e){}},5e3),setTimeout(function(){"undefined"==typeof r.PercentLoaded&&i.trigger("flashdisabled",[t])},1e3),r.pollInterval=setInterval(function(){if(r){var e=r.__status?r.__status():null;e&&(t.trigger("progress",e.time),l.buffer=e.buffer/l.bytes*l.duration,t.trigger("buffer",l.buffer),!l.buffered&&e.time>0&&(l.buffered=!0,t.trigger("buffered")))}},250),e[o]=function(n,i){s.debug;var o=e.Event(n);switch(n){case"ready":i=e.extend(l,i);break;case"click":o.flash=!0;break;case"keydown":o.which=i;break;case"seek":l.time=i}"buffered"!=n&&setTimeout(function(){t.trigger(o,i)},1)}}},speed:e.noop,unload:function(){r&&r.__unload&&r.__unload(),delete e[o],e("object",i).remove(),r=0,t.unbind("ready",u).unbind("ready fullscreen fullscreen-exit",d),clearInterval(r.pollInterval)}};return e.each("pause,resume,seek,volume".split(","),function(e,n){c[n]=function(e){try{t.ready&&("seek"==n&&t.video.time&&!t.paused&&t.trigger("beforeseek"),void 0===e?r["__"+n]():r["__"+n](e))}catch(o){if("undefined"==typeof r["__"+n])return i.trigger("flashdisabled",[t]);throw o}}}),c};var y,b=e("<video/>")[0],w={ended:"finish",pause:"pause",play:"resume",progress:"buffer",timeupdate:"progress",volumechange:"volume",ratechange:"speed",seeked:"seek",loadeddata:"ready",error:"error",dataunavailable:"error"},k=function(n){return y?y.attr({type:i(n.type),src:n.src}):y=e("<video/>",{src:n.src,type:i(n.type),"class":"fp-engine",autoplay:"autoplay",preload:"none","x-webkit-airplay":"allow"})};flowplayer.engine.html5=function(n,i){function r(a,r,s){a.listeners&&a.listeners.hasOwnProperty(i.data("fp-player_id"))||((a.listeners||(a.listeners={}))[i.data("fp-player_id")]=!0,r.bind("error",function(t){try{if(t.originalEvent&&e(t.originalEvent.originalTarget).is("img"))return t.preventDefault();o(e(t.target).attr("type"))&&n.trigger("error",{code:4})}catch(i){}}),e.each(w,function(o,r){a.addEventListener(o,function(u){if("progress"==r&&u.srcElement&&0===u.srcElement.readyState&&setTimeout(function(){n.video.duration||n.conf.live&&("mpegurl"!==n.video.type||!f.hlsDuration)||(r="error",n.trigger(r,{code:4}))},1e4),p.debug&&!/progress/.test(r),(n.ready||/ready|error/.test(r))&&r&&e("video",i).length){var d,c=e.Event(r);switch(r){case"ready":d=e.extend(s,{duration:a.duration,width:a.videoWidth,height:a.videoHeight,url:a.currentSrc,src:a.currentSrc});try{d.seekable=!p.live&&/mpegurl/i.test(s?s.type||"":"")&&a.duration||a.seekable&&a.seekable.end(null)}catch(v){}if(l=l||setInterval(function(){try{d.buffer=a.buffered.end(null)}catch(e){}d.buffer&&(t(d.buffer,1e3)<t(d.duration,1e3)&&!d.buffered?n.trigger("buffer",u):d.buffered||(d.buffered=!0,n.trigger("buffer",u).trigger("buffered",u),clearInterval(l),l=0))},250),!p.live&&!d.duration&&!f.hlsDuration&&"loadeddata"===o){var g=function(){d.duration=a.duration;try{d.seekable=a.seekable&&a.seekable.end(null)}catch(e){}n.trigger(c,d),a.removeEventListener("durationchange",g)};return void a.addEventListener("durationchange",g)}break;case"progress":case"seek":{n.video.duration}if(a.currentTime>0||n.live){d=Math.max(a.currentTime,0);break}if("progress"==r)return;case"speed":d=t(a.playbackRate);break;case"volume":d=t(a.volume);break;case"error":try{d=(u.srcElement||u.originalTarget).error}catch(m){return}}n.trigger(c,d)}},!1)}))}var s,l,u,d,c=e("video",i),f=flowplayer.support,p=(e("track",c),n.conf);return s={pick:function(e){if(f.video){if(p.videoTypePreference){var n=a(e,p.videoTypePreference);if(n)return n}for(var t=0;t<e.length;t++)if(o(e[t].type))return e[t]}},load:function(t){if(p.splash&&!u)c=k(t).prependTo(i),f.inlineVideo||c.css({position:"absolute",top:"-9999em"}),p.loop&&c.attr("loop","loop"),u=c[0],"undefined"!=typeof d&&(u.volume=d);else{u=c[0];var o=c.find("source");!u.src&&o.length&&(u.src=t.src,o.remove()),n.video.src&&t.src!=n.video.src?(c.attr("autoplay","autoplay"),u.src=t.src):"none"!=p.preload&&f.dataload||(f.zeropreload?n.trigger("ready",t).trigger("pause").one("ready",function(){i.trigger("resume",[n])}):n.one("ready",function(){i.trigger("pause",[n])}))}r(u,e("source",c).add(c),t),("none"!=p.preload&&"mpegurl"!=t.type||!f.zeropreload||!f.dataload)&&u.load(),p.splash&&u.load()},pause:function(){u.pause()},resume:function(){u.play()},speed:function(e){u.playbackRate=e},seek:function(e){try{var t=n.paused;u.currentTime=e,t&&u.pause()}catch(i){}},volume:function(e){d=e,u&&(u.volume=e)},unload:function(){e("video.fp-engine",i).remove(),f.cachedVideoTag||(y=null),l=clearInterval(l),u=0}}};var x=/\.(\w{3,4})(\?.*)?$/i;e.throttle=function(e,n){var t;return function(){t||(e.apply(this,arguments),t=1,setTimeout(function(){t=0},n))}},e.fn.slider2=function(n){var t=/iPad/.test(navigator.userAgent)&&!/CriOS/.test(navigator.userAgent);return this.each(function(){var i,o,a,r,s,l,u,d,c=e(this),f=e(document),p=c.children(":last"),v=!1,g=function(){o=c.offset(),a=c.width(),r=c.height(),l=s?r:a,d=b(u)},m=function(e){i||e==w.value||u&&!(u>e)||(c.trigger("slide",[e]),w.value=e)},h=function(e){var t=e.pageX;!t&&e.originalEvent&&e.originalEvent.touches&&e.originalEvent.touches.length&&(t=e.originalEvent.touches[0].pageX);var i=s?e.pageY-o.top:t-o.left;i=Math.max(0,Math.min(d||l,i));var a=i/l;return s&&(a=1-a),n&&(a=1-a),y(a,0,!0)},y=function(e,n){void 0===n&&(n=0),e>1&&(e=1);var i=Math.round(1e3*e)/10+"%";return(!u||u>=e)&&(t||v||p.stop(),v?p.css("width",i):p.animate(s?{height:i}:{width:i},n,"linear")),e},b=function(e){return Math.max(0,Math.min(l,s?(1-e)*r:e*a))},w={max:function(e){u=e},disable:function(e){i=e},slide:function(e,n,t){g(),t&&m(e),y(e,n)},disableAnimation:function(e,n){v=e!==!1,c.toggleClass("no-animation",!!n)}};g(),c.data("api",w).bind("mousedown.sld touchstart",function(n){if(n.preventDefault(),!i){var t=e.throttle(m,100);g(),w.dragging=!0,c.addClass("is-dragging"),m(h(n)),f.bind("mousemove.sld touchmove",function(e){e.preventDefault(),t(h(e))}).one("mouseup touchend",function(){w.dragging=!1,c.removeClass("is-dragging"),f.unbind("mousemove.sld touchmove")})}})})},flowplayer(function(n,t){function i(n){return e(".fp-"+n,t)}function o(n){("0px"===t.css("width")||"0px"===t.css("height")||n!==flowplayer.defaults.ratio)&&(parseInt(y,10)||g.css("paddingTop",100*n+"%")),l.inlineBlock||e("object",t).height(t.height())}function a(e){t.toggleClass("is-mouseover",e).toggleClass("is-mouseout",!e)}var r,s=n.conf,l=flowplayer.support;t.find(".fp-ratio,.fp-ui").remove(),t.addClass("flowplayer").append('      <div class="ratio"/>      <div class="ui">         <div class="waiting"><em/><em/><em/></div>         <a class="fullscreen"/>         <a class="unload"/>         <p class="speed"/>         <div class="controls">            <a class="play"></a>            <div class="timeline">               <div class="buffer"/>               <div class="progress"/>            </div>            <div class="volume">               <a class="mute"></a>               <div class="volumeslider">                  <div class="volumelevel"/>               </div>            </div>         </div>         <div class="time">            <em class="elapsed">00:00</em>            <em class="remaining"/>            <em class="duration">00:00</em>         </div>         <div class="message"><h2/><p/></div>      </div>'.replace(/class="/g,'class="fp-'));var d=i("progress"),c=i("buffer"),f=i("elapsed"),p=i("remaining"),v=i("waiting"),g=i("ratio"),m=i("speed"),h=i("duration"),y=g.css("paddingTop"),b=i("timeline").slider2(n.rtl),w=b.data("api"),k=(i("volume"),i("fullscreen")),x=i("volumeslider").slider2(n.rtl),C=x.data("api"),T=t.is(".fixed-controls, .no-toggle");w.disableAnimation(t.hasClass("is-touch")),l.animation||v.html("<p>loading &hellip;</p>"),o(s.ratio);try{s.fullscreen||k.remove()}catch(S){k.remove()}n.bind("ready",function(){var e=n.video.duration;w.disable(n.disabled||!e),s.adaptiveRatio&&o(n.video.height/n.video.width),h.add(p).html(u(e)),e>=3600&&t.addClass("is-long")||t.removeClass("is-long"),C.slide(n.volumeLevel),"flash"===n.engine&&w.disableAnimation(!0,!0)}).bind("unload",function(){y||g.css("paddingTop","")}).bind("buffer",function(){var e=n.video,t=e.buffer/e.duration;!e.seekable&&l.seekable&&w.max(t),1>t?c.css("width",100*t+"%"):c.css({width:"100%"})}).bind("speed",function(e,n,t){m.text(t+"x").addClass("fp-hilite"),setTimeout(function(){m.removeClass("fp-hilite")},1e3)}).bind("buffered",function(){c.css({width:"100%"}),w.max(1)}).bind("progress",function(){var e=n.video.time,t=n.video.duration;w.dragging||w.slide(e/t,n.seeking?0:250),f.html(u(e)),p.html("-"+u(t-e))}).bind("finish resume seek",function(e){t.toggleClass("is-finished","finish"==e.type)}).bind("stop",function(){f.html(u(0)),w.slide(0,100)}).bind("finish",function(){f.html(u(n.video.duration)),w.slide(1,100),t.removeClass("is-seeking")}).bind("beforeseek",function(){d.stop()}).bind("volume",function(){C.slide(n.volumeLevel)}).bind("disable",function(){var e=n.disabled;w.disable(e),C.disable(e),t.toggleClass("is-disabled",n.disabled)}).bind("mute",function(e,n,i){t.toggleClass("is-muted",i)}).bind("error",function(n,i,o){if(t.removeClass("is-loading").addClass("is-error"),o){o.message=s.errors[o.code],i.error=!0;var a=e(".fp-message",t);e("h2",a).text((i.engine||"html5")+": "+o.message),e("p",a).text(o.url||i.video.url||i.video.src||s.errorUrls[o.code]),t.unbind("mouseenter click").removeClass("is-mouseover")}}).bind("mouseenter mouseleave",function(e){if(!T){var n,i="mouseenter"==e.type;a(i),i?(t.bind("pause.x mousemove.x volume.x",function(){a(!0),n=new Date}),r=setInterval(function(){new Date-n>5e3&&(a(!1),n=new Date)},100)):(t.unbind(".x"),clearInterval(r))}}).bind("mouseleave",function(){(w.dragging||C.dragging)&&t.addClass("is-mouseover").removeClass("is-mouseout")}).bind("click.player",function(t){return e(t.target).is(".fp-ui, .fp-engine")||t.flash?(t.preventDefault(),n.toggle()):void 0}).bind("contextmenu",function(n){n.preventDefault();var i=t.offset(),o=e(window),a=n.clientX-i.left,r=n.clientY-i.top+o.scrollTop(),s=t.find(".fp-context-menu").css({left:a+"px",top:r+"px",display:"block"}).on("click",function(e){e.stopPropagation()});e("html").on("click.outsidemenu",function(){s.hide(),e("html").off("click.outsidemenu")})}).bind("flashdisabled",function(){t.addClass("is-flash-disabled").one("ready",function(){t.removeClass("is-flash-disabled").find(".fp-flash-disabled").remove()}).append('<div class="fp-flash-disabled">Adobe Flash is disabled for this page, click player area to enable.</div>')}),s.poster&&t.css("backgroundImage","url("+s.poster+")");var F=t.css("backgroundColor"),_="none"!=t.css("backgroundImage")||F&&"rgba(0, 0, 0, 0)"!=F&&"transparent"!=F;!_||s.splash||s.autoplay||n.bind("ready stop",function(){t.addClass("is-poster").one("progress",function(){t.removeClass("is-poster")})}),!_&&n.forcedSplash&&t.css("backgroundColor","#555"),e(".fp-toggle, .fp-play",t).click(n.toggle),e.each(["mute","fullscreen","unload"],function(e,t){i(t).click(function(){n[t]()})}),b.bind("slide",function(e,t){n.seeking=!0,n.seek(t*n.video.duration)}),x.bind("slide",function(e,t){n.volume(t)}),i("time").click(function(){e(this).toggleClass("is-inverted")}),a(T)});var C,T,S="is-help";e(document).bind("keydown.fp",function(n){var t=C,i=n.ctrlKey||n.metaKey||n.altKey,o=n.which,a=t&&t.conf;if(t&&a.keyboard&&!t.disabled){if(-1!=e.inArray(o,[63,187,191]))return T.toggleClass(S),!1;if(27==o&&T.hasClass(S))return T.toggleClass(S),!1;if(!i&&t.ready){if(n.preventDefault(),n.shiftKey)return void(39==o?t.speed(!0):37==o&&t.speed(!1));if(58>o&&o>47)return t.seekTo(o-48);switch(o){case 38:case 75:t.volume(t.volumeLevel+.15);break;case 40:case 74:t.volume(t.volumeLevel-.15);break;case 39:case 76:t.seeking=!0,t.seek(!0);break;case 37:case 72:t.seeking=!0,t.seek(!1);break;case 190:t.seekTo();break;case 32:t.toggle();break;case 70:a.fullscreen&&t.fullscreen();break;case 77:t.mute();break;case 81:t.unload()}}}}),flowplayer(function(n,t){if(n.conf.keyboard){t.bind("mouseenter mouseleave",function(e){C=n.disabled||"mouseenter"!=e.type?0:n,C&&(T=t)});{flowplayer.support.video&&"flash"!==n.conf.engine&&e("<video/>")[0].playbackRate?"<p><em>shift</em> + <em>&#8592;</em><em>&#8594;</em>slower / faster</p>":""}}});var F,_=e.browser.mozilla?"moz":"webkit",E="fullscreen",M="fullscreen-exit",A=flowplayer.support.fullscreen,D=("function"==typeof document.exitFullscreen,navigator.userAgent.toLowerCase()),P=/(safari)[ \/]([\w.]+)/.exec(D)&&!/(chrome)[ \/]([\w.]+)/.exec(D);e(document).bind("fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange",function(n){var t=e(document.webkitCurrentFullScreenElement||document.mozFullScreenElement||document.fullscreenElement||document.msFullscreenElement||n.target);t.length&&!F?F=t.trigger(E,[t]):(F.trigger(M,[F]),F=null)}),flowplayer(function(n,t){if(n.conf.fullscreen){var i,o=e(window),a={apply:!1,pos:0,play:!1};n.isFullscreen=!1,n.fullscreen=function(r){if(!n.disabled){if(void 0===r&&(r=!n.isFullscreen),r&&(i=o.scrollTop()),"webkit"!=_&&!P||"flash"!=n.engine||(a={apply:!0,pos:n.video.time,play:n.playing}),A)if(r){var s=t[0];e.each(["requestFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"],function(e,n){return"function"==typeof s[n]?(s[n](Element.ALLOW_KEYBOARD_INPUT),!P||document.webkitCurrentFullScreenElement||document.mozFullScreenElement||s[n](),!1):void 0})}else e.each(["exitFullscreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"],function(e,n){return"function"==typeof document[n]?(document[n](),!1):void 0});else n.trigger(r?E:M,[n]);return n}};var r;t.bind("mousedown.fs",function(){+new Date-r<150&&n.ready&&n.fullscreen(),r=+new Date}),n.bind(E,function(){t.addClass("is-fullscreen"),n.isFullscreen=!0}).bind(M,function(){var e;A||"html5"!==n.engine||(e=t.css("opacity")||"",t.css("opacity",0)),t.removeClass("is-fullscreen"),A||"html5"!==n.engine||setTimeout(function(){t.css("opacity",e)}),n.isFullscreen=!1,o.scrollTop(i)}).bind("ready",function(){if(a.apply){var t=function(){a.play||n.conf.live?n.resume():n.pause(),e.extend(a,{pos:0,play:!1})};n.conf.live?t():n.conf.rtmp&&a.pos&&!isNaN(a.pos)?(n.resume(),n.seek(a.pos,t)):t()}})}}),flowplayer(function(n,t){function i(){return e(a.query,t)}function o(){return e(a.query+"."+r,t)}var a=e.extend({active:"is-active",advance:!0,query:".fp-playlist a"},n.conf),r=a.active;n.play=function(t){return void 0===t?n.resume():"number"!=typeof t||n.conf.playlist[t]?("number"!=typeof t&&n.load.apply(null,arguments),n.unbind("resume.fromfirst"),n.conf.playlist[t]&&(n.video.index=t,n.load("string"==typeof n.conf.playlist[t]?n.conf.playlist[t].toString():e.map(n.conf.playlist[t],function(n){return e.extend({},n)}))),n):n},n.next=function(e){e&&e.preventDefault();var t=n.video.index;return-1!=t&&(t=t===n.conf.playlist.length-1?0:t+1,n.play(t)),n},n.prev=function(e){e&&e.preventDefault();var t=n.video.index;return-1!=t&&(t=0===t?n.conf.playlist.length-1:t-1,n.play(t)),n},e(".fp-next",t).click(n.next),e(".fp-prev",t).click(n.prev),a.advance&&t.unbind("finish.pl").bind("finish.pl",function(e,n){var i=n.video.index>=0?n.video.index+1:void 0;i<n.conf.playlist.length||a.loop?(i=i===n.conf.playlist.length?0:i,t.removeClass("is-finished"),setTimeout(function(){n.play(i)})):(t.addClass("is-playing"),n.conf.playlist.length>1&&n.one("resume.fromfirst",function(){return n.play(0),!1}))});var s=!1;if(n.conf.playlist.length){s=!0;var l=t.find(".fp-playlist");if(!l.length){l=e('<div class="fp-playlist"></div>');var u=e(".fp-next,.fp-prev",t);u.length?u.eq(0).before(l):e("video",t).after(l)}l.empty(),e.each(n.conf.playlist,function(n,t){var i;if("string"==typeof t)i=t;else for(var o in t[0])if(t[0].hasOwnProperty(o)){i=t[0][o];break}l.append(e("<a />").attr({href:i,"data-index":n}))})}if(i().length){s||(n.conf.playlist=[],i().each(function(){var t=e(this).attr("href");e(this).attr("data-index",n.conf.playlist.length),n.conf.playlist.push(t)})),t.on("click",a.query,function(t){t.preventDefault();var i=e(t.target).closest(a.query),o=Number(i.attr("data-index"));-1!=o&&n.play(o)});var d=i().filter("[data-cuepoints]").length;n.bind("load",function(i,a,s){var l=o().removeClass(r),u=l.attr("data-index"),c=s.index=n.video.index||0,f=e('a[data-index="'+c+'"]',t).addClass(r),p=c==n.conf.playlist.length-1;t.removeClass("video"+u).addClass("video"+c).toggleClass("last-video",p),s.index=a.video.index=c,s.is_last=a.video.is_last=p,d&&(n.cuepoints=f.data("cuepoints"))}).bind("unload.pl",function(){o().toggleClass(r)})}n.conf.playlist.length&&(n.conf.loop=!1)});var I=/ ?cue\d+ ?/;flowplayer(function(n,t){function i(e){t[0].className=t[0].className.replace(I," "),e>=0&&t.addClass("cue"+e)}var o=0;n.cuepoints=n.conf.cuepoints||[],n.bind("progress",function(e,a,r){if(o&&.015>r-o)return o=r;o=r;for(var s,l=n.cuepoints||[],u=0;u<l.length;u++)s=l[u],isNaN(s)||(s={time:s}),s.time<0&&(s.time=n.video.duration+s.time),s.index=u,Math.abs(s.time-r)<.125*n.currentSpeed&&(i(u),t.trigger("cuepoint",[n,s]))}).bind("unload seek",i),n.conf.generate_cuepoints&&n.bind("load",function(){e(".fp-cuepoint",t).remove()}).bind("ready",function(){var i=n.cuepoints||[],o=n.video.duration,a=e(".fp-timeline",t).css("overflow","visible");e.each(i,function(t,i){var r=i.time||i;0>r&&(r=o+i);var s=e("<a/>").addClass("fp-cuepoint fp-cuepoint"+t).css("left",r/o*100+"%");s.appendTo(a).mousedown(function(){return n.seek(r),!1})})})}),flowplayer(function(n,t){function i(e){var n=e.split(":");return 2==n.length&&n.unshift(0),60*n[0]*60+60*n[1]+parseFloat(n[2].replace(",","."))}var o=e("track",t),a=n.conf;if(flowplayer.support.subtitles&&(n.subtitles=o.length&&o[0].track,a.nativesubtitles&&"html5"==a.engine)){if(!n.subtitles)return;var r=function(n){var i=e("video",t)[0].textTracks;i.length&&(i[0].mode=n)};return r("disabled"),void n.one("ready",function(){n.conf.splash&&e("video.fp-engine",t).append(e("<track />").attr({kind:"subtitles",srclang:n.subtitles.language||"en",label:n.subtitles.language||"en",src:o.attr("src"),"default":"default"})),r("disabled"),r("showing")})}o.remove();var s=/^(([0-9]{2}:){1,2}[0-9]{2}[,.][0-9]{3}) --\> (([0-9]{2}:){1,2}[0-9]{2}[,.][0-9]{3})(.*)/;n.subtitles=[];var l=o.attr("src");if(l){setTimeout(function(){e.get(l,function(t){for(var o,a,r,l,u=0,d=t.split("\n"),c=d.length,f={};c>u;u++)if(a=s.exec(d[u])){for(o=d[u-1],r="<p>"+d[++u]+"</p><br/>";e.trim(d[++u])&&u<d.length;)r+="<p>"+d[u]+"</p><br/>";f={title:o,startTime:i(a[1]),endTime:i(a[3]),text:r},l={time:f.startTime,subtitle:f},n.subtitles.push(f),n.cuepoints.push(l),n.cuepoints.push({time:f.endTime,subtitleEnd:o}),0===f.startTime&&n.trigger("cuepoint",l)}}).fail(function(){return n.trigger("error",{code:8,url:l}),!1})});var u,d=e("<div class='fp-subtitle'/>").appendTo(t);n.bind("cuepoint",function(e,n,t){t.subtitle?(u=t.index,d.html(t.subtitle.text).addClass("fp-active")):t.subtitleEnd&&(d.removeClass("fp-active"),u=t.index)
}).bind("seek",function(t,i,o){u&&n.cuepoints[u]&&n.cuepoints[u].time>o&&(d.removeClass("fp-active"),u=null),e.each(n.cuepoints||[],function(e,t){var i=t.subtitle;i&&u!=t.index?o>=t.time&&(!i.endTime||o<=i.endTime)&&n.trigger("cuepoint",t):t.subtitleEnd&&o>=t.time&&t.index==u+1&&n.trigger("cuepoint",t)})})}}),flowplayer(function(n,t){function i(){if(a&&"undefined"!=typeof _gat){var e=_gat._getTracker(o),i=n.video;e._setAllowLinker(!0),e._trackEvent("Video / Seconds played",n.engine+"/"+i.type,t.attr("title")||i.src.split("/").slice(-1)[0].replace(x,""),Math.round(a/1e3)),a=0}}var o=n.conf.analytics,a=0,r=0;o&&("undefined"==typeof _gat&&e.getScript("//google-analytics.com/ga.js"),n.bind("load unload",i).bind("progress",function(){n.seeking||(a+=r?+new Date-r:0,r=+new Date)}).bind("pause",function(){r=0}),e(window).unload(i))});var L=/IEMobile/.test(f);(flowplayer.support.touch||L)&&flowplayer(function(n,t){var i=/Android/.test(f)&&!/Firefox/.test(f)&&!/Opera/.test(f),o=/Silk/.test(f),a=i?parseFloat(/Android\ (\d\.\d)/.exec(f)[1],10):0;if(i){if(!/Chrome/.test(f)&&4>a){var r=n.load;n.load=function(){var e=r.apply(n,arguments);return n.trigger("ready",[n,n.video]),e}}var s,l=0,d=function(e){s=setInterval(function(){e.video.time=++l,e.trigger("progress",l)},1e3)};n.bind("ready pause unload",function(){s&&(clearInterval(s),s=null)}),n.bind("ready",function(){l=0}),n.bind("resume",function(e,t){return t.live?l?d(t):void n.one("progress",function(e,n,t){0===t&&d(n)}):void 0})}flowplayer.support.volume||t.addClass("no-volume no-mute"),t.addClass("is-touch"),t.find(".fp-timeline").data("api").disableAnimation(),(!flowplayer.support.inlineVideo||n.conf.native_fullscreen)&&(n.conf.nativesubtitles=!0);var c=!1;t.bind("touchmove",function(){c=!0}).bind("touchend click",function(){return c?void(c=!1):n.playing&&!t.hasClass("is-mouseover")?(t.addClass("is-mouseover").removeClass("is-mouseout"),!1):(n.paused&&t.hasClass("is-mouseout")&&!n.splash&&n.toggle(),void(n.paused&&L&&e("video.fp-engine",t)[0].play()))}),n.conf.native_fullscreen&&"function"==typeof e("<video />")[0].webkitEnterFullScreen&&(n.fullscreen=function(){var n=e("video.fp-engine",t);n[0].webkitEnterFullScreen(),n.one("webkitendfullscreen",function(){n.prop("controls",!0).prop("controls",!1)})}),(i||o)&&n.bind("ready",function(){var i=e("video.fp-engine",t);i.one("canplay",function(){i[0].play()}),i[0].play(),n.bind("progress.dur",function(){var o=i[0].duration;1!==o&&(n.video.duration=o,e(".fp-duration",t).html(u(o)),n.unbind("progress.dur"))})})}),e.fn.fptip=function(n,t){return this.each(function(){function i(){o.removeClass(t),e(document).unbind(".st")}var o=e(this);e(n||"a",this).click(function(n){n.preventDefault(),o.toggleClass(t),o.hasClass(t)&&e(document).bind("keydown.st",function(e){27==e.which&&i()}).bind("click.st",function(n){e(n.target).parents("."+t).length||i()})})})}}(jQuery),flowplayer(function(e,n){function t(e){var n=i("<a/>")[0];return n.href=e,n.hostname}var i=jQuery,o=e.conf,a=o.swf.indexOf("flowplayer.org")&&o.e&&n.data("origin"),r=a?t(a):location.hostname,s=o.key;if("file:"==location.protocol&&(r="localhost"),e.load.ed=1,o.hostname=r,o.origin=a||location.href,a&&n.addClass("is-embedded"),"string"==typeof s&&(s=s.split(/,\s*/)),s&&"function"==typeof key_check&&key_check(s,r))o.logo&&n.append(i("<a>",{"class":"fp-logo",href:a}).append(i("<img/>",{src:o.logo})));else{var l=i("<a/>").attr("href",o.logoOverwrite&&o.logoOverwrite.href||"http://flowplayer.org").appendTo(n);i(".fp-controls",n);var u=i('<div class="fp-context-menu"><ul><li class="copyright">&copy; 2014</li><li><a href="http://flowplayer.org">About Flowplayer</a></li><li><a href="http://flowplayer.org/license">GPL based license</a></li></ul></div>').appendTo(n);e.bind("pause resume finish unload",function(e,t){var o=-1;t.video.src&&i.each([["org","flowplayer","drive"],["org","flowplayer","my"]],function(e,n){return o=t.video.src.indexOf("://"+n.reverse().join(".")),-1===o}),/pause|resume/.test(e.type)&&"flash"!=t.engine&&4!=o&&5!=o?(l.show().css(t.conf.logoOverwrite&&t.conf.logoOverwrite.css||{position:"absolute",left:16,bottom:36,zIndex:99999,width:100,height:20,backgroundImage:"url("+[".png","logo","/",".net",".cloudfront","d32wqyuo10o653","//"].reverse().join("")+")"}),t.load.ed=l.is(":visible")&&i.contains(n[0],u[0]),t.load.ed||t.pause()):l.hide()})}})});