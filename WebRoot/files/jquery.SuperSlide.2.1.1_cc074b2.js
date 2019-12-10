define("common:widget/jquery/super-slide/jquery.SuperSlide.2.1.1.js",function(e){var t=e("common:widget/jquery/1.11.3/jquery.js");!function(e){e.fn.slide=function(t){return e.fn.slide.defaults={type:"slide",effect:"fade",autoPlay:!1,delayTime:500,interTime:2500,triggerTime:150,defaultIndex:0,titCell:".hd li",mainCell:".bd",targetCell:null,trigger:"mouseover",scroll:1,vis:1,titOnClassName:"on",autoPage:!1,prevCell:".prev",nextCell:".next",pageStateCell:".pageState",opp:!1,pnLoop:!0,easing:"swing",startFun:null,endFun:null,switchLoad:null,playStateCell:".playState",mouseOverStop:!0,defaultPlay:!0,returnDefault:!1},this.each(function(){var a,n=e.extend({},e.fn.slide.defaults,t),i=e(this),s=n.effect,o=e(n.prevCell,i),r=e(n.nextCell,i),u=e(n.pageStateCell,i),l=e(n.playStateCell,i),c=e(n.titCell,i),f=c.size(),p=e(n.mainCell,i),d=p.children().size(),h=n.switchLoad,v=e(n.targetCell,i),m=parseInt(n.defaultIndex),g=parseInt(n.delayTime),w=parseInt(n.interTime),I=(parseInt(n.triggerTime),parseInt(n.scroll)),M=parseInt(n.vis),C="false"==n.autoPlay||0==n.autoPlay?!1:!0,q="false"==n.opp||0==n.opp?!1:!0,y="false"==n.autoPage||0==n.autoPage?!1:!0,x="false"==n.pnLoop||0==n.pnLoop?!1:!0,O="false"==n.mouseOverStop||0==n.mouseOverStop?!1:!0,b="false"==n.defaultPlay||0==n.defaultPlay?!1:!0,k="false"==n.returnDefault||0==n.returnDefault?!1:!0,P=0,S=0,T=0,L=0,Q=n.easing,B=null,D=null,F=null,j=n.titOnClassName,E=c.index(i.find("."+j)),W=m=-1==E?m:E,z=m,A=m,N=d>=M?d%I!=0?d%I:I:0,U="leftMarquee"==s||"topMarquee"==s?!0:!1,H=function(){e.isFunction(n.startFun)&&n.startFun(m,f,i,e(n.titCell,i),p,v,o,r)},$=function(){e.isFunction(n.endFun)&&n.endFun(m,f,i,e(n.titCell,i),p,v,o,r)},G=function(){c.removeClass(j),b&&c.eq(z).addClass(j)};if("menu"==n.type)return b&&c.removeClass(j).eq(m).addClass(j),c.hover(function(){a=e(this).find(n.targetCell);var t=c.index(e(this));D=setTimeout(function(){switch(m=t,c.removeClass(j).eq(m).addClass(j),H(),s){case"fade":a.stop(!0,!0).animate({opacity:"show"},g,Q,$);break;case"slideDown":a.stop(!0,!0).animate({height:"show"},g,Q,$)}},n.triggerTime)},function(){switch(clearTimeout(D),s){case"fade":a.animate({opacity:"hide"},g,Q);break;case"slideDown":a.animate({height:"hide"},g,Q)}}),void(k&&i.hover(function(){clearTimeout(F)},function(){F=setTimeout(G,g)}));if(0==f&&(f=d),U&&(f=2),y){if(d>=M)if("leftLoop"==s||"topLoop"==s)f=d%I!=0?(d/I^0)+1:d/I;else{var J=d-M;f=1+parseInt(J%I!=0?J/I+1:J/I),0>=f&&(f=1)}else f=1;c.html("");var K="";if(1==n.autoPage||"true"==n.autoPage)for(var R=0;f>R;R++)K+="<li>"+(R+1)+"</li>";else for(var R=0;f>R;R++)K+=n.autoPage.replace("$",R+1);c.html(K);var c=c.children()}if(d>=M){p.children().each(function(){e(this).width()>T&&(T=e(this).width(),S=e(this).outerWidth(!0)),e(this).height()>L&&(L=e(this).height(),P=e(this).outerHeight(!0))});var V=p.children(),X=function(){for(var e=0;M>e;e++)V.eq(e).clone().addClass("clone").appendTo(p);for(var e=0;N>e;e++)V.eq(d-e-1).clone().addClass("clone").prependTo(p)};switch(s){case"fold":p.css({position:"relative",width:S,height:P}).children().css({position:"absolute",width:T,left:0,top:0,display:"none"});break;case"top":p.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+M*P+'px"></div>').css({top:-(m*I)*P,position:"relative",padding:"0",margin:"0"}).children().css({height:L});break;case"left":p.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+M*S+'px"></div>').css({width:d*S,left:-(m*I)*S,position:"relative",overflow:"hidden",padding:"0",margin:"0"}).children().css({"float":"left",width:T});break;case"leftLoop":case"leftMarquee":X(),p.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+M*S+'px"></div>').css({width:(d+M+N)*S,position:"relative",overflow:"hidden",padding:"0",margin:"0",left:-(N+m*I)*S}).children().css({"float":"left",width:T});break;case"topLoop":case"topMarquee":X(),p.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+M*P+'px"></div>').css({height:(d+M+N)*P,position:"relative",padding:"0",margin:"0",top:-(N+m*I)*P}).children().css({height:L})}}var Y=function(e){var t=e*I;return e==f?t=d:-1==e&&d%I!=0&&(t=-d%I),t},Z=function(t){var a=function(a){for(var n=a;M+a>n;n++)t.eq(n).find("img["+h+"]").each(function(){var t=e(this);if(t.attr("src",t.attr(h)).removeAttr(h),p.find(".clone")[0])for(var a=p.children(),n=0;n<a.size();n++)a.eq(n).find("img["+h+"]").each(function(){e(this).attr(h)==t.attr("src")&&e(this).attr("src",e(this).attr(h)).removeAttr(h)})})};switch(s){case"fade":case"fold":case"top":case"left":case"slideDown":a(m*I);break;case"leftLoop":case"topLoop":a(N+Y(A));break;case"leftMarquee":case"topMarquee":var n="leftMarquee"==s?p.css("left").replace("px",""):p.css("top").replace("px",""),i="leftMarquee"==s?S:P,o=N;if(n%i!=0){var r=Math.abs(n/i^0);o=1==m?N+r:N+r-1}a(o)}},_=function(e){if(!b||W!=m||e||U){if(U?m>=1?m=1:0>=m&&(m=0):(A=m,m>=f?m=0:0>m&&(m=f-1)),H(),null!=h&&Z(p.children()),v[0]&&(a=v.eq(m),null!=h&&Z(v),"slideDown"==s?(v.not(a).stop(!0,!0).slideUp(g),a.slideDown(g,Q,function(){p[0]||$()})):(v.not(a).stop(!0,!0).hide(),a.animate({opacity:"show"},g,function(){p[0]||$()}))),d>=M)switch(s){case"fade":p.children().stop(!0,!0).eq(m).animate({opacity:"show"},g,Q,function(){$()}).siblings().hide();break;case"fold":p.children().stop(!0,!0).eq(m).animate({opacity:"show"},g,Q,function(){$()}).siblings().animate({opacity:"hide"},g,Q);break;case"top":p.stop(!0,!1).animate({top:-m*I*P},g,Q,function(){$()});break;case"left":p.stop(!0,!1).animate({left:-m*I*S},g,Q,function(){$()});break;case"leftLoop":var t=A;p.stop(!0,!0).animate({left:-(Y(A)+N)*S},g,Q,function(){-1>=t?p.css("left",-(N+(f-1)*I)*S):t>=f&&p.css("left",-N*S),$()});break;case"topLoop":var t=A;p.stop(!0,!0).animate({top:-(Y(A)+N)*P},g,Q,function(){-1>=t?p.css("top",-(N+(f-1)*I)*P):t>=f&&p.css("top",-N*P),$()});break;case"leftMarquee":var n=p.css("left").replace("px","");0==m?p.animate({left:++n},0,function(){p.css("left").replace("px","")>=0&&p.css("left",-d*S)}):p.animate({left:--n},0,function(){p.css("left").replace("px","")<=-(d+N)*S&&p.css("left",-N*S)});break;case"topMarquee":var i=p.css("top").replace("px","");0==m?p.animate({top:++i},0,function(){p.css("top").replace("px","")>=0&&p.css("top",-d*P)}):p.animate({top:--i},0,function(){p.css("top").replace("px","")<=-(d+N)*P&&p.css("top",-N*P)})}c.removeClass(j).eq(m).addClass(j),W=m,x||(r.removeClass("nextStop"),o.removeClass("prevStop"),0==m&&o.addClass("prevStop"),m==f-1&&r.addClass("nextStop")),u.html("<span>"+(m+1)+"</span>/"+f)}};b&&_(!0),k&&i.hover(function(){clearTimeout(F)},function(){F=setTimeout(function(){m=z,b?_():"slideDown"==s?a.slideUp(g,G):a.animate({opacity:"hide"},g,G),W=m},300)});var et=function(e){B=setInterval(function(){q?m--:m++,_()},e?e:w)},tt=function(e){B=setInterval(_,e?e:w)},at=function(){O||(clearInterval(B),et())},nt=function(){(x||m!=f-1)&&(m++,_(),U||at())},it=function(){(x||0!=m)&&(m--,_(),U||at())},st=function(){clearInterval(B),U?tt():et(),l.removeClass("pauseState")},ot=function(){clearInterval(B),l.addClass("pauseState")};if(C?U?(q?m--:m++,tt(),O&&p.hover(ot,st)):(et(),O&&i.hover(ot,st)):(U&&(q?m--:m++),l.addClass("pauseState")),l.click(function(){l.hasClass("pauseState")?st():ot()}),"mouseover"==n.trigger?c.hover(function(){var e=c.index(this);D=setTimeout(function(){m=e,_(),at()},n.triggerTime)},function(){clearTimeout(D)}):c.click(function(){m=c.index(this),_(),at()}),U){if(r.mousedown(nt),o.mousedown(it),x){var rt,ut=function(){rt=setTimeout(function(){clearInterval(B),tt(w/10^0)},150)},lt=function(){clearTimeout(rt),clearInterval(B),tt()};r.mousedown(ut),r.mouseup(lt),o.mousedown(ut),o.mouseup(lt)}"mouseover"==n.trigger&&(r.hover(nt,function(){}),o.hover(it,function(){}))}else r.click(nt),o.click(it)})}}(t),t.easing.jswing=t.easing.swing,t.extend(t.easing,{def:"easeOutQuad",swing:function(e,a,n,i,s){return t.easing[t.easing.def](e,a,n,i,s)},easeInQuad:function(e,t,a,n,i){return n*(t/=i)*t+a},easeOutQuad:function(e,t,a,n,i){return-n*(t/=i)*(t-2)+a},easeInOutQuad:function(e,t,a,n,i){return(t/=i/2)<1?n/2*t*t+a:-n/2*(--t*(t-2)-1)+a},easeInCubic:function(e,t,a,n,i){return n*(t/=i)*t*t+a},easeOutCubic:function(e,t,a,n,i){return n*((t=t/i-1)*t*t+1)+a},easeInOutCubic:function(e,t,a,n,i){return(t/=i/2)<1?n/2*t*t*t+a:n/2*((t-=2)*t*t+2)+a},easeInQuart:function(e,t,a,n,i){return n*(t/=i)*t*t*t+a},easeOutQuart:function(e,t,a,n,i){return-n*((t=t/i-1)*t*t*t-1)+a},easeInOutQuart:function(e,t,a,n,i){return(t/=i/2)<1?n/2*t*t*t*t+a:-n/2*((t-=2)*t*t*t-2)+a},easeInQuint:function(e,t,a,n,i){return n*(t/=i)*t*t*t*t+a},easeOutQuint:function(e,t,a,n,i){return n*((t=t/i-1)*t*t*t*t+1)+a},easeInOutQuint:function(e,t,a,n,i){return(t/=i/2)<1?n/2*t*t*t*t*t+a:n/2*((t-=2)*t*t*t*t+2)+a},easeInSine:function(e,t,a,n,i){return-n*Math.cos(t/i*(Math.PI/2))+n+a},easeOutSine:function(e,t,a,n,i){return n*Math.sin(t/i*(Math.PI/2))+a},easeInOutSine:function(e,t,a,n,i){return-n/2*(Math.cos(Math.PI*t/i)-1)+a},easeInExpo:function(e,t,a,n,i){return 0==t?a:n*Math.pow(2,10*(t/i-1))+a},easeOutExpo:function(e,t,a,n,i){return t==i?a+n:n*(-Math.pow(2,-10*t/i)+1)+a},easeInOutExpo:function(e,t,a,n,i){return 0==t?a:t==i?a+n:(t/=i/2)<1?n/2*Math.pow(2,10*(t-1))+a:n/2*(-Math.pow(2,-10*--t)+2)+a},easeInCirc:function(e,t,a,n,i){return-n*(Math.sqrt(1-(t/=i)*t)-1)+a},easeOutCirc:function(e,t,a,n,i){return n*Math.sqrt(1-(t=t/i-1)*t)+a},easeInOutCirc:function(e,t,a,n,i){return(t/=i/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+a:n/2*(Math.sqrt(1-(t-=2)*t)+1)+a},easeInElastic:function(e,t,a,n,i){var s=1.70158,o=0,r=n;if(0==t)return a;if(1==(t/=i))return a+n;if(o||(o=.3*i),r<Math.abs(n)){r=n;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(n/r);return-(r*Math.pow(2,10*(t-=1))*Math.sin(2*(t*i-s)*Math.PI/o))+a},easeOutElastic:function(e,t,a,n,i){var s=1.70158,o=0,r=n;if(0==t)return a;if(1==(t/=i))return a+n;if(o||(o=.3*i),r<Math.abs(n)){r=n;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(n/r);return r*Math.pow(2,-10*t)*Math.sin(2*(t*i-s)*Math.PI/o)+n+a},easeInOutElastic:function(e,t,a,n,i){var s=1.70158,o=0,r=n;if(0==t)return a;if(2==(t/=i/2))return a+n;if(o||(o=.3*i*1.5),r<Math.abs(n)){r=n;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(n/r);return 1>t?-.5*r*Math.pow(2,10*(t-=1))*Math.sin(2*(t*i-s)*Math.PI/o)+a:r*Math.pow(2,-10*(t-=1))*Math.sin(2*(t*i-s)*Math.PI/o)*.5+n+a},easeInBack:function(e,t,a,n,i,s){return void 0==s&&(s=1.70158),n*(t/=i)*t*((s+1)*t-s)+a},easeOutBack:function(e,t,a,n,i,s){return void 0==s&&(s=1.70158),n*((t=t/i-1)*t*((s+1)*t+s)+1)+a},easeInOutBack:function(e,t,a,n,i,s){return void 0==s&&(s=1.70158),(t/=i/2)<1?n/2*t*t*(((s*=1.525)+1)*t-s)+a:n/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+a},easeInBounce:function(e,a,n,i,s){return i-t.easing.easeOutBounce(e,s-a,0,i,s)+n},easeOutBounce:function(e,t,a,n,i){return(t/=i)<1/2.75?7.5625*n*t*t+a:2/2.75>t?n*(7.5625*(t-=1.5/2.75)*t+.75)+a:2.5/2.75>t?n*(7.5625*(t-=2.25/2.75)*t+.9375)+a:n*(7.5625*(t-=2.625/2.75)*t+.984375)+a},easeInOutBounce:function(e,a,n,i,s){return s/2>a?.5*t.easing.easeInBounce(e,2*a,0,i,s)+n:.5*t.easing.easeOutBounce(e,2*a-s,0,i,s)+.5*i+n}})});