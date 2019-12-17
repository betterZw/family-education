<%@ page language="java" contentType="text/html; charset=utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html lang="en">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<meta name="applicable-device" content="pc,mobile">
<meta name="MobileOptimized" content="width">
<meta name="HandheldFriendly" content="true">
<meta name="mobile-agent"
	content="format=xhtml; url=https://m.jiajiao114.com/sh/Teacher/">
<meta name="mobile-agent"
	content="format=html5; url=https://m.jiajiao114.com/sh/Teacher/">
<title>【上海家教中心-上海家教中心】_家教114</title>
<meta name="description"
	content="【上海家教中心-上海家教中心】栏目，基于家教114强大的师资力量，择优为您推荐上海家教。是上海地区找家教、请家教、做家教的最佳平台。请家教热线：021-61300114 家教114">
<meta name="keywords" content="家教,上海家教,上海家教中心,上海家教,上海上海家教">
<link href="./main_page/style.css" rel="stylesheet" type="text/css">
<link rel="icon" href="http://www.jiajiao114.com/images/favicon.ico"
	type="image/x-icon">
</head>

<body style="margin-top: 43px;">
	<div id="header" class="fixed-header">
		<div class="header-top">
			<div>
				<div class="left pull-left">
					<a href="http://www.jiajiao114.com/signin.php" class="login">教员请登录</a>
					<a href="http://www.jiajiao114.com/member/signup2.php">立即注册</a>
				</div>
				<div class="right pull-right">
					<img src="./main_page/icon_phone.png" alt="021-61300114">上海请家教热线：021-61300114
				</div>
				<div class="clear"></div>
			</div>
		</div>
		<div class="logoer">
			<div>
				<div class="logo pull-left">
					<a href="http://www.jiajiao114.com/" class="pull-left"><img
						src="./main_page/logo.png" title="上海家教" alt="上海家教"></a>
					<div class="city pull-right">
						<span>上海</span>
						<div class="city-down">
							<ul>
								<li><a href="http://bj.jiajiao114.com/">北京</a></li>
								<li><a href="http://gz.jiajiao114.com/">广州</a></li>
								<li><a href="http://tj.jiajiao114.com/">天津</a></li>
								<li><a href="http://sz.jiajiao114.com/">深圳</a></li>
								<li><a href="http://nj.jiajiao114.com/">南京</a></li>
								<li><a href="http://hz.jiajiao114.com/">杭州</a></li>
								<li><a href="http://wh.jiajiao114.com/">武汉</a></li>
								<li><a href="http://xa.jiajiao114.com/">西安</a></li>
								<li><a href="http://cd.jiajiao114.com/">成都</a></li>
								<!-- <div class="clear"></div> -->
							</ul>
							<a href="http://www.jiajiao114.com/change_city.php" class="more">更多城市</a>
						</div>
					</div>
					<!-- <div class="clear"></div> -->
				</div>
				<div class="have pull-right">
					<a href="javascript:void(0);"><img
						src="./main_page/icon_teacher.png" alt=""><i
						onclick="yuyueCookie()">您已备选老师<span id="beixuan_count">0</span></i></a>
				</div>
				<div
					style="font-size:19px;font-family:STXingkai;float:right;line-height:40px;margin-right:30px;color:#666666;">
					教育的艺术在于鼓舞和唤醒</div>
				<div class="clear"></div>
			</div>
		</div>
		<form id="yuyue_submit"
			action="http://www.jiajiao114.com/xuqiu_bx.php" method="get">
			<input type="hidden" name="tid" id="cookietid" value="0">
		</form>
		<script src="./main_page/sdk"></script>
		<script charset="utf-8" src="./main_page/insert_bdtj"></script>
		<script src="./main_page/hm.js.下载"></script>
		<script>

			function go_teacher_detail() {
				var tid = document.getElementById("bianhao");
				location.href = "/teacher/t-" + tid.value + ".html";
			}

		</script>

		<div class="nav">
			<div>
				<script>
					var _hmt = _hmt || [];
					(function () {
						var hm = document.createElement("script");
						hm.src = "https://hm.baidu.com/hm.js?37e4f3e1af4b0922381d2be8a23a5a1d";
						var s = document.getElementsByTagName("script")[0];
						s.parentNode.insertBefore(hm, s);
					})();
				</script>
				<div class="find-teacher pull-left hide-down">
					<div class="top">
						<a href="http://www.jiajiao114.com/l-c1/">找学生<span><img
								src="./main_page/icon_down.png" alt=""></span></a>
					</div>
					<div class="dropdown" style="">
						<ul class="drop-menu">
							<li class="">
								<dl>
									<dt>小学</dt>
									<dd>
										<a
											href="http://localhost:8080/family-education/FindStudentByGradeAndSubject?grade=高一&subject=数学">小学数学</a>
									</dd>
									<dd>
										<a
											href="http://localhost:8080/family-education/FindStudentByGradeAndSubject?grade=小学&subject=英语">小学英语</a>
									</dd>
									<dd>
										<a
											href="http://localhost:8080/family-education/FindStudentByGradeAndSubject?grade=小学&subject=语文">小学语文</a>
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt>初中</dt>
									<dd>
										<a
											href="http://localhost:8080/family-education/FindStudentByGradeAndSubject?grade=初一&subject=数学">初一数学</a>
									</dd>
									<dd>
										<a
											href="http://localhost:8080/family-education/FindStudentByGradeAndSubject?grade=初二&subject=数学">初二数学</a>
									</dd>
									<dd>
										<a
											href="http://localhost:8080/family-education/FindStudentByGradeAndSubject?grade=初一&subject=英语">初一英语</a>
									</dd>
									<dd>
										<a
											href="http://localhost:8080/family-education/FindStudentByGradeAndSubject?grade=初二&subject=英语">初二英语</a>
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt>高中</dt>
									<dd>
										<a
											href="http://localhost:8080/family-education/FindStudentByGradeAndSubject?grade=高一&subject=数学">高一数学</a>
									</dd>
									<dd>
										<a
											href="http://localhost:8080/family-education/FindStudentByGradeAndSubject?grade=高二&subject=数学">高二数学</a>
									</dd>
									<dd>
										<a
											href="http://localhost:8080/family-education/FindStudentByGradeAndSubject?grade=高一&subject=英语">高一英语</a>
									</dd>
									<dd>
										<a
											href="http://localhost:8080/family-education/FindStudentByGradeAndSubject?grade=高二&subject=英语">高二英语</a>
									</dd>
								</dl>
							</li>

						</ul>

					</div>
				</div>
				<ul class="navbar pull-left">
					<li class=""><a href="http://www.jiajiao114.com/">首页</a></li> 
					<li class="active"><a href="http://www.jiajiao114.com/l-c1/">留言与回复<i><img
								src="./main_page/hot.png" alt=""></i></a></li>
					<li class=""><a href="http://www.jiajiao114.com/xuqiu.php">快速请家教</a></li>
					<li class=""><a href="${pageContext.request.contextPath }/teacher/downloads.jsp">文件共享</a></li>
					<li class=""><a href="${pageContext.request.contextPath }/FindByTeacherIdServlet?id=${teacher.t_id}">个人中心</a></li>
					<li class=""><a
						href="http://www.jiajiao114.com/help/jiajiao_fee.php">投诉</a></li>
					<div class="clear"></div>
				</ul>
				<div class="clear"></div>
			</div>
		</div>
		
		

		<script type="text/javascript">
			function avatarLoadError(img, gender) {
				if (gender === 1) {
					img.src = '/images/m_default_avatar.jpg';
				} else {
					img.src = '/images/w_default_avatar.jpg';
				}
			}
		</script>

		<div id="content">
			<div>
				<div class="teacher-list">
					<ul>
					<c:forEach items="${requestScope.students }" var="student">
								<li style="cursor: pointer;">
							<div class="left">
								<div class="teacher-pic">
									<div class="pic">
										<img onerror="avatarLoadError(this, 2)" style="height:120px"
											src="./main_page/w_default_avatar.jpg" alt="上海家教陈老师">
									</div>
									
									<span>${student.s_userName }</span> 
									<i>编号：${student.s_id }</i>
									<i id="haveMsg"></i>
									
									
											<script type="text/javascript">
												//var list = ${requestScope.messages }.length;
												/* alert("dskdl"); */
												/* for (var i=0; i<${requestScope.messages }.length; ++i) {
													alert("qq");
													if (${requestScope.messages }[i].m_from == ${student.s_id }) {
														var result = document.getElementById("haveMsg");
														result.innerHTML += "${requestScope.messages }[i].m_isReply";
														
													}
												} */
											</script>
								
									<%-- <c:forEach items="${requestScope.messages }" var="message">
										<c:if test="${message.m_from } == ${student.s_id }">
											<i>${message.m_isReply }</i>
										</c:if>
									</c:forEach> --%>
									<%-- <i>编号：${student.s_id }</i> --%>
									<%-- for(i: 0-msglst)
										if (${student.s_id } == i)
											desply(isreply)
									 --%>
								</div>
								<div class="teacher-info">
									<dl>
										<dt>教学经验：</dt>
										<dd>10年</dd>
										<div class="clear"></div>
									</dl>
									<dl>
										<dt>老师类型：</dt>
										<dd>高级教师</dd>
										<div class="clear"></div>
									</dl>
									<dl>
										<dt>可授科目：</dt>
										<dd>
											<span>
											   <span>${student.s_grade }${student.s_subject }</span>
											</span>
										</dd>
										<div class="clear"></div>
									</dl>
									<dl>
										<font color="#f9b04e">已有12份成功家教记录</font>
									</dl>
									<ul>
										<li style="width:30%;"><img src="./main_page/icon_rz.png"
											alt="">认证教员</li>
										<li style="width:30%;"><img src="./main_page/icon_mx.png"
											alt="">明星教员</li>
										<div class="clear"></div>
									</ul>
								</div>
								<div class="clear"></div>
							</div>
							<div class="right">
								<p>陈老师，34岁，99年希望杯全国数学邀请赛银牌得主。10年数学教龄，熟悉中高考数学重难点和常考题型，善于启发引导学生思维...</p>
								<a href="http://www.jiajiao114.com/teacher/368209.html"
									class="btn">留言</a>
								<div
									style="text-align: center;padding-top: 10px;font-size: 12px;">最近登陆时间：2019-12-12
								</div>
							</div>
							<div class="clear"></div>
						</li>
									
									</c:forEach>
					
					</ul>
					<div class="nav-page">
						<ul>
							<li>1</li>
							<li><a href="http://www.jiajiao114.com/l-c1-a1-p2/">2</a></li>
							<li><a href="http://www.jiajiao114.com/l-c1-a1-p3/">3</a></li>
							<li><a href="http://www.jiajiao114.com/l-c1-a1-p4/">4</a></li>
							<li><a href="http://www.jiajiao114.com/l-c1-a1-p5/">5</a></li>
							<li><a href="http://www.jiajiao114.com/l-c1-a1-p6/">6</a></li>
							<li><a href="http://www.jiajiao114.com/l-c1-a1-p7/">7</a></li>
							<li>...</li>
							<li><a href="http://www.jiajiao114.com/l-c1-a1-p99/">99</a></li>
							<li><a href="http://www.jiajiao114.com/l-c1-a1-p100/">100</a></li>
							<li><a href="http://www.jiajiao114.com/l-c1-a1-p2/">下页</a></li>
							<div class="clear"></div>
						</ul>
					</div>
				</div>
				<div class="order-form">
					<div class="city-info">
						<h5>热门大学家教</h5>
						<a href="http://www.jiajiao114.com/l-c1-a1-e1/" title="上海财经大学">上海财经大学</a><a
							href="http://www.jiajiao114.com/l-c1-a1-e2/" title="上海交通大学">上海交通大学</a><a
							href="http://www.jiajiao114.com/l-c1-a1-e3/" title="上海外国语大学">上海外国语大学</a><a
							href="http://www.jiajiao114.com/l-c1-a1-e4/" title="上海师范大学">上海师范大学</a><a
							href="http://www.jiajiao114.com/l-c1-a1-e6/" title="上海大学">上海大学</a><a
							href="http://www.jiajiao114.com/l-c1-a1-e7/" title="华东师范大学">华东师范大学</a><a
							href="http://www.jiajiao114.com/l-c1-a1-e8/" title="上海音乐学院">上海音乐学院</a><a
							href="http://www.jiajiao114.com/l-c1-a1-e9/" title="同济大学">同济大学</a>
					</div>
					<div class="city-info">
						<h5>热门城市</h5>
						<div id="hot-city-box">
							<div class="hot-city-col"
								style="border-right: 1px solid #efefef;">
								<a href="http://jiajiao114.com/">上海家教</a><a
									href="http://tj.jiajiao114.com/">天津家教</a><a
									href="http://cd.jiajiao114.com/">成都家教</a><a
									href="http://sz.jiajiao114.com/">深圳家教</a><a
									href="http://hrb.jiajiao114.com/">哈尔滨家教</a>
							</div>
							<div class="hot-city-col"
								style="border-right: 1px solid #efefef;">
								<a href="http://bj.jiajiao114.com/">北京家教</a><a
									href="http://hz.jiajiao114.com/">杭州家教</a><a
									href="http://wh.jiajiao114.com/">武汉家教</a><a
									href="http://qd.jiajiao114.com/">青岛家教</a><a
									href="http://dl.jiajiao114.com/">大连家教</a>
							</div>
							<div class="hot-city-col">
								<a href="http://gz.jiajiao114.com/">广州家教</a><a
									href="http://nj.jiajiao114.com/">南京家教</a><a
									href="http://xa.jiajiao114.com/">西安家教</a><a
									href="http://hf.jiajiao114.com/">合肥家教</a><a
									href="http://xm.jiajiao114.com/">厦门家教</a>
							</div>
						</div>
					</div>
					<div class="img">
						<img src="./main_page/order_img.png" alt="">
					</div>
				</div>
				<!-- 	<h4>快速请家教</h4>
				<form action="http://www.jiajiao114.com/xuqiu_ok.php" method="post" onsubmit="return checkSubmit(1);">
					<div class="fg">
						<label for="">联系人</label>
						<input type="text" name="contact" id="contact" maxlength="10">
					</div>
					<div class="fg">
						<label for="">联系方式</label>
						<input type="text" maxlength="11" name="mobile" id="mobile">
					</div>
					<div class="fg">
						<label for="">科目</label>
						<input type="text" name="stu_xueke" id="stu_xueke" maxlength="10">
					</div>
					<button type="submit">提交</button>
				</form> -->

				<div class="clear"></div>
			</div>
		</div>

		<style type="text/css">
#recommend-node-city-container {
	border-top: 1px solid #ddd;
	margin-top: 50px;
	padding: 50px 0;
}

#recommend-node-city-container a {
	color: #666;
	display: inline-block;
	margin-bottom: 5px;
	margin-right: 9px;
}

#recommend-city {
	margin-top: 20px;
}
</style>

		<div id="recommend-node-city-container">
			<div>
				<div id="recommend-node">
					<strong>推荐学科：</strong> <a
						href="http://www.jiajiao114.com/l-c1-a129/">浦东家教</a> <a
						href="http://www.jiajiao114.com/l-c1-a100/">徐汇家教</a> <a
						href="http://www.jiajiao114.com/l-c1-a110/">长宁家教</a> <a
						href="http://www.jiajiao114.com/l-c1-a105/">闵行家教</a> <a
						href="http://www.jiajiao114.com/l-c1-a136/">黄浦家教</a> <a
						href="http://www.jiajiao114.com/l-c1-a117/">卢湾家教</a> <a
						href="http://www.jiajiao114.com/l-c1-a115/">静安家教</a> <a
						href="http://www.jiajiao114.com/l-c1-a125/">虹口家教</a> <a
						href="http://www.jiajiao114.com/l-c1-n104/">上海话家教</a> <a
						href="http://www.jiajiao114.com/l-c1-n132/">英语口语家教</a> <a
						href="http://www.jiajiao114.com/l-c1-n131/">钢琴家教</a> <a
						href="http://www.jiajiao114.com/l-c1-n110/">初一初二英语家教</a> <a
						href="http://www.jiajiao114.com/l-c1-n114/">高一高二英语家教</a> <a
						href="http://www.jiajiao114.com/l-c1-n142/">网球家教</a> <a
						href="http://www.jiajiao114.com/l-c1-n144/">电子琴家教</a> <a
						href="http://www.jiajiao114.com/l-c1-n141/">乒乓球家教</a> <a
						href="http://www.jiajiao114.com/l-c1-n111/">初一初二数学家教</a> <a
						href="http://www.jiajiao114.com/l-c1-n121/">高一高二数学家教</a> <a
						href="http://www.jiajiao114.com/l-c1-n127/">高一高二物理家教</a> <a
						href="http://www.jiajiao114.com/l-c1-n137/">新概念英语家教</a> <a
						href="http://www.jiajiao114.com/l-c1-n122/">高一高二化学家教</a> <a
						href="http://www.jiajiao114.com/l-c1-n101/">初一初二物理家教</a> <a
						href="http://www.jiajiao114.com/l-c1-n154/">牛津英语家教</a> <a
						href="http://www.jiajiao114.com/l-c1-n140/">游泳家教</a> <a
						href="http://www.jiajiao114.com/l-c1-n129/">初一初二语文家教</a> <a
						href="http://www.jiajiao114.com/l-c1-n112/">初三英语家教</a> <a
						href="http://www.jiajiao114.com/l-c1-n123/">高一高二语文家教</a> <a
						href="http://www.jiajiao114.com/l-c1-n119/">初三数学家教</a>
				</div>

				<div id="recommend-city">
					<strong>相关城市：</strong> <a href="http://www.jiajiao114.com/l-c1/">上海家教</a>
					<a href="http://tj.jiajiao114.com/teacher/l.html">天津家教</a> <a
						href="http://cd.jiajiao114.com/teacher/l.html">成都家教</a> <a
						href="http://sz.jiajiao114.com/teacher/l.html">深圳家教</a> <a
						href="http://hrb.jiajiao114.com/teacher/l.html">哈尔滨家教</a> <a
						href="http://bj.jiajiao114.com/teacher/l.html">北京家教</a> <a
						href="http://hz.jiajiao114.com/teacher/l.html">杭州家教</a> <a
						href="http://wh.jiajiao114.com/teacher/l.html">武汉家教</a> <a
						href="http://qd.jiajiao114.com/teacher/l.html">青岛家教</a> <a
						href="http://dl.jiajiao114.com/teacher/l.html">大连家教</a> <a
						href="http://gz.jiajiao114.com/teacher/l.html">广州家教</a> <a
						href="http://nj.jiajiao114.com/teacher/l.html">南京家教</a> <a
						href="http://xa.jiajiao114.com/teacher/l.html">西安家教</a> <a
						href="http://hf.jiajiao114.com/teacher/l.html">合肥家教</a> <a
						href="http://xm.jiajiao114.com/teacher/l.html">厦门家教</a>
				</div>
			</div>
		</div>
		<div id="footer">
			<div class="foot-top">
				<div>
					<div class="foot-logoer">
						<a href="http://www.jiajiao114.com/"> <img
							src="./main_page/foot_logo.png" alt="">
						</a>
					</div>
					<dl>
						<dt>我是学员</dt>
						<dd>
							<a href="http://www.jiajiao114.com/help/help_1.php">请家教流程</a>
						</dd>
						<dd>
							<a href="http://www.jiajiao114.com/help/jiajiao_fee.php">学员收费标准</a>
						</dd>
						<dd>
							<a href="http://www.jiajiao114.com/l-c1/">挑选合适教员</a>
						</dd>
					</dl>
					<dl>
						<dt>我是老师</dt>
						<dd>
							<a href="http://www.jiajiao114.com/help/appointment.php">如何预约订单</a>
						</dd>
						<dd>
							<a href="http://www.jiajiao114.com/help/standard.php">教员收费标准</a>
						</dd>
						<dd>
							<a href="http://www.jiajiao114.com/help/fukuan.php">汇款接单手续</a>
						</dd>
					</dl>
					<dl class="last">
						<dt>关于我们</dt>
						<dd>
							<a href="http://www.jiajiao114.com/help/about.php">公司简介</a>
						</dd>
						<dd>
							<a href="http://www.jiajiao114.com/help/mianzhe.php">免责申明</a>
						</dd>
						<dd>
							<a href="http://www.jiajiao114.com/help/yingsi.php">隐私保护</a>
						</dd>
						<dd>
							<a href="http://www.jiajiao114.com/help/xieyi.php">用户协议</a>
						</dd>
						<dd>
							<a href="http://www.jiajiao114.com/help/contact.php">联系我们</a>
						</dd>
						<dd>
							<a href="http://www.jiajiao114.com/help/zhaopin.php">大学生招聘</a>
						</dd>
					</dl>
					<div class="code">
						<i>021-61300114</i><span>周一到周日9:00-20:00在线客服</span> <img
							src="./main_page/weixinerweima.jpg" alt=""><span>【扫一扫】马上请家教</span>
					</div>
					<div class="clear"></div>
				</div>
			</div>
			<div class="foot-bottom">
				<div >
					<ul style="width:100%">
						<li>热门链接：</li>
						<li><a href="http://www.jiajiao114.com/l-c1-a1-e7/">华师大家教</a>
						</li>
						<li><a href="http://www.jiajiao114.com/l-c1-a1-e16/">复旦家教</a>
						</li>
						<li><a href="http://www.jiajiao114.com/l-c1-a1-e2/">交大家教</a>
						</li>
						<li><a href="http://www.jiajiao114.com/l-c1-a1-e3/">上外家教</a>
						</li>
						<li><a
							href="http://localhost:8080/family-education/FindStudentByGradeAndSubject?grade=高一&subject=数学112/">初三英语家教</a>
						</li>
						<li><a
							href="http://localhost:8080/family-education/FindStudentByGradeAndSubject?grade=高一&subject=数学119/">初三数学家教</a>
						</li>
						<li><a
							href="http://localhost:8080/family-education/FindStudentByGradeAndSubject?grade=高一&subject=数学126/">初三物理家教</a>
						</li>
						<li><a
							href="http://localhost:8080/family-education/FindStudentByGradeAndSubject?grade=高一&subject=数学120/">初三化学家教</a>
						</li>
						<li><a
							href="http://localhost:8080/family-education/FindStudentByGradeAndSubject?grade=高一&subject=数学115/">高三英语家教</a>
						</li>
						<li><a
							href="http://localhost:8080/family-education/FindStudentByGradeAndSubject?grade=高一&subject=数学124/">高三数学家教</a>
						</li>
						<li><a
							href="http://localhost:8080/family-education/FindStudentByGradeAndSubject?grade=高一&subject=数学128/">高三物理家教</a>
						</li>
						<li><a
							href="http://localhost:8080/family-education/FindStudentByGradeAndSubject?grade=高一&subject=数学125/">高三化学家教</a>
						</li>
						<li><a
							href="http://localhost:8080/family-education/FindStudentByGradeAndSubject?grade=高一&subject=数学131/">上海钢琴家教</a>
						</li>
						<div class="clear"></div>
					</ul>
					<ul style="width:100%">
						<li>频道介绍：</li>
						<li>家教114【<strong>上海家教</strong>】频道，基于家教114强大的师资力量，择优为您推荐<strong>上海家教</strong>。是
							上海地区请 家教、做家教的最佳平台。请家教热线：021-61300114
						</li>
						<div class="clear"></div>
					</ul>
					<small>© 2005－2019版权所有：上海四帆固教育科技有限公司-<a
						href="http://jiajiao114.com/change_city.php"
						style="color: #a7a7a7;">家教114</a> | 沪ICP备09062748号-5
					</small>
				</div>
			</div>
		</div>
		<div class="suspend">
			<ul>
				<li class="scroll-top"><img src="./main_page/float_4.png"
					alt=""></li>
			</ul>
		</div>


		<script type="text/javascript" src="./main_page/jquery.min.js.下载"></script>
		<script type="text/javascript" src="./main_page/SuperSlide.js.下载"></script>
		<script type="text/javascript" src="./main_page/script.js.下载"></script>
		<script type="text/javascript" src="./main_page/jquery.cookie.js.下载"></script>
		<script type="text/javascript">
			$(function () {
				$('#college-box-more-btn').click(function () {
					var collegeBoxInnerHeight = $('#college-box-inner').height();
					if ($(this).text() === '展开') {
						$('#college-box').animate({ height: collegeBoxInnerHeight < 40 ? 40 : collegeBoxInnerHeight });
						$(this).text('收起');
					} else {
						$('#college-box').animate({ height: 40 });
						$(this).text('展开');
					}
				});
			});
		</script>
		<script>
			function addaid(id) {
				$("#aid").val(id);
				$("#page").val(1);
				sendAjax();
				$(".chose-list dl:eq(0) dd a").removeClass("on");
			}
			function addnid(id) {
				$("#nid").val(id);
				$("#page").val(1);
				sendAjax();
				$(".chose-list dl:eq(1) dd a").removeClass("on");
			}
			function addteacher_type(id) {
				$("#teacher_type").val(id);
				$("#page").val(1);
				sendAjax();
				$(".chose-list dl:eq(2) dd a").removeClass("on");
			}
			function addcollege_id(id) {
				$("#college_id").val(id);
				$("#page").val(1);
				sendAjax();
				$(".chose-list dl:eq(3) dd a").removeClass("on");
			}
			function addgender(id) {
				$("#gender").val(id);
				$("#page").val(1);
				sendAjax();
				$(".chose-list dl:eq(4) dd a").removeClass("on");
			}

			function changepage(id) {
				$("#page").val(id);
				sendAjax();
			}

			function sendAjax() {
				var city_id = $("#city_id").val();
				var nid = $("#nid").val();
				var aid = $("#aid").val();
				var college_id = $("#college_id").val();
				var gender = $("#gender").val();
				var teacher_type = $("#teacher_type").val();
				var page = $("#page").val();
				$.ajax({
					url: '/getTList.php?page=' + page,
					type: "post",
					data: "city_id=" + city_id + "&nid=" + nid + "&aid=" + aid + "&college_id=" + college_id + "&gender=" + gender + "&teacher_type=" + teacher_type,
					success: function (data) {
						data = eval("(" + data + ")");
						$(".teacher-list ul").html(data.content);
						$(".nav-page ul").html(data.page);
						if (data.title != "") {
							$("title").html(data.title);
						}
					}
				})
			}
			function findteacher() {
				var id = $("#teacherid").val();
				if (!id) {
					alert('请输入老师编号');
					return;
				}
				id = id.replace("t", "");
				id = id.replace("T", "");
				location.href = '/teacher/' + id + '.html';
			}

			$(function () {
				var list = $.cookie("listid");
				if (list != null && list != "") {
					$("#beixuan_count").html(list.split("||").length);
				} else {
					$("#beixuan_count").html("0");
				}
			});
 
			function yuyueCookie() {
				var cookid = $.cookie("listid");
				$("#cookietid").val(cookid);
				$("#yuyue_submit").submit();
			} 
		</script>


	</div>
</body>

</html>