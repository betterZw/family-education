require("common:widget/jquery/easing/easing.js"),require("common:widget/jquery/mousewheel/mousewheel.js");var $=require("common:widget/jquery/1.11.3/jquery.js"),Env=require("common:widget/tool/env.js"),Utils=require("common:widget/tool/utils.js"),Validator=require("common:widget/arale-validator/0.10.1/index.js"),ZM=require("common:widget/zm/zm.js"),Event=require("common:widget/tool/event.js"),listenScroll=Utils.listenerScrollInView(),Slider=require("common:widget/tool/slider/slider.js"),MyUtil=require("common:widget/my-util/my-util.js"),channelCode=ZM.data.get("sem.semChannelSwitch"),cooperatorUrl=ZM.data.get("extras.cooperatorUrl"),needVerifyCode=cooperatorUrl||channelCode,windowRef,subjectLabel=ZM.data.get("subjectLabel"),gradeLabel=ZM.data.get("gradeLabel"),bookOption=require("common:widget/book-options-relative/book-options-relative.js"),placeholder=require("common:widget/placeholder/placeholder.js");require("common:widget/jquery/mousewheel/mousewheel.js"),require("common:widget/jquery/super-slide/jquery.SuperSlide.2.1.1.js");var appHost=ZM.data.get("appHost"),processEnv=ZM.data.get("processEnv");$(function(){var e=(new Date).getTime();!function(){function e(e,t,i){var a=function(e){var i="";for(var a in e)e.hasOwnProperty(a)&&(i+="高一"==a?"<option value='"+a+"' selected>"+Utils.getTextFrom(a,gradeLabel)+"</option>":"初四"==a?"<option value='初三'>"+Utils.getTextFrom(a,gradeLabel)+"</option>":"<option value='"+a+"'>"+Utils.getTextFrom(a,gradeLabel)+"</option>");t.html(i)},n=function(e){var t="";for(var a in e)e.hasOwnProperty(a)&&(t+=0==a?subjectLabel[e[a]]?"<option value='"+e[a]+"' selected > "+e[a]+"</option>":"<option value='"+e[a]+"' selected> "+e[a]+"</option>":subjectLabel[e[a]]?"<option value='"+e[a]+"' > "+e[a]+"</option>":"<option value='"+e[a]+"' > "+e[a]+"</option>");i.html(t)};this.init=function(){var t=e["高一"];a(e),n(t)},t.on("change",function(){var t=$(this).val();n(e[t])})}var t=ZM.data.get("gradeTosubject"),i=$("#subscribe"),a=i.find("#grade"),n=i.find("#weak_subject"),o=new e(t,a,n);o.init()}(),function(){function e(){var e=new Date,t=e.getFullYear(),i=new Date("1970/06/07 00:00:00"),a=new Date("1970/06/20 00:00:00");i.setFullYear(t),a.setFullYear(t),e>i&&i.setFullYear(t+1),e>a&&a.setFullYear(t+1);var n=Math.floor((i.getTime()-e.getTime())/864e5),o=Math.floor((a.getTime()-e.getTime())/864e5);$("#starRecommend .high").text(n),$("#starRecommend .middle").text(o)}setInterval(e,1e3)}(),function(){function t(e){function t(t){function n(a){if(!a){t.html("发送中……");var n=$("[name=name]",$(e)).val(),o=$("[name=mobile]",$(e)).val(),r=$("[name=grade]",$(e)).val();if(0==r.indexOf("新")){var l=r.length;r=r.substring(1,l)}else if(-1==r.indexOf("新"))var r=r;var s=$("[name=weakSubject]",$(e)).val();$.ajax({url:"/api/student/send-sms-verifier",type:"POST",dataType:"json",data:{name:n,mobile:o,grade:r,weakSubject:s}}).done(function(e){0===e.code?(t.html("验证码已发送"),codeSubmit=!0,i()):alert(e.msg)}).fail(function(){t.html("验证码请求失败！再试一次吧"),alert("验证码请求失败！")}).always(function(){})}}var o=$("[name=name]",$(e)),r=$("[name=mobile]",$(e));a.query(o).execute(function(e){a.query(r).execute(function(t){e||t||n()})})}function i(){function t(){o?(r.html(o+"秒"),o--,n=setTimeout(t,1e3),r.attr("disabled","true")):i()}function i(){clearTimeout(n),o=60,a()}function a(){r.html("验证码"),r.removeAttr("disabled")}var n,o=60;if(".signup-mask"==e)var r=$(".verify-code-get");else var r=$(".verify-code-get2");t()}var a=new Validator({element:e,autoSubmit:!1,onFormValidated:function(t){if(!d){var i=$(e).find(".res-btn");if(!t){if(0==MyUtil.serializeNodes(e).grade.indexOf("新")){var a=MyUtil.serializeNodes(e),n=MyUtil.serializeNodes(e).grade.length;a.grade=MyUtil.serializeNodes(e).grade.substring(1,n)}else if(-1==MyUtil.serializeNodes(e).grade.indexOf("新"))var a=MyUtil.serializeNodes(e);s=$(e).find("input[name=mobile]").val(),d=!0,i.html("正在预约中...").prop("disabled",!0),$.ajax({url:"/api/student/register-and-book-by-valid-code-firststep",type:"POST",dataType:"json",data:a}).success(function(e){0===e.code?(r("ABTestUrl")&&(ZMSDK&&ZMSDK.onEvent("ABTest报名成功",location.href.split("?")[0],{mobile:a.mobile}),ZM_JSSDK&&ZM_JSSDK.sendEvent({eventId:"10557",eventParam:{name:"ABTest报名成功",url:location.href.split("?")[0],mobile:a.mobile}})),location.href="/appointment-success?zixun=1"):alert(e.msg)}).fail(function(){alert("提交失败了，再试一遍吧")}).always(function(){d=!1,i.html("预约免费试听").prop("disabled",!1)})}}}});if(a.addItem({element:"input[name=name]",required:!0,rule:"chineseAndWord",errormessage:"请输入1—14位中英文格式"}),a.addItem({element:"input[name=mobile]",required:!0,rule:"mobile",errormessage:"请输入正确的手机号"}),a.addItem({element:"input[name=identifyingCode]",required:!0,display:"验证码",errormessage:"请输入验证码"}),".signup-mask"==e){var n=$(".verify-code-get");n.on("click",function(e){e.preventDefault(),t(n)})}else{var n=$(".verify-code-get2");n.on("click",function(e){e.preventDefault(),t(n)})}var o="8.0",l=navigator.userAgent.toLowerCase(),c=l.indexOf("msie")>-1,m=c?l.match(/msie ([\d.]+)/)[1]:!1;if(c&&o>=m){if(".signup-mask"==e)var u=$(".verify-code-get");else var u=$(".verify-code-get2");u.on("click",function(t){function n(t){if(t)u.html("请输入正确手机号码……");else{u.html("发送中……");var a=$("[name=name]",$(e)).val(),n=$("[name=mobile]",$(e)).val(),o=$("[name=grade]",$(e)).val();if(0==o.indexOf("新")){var r=o.length;o=o.substring(1,r)}else if(-1==o.indexOf("新"))var o=o;var l=$("[name=weakSubject]",$(e)).val();$.ajax({url:"/api/student/send-sms-verifier",type:"POST",dataType:"json",data:{name:a,mobile:n,grade:o,weakSubject:l}}).done(function(e){0===e.code?(u.html("验证码已发送"),codeSubmit=!0,i()):alert(e.msg)}).fail(function(){u.html("验证码请求失败！再试一次吧"),alert("验证码请求失败！")}).always(function(){})}}t.preventDefault();var o=$("[name=name]",$(e)),r=$("[name=mobile]",$(e));a.query(o).execute(function(e){a.query(r).execute(function(t){e||t||n()})})})}}function i(e){var t=new Validator({element:e,autoSubmit:!1,onFormValidated:function(t){if(!d){var i=$(e).find(".res-btn");if(!t){if(0==MyUtil.serializeNodes(e).grade.indexOf("新")){var o=MyUtil.serializeNodes(e),u=MyUtil.serializeNodes(e).grade.length;o.grade=MyUtil.serializeNodes(e).grade.substring(1,u)}else if(-1==MyUtil.serializeNodes(e).grade.indexOf("新"))var o=MyUtil.serializeNodes(e);s=$(e).find("input[name=mobile]").val(),o.stuGrade=o.grade,r("channel_code")&&r("channel_keyword")?(o.code=r("channel_code"),o.key=r("channel_keyword")):(o.code=Utils.getCookie("x-sem-channel-code"),o.key=Utils.getCookie("x-sem-channel-keyword")),d=!0,i.html("正在预约中...").prop("disabled",!0),$.ajax({url:"local"==processEnv?appHost+"/api/market-web-server/v1/registration/appointment":"/new-register/api/market-web-server/v1/registration/appointment",type:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},dataType:"json",data:JSON.stringify(o)}).success(function(e){0==e.code?(l(o),r("ABTestUrl")&&(ZMSDK&&ZMSDK.onEvent("ABTest报名成功",location.href.split("?")[0],{mobile:o.mobile}),ZM_JSSDK&&ZM_JSSDK.sendEvent({eventId:"10557",eventParam:{name:"ABTest报名成功",url:location.href.split("?")[0],mobile:o.mobile}})),needVerifyCode?n(o):$.ajax({url:"/api/student/has-tag?mobile="+o.mobile,type:"GET"}).success(function(t){t.data?n(o):(m.show(),a(),c.css("display","none"),$form02.css("display","block"),registerInfo=o,successInfo.data=o,successInfo.res=e,$(".verify-btn").click())}).fail(function(){n(o)})):alert(e.message)}).fail(function(){alert("提交失败了，再试一遍吧")}).always(function(){d=!1,i.html("预约免费试听").prop("disabled",!1)})}}}});t.addItem({element:"input[name=name]",required:!0,rule:"chineseAndWord",errormessage:"请输入1—14位中英文格式"}),t.addItem({element:"input[name=mobile]",required:!0,rule:"mobile",errormessage:"请输入正确的手机号"})}function a(){var e=$form02.validate=new Validator({element:$form02,autoSubmit:!1,onFormValidated:function(e){if(!d){if(e)return void $form02.prop("dsp_valided",!1);$form02.prop("dsp_valided",!0);var t=$form02.find("button[type=submit]"),i=MyUtil.serializeNodes($form02),a=t.text();t.html("提交中...").prop("disabled",!0),d=!0,$.ajax({url:"/api/student/validate-and-tag",type:"POST",dataType:"json",data:{mobile:registerInfo.mobile,verifycode:i.verifyCode}}).success(function(e){0==e.code?n(successInfo.data):alert(e.msg)}).fail(function(){alert("提交失败了，再试一遍吧")}).always(function(){d=!1,t.html(a).prop("disabled",!1)})}}});e.addItem({element:"input[name=verifyCode]",required:!0,rule:"verifyCode",errormessage:"请输入验证码"})}function n(e){location.href=o(e)?"/appointment-success2?mobile="+e.mobile+"&flatfrom=0":"/appointment-success?mobile="+e.mobile+"&flatfrom=0"}function o(e){var t=["钢琴陪练","小提琴陪练"],i=["幼儿园中班","幼儿园大班","学前班","小一","小二","小三"];return-1===t.indexOf(e.weakSubject)&&-1!==i.indexOf(e.grade)}function r(e,t){var i=window.location.search,a=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=i.substr(1).match(a);return n?decodeURIComponent(n[2]):t}function l(t){var i=window.location.href,a=/\/lp\/sem/.test(i),n=/\/lp\/sem-zixun/.test(i),o=/bd_vid=/.test(i);if(a&&o||n&&o){var r={"windows pc":2,iphone:1,ipad:1,android:0,"linux pc":2,mac:1,other:2},l=r[Utils.getDevice()],s={logidUrl:window.location.href,uid:25650212,deviceType:l,deviceId:"",clickTime:e,convertTime:(new Date).getTime(),isConvert:1,convertType:3,mobile:t.mobile,code:10026};$.ajax({url:"/api/student/ocpc-track",type:"POST",dataType:"json",data:s}).always(function(){})}}$("#subscribe"),$("#subscribe-foot");Validator.addRule("chineseAndWord",function(e){var t=Utils.string.trim(e.element.val())||"",i=/^([\u4e00-\u9fa5]|[a-zA-Z])+$/;return!i.test(t)||Utils.string.getStrLength(t)>14||Utils.string.getStrLength(t)<1?!1:!0},"请输入1—14位中英文格式"),Validator.addRule("zCardOrMobile",/^(?:80\d{6}|1\d{10}|13\d{5})$/,"{{display}}输入无效");var s,d=!1,c=$("#reservation .form");$form02=$("#reservation .step-2"),registerInfo={},successInfo={};var m=function(){var e=new Event,t=$("#reservation"),i=t.find(".dialog");return e.show=function(){var a=t.hasClass("show");t.addClass("show"),i.stop(),a||(i.css({opacity:0}),i.animate({opacity:1,top:"50%"},600)),e.fireEvent("show"),e.fireEvent("active")},e.hide=function(){t.removeClass("show"),i.css({opacity:0,top:"200%"}),e.fireEvent("hide")},i.on("click",".J-close",function(){e.hide()}),e}();channelCode?t(".signup-mask"):i(".signup-mask")}()});