<%@ page language="java" contentType="text/html; charset=utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html lang="en">
<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport"
	content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no">
<meta name="description" content="易班开放平台">
<meta name="keywords" content="易班开放平台">
<link rel="shortcut icon" type="image/ico"
	href="https://open.yiban.cn/open/img/main/yb.ico">
<title>个人主页 - 石大微教</title>
<link rel="stylesheet" type="text/css"
	href="./individual_center_files/yibanWidget.min.css">
<link rel="stylesheet" type="text/css"
	href="./individual_center_files/base.css">
<link rel="stylesheet" type="text/css"
	href="./individual_center_files/ieCheck.css">
<link rel="stylesheet" type="text/css"
	href="./individual_center_files/app.css">
<!-- <script type="text/javascript" src="./individual_center_files/sslcheck.js"></script> -->

</head>
<body class="app-body" data-item="choose_s_dev">


	
	<section class="yw-container">
		<article class="createApp">
			<div class="title">
				<a href="${pageContext.request.contextPath }/FindAllStudentServlet">首页</a> &gt; 个人中心
			</div>
		</article>
		<form class="app-modify user-info" action="${pageContext.request.contextPath }/UpdateTeacherServlet"
		method="post">
			<!-- <div class="validate-label">
				<div class="line"></div>
				<span>联系方式</span>
				<div class="line"></div>
			</div> -->
			
			<%-- <div class="form-group" method= "post">
				<label class="yw-label">地址</label> <input class="yw-input"
					type="text" name="address" id="change_email" value="${requestScope.teacher.s_address }"
					placeholder="请填写常用补课地址">
			</div> --%>
			<%-- <div class="form-group">
				<label class="yw-label">手机号码</label> <input
					class="yw-input cellphone" type="text" name="phone"
					id="change_phone" value="${requestScope.teacher.s_mobile }" placeholder="请填写常用联系手机号码">
			</div> --%>

			<div class="validate-label">
				<div class="line"></div>
				<span>认证信息</span>
				<div class="line"></div>
			</div>
			<div class="form-group">
			
				<div class="form-group">
				<label class="yw-label">姓别</label> &nbsp;&nbsp;
				<input type="radio" name="reg_type" value="1" 
			
	  		<c:if test="${requestScope.teacher.t_sex}" var="ok">
	  			checked
	  		</c:if>
	  		>&nbsp;男&nbsp;&nbsp;
				<input type="radio" name="reg_type" value="0"
				<c:if test="${!ok }">
	  			checked
	  		</c:if>
				>&nbsp;女
						
				</div>
				
			</div>
			
			
			
			<div class="form-group">
				<label class="yw-label">学号 / 工号</label> 
				<input class="yw-input"
					readonly type="text" name ="id" value="${sessionScope.teacher.t_id }">
			</div>
			<div class="form-group">
				<label class="yw-label">用户名</label> <input class="yw-input"
					type="text" name="userName" value="${sessionScope.teacher.t_userName }">
			</div>
			<div class="form-group">
				<label class="yw-label">密码</label> <input class="yw-input"
					name ="pwd" type="password" value="${sessionScope.teacher.t_passWord }">
			</div>
			<div class="form-group">
				<label class="yw-label">年级</label> <input class="yw-input"
					type="text" name="grade" value="${sessionScope.teacher.t_grade }"">
			</div>
			<div class=" form-group">
				<label class="yw-label">科目</label> <input class="yw-input"
					type="text" name="subject" value="${sessionScope.teacher.t_subject }">
			</div>
			
			<input type="submit" class="yw-btn bright-blue btn-save" value="保存设置">

			<!-- <div class="yw-btn bright-blue btn-save updusercall">
						</div> 
					<div class="yw-btn bright-blue btn-save updusercall">
					<input type="submit" class="yw-btn bright-blue btn-save updusercall" value="保存设置"> </a>
 -->
			<!--
            <div class="form-group">
                <label class="yw-label"></label>
                <div class="preview">
                    <div class="mask"></div>
                    <img src="" class="sample-sm" />
                    <img class="big" src="" />
                </div>
            </div>
            -->
		</form>
	</section>
	<div id="kickIe" style="display: none">
		您使用的浏览器版本较低，会影响网站部分功能，请切换成 <a class="kick_jisu"
			href="javascript:void(0)">极速模式</a> 或升级。 <a class="kick_upgrade"
			href="http://windows.microsoft.com/zh-cn/windows/upgrade-your-browser"
			target="_blank">立刻升级</a> <em class="kick_close">×</em>
	</div>
	<div id="kickIe_bg"></div>
	<div id="kickIe_con">
		<div class="kickIe_con_padd">
			<div class="kickIe_con_head">
				<h5>请选择您目前使用的浏览器：</h5>
				<a class="kickIe_con_close"
					href="https://open.yiban.cn/global/user#">×</a>
				<div class="kickIe_con_ie grid">
					<div class="list_1 active pull-left">
						<a href="https://open.yiban.cn/global/user#tab1">360安全浏览器</a>
					</div>
					<div class="list_2 pull-left">
						<a href="https://open.yiban.cn/global/user#tab2">360急速浏览器</a>
					</div>
					<div class="list_3 pull-left">
						<a href="https://open.yiban.cn/global/user#tab3">搜狗浏览器</a>
					</div>
					<div class="list_4 pull-left">
						<a href="https://open.yiban.cn/global/user#tab4">遨游浏览器</a>
					</div>
					<div class="list_5 pull-left">
						<a href="https://open.yiban.cn/global/user#tab5">猎豹浏览器</a>
					</div>
					<div class="list_6 pull-left">
						<a href="https://open.yiban.cn/global/user#tab6">百度浏览器</a>
					</div>
					<div class="list_7 pull-left">
						<a href="https://open.yiban.cn/global/user#tab7">其他浏览器</a>
					</div>
				</div>
			</div>
			<div class="kickIe_con">
				<div id="tab1" style="display: block;" class="kickIe_con_list">
					<h6>如何切换</h6>
					<p>1.点击图标切换模式</p>
					<img src="./individual_center_files/list_1_1.jpg">
					<p>2.选择急速模式</p>
					<img src="./individual_center_files/list_1_2.jpg">
					<p>3.切换完成</p>
				</div>
				<div id="tab2" style="display: none;" class="kickIe_con_list">
					<h6>如何切换</h6>
					<p>1.点击图标切换模式</p>
					<img src="./individual_center_files/list_2_1.jpg">
					<p>2.选择急速模式</p>
					<img src="./individual_center_files/list_2_2.jpg">
					<p>3.切换完成</p>
				</div>
				<div id="tab3" style="display: none;" class="kickIe_con_list">
					<h6>如何切换</h6>
					<p>1.点击图标切换模式</p>
					<img src="./individual_center_files/list_3_1.jpg">
					<p>2.选择急速模式</p>
					<img src="./individual_center_files/list_3_2.jpg">
					<p>3.切换完成</p>
					<img src="./individual_center_files/list_3_3.jpg">
				</div>
				<div id="tab4" style="display: none;" class="kickIe_con_list">
					<h6>如何切换</h6>
					<p>1.点击图标或点击菜单栏-切换浏览器内核，切换模式</p>
					<img src="./individual_center_files/list_4_1.jpg">
					<p>2.点击直接切换急速模式</p>
					<img src="./individual_center_files/list_4_2.jpg">
					<p>3.切换完成</p>
					<img src="./individual_center_files/list_4_3.jpg">
				</div>
				<div id="tab5" style="display: none;" class="kickIe_con_list">
					<h6>如何切换</h6>
					<p>1.点击图标切换模式</p>
					<img src="./individual_center_files/list_5_1.jpg">
					<p>2.点击直接切换急速模式</p>
					<img src="./individual_center_files/list_5_2.jpg">
					<p>3.切换完成</p>
				</div>
				<div id="tab6" style="display: none;" class="kickIe_con_list">
					<h6>如何切换</h6>
					<p>1.点击图标切换模式</p>
					<img src="./individual_center_files/list_6_1.jpg">
					<p>2.点击直接切换急速模式</p>
					<img src="./individual_center_files/list_6_2.jpg">
					<p>3.切换完成</p>
					<img src="./individual_center_files/list_6_3.jpg">
				</div>
				<div id="tab7" style="display: none;" class="kickIe_con_list">
					<p class="update text-center">
						点击 <a class="kick_upgrade"
							href="http://windows.microsoft.com/zh-cn/windows/upgrade-your-browser"
							target="_blank">立刻升级</a> 或推荐使用 <a class="select_chrome"
							href="http://dlsw.baidu.com/sw-search-sp/soft/9d/14744/ChromeStandalone_V42.0.2311.135_Setup.1430289688.exe">&nbsp;</a>
					</p>
				</div>
			</div>
		</div>
	</div>
	<!-- <footer class="yiban-footer">
        <div class="container clearfix">
            <div class="about-yiban">
                <a href="http://www.yiban.cn/service_treaty.php" target="_blank">用户协议</a>
                <span>|</span>
                <a href="http://www.yiban.cn/" target="_blank">易班网站</a>
                <span>|</span>
                <a href="http://hr.yiban.cn/" target="_blank">校园招聘</a>
                <span>|</span>
                <a href="http://search.51job.com/list/co,c,2306770,0000,10,1.html" target="_blank">社会招聘</a>
                <span>|</span>
                <a href="mailto:contact@yiban.cn" target="_blank">联系我们</a>
                <span>|</span>
                <a href="http://www.yiban.cn/help.html" target="_blank">客服中心</a>
                <span>|</span>
                <a href="http://www.yiban.cn/mobile/index.html" target="_blank">手机易班</a>
            </div>
            <div class="yiban-brand clearfix">
                <a class="icon brand-youke" href="http://www.yooc.me/u/yb2yooc" target="_blank"></a>
                <a class="icon brand-yiban" href="http://daxue.yooc.me/u/yb2daxue" target="_blank"></a>
                <a class="icon brand-k" href="http://k.yiban.cn/" target="_blank"></a>
                <a class="icon brand-boya" href="http://www.21boya.cn/" target="_blank"></a>
                <a class="icon brand-zz" href="http://zz.yiban.cn/" target="_blank"></a>
            </div>
            <div class="yiban-leagl clearfix">
                <p class="copyright">违法和不良信息举报电话：021-60161000    Copyright © 2009-2019 <a href="https://open.yiban.cn/">YIBAN</a>. All Rights Reserved.    沪ICP备15046059号-6</p>
            </div>
            <div class="yiban-illegal">
                <a href="http://www.12377.cn/" target="_blank"><img src="./individual_center_files/12377.png" title="中国互联网违法和不良信息举报中心"></a>
                <a href="http://www.12377.cn/node_548446.htm" target="_blank"><img src="./individual_center_files/jubao.png" title="网络举报APP下载"></a>
                <a href="http://www.shjbzx.cn/" target="_blank"><img src="./individual_center_files/jubao2.png" title="上海市互联网违法和不良信息举报中心"></a>
            </div>
        </div>
    </footer> -->
	<script type="text/javascript"
		src="./individual_center_files/jquery1.11.0.min.js"></script>
	<script type="text/javascript"
		src="./individual_center_files/jquery.form.js"></script>
	<script type="text/javascript"
		src="./individual_center_files/html5shiv.js"></script>
	<script type="text/javascript"
		src="./individual_center_files/respond.min.js"></script>
	<script type="text/javascript"
		src="./individual_center_files/compat.js"></script>
	<script type="text/javascript"
		src="./individual_center_files/yibanWidget.js"></script>
	<script type="text/javascript"
		src="./individual_center_files/ieCheck.js"></script>
	<script type="text/javascript" src="./individual_center_files/reg.js"></script>
	<script type="text/javascript" src="./individual_center_files/user.js"></script>
	--%>
</body>

</html>
