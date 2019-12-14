/**
 * 浏览器兼容性检测
 */
$(function(){
	var userAgent = navigator.userAgent;
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1
	if (isIE) {
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(userAgent);
		var fIEVersion = parseFloat(RegExp["$1"]);
	}
	if (fIEVersion == '5.5' || fIEVersion == '6' || fIEVersion == '6.0'
			|| fIEVersion == '7' || fIEVersion == '7.0' || fIEVersion == '8'
			|| fIEVersion == '8.0') {
		var isShow, check = new RegExp("(^| )LOW_IE_SHOW=([^;]*)(;|$)");
		isShow = document.cookie.match(check);
		if (!isShow) {
			$('#kickIe').show();
		}
	}
	
	$(".kick_close").click(function() {
		$("#kickIe").hide();
		closeKick();
	});
	
	$(".kick_jisu").click(function() {
		$("#kickIe").hide();
		$("#kickIe_bg").show();
		$("#kickIe_con").show();
	});
	
	$(".kickIe_con_close").click(function() {
		$("#kickIe_bg").hide();
		$("#kickIe_con").hide();
		$("#kickIe").show();
	});
	
	$("#kickIe_bg").click(function() {
		$("#kickIe_bg").hide();
		$("#kickIe_con").hide();
		$("#kickIe").show();
	});
	
	$(".kickIe_con_list").hide();
	$("div.kickIe_con_ie div:first").addClass("active").show();
	$(".kickIe_con_list:first").show();
	
	$("div.kickIe_con_ie div").mouseover(function() {
		$("div.kickIe_con_ie div").removeClass("active");
		$(this).addClass("active");
		$(".kickIe_con_list").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).show();
		return false;
	});
})
function closeKick() {
	var time = new Date();
	document.cookie = "LOW_IE_SHOW=" + time.getTime() + ";";
}