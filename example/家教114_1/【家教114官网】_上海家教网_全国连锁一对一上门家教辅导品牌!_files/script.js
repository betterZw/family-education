(function($) {
	$(".drop-menu li").mouseover(function(){
		var n = $(this).index();
		$(".drop-menu li").removeClass("bg");
		$(this).addClass("bg");
		$(".dropright .menu").hide();
		$(".dropright").show();
		$(".dropright .menu").eq(n).show();
	})
	$(".dropdown").mouseleave(function(){
		$(".dropright .menu").hide();
		$(".dropright").hide();
		$(".drop-menu li").removeClass("bg");
	})
	$(".topnav .tabnav li").click(function(e){
		var n = $(this).index();
		$(this).siblings("li").removeClass("active");
		$(this).addClass("active");
		$(this).parent().parent().siblings(".tabcont").find(".tabbox").removeClass("active");
		$(this).parent().parent().siblings(".tabcont").find(".tabbox").eq(n).addClass("active");
	})
	$(".suspend li").hover(function(){
		$(this).find(".hidebox").fadeToggle();
	})
	$(".show-list").click(function(){
		$(this).siblings(".none").show();
		$(this).siblings().find(".none").show();
		$("#chose .chose-list .last").removeClass("no");
		$(this).hide();
	})
	$(".hide-list").click(function(){
		$(this).siblings(".none").hide();
		$(this).siblings().find(".none").hide();
		$("#chose .chose-list .last").addClass("no");
		$(this).siblings(".show-list").show();
		$(this).hide();
	})
	$("#chose .chose-list dl dd a").click(function(e){
		if ($(this).parent("li").length > 0 ) {
			n = 1;
		} else {
			n = $(this).parent().parent().index();
		}
		var text = $(this).html(),
			htmlIn= $("#located li span").eq(n);
		$(this).siblings("a").removeClass("on");
		$(this).addClass("on");
		htmlIn.parent().show();
		htmlIn.html(text);
	})
	$(".after dd ul a").click(function(){
		var n = $(this).parent().parent().index(),
			i = $(".after dd > a").length - 1;
		$(".after dd > a").removeClass("on");
		$(".after dd > a").eq(n-i).addClass("on");
	})
	$("#chose .chose-list .after dd > a").hover(function(){
		var n = $(this).index() - 1,
		showUl= $("#chose .chose-list .after dd ul").eq(n);
		
		if (n>=0) {
			showUl.toggleClass("show");
		}
		$(this).toggleClass("hover");
	})
	$("#chose .chose-list .after dd ul").mouseover(function(){
		var m = $(this).siblings("a").length,
		 	n = $(this).index() - m +1,
			showAfter= $("#chose .chose-list .after dd > a").eq(n);
		showAfter.addClass("hover");
		$(this).addClass("show");
	}).mouseleave(function(){
		$(this).removeClass("show");
		$("#chose .chose-list .after dd > a").removeClass("hover");
	})
	$("#located .text img").click(function(){
		$(this).parent().hide();
	})
	function susStyle() {
		if($(".teach-form").length){
			var _windowpos = $(window).scrollTop(),
				Htop = ($(window).height() - $(".teach-form").height()) / 2,
				offtop = $("#ibanner").offset().top + 15;
				H = $(".teach-form").height();
			if (_windowpos >= offtop) {
				var scrolltoTop = _windowpos - offtop + Htop,
					totlaH = $("#ibanner").height() + $("#content").height() - H;
				if (scrolltoTop >=totlaH) {
					$(".teach-form").stop(true).delay(0).animate({top: totlaH  + "px" },  { duration: 0, easing: "linear" });
				}else {
					$(".teach-form").stop(true).delay(0).animate({top: scrolltoTop  + "px" },  { duration: 0, easing: "linear" });
				}
				
			}else {
				$(".teach-form").stop(true).delay(0).animate({top: 15 + "px" },  { duration: 0, easing: "linear" });		
			}
		}
		if ($("#news .right-list").length) {
			var _windowPos = $(window).scrollTop(),
				listoffTop = $("#news").offset().top + 20,
				maxoffTop = listoffTop + $("#news").height() - $("#news .right-list") .height() - 40,
				moveMax = $("#news").height() - 40 - $("#news .right-list") .height();
			if (maxoffTop > _windowPos && _windowPos >= listoffTop) {
				$("#news .right-list").stop(true).delay(300).animate({top:  _windowPos - listoffTop   + "px" },  { duration: 500, easing: "linear" });
			} else if (_windowPos >= maxoffTop){
				$("#news .right-list").stop(true).delay(300).animate({top: moveMax + "px" },  { duration: 500, easing: "linear" });		
			}else{
				$("#news .right-list").stop(true).delay(300).animate({top: 0 + "px" },  { duration: 500, easing: "linear" });
			}
		}
		if($(".detial-tab").length){
			var windowPos = $(window).scrollTop(),
				offTop = $(".detial-tab").offset().top + 20,
				scrollTopArry = [];
		$(".detial-tab:first").find(".link-cont .page").each(function() {
	        scrollTopArry.push($(this).offset().top);
	    });
	    var i = 0;
		var j = 0;
		for(i in scrollTopArry)
			{
				if(windowPos>=scrollTopArry[i]- 180)
				{
					j =i;
				}
			}
			$(".tab-link li").eq(j).addClass("active").siblings().removeClass("active");
			if ( windowPos >= offTop) {
				$(".detial-tab").addClass("fixed");
			} else {
				$(".detial-tab").removeClass("fixed");
			}
		}
	}
	function showSearch (){
		if ($(".chose-list .none").css("display") == "none") {
			$("#chose .chose-list .last").addClass("no");
		}
	}
	function headerStyle() {
		if($('#header').length){
			var windowpos = $(window).scrollTop(),
				H = $(".header-top").outerHeight();
			if (windowpos >= H) {
				$('body').css({marginTop: H});
				$("#header").addClass('fixed-header');
			} else {
				$('body').css({marginTop: 0});
				$("#header").removeClass('fixed-header');
			}
		}
	}
	showSearch();
	susStyle();
	headerStyle();
	$(window).on('scroll', function() {
		susStyle();
		showSearch();
		headerStyle();
	});
	$(window).on('load', function() {
		showSearch();
	});
	$(".tab-link li").click(function(){
		$(".tab-link li").removeClass("active");
		$(this).addClass("active");
	})
	$(window).load(function(){
		sChange();
		$("#banner").css("min-height",$(".dropdown").height());
		$("#login-banner .right-form").css("top",($("#login-banner").height() - $(".right-form").height()) * 0.44 + "px");
		$("#register-banner .left-form").css("top",($("#register-banner").height() - $(".left-form").height()) * 0.44 + "px");
		$("#pcontent .right-cont").css("min-height",$(window).height() + "px");
	})
	$(window).resize(function(){
		$("#banner").css("min-height",$(".dropdown").height());
		$("#login-banner .right-form").css("top",($("#login-banner").height() - $(".right-form").height()) * 0.44 + "px");
		$("#register-banner .left-form").css("top",($("#register-banner").height() - $(".left-form").height()) / 2 + "px");
	})		
	$(".suspend .scroll-top").click(function(){
		var windowpos = $(window).scrollTop();
		if (windowpos > 1) {
			$('html, body').stop().animate({scrollTop: 0}, 1000);
		}	
	})
	$(".uper").click(function(e) {
		e.preventDefault();
	    return $(this).parent().siblings(".loca").click(); // up data
	})
	$("#bjtx").click(function(e) {
		e.preventDefault();
	    $("#upfile").click(); // up data
	})
		$(".left-nav li").click(function(e){
			e.preventDefault();
			$(".left-nav li").removeClass("active");
			$(this).addClass("active");
			var n = $(this).index() + 1;
			$(".right-cont .tab-cont").removeClass("active");
			$(".right-cont .tab-cont").eq(n).addClass("active");
		})
		$("a.look").click(function(e){
			e.preventDefault();
			$(".right-cont .tab-cont").removeClass("active");
			$(".right-cont .tab-cont").eq(0).addClass("active");
			$(".right-cont .tab-cont .welcome").hide();
			$(".right-cont .tab-cont .resume").show();
		})
		$(".show-box a.edit").click(function(e){
			e.preventDefault();
			$("#showmessage").hide();
			$(this).parent().parent().hide();
			$(this).parent().parent().siblings(".hide-box").show();
		})
		$(".li-box .top-left li").click(function(){
			var id   = $(this).attr("data-value");
			var _val = $(this).html();
			var old_id_arr = $("#first_subject").val().split(',');
			if(inArray(id, old_id_arr)){
				layer.msg('您已选择此项', {time: 500});
				return;
			}else if(old_id_arr.length >= 50){
				layer.msg('最多选择50项', {time: 500});
				return;
			}else{
				old_id_arr.push(id);
			}
			$("#first_subject").val(old_id_arr.join(','));
			$(this).parent().parent().siblings(".right").find("li").each(function(){
				var spanVal = $(this).find("span").html();
				if(_val != spanVal){
					if (spanVal == "" ) {
						$(this).find("span").html(_val);
						$(this).find("em").attr("onclick","deleteid("+id+")");
						$(this).show();
						return false;
					}
				}else {
					return false;
				}
			});
		})
		$(".li-box .left .selected").change(function(){
			 sChange();
		})
		function sChange(){
			var _val = $(".selected").find("option:selected").html(),
				getId = $(".selected").find("option:selected").attr("value");
			$(".selected").parent().parent().find("ul").eq(getId).attr("id",getId);
			$(".selected").parent().parent().siblings(".right").find("li").each(function(){
				var spanVal = $(this).find("i").html();
			})
		}
		$(".li-box .bottom-left li").click(function(){
			var id = $(this).attr("data-value");
			var _val = $(this).html(),
				ulId = $(this).parent().attr("id"),
				sval = $(".selected").find("option:selected").html();
			var old_id_arr = $("#teach_place").val().split(',');
			if(inArray(id, old_id_arr)){
				layer.msg('您已选择此项', {time: 500});
				return;
			}else if(old_id_arr.length >= 50){
				layer.msg('最多选择50项', {time: 500});
				return;
			}else{
				old_id_arr.push(id);
			}
			$("#teach_place").val(old_id_arr.join(','));	
			$(this).parent().parent().siblings(".right").find("li").each(function(){
				var spanVal = $(this).find("span").html(),
					iVal = $(this).find("i").html(),
					liId = $(this).attr("id"),
					lival = '（'+_val+'）';
				if (iVal!=sval) {
					if (iVal == "") {
						if(iVal == ""){				
							$(this).find("i").html(sval);
							$(this).find("span").html("（" + _val + "）");
							$(this).find("em").attr("onclick","deleteaid("+id+")");
							$(this).show();
							return false;
						}
					}
					
				}else {
					if (spanVal != lival) {
						if(iVal == ""){				
							$(this).find("i").html(sval);
							$(this).find("span").html("（" + _val + "）");
							$(this).find("em").attr("onclick","deleteaid("+id+")");
							$(this).show();
							return false;
						}
					}else {
						return false;
					}
				}
			})
		})
		$(".li-box .right li em").click(function(){
			$(this).parent().find("span").html("");
			$(this).parent().find("i").html("");
			$(this).parent().attr("id","")
			$(this).parent().hide();
		})
		// 保存
		// 第一个
		$("button.tsubmit").click(function(e){
			e.preventDefault();
			var span = $(this).parent().parent().siblings(".show-box").find("li").eq(0).find("span"),
				sHtml = $(this).parent().parent().siblings(".show-box").find("li").eq(0).find("span").html();
			sHtml = "";
			$(".tright li").each(function(){
				var tli = "",
					sVal = $(this).find("span").html();
				if (sVal != "") {
					tli = sVal + "\n";
				}
				sHtml += tli;
				span.html(sHtml);
			})
		})
		// 第二个
		$("button.tsubmit").click(function(e){
			e.preventDefault();
			var span = $(this).parent().parent().siblings(".show-box").find("li").eq(1).find("span"),
				sHtml = $(this).parent().parent().siblings(".show-box").find("li").eq(1).find("span").html();
			sHtml = "";
			$(".nright li").each(function(){
				var tli = "",
					sVal = $(this).find("span").html(),
					iVal = $(this).find("i").html(); 
				if (sVal != "") {
					tli = sVal + iVal + "\n";
				}
				sHtml += tli;
				span.html(sHtml);
			})
		})
		// 第三个
		$("button.tsubmit").click(function(e){
			e.preventDefault();
			var span = $(this).parent().parent().siblings(".show-box").find("li").eq(2).find("span"),
				sHtml = $(this).parent().parent().siblings(".show-box").find("li").eq(2).find("span").html(),
				putIndex = $(".fdfs input:checked").index() + 1;
			if (putIndex >= 1) {
				sHtml = $(".fdfs").children().eq(putIndex).html();
				span.html(sHtml);
			}
		})
		// 第四个
		$("button.tsubmit").click(function(e){
			e.preventDefault();
			var span = $(this).parent().parent().siblings(".show-box").find("li").eq(3).find("span"),
				sHtml = $(this).parent().parent().siblings(".show-box").find("li").eq(3).find("span").html(),
				putHtml = $("input.imoney").val();
			sHtml = putHtml;
			span.html(sHtml);
		})
		// 第五个
		$("button.bsubmit").click(function(e){
			e.preventDefault();
			var span = $(this).parent().parent().siblings(".show-box").find("li").eq(0).find("span"),
				sHtml = $(this).parent().parent().siblings(".show-box").find("li").eq(0).find("span").html(),
				putHtml = $("input.shzs").val();
			sHtml = putHtml;
			span.html(sHtml);
		})
		// 第六个
		$("button.bsubmit").click(function(e){
			e.preventDefault();
			var span = $(this).parent().parent().siblings(".show-box").find("li").eq(2).find("span"),
				sHtml = $(this).parent().parent().siblings(".show-box").find("li").eq(2).find("span").html(),
				putHtml = $("textarea.pj").val();
			sHtml = putHtml;
			span.html(sHtml);
		})
		// 第七个
		$("button.bsubmit").click(function(e){
			e.preventDefault();
			var span = $(this).parent().parent().siblings(".show-box").find("li").eq(1).find("span"),
				sHtml = $(this).parent().parent().siblings(".show-box").find("li").eq(1).find("span").html(),
				putHtml = $("textarea.al").val();
			sHtml = putHtml;
			span.html(sHtml);
		})
		// 收起
		$(".hide-box button").click(function(e){
			e.preventDefault();
			$(this).parent().parent().siblings(".show-box").show();
			$(this).parent().parent().hide();
		})
		$("button.reset").click(function(e){
			e.preventDefault();
			$(this).parent().parent().siblings(".show-box").show();
			$(this).parent().parent().hide();
		})
		// 超出文本长度
		$("input.yx").blur(function(){
			var yxLength = 13,
			    valLength = $("input.yx").val().length,
			    pCont = $(this).siblings("p");
			    if (yxLength<valLength) {
			    	pCont.show();
					pCont.html("文字没有完全展示出来!");
			    }else {
					pCont.html("");
			    }
		})
		// 账号
		function trueZh(){
			var zhValue = $("input.zh").val(),
			    rzhValue = $("input.rzh").val(),
			    pCont = $("input.rzh").siblings("p");
			    if (zhValue !="" && rzhValue != "") {
			    	if (zhValue == rzhValue) {
				    	pCont.show();
						pCont.css({color: '#50C645'}).html("两次输入账号一致!");
				    }else {
				    	pCont.show();
						pCont.css({color: '#f00'}).html("两次输入账号不一致，请进行核对!");
				    }
			    }
		}
		function truePass(){
			var passValue = $("input.pass").val(),
			    rpassValue = $("input.password").val(),
			    spanCont = $("input.password").siblings("span");
			    if (passValue !="" && rpassValue != "") {
			    	if (passValue == rpassValue) {
						spanCont.html("");
				    }else {
						spanCont.html("两次输入的密码不一致，请核对后重新输入!");
				    }
			    }
		}
		$("input.rzh").blur(function(){
			trueZh();
		})
		$("input.zh").blur(function(){
			trueZh();
		})
		// 教员注册
		// 邮箱
		$("input.mail").blur(function(){
			var mailreg=/^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/gi,
				mailVail = $(this).val();
				 if(!mailreg.test(mailVail)){
				 	$(this).siblings("span").html("请输入正确的邮箱地址!");
				 }else{
				 	$(this).siblings("span").html("");
				 }
		})
		// 密码
		$("input.pass").blur(function(){
			truePass();
			var passreg=/^\w{6,}$/,
				passVail = $(this).val();
				 if(!passreg.test(passVail)){
				 	$(this).siblings("span").html("密码由数字、字母或下划线构成，长度须大于6位!");
				 }else{
				 	$(this).siblings("span").html("");
				 }
		})
		$("input.password").blur(function(){
			truePass();
		})
		// 这只文字长度
		function cutString(str, len) {
		 //length属性读出来的汉字长度为1
		 if(str.length * 2 <= len) {
		  return str;
		 }
		 var strlen = 0;
		 var s = "";
		 for(var i = 0;i < str.length; i++) {
		  s = s + str.charAt(i);
		  if (str.charCodeAt(i) > 128) {
		   strlen = strlen + 2;
		   if(strlen >= len){
		    return s.substring(0,s.length-1) + "...";
		   }
		  } else {
		   strlen = strlen + 1;
		   if(strlen >= len){
		    return s.substring(0,s.length-2) + "...";
		   }
		  }
		 }
		 return s;
		}
		window.onload=function(){
		  	var str1 = $(".student-list tr td").eq(1).html(),
		  		str2 = $(".student-list tr td").eq(2).html(),
		  		str3 = $(".student-list tr td").eq(3).html(),
		  		str4 = $(".student-list tr td").eq(4).html(),
		  		s1 = cutString(str1,24),
		  		s2 = cutString(str2,40),
		  		s3 = cutString(str3,108),
		  		s4 = cutString(str4,108);
		 $(".student-list tr td").eq(1).html(s1);
		 $(".student-list tr td").eq(2).html(s2);
		 $(".student-list tr td").eq(3).html(s3);
		 $(".student-list tr td").eq(4).html(s4);
		}
		window.onload=function(){
			$(".teacher-list > ul > li").each(function(){
				var str5 = $(this).find("p").html();
				
				s5 = cutString(str5,164);
				$(this).find("p").html(s5);
			});
		}

})(window.jQuery);

function checkSubmit(type){
	var contact = document.getElementById("contact").value;
	if(contact == '')
	{
		alert("请填写联系人");
		return false;
	}

	if(type == 1)
	{
		var stu_xueke = document.getElementById("stu_xueke").value;
		if(stu_xueke == '')
		{
			alert("请填写科目");
			return false;
		}
	}
	
	var m = document.getElementById("mobile");
	if(m.value==""){
		alert("请输入你的手机号码！");
		return false;
	}
	var reg = /^1[345678]\d{9}$/;
	if(reg.test(m.value)==false){
		alert("请输入正确的手机号码！");
		return false;
	}

}
