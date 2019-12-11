define("desktop:widget/nav-version5/nav-version5.js",function(e){function n(e,n,a){var o=a?a.name:"";if(e[o]){var t=[];i(e[o],f,t),a.phase=t,n.push(a)}}function i(e,n,i){for(var a=0;a<e.length;a++)for(var o=0;o<n.length;o++)n[o]&&e[a]==n[o].name&&i.push(n[o])}function a(){var e=u(window).scrollTop();if(0>=e)return void o();if(e>=C)return void t();if(C>e){var n=e/C;return O>e&&(s(n),O=e),e>O&&(r(n),O=e),void(A&&(z.css({position:"relative",top:0}),A=!1))}}function o(){b.css({height:I}),y.css({height:k}),j.css({top:M,left:L}),z.css({position:"relative",top:0}),A=!1}function t(){b.css({height:S}),y.css({height:q}),j.css({left:_,top:Z}),z.css({position:"fixed",top:0}),A=!0}function s(e){var n=parseInt(b.height()),i=parseInt(y.height()),a=parseInt(j.css("top")),o=parseInt(j.css("left"));if(I>n){var t=I-e*H>I?I:I-e*H;b.css({height:t})}if(k>i){var s=k-e*N>k?k:k-e*N;y.css({height:s})}if(a>M){var r=M>M+e*J?M:M+e*J;j.css({top:r})}if(L>o){var u=L-e*$>L?L:L-e*$;j.css({left:u})}}function r(e){var n=parseInt(b.height()),i=parseInt(y.height()),a=parseInt(j.css("top")),o=parseInt(j.css("left"));if(n>S){var t=S>I-e*H?S:I-e*H;b.css({height:t})}if(i>q){var s=q>k-e*N?q:k-e*N;y.css({height:s})}if(Z>a){var r=M+e*J>Z?Z:M+e*J;j.css({top:r})}if(o>_){var u=_>L-e*$?_:L-e*$;j.css({left:u})}}var u=e("common:widget/jquery/1.11.3/jquery.js"),c=(e("common:widget/zm/zm.js"),e("common:widget/arale-easing/1.1.0/index.js"),e("desktop:static/statis-evaluate/evaluate.js"));u(".login-btn").on("click",function(){localStorage.evaluate_login="true"});var m=u("#usermobile").val();if("true"==localStorage.evaluate_login&&(localStorage.evaluate_login="false",c.send("login",m)),u("#courseNav")[0].innerHTML)var l=JSON.parse(u("#courseNav")[0].innerHTML);var h=[],f=[{id:13,name:"语文",enname:"yuwen"},{id:14,name:"数学",enname:"shuxue"},{id:15,name:"英语",enname:"yingyu"},{id:16,name:"奥数",enname:"aoshu"},{id:16,name:"数理逻辑训练",enname:"aoshu"},{id:17,name:"物理",enname:"wuli"},{id:18,name:"化学",enname:"huaxue"},{id:19,name:"生物",enname:"shengwu"},{id:20,name:"科学",enname:"kexue"}],d=[{id:1,name:"一年级",enname:"xiaoyi"},{id:2,name:"二年级",enname:"xiaoer"},{id:3,name:"三年级",enname:"xiaosan"},{id:4,name:"四年级",enname:"xiaosi"},{id:5,name:"五年级",enname:"xiaowu"},{id:6,name:"六年级",enname:"xiaoliu"}],v=[{id:7,name:"初一",enname:"chuyi"},{id:8,name:"初二",enname:"chuer"},{id:9,name:"初三",enname:"chusan"}],g=[{id:10,name:"高一",enname:"gaoyi"},{id:11,name:"高二",enname:"gaoer"},{id:12,name:"高三",enname:"gaosan"}];if(l){if(l["小学"]){for(var p=[],T=0;T<d.length;T++)n(l["小学"],p,d[T]);h.push({id:110,name:"小学",enname:"xiaoxue",grade:p})}if(l["初中"]){for(var w=[],T=0;T<v.length;T++)n(l["初中"],w,v[T]);h.push({id:120,name:"初中",enname:"chuzhong",grade:w})}if(l["高中"]){for(var x=[],T=0;T<g.length;T++)n(l["高中"],x,g[T]);h.push({id:130,name:"高中",enname:"gaozhong",grade:x})}}!function(){var e=u("#logined-area"),n=u("ul",e);e.length&&e.on("mouseover",function(){n.show()}).on("mouseout",function(){n.hide()})}(),function(){function e(e,n){e.append('<li><a class="lesson" href ="javascript:void(0)" data-id='+h[n].id+">"+h[n].name+"</a></li>")}function n(e,n,i){e.append('<li><a href ="javascript:void(0)" >'+h[n].grade[i].name+"</a></li>")}function i(e,n,i,a){var o=h[n].grade[i].phase[a].name;o="奥数"===o?"数理逻辑训练":o,e.append('<li><a href ="/zm-lessons/'+h[n].grade[i].enname+"-"+h[n].grade[i].phase[a].enname+'.html">'+o+"</a></li>")}var a,o,t,s,r=u("#n-nav-area"),c=u(".zmLessons"),m=u(".secondZmlessons"),l=u(".thirdZmlessons"),f=u(".zixunTags"),d=u(".primary-courses");f.on("mouseenter",function(){clearTimeout(a);r.find(".area-zixun")}),f.on("mouseleave",function(){a=setTimeout(function(){f.hide()},300)}),d.on("mouseenter",function(){clearTimeout(a);r.find(".area-course")}),d.on("mouseleave",function(){a=setTimeout(function(){d.hide()},300)}),r.on("mouseenter",".item",function(){var e=u(this);e.hasClass("area-zixun")&&(clearTimeout(a),f.show()),e.hasClass("area-course")&&(clearTimeout(a),d.show())}),r.on("mouseleave",".item",function(){var e=u(this);e.hasClass("area-zixun")&&(a=setTimeout(function(){f.hide()},300)),e.hasClass("area-course")&&(a=setTimeout(function(){d.hide()},300))});for(var v=0;v<h.length;v++)e(c,v);c.on("mouseover",function(){clearTimeout(o)}),c.on("mouseout",function(){o=setTimeout(function(){c.hide()},500),t=setTimeout(function(){m.hide()},500)}),m.on("mouseover",function(){clearTimeout(o),clearTimeout(t),clearTimeout(s)}),m.on("mouseout",function(){o=setTimeout(function(){c.hide()},500),t=setTimeout(function(){m.hide()},500),s=setTimeout(function(){l.hide()},500)}),l.on("mouseover",function(){clearTimeout(o),clearTimeout(t),clearTimeout(s)}),l.on("mouseout",function(){o=setTimeout(function(){c.hide()},500),t=setTimeout(function(){m.hide()},500),s=setTimeout(function(){l.hide()},500)}),r.on("mouseenter",".item",function(){var e=u(this);e.hasClass("area-lessons")&&(clearTimeout(o),c.show())}),r.on("mouseleave",".item",function(){var e=u(this);e.hasClass("area-lessons")&&(o=setTimeout(function(){c.hide()},500))}),u.each(u(".zmLessons li"),function(e,i){u(i).on("mouseover",function(){m.html(""),l.html(""),u(this).addClass("active").siblings().removeClass("active");for(var i=0;i<h[e].grade.length;i++)n(m,e,i);u(this).find("a").hasClass("lesson")&&(clearTimeout(t),m.show())})}),u(".secondZmlessons").on("mouseover","li",function(){u(this).addClass("active").siblings().removeClass("active");var e=u(".zmLessons .active").index(),n=u(this).index();l.html("");for(var a=0;a<h[e].grade[n].phase.length;a++)i(l,e,n,a);l.show()}),u(".secondZmlessons").on("mouseout","li",function(){u(this).removeClass("active")}),r.find(".item").trigger("mouseleave")}(),!function(){function e(e){var n=/(?:https?:\/\/.*?|^)(\/[^#?]*)(?:[#?].*)?$/i;return(n.exec(e.toLocaleLowerCase())||[0,"/"])[1].toLowerCase()}var n=u("#n-nav-area"),i=u(".item",n),a=i.filter(".current"),o=e(location.href),t={open:/open\./};window.location.origin||(window.location.origin=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""));for(var s=location.origin,r=i.length-1;r>=0;r--){var c=i.eq(r).attr("href"),m=e(c),l=!1;if("/"===m){for(var h in t)if(t[h].test(c)){m=s,l=!0;break}if(!l&&"/"!==o)continue}(o.slice(0,m.length)==m||location.origin===c)&&(a=i.eq(r))}var f=/\/(tuijian|zixun|xinwen|jiazhang|xuesheng)(\/page-(\d))?/,d=/\/article\/(\d+)/,v=/^\/s$/;(f.test(o)||d.test(o)||v.test(o))&&(a=n.find(".zixun"));var g,p=u(".secoundTag");a&&a.addClass("current"),p.on("mouseenter",".level2",function(){clearTimeout(g);n.find(".zixun")}),p.on("mouseleave",function(){g=setTimeout(function(){p.hide()},300)}),n.on("mouseenter",".item",function(){var e=u(this);e.hasClass("zixun")&&(clearTimeout(g),p.show())}),n.on("mouseleave",".item",function(){var e=u(this);e.hasClass("zixun")&&(g=setTimeout(function(){p.hide()},300))}),n.find(".item").trigger("mouseleave")}(),function(){var e=u("#national-day-tip"),n=e.find(".close"),i=u("#national-pillar");n.bind("click",function(){e.remove(),i.remove()}),setTimeout(function(){n.show()},2e3)}(),function(){var e=u("#national-day-tip"),n=e.find(".close"),i=u("#national-pillar");n.bind("click",function(){e.remove(),i.remove()}),setTimeout(function(){n.show()},2e3)}();var z=u("#n-nav-bar"),C=u("#n-top-bar").height(),b=z.find(".nav-box"),I=b.height(),j=u("#hide_tel"),y=u("#logo"),k=y.height(),L=parseInt(j.css("left")),M=parseInt(j.css("top")),q=20,S=45,Z=0,_=185,N=Math.abs(parseInt(k)-q),H=Math.abs(parseInt(I)-S),J=Math.abs(parseInt(j.css("top"))-Z),$=Math.abs(parseInt(j.css("left"))-_);u(window).on("resize scroll",a);var O=0,A=!1;a(),!function(){var e=u("#bulletin");e.on("click",".J-close-bulletin",function(){e.addClass("hide")})}()});
;define("desktop:widget/quick-appoint-renew/quick-appoint-renew.js",function(e){function t(){for(var e=window.location.pathname,t=0;t<x.length;t++)if(x[t].path==e)return x[t].flatfrom;return"1"}function n(e){var t=["钢琴陪练","小提琴陪练"],n=["幼儿园小班","幼儿园中班","幼儿园大班","学前班","小一","小二","小三"];return-1!==t.indexOf(e.weakSubject)?"":-1!==n.indexOf(e.grade)?2:""}var a,i,o,r,s=e("common:widget/jquery/1.11.3/jquery.js"),c=e("common:widget/my-util/my-util.js"),l=e("common:widget/tool/utils.js"),d=e("common:widget/tool/event.js"),m=(e("common:widget/tool/env.js"),e("common:widget/placeholder/placeholder.js"),e("common:widget/arale-validator/0.10.1/index.js")),u=e("common:widget/zm/zm.js"),p=u.data.get("subjectLabel"),f=u.data.get("gradeLabel"),v=u.data.get("extras.cooperatorUrl"),h=u.data.get("sem.semChannelSwitch"),g=v||h,w=!1,y=(new Date).getTime(),b=u.data.get("appHost"),k=u.data.get("processEnv");m.addRule("chineseAndWord",function(e){var t=l.string.trim(e.element.val())||"",n=/^([\u4e00-\u9fa5]|[a-zA-Z])+$/;return!n.test(t)||l.string.getStrLength(t)>14||l.string.getStrLength(t)<1?!1:!0},"请输入1—14位中英文格式"),m.addRule("validateMobile",function(e,t){a=l.string.trim(e.element.val())||null,t(!0,"")}),m.addRule("zCardOrMobile",function(e){return i=l.string.trim(e.element.val())||null,/^(?:80\d{6}|1\d{10}|13\d{5})$/.test(i)&&(a==i?!1:!0)},"{{display}}输入无效"),m.addRule("verifyCode",function(e){var t=l.string.trim(e.element.val())||"";return 0==l.string.getStrLength(t)?!1:!0},"请输入验证码"),s(function(){function e(e,t,n){var a=function(e){var n="";for(var a in e)e.hasOwnProperty(a)&&(n+="高一"==a?"<option value='"+a+"' selected>"+l.getTextFrom(a,f)+"</option>":"初四"==a?"<option value='初三'>"+l.getTextFrom(a,f)+"</option>":"<option value='"+a+"'>"+l.getTextFrom(a,f)+"</option>");t.html(n)},i=function(e){var t="";for(var a in e)e.hasOwnProperty(a)&&(t+=0==a?p[e[a]]?"<option value='"+e[a]+"' selected >"+e[a]+"</option>":"<option value='"+e[a]+"' selected>"+e[a]+"</option>":p[e[a]]?"<option value='"+e[a]+"' >"+e[a]+"</option>":"<option value='"+e[a]+"' >"+e[a]+"</option>");n.html(t)};this.init=function(){var t=e["高一"];a(e),i(t)},t.on("change",function(){var t=s(this).val();i(e[t])})}var t=u.data.get("gradeTosubject"),n=s("#reservation"),a=n.find(".stu-grade"),i=n.find(".stu-subject"),o=new e(t,a,i);o.init()});var _=s("#n-footer"),E=s(window),x=[{path:"/",flatfrom:"1"},{path:"/lp/sem",flatfrom:"2"},{path:"/lp/360dh/qm.html",flatfrom:"3"},{path:"/lp/360dh.html",flatfrom:"4"},{path:"/lp/org-sem",flatfrom:"9"}];!function(){function a(){var e=$form02.validate=new m({element:$form02,autoSubmit:!1,onFormValidated:function(e){if(!j){if(e)return void $form02.prop("dsp_valided",!1);$form02.prop("dsp_valided",!0);var t=$form02.find("button[type=submit]"),n=c.serializeNodes($form02);s.extend(x,n);var a=t.text();t.html("提交中...").prop("disabled",!0),j=!0,s.ajax({url:"/api/student/validate-and-tag",type:"POST",dataType:"json",data:{mobile:x.mobile,verifycode:x.verifyCode}}).success(function(e){0==e.code?i(successInfo.data,successInfo.res):alert(e.msg)}).fail(function(){alert("提交失败了，再试一遍吧")}).always(function(){j=!1,t.html(a).prop("disabled",!1)})}}});e.addItem({element:"input[name=verifyCode]",required:!0,rule:"verifyCode",errormessage:"请输入验证码"})}function i(e){var a=window.location.pathname;g||"/lp/360dh/qm.html"==a&&(o=window.open("/appointment-success"));var i=n(e);window.location.href="/lp/sem-zixun"==a||"/lp/sem-zixun3"==a||"/lp/sem-tongdian"==a?"/appointment-success?zixun=1":"/appointment-success"+i+"?mobile="+e.mobile+"&grade="+e.grade+"&flatfrom="+t()}function u(){function e(e){function a(){e.html("发送中……");var a,i,o,r;if(g){if(a=s("[name=name]",n).val(),i=s("[name=mobile]",n).val(),o=s("[name=grade]",n).val(),0==o.indexOf("新")){var c=o.length;o=o.substring(1,c)}else-1==o.indexOf("新")&&(o=o);r=s("[name=weakSubject]",n).val()}else a=registerInfo.name,o=registerInfo.grade,r=registerInfo.weakSubject,i=registerInfo.mobile;s.ajax({url:"/api/student/send-sms-verifier",type:"POST",dataType:"json",data:{name:a,mobile:i,grade:o,weakSubject:r}}).done(function(n){0==n.code?(g||s(".hint1").text("验证码已发送至"+i.substr(0,3)+"****"+i.substr(7)),e.html("验证码已发送"),codeSubmit=!0,w=!0,t()):alert(n.msg)}).fail(function(){e.html("验证码请求失败！再试一次吧"),alert("验证码请求失败！")}).always(function(){})}g?n.validate.query(i).execute(function(e){n.validate.query(o).execute(function(t){e||t||a()})}):a()}function t(){function e(){o?(r.html(o+"秒"),o--,i=setTimeout(e,1e3),r.attr("disabled","true")):(w=!1,t())}function t(){clearTimeout(i),o=60,a()}function a(){r.html("获取验证码"),r.removeAttr("disabled")}var i,o=60,r=s(".verify-btn",n);e()}var n;n=g?S:$form02;var a=s(".verify-btn",n);a.on("click",function(t){t.preventDefault(),w||e(a)});var i=s("[name=name]",n),o=s("input[name=mobile]",n)}function p(e,t){var n=window.location.search,a=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),i=n.substr(1).match(a);return i?decodeURIComponent(i[2]):t}function f(){var e=window.location.href,t=/\/lp\/sem/.test(e),n=/\/lp\/sem-zixun/.test(e),a=/10026/.test(e);if(t&&a||n&&a){var i={"windows pc":2,iphone:1,ipad:1,android:0,"linux pc":2,mac:1,other:2},o=i[l.getDevice()],r={logidUrl:window.location.href,uid:25650212,deviceType:o,deviceId:"",clickTime:y,convertTime:(new Date).getTime(),isConvert:1,convertType:3};s.ajax({url:"/api/student/ocpc-track",type:"POST",dataType:"json",data:r}).always(function(){})}}var v=function(){function e(){var e=E.scrollTop(),a=e+E.height();if(_.length>0)var i=_.offset().top;else var i=s("body").height();"/zm-activity"==window.location.pathname||"/zm-activity02"==window.location.pathname?(n=!1,t.style.position="fixed",t.style.bottom=0,t.style.top="auto"):a>i?(t.style.position="absolute",t.style.bottom="auto",t.style.top=i-60+"px",n=!0):n&&(n=!1,t.style.position="fixed",t.style.bottom=0,t.style.top="auto")}var t=s("#reservation-bar");t.style=t[0].style;var n=!1,a=new d;return a.show=function(){t.stop().css("display","block").animate({opacity:1},400),a.fireEvent("show"),e(),E.on("scroll resize",e)},a.hide=function(){t.stop().animate({opacity:0},400,function(){t.css("display","none")}),a.fireEvent("hide"),E.off("scroll resize",e)},a}(),h=function(){var e=new d,t=s("#reservation"),n=t.find(".dialog");return e.show=function(){var a=t.hasClass("show");t.addClass("show"),n.stop(),a||(n.css({opacity:0}),n.animate({opacity:1,top:"50%"},600)),e.fireEvent("show"),e.fireEvent("active")},e.hide=function(){t.removeClass("show"),n.css({opacity:0,top:"200%"}),e.fireEvent("hide")},n.on("click",".J-close",function(){e.hide()}),e}(),x={},S=s("#reservation .form");$form02=s("#reservation .step-2"),registerInfo={},successInfo={},h.on("show",function(){v.hide()}),h.on("active",function(){S.find("input[placeholder]").each(function(){s(this).placeholder()})}),h.on("hide",function(){v.show()}),v.show(),s(document).on("click",".J-trigger-reservation-form",function(){h.show()});var T=["优惠券banner","1212福利活动","掌门5大优势","购课无忧","四大无忧承诺","吸底浮层"];s(".J-trigger-reservation-form").on("click",function(){if(r=s(this).data("from"),"/"==window.location.pathname)switch(r){case"teacher":_hmt.push(["_trackEvent","0元试听","好老师"]);break;case"children":_hmt.push(["_trackEvent","0元试听","孩子学习"]);break;case"video":_hmt.push(["_trackEvent","0元试听","上课视频"]);break;case"bottom":_hmt.push(["_trackEvent","0元试听","吸底浮层"]);break;case"sidebar":_hmt.push(["_trackEvent","0元试听","侧边栏"])}else"/zm-activity"==window.location.pathname?(_hmt.push(["_trackEvent","2019年双12活动","唤起预约弹窗",T[r]]),ZMSDK&&ZMSDK.onEvent("2019年双12活动","唤起预约弹窗+"+T[r])):"/zm-activity02"==window.location.pathname&&(_hmt.push(["_trackEvent","2019年11月活动","唤起预约弹窗",T[r]]),ZMSDK&&ZMSDK.onEvent("2019年11月活动","唤起预约弹窗+"+T[r]))}),s(document).on("click","#reservation-bar .J-trigger-reservation-form",function(){var e=s("#reservation-bar input[name=mobile]").val();e&&s("#reservation input[name=mobile]").val(e)});var j=!1,D=S.validate=new m({element:S,autoSubmit:!1,onFormValidated:function(e){if(!j){switch(r){case"teacher":_hmt.push(["_trackEvent","获得0元试听","好老师"]);break;case"children":_hmt.push(["_trackEvent","获得0元试听","孩子学习"]);break;case"video":_hmt.push(["_trackEvent","获得0元试听","上课视频"]);break;case"bottom":_hmt.push(["_trackEvent","获得0元试听","吸底浮层"]);break;case"sidebar":_hmt.push(["_trackEvent","获得0元试听","侧边栏"])}if("/zm-activity"==window.location.pathname?(_hmt.push(["_trackEvent","2019年双11活动","获得0元试听",T[r]]),ZMSDK&&ZMSDK.onEvent("2019年双11活动","获得0元试听+"+T[r])):"/zm-activity02"==window.location.pathname&&(_hmt.push(["_trackEvent","2019年11月活动","唤起预约弹窗",T[r]]),ZMSDK&&ZMSDK.onEvent("2019年11月活动","唤起预约弹窗+"+T[r])),e)return void S.prop("dsp_valided",!1);S.prop("dsp_valided",!0);var t=S.find("button[type=submit]"),n=c.serializeNodes(S);g||("/zm-activity"==window.location.pathname&&(n.comeFrom="zm-activity"),"/zm-activity02"==window.location.pathname&&(n.comeFrom="zm-activity02")),s.extend(x,n);var o=t.text();t.html("提交中...").prop("disabled",!0),j=!0;var d="";g?d="/api/student/register-and-book-by-valid-code-firststep":(d="local"==k?b+"/api/market-web-server/v1/registration/appointment":"/new-register/api/market-web-server/v1/registration/appointment",n.stuGrade=n.grade,p("channel_code")&&p("channel_keyword")?(n.code=p("channel_code"),n.key=p("channel_keyword")):(n.code=l.getCookie("x-sem-channel-code"),n.key=l.getCookie("x-sem-channel-keyword"))),s.ajax({url:d,type:"POST",dataType:"json",headers:{"Content-Type":"application/json; charset=utf-8"},data:JSON.stringify(n)}).success(function(e){if(0==e.code){switch(r){case"teacher":_hmt.push(["_trackEvent","预约成功","好老师"]);break;case"children":_hmt.push(["_trackEvent","预约成功","孩子学习"]);break;case"video":_hmt.push(["_trackEvent","预约成功","上课视频"]);break;case"bottom":_hmt.push(["_trackEvent","预约成功","吸底浮层"]);break;case"sidebar":_hmt.push(["_trackEvent","预约成功","侧边栏"])}"/zm-activity"==window.location.pathname?(_hmt.push(["_trackEvent","2019年双11活动","预约成功",T[r]]),ZMSDK&&ZMSDK.onEvent("2019年双11活动","预约成功+"+T[r])):"/zm-activity02"==window.location.pathname&&(_hmt.push(["_trackEvent","2019年11月活动","唤起预约弹窗",T[r]]),ZMSDK&&ZMSDK.onEvent("2019年11月活动","唤起预约弹窗+"+T[r])),p("ABTestUrl")&&ZMSDK&&ZMSDK.onEvent("ABTest报名成功",location.href.split("?")[0],{mobile:n.mobile}),f(),g?i(n,e):s.ajax({url:"/api/student/has-tag?mobile="+n.mobile,type:"GET"}).success(function(t){t.data?i(n,e):(a(),S.css("display","none"),$form02.css("display","block"),registerInfo=x,successInfo.data=n,successInfo.res=e,s(".verify-btn").click())}).fail(function(){i(n,e)})}else alert(g?e.msg:e.message)}).fail(function(){alert("提交失败了，再试一遍吧")}).always(function(){j=!1,t.html(o).prop("disabled",!1)})}}});u(),S.find("select[data-v-label], input[data-v-label]").each(function(){$input=s(this);var e={element:"[name="+$input.attr("name")+"]",required:!!$input.attr("data-v-required"),display:$input.attr("data-v-label")};$input.attr("data-v-errmsg")&&(e.errormessage=$input.attr("data-v-errmsg")),$input.attr("data-v-rule")&&(e.rule=$input.attr("data-v-rule")),D.addItem(e)}),s("body").hasClass("lt-ie9")?s("input[name=freeTime]")[0].readOnly=!1:e.async("common:widget/picker/picker.js",function(){var e=s.Deferred(),t=s.Deferred(),n=s("#freetime-date-helper").pickadate({container:"#reservation",min:new Date,format:"yyyy年mm月dd日",onClose:function(){var t=new Date,t=t.getFullYear()+"/"+("0"+(t.getMonth()+1)).slice(-2)+"/"+("0"+t.getDate()).slice(-2);a.set("min",t==n.get("highlight","yyyy/mm/dd")?new Date:["00","00","00"]),e.resolve(n.get())}}).pickadate("picker"),a=s("#freetime-time-helper").pickatime({container:"#reservation",format:"H:i",onClose:function(){t.resolve(a.get())}}).pickatime("picker");s("input[name=freeTime]").on("click",function(){var i=s(this);e=s.Deferred(),t=s.Deferred(),s.when(e,t).then(function(){i.val(n.get()+" "+a.get()),$form02.validate.query("input[name=freeTime]").execute()}),e.then(function(){setTimeout(function(){a.open()},300)}),setTimeout(function(){n.open()},100)})})}()});
;define("desktop:widget/footer-version-renew/footer-version-renew.js",function(e){!function(){function l(){i&&t.ajax({type:"post",url:"/api/student/get-article-list-footer"}).success(function(e){0==e.code&&e.data&&(c[3]=e.data[1],c[0]=e.data[2],c[2]=e.data[3],c[1]=e.data[4],a(c))}).fail(function(){})}function a(e){i=!1,t.each(e,function(e,l){var a=t(".newsInfo").find(".newcon").eq(e);a.html(""),t.each(l,function(e,l){a.append('<li><a href ="/article-'+l.id+'.html">'+l.title+"</li>")})})}for(var t=e("common:widget/jquery/1.11.3/jquery.js"),n=[{hotLabels:{name:"热门标签",contents:[{id:"1",labelName:"在线辅导",labelHref:"http://www.zhangmen.com/about-us/comprehend-us"},{id:"2",labelName:"在线辅导班",labelHref:"https://www.zhangmen.com/"},{id:"3",labelName:"中小学教育网校",labelHref:"https://www.zhangmen.com/"},{id:"4",labelName:"补习机构",labelHref:"https://www.zhangmen.com/"},{id:"5",labelName:"一对一辅导",labelHref:"https://www.zhangmen.com/"},{id:"6",labelName:"英语一对一家教",labelHref:"https://www.zhangmen.com/"},{id:"7",labelName:"初中数学辅导",labelHref:"https://www.zhangmen.com/kw-czsxfd.html"},{id:"8",labelName:"化学辅导",labelHref:"https://www.zhangmen.com/kw-hxfd.html"},{id:"9",labelName:"作文辅导",labelHref:"https://www.zhangmen.com/kw-zwfd.html"},{id:"10",labelName:"初中英语补习",labelHref:"https://www.zhangmen.com/kw-czyybx.html"},{id:"11",labelName:"高中英语辅导",labelHref:"https://www.zhangmen.com/kw-gzyyfd.html"},{id:"12",labelName:"高中生物补习",labelHref:"https://www.zhangmen.com/kw-gzwlbx.html"},{id:"13",labelName:"八年级物理辅导",labelHref:"https://www.zhangmen.com/kw-bnjwlfd.html"},{id:"14",labelName:"初一上册数学辅导",labelHref:"http://www.zhangmen.com/article-3077.html"},{id:"15",labelName:"高中物理辅导班",labelHref:"http://www.zhangmen.com/article-3238.html"},{id:"16",labelName:"八年级物理补习",labelHref:"http://www.zhangmen.com/article-3072.html"},{id:"17",labelName:"初中生作文辅导",labelHref:"http://www.zhangmen.com/article-3229.html"},{id:"18",labelName:"初中一年级作文",labelHref:"http://www.zhangmen.com/article-3230.html"},{id:"19",labelName:"初中语文辅导班",labelHref:"http://www.zhangmen.com/article-3231.html"},{id:"20",labelName:"初中作文辅导",labelHref:"http://www.zhangmen.com/article-3229.html"},{id:"21",labelName:"高中语文辅导",labelHref:"http://www.zhangmen.com/article-3232.html"},{id:"22",labelName:"初二英语辅导",labelHref:"http://www.zhangmen.com/article-3143.html"},{id:"23",labelName:"初一英语辅导班",labelHref:"http://www.zhangmen.com/article-3238.html"},{id:"24",labelName:"初三辅导班",labelHref:"http://www.zhangmen.com/article-3229.html"}]},hotLessons:{name:"热门课程",contents:[{id:"1",labelName:"初二补习班",labelHref:"https://www.zhangmen.com/zm-lessons/"},{id:"2",labelName:"初二辅导班",labelHref:"https://www.zhangmen.com/zm-lessons/"},{id:"3",labelName:"初三补习班",labelHref:"https://www.zhangmen.com/zm-lessons/"},{id:"4",labelName:"初一补习班",labelHref:"https://www.zhangmen.com/zm-lessons/chuyi_chuer/"},{id:"5",labelName:"初二数学辅导",labelHref:"https://www.zhangmen.com/zm-lessons/chuer-shuxue.html"},{id:"6",labelName:"初三数学一对一辅导",labelHref:"https://www.zhangmen.com/zm-lessons/chusan-shuxue.html"},{id:"7",labelName:"初一数学辅导",labelHref:"https://www.zhangmen.com/zm-lessons/chuyi-shuxue.html"},{id:"8",labelName:"初三物理辅导",labelHref:"https://www.zhangmen.com/zm-lessons/chusan-wuli.html"},{id:"9",labelName:"高一物理辅导",labelHref:"https://www.zhangmen.com/zm-lessons/gaoyi-wuli.html"},{id:"10",labelName:"七年级语文补习",labelHref:"https://www.zhangmen.com/zm-lessons/chuyi-yuwen.html"},{id:"11",labelName:"初二英语辅导班",labelHref:"https://www.zhangmen.com/zm-lessons/chuer-yingyu.html"},{id:"12",labelName:"初三英语补习",labelHref:"https://www.zhangmen.com/zm-lessons/chusan-yingyu.html"},{id:"13",labelName:"八年级数学1对1",labelHref:"https://www.zhangmen.com/zm-lessons/chuer-shuxue.html"},{id:"14",labelName:"初一数学补习班",labelHref:"https://www.zhangmen.com/zm-lessons/chuyi-shuxue.html"},{id:"15",labelName:"初一数学培训",labelHref:"https://www.zhangmen.com/zm-lessons/chuyi-shuxue.html"},{id:"16",labelName:"初二作文",labelHref:"https://www.zhangmen.com/zm-lessons/chuer-yuwen.html"},{id:"17",labelName:"初二英语辅导",labelHref:"https://www.zhangmen.com/zm-lessons/chuer-yingyu.html"}]}}],m=t(".linkmap1"),h=t(".linkmap2"),s=0;s<n[0].hotLabels.contents.length;s++)m.append('<a class="im" href="'+n[0].hotLabels.contents[s].labelHref+'" target="_blank">'+n[0].hotLabels.contents[s].labelName+"</a>");for(var s=0;s<n[0].hotLessons.contents.length;s++)h.append('<a class="im" href="'+n[0].hotLessons.contents[s].labelHref+'" target="_blank">'+n[0].hotLessons.contents[s].labelName+"</a>");t(".contactWay .footHome").hover(function(){t(this).animate({width:"235px"},200)},function(){t(this).animate({width:"32px"},200)}),t(".contactWay .footPosition").hover(function(){t(this).animate({width:"400px"},200)},function(){t(this).animate({width:"32px"},200)});var w=!0;t(".firends-website2 .showLinks").click(function(){var e=t(this).siblings(".linkmap").height();w?(t(this).removeClass("play1").addClass("play2"),t(this).parents(".copyright").animate({height:e},300),w=!1):(t(this).removeClass("play2").addClass("play1"),t(this).parents(".copyright").animate({height:"22px"},300),w=!0)});var o=!0;t(".newsShowBtn #a-footer").click(function(){o?(t(this).removeClass("play1").addClass("play2"),t(".newsInfo").animate({height:"195px"},300),o=!1):(t(this).removeClass("play2").addClass("play1"),t(".newsInfo").animate({height:"0"},300),o=!0)});var i=!0,c=(t(".newsInfo ul"),[]);t(".newsShowBtn #a-footer").click(l),l()}()});
;define("desktop:widget/fixednav-new/fixednav-new.js",function(e){var a=e("common:widget/jquery/1.11.3/jquery.js"),t=(e("common:widget/arale-tip/1.3.0/tip.js"),e("common:widget/zeroclipboard/2.0.0/ZeroClipboard.Core.js"),e("common:widget/zm/zm.js")),o=e("desktop:static/statis-evaluate/evaluate.js");a("body").on("click",".zhiCustomBtn",function(){a("#usermobile").val()&&o.send("consult",a("#usermobile").val())}),window.$=a,a(function(){function e(){var e=n.scrollTop();e>200?s.fadeIn():s.fadeOut()}var n=a(window),l=(a(".fixed-nav-new"),a(".fixed-nav-online"),a(".fixed-nav-phone")),i=a(".fixed-nav-wechat"),s=a(".fixed-nav-to-top"),c=a(".fixed-nav-phone-box"),d=a(".fixed-nav-wechat-box"),r=a(".fixed-nav-phone-input"),u=a(".fixed-nav-phone-btn"),b=t.data.get("user"),f=t.data.get("stu"),p=getzhiSDKInstance();p.on("load",function(){p.initBtnDOM()}),p.set("customBtn","true"),p.set("customMargin",120),p.set("groupId","e3fe37a9e7624a96ada7081e49afd3da"),p.set("userinfo",{partnerId:b&&b.id?b.id+":"+b.mobile.substr(-4):""});a("#js-customer-invite");"object"==typeof f&&a("<style>#js-customer-invite{display: none!important}</style>").appendTo("head"),e(),n.on("resize scroll",e),r.on("input propertychange",function(){u.removeClass("disable")}),l.click(function(e){e.stopPropagation(),c.fadeToggle()}),i.mouseenter(function(e){e.stopPropagation(),d.fadeIn(100)}),i.mouseleave(function(e){e.stopPropagation(),d.fadeOut(100)}),a(".fixed-nav-member p").click(function(){window.location.href="/member-recharge"}),c.click(function(e){e.stopPropagation()}),d.click(function(e){e.stopPropagation()}),a("body").click(function(){c.fadeOut(),d.fadeOut()}),s.click(function(){a("html, body").animate({scrollTop:0},"slow")}),a(".callbubble-alert-close").click(function(e){e.stopPropagation(),a("#callbubble-alert-bg").hide()}),a(".callbubble-alert-bt").click(function(e){e.stopPropagation(),a("#callbubble-alert-bg").hide()}),a("form.fixed-nav-phone-content").submit(function(e){if(e.preventDefault(),!u.hasClass("disable")){var t=/^1\d{10}$/;return""==r.val()?(a("#callbubble-alert-bg").show(),a("#callbubble-alert-err").show(),void a("#callbubble-alert-success").hide()):t.test(r.val())?void(u.hasClass("disable")||(o.send("consult",r.val()),u.addClass("disable"),a.ajax({type:"POST",url:"/api/call-center/make-direct-call",data:{mobile:r.val()},timeout:3e3,success:function(e){a.ajax({type:"POST",url:"/api/student/down-web-call-record",data:{requestUniqueId:e.data.requestUniqueId},success:function(e){}}),e&&0==e.code?(a("#callbubble-alert-bg").show(),a("#callbubble-alert-err").hide(),a("#callbubble-alert-success").show(),u.addClass("disable")):u.removeClass("disable")},error:function(){u.removeClass("disable")}}))):(a("#callbubble-alert-bg").show(),a("#callbubble-alert-err").show(),void a("#callbubble-alert-success").hide())}})})});