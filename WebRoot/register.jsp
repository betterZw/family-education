<%@ page language="java" contentType="text/html; charset=utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	

	<title>用户注册 - 石大微教</title>
	<link rel="shortcut icon" href="https://common.cnblogs.com/favicon.ico" type="image/x-icon">
	<script src="./register_files/nav-iconfont.js.下载"></script>
	<link rel="stylesheet" href="./register_files/commons.bundle.css">
	<link rel="stylesheet" href="./register_files/_layout.css">
	<link rel="stylesheet" href="./register_files/signup.css">
	<script>
		window.captcha = {
			captchaType: 'Geetest'
		};
	</script>
	<script charset="UTF-8" async="" src="./register_files/gettype.php"></script>
	<script charset="UTF-8" async="" src="./register_files/fullpage.0.0.0.js.下载"></script>
	<script charset="UTF-8" async="" src="./register_files/send"></script>
	<script charset="UTF-8" src="./register_files/get.php"></script>
	<link href="https://static.geetest.com/static/wind/style_https.1.5.6.css" rel="stylesheet">

  </head>
  
  <body>
	
	<div class="container body-box" style="height: 587px;">
		<div class="mx-auto d-block body-content">
			<div class="d-none d-sm-block title-top col-sm-12">
				注册新用户
				<hr class="head-hr">
			</div>
			<div class="row">
				<form class="form-horizontal col-md-8 form-padding" role="form" id="registerForm" method="post"
					 action="${pageContext.request.contextPath}/UserRegisterServlet" novalidate="novalidate">
					<div class="form-space-top d-none d-sm-block"></div>



					<div class="form-group form-row">
						<div class="col-sm-2 control-label w5-5">
							<label for="LoginName">登录用户名</label>
						</div>
						<div class="col has-feedback">
							<input class="form-control" placeholder="不少于4个字符" type="text" name="LoginName">
							
							<!-- <input class="form-control" placeholder="不少于4个字符" type="text" data-val="true"
								data-val-length="长度要求 4-30 个字符 (2-15 个中文)" data-val-length-max="30"
								data-val-length-min="2" data-val-nospace="登录用户名不能包含空格"
								data-val-remote="&#39;登录用户名&#39; is invalid."
								data-val-remote-additionalfields="*.LoginName,*.Email" data-val-remote-type="Post"
								data-val-remote-url="/checkloginname" data-val-required="请输入登录用户名" id="LoginName"
								name="LoginName">
							<span class="invalid-feedback field-validation-valid" data-valmsg-for="LoginName"
								data-valmsg-replace="true"></span> -->
						</div>
					</div>

					<div class="form-group form-row">
						<div class="col-sm-2 control-label w5-5">
							<label for="LoginName">请选择身份</label>
						</div>
						<div class="col has-feedback">
							<select style="width:286px" name="selector" id="weak_subject1" class="form-control"
								placeholder="身份">
								<option value="学生" selected=""> 学生</option>
								<option value="老师"> 老师</option>
							</select>
						</div>
					</div>
					<!-- <div class="form-group form-row">
						<div class="col-sm-2 control-label w5-4">
							<label for="DisplayName">显示昵称</label>
						</div>
						<div class="col has-feedback">
							<input class="form-control" placeholder="不少于2个字符" type="text" data-val="true"
								data-val-length="长度要求 2-20 个字符 (1-10 个中文)" data-val-length-max="20"
								data-val-length-min="1" data-val-regex="不能包含空格、@、:和，不能以._结尾"
								data-val-regex-pattern="^(?!.*[@:：\s]).*[^._]$"
								data-val-remote="&#39;显示昵称&#39; is invalid."
								data-val-remote-additionalfields="*.DisplayName" data-val-remote-type="Post"
								data-val-remote-url="/checkdisplayname" data-val-required="请输入显示昵称" id="DisplayName"
								name="DisplayName">
							<span class="invalid-feedback field-validation-valid" data-valmsg-for="DisplayName"
								data-valmsg-replace="true"></span>
						</div>
					</div> -->
					<div class="form-group form-row">
						<div class="col-sm-2 control-label w5-2">
							<label for="Password">密码</label>
						</div>
						<div class="col has-feedback">
							<input class="form-control" placeholder="至少8位，并包含字母、数字和特殊字符中的两种" type="password"
								data-val="true" data-val-length="密码长度要求 8-50 位" data-val-length-max="50"
								data-val-length-min="8" data-val-nospace="密码不能包含空格" data-val-regex="密码不能包含全角字符或中文"
								data-val-regex-pattern="^((?![^\x00-\xff]).)*$" data-val-required="请输入密码"
								data-val-user-password="至少包含字母、数字和特殊字符中的两种，只允许半角符号" id="Password" name="Password"
								data-toggle="tooltip" data-placement="bottom" title="" data-original-title="大写锁定已打开">
							<span class="invalid-feedback field-validation-valid" data-valmsg-for="Password"
								data-valmsg-replace="true"></span>
						</div>
					</div>
					<div class="form-group form-row">
						<div class="col-sm-2 control-label w5-4">
							<label for="ConfirmPassword">确认密码</label>
						</div>
						<div class="col has-feedback">
							<input class="form-control" placeholder="请输入确认密码" type="password" data-val="true"
								data-val-equalto="确认密码与密码输入不一致" data-val-equalto-other="*.Password" id="ConfirmPassword"
								name="ConfirmPassword" data-toggle="tooltip" data-placement="bottom" title=""
								data-original-title="大写锁定已打开">
							<span class="invalid-feedback field-validation-valid" data-valmsg-for="ConfirmPassword"
								data-valmsg-replace="true"></span>
						</div>
					</div>
					<div class="form-group form-row">
						<div class="offset-sm-2 col">
							<!-- <span class="col-sm-12 ajax-error"
								style="display: inline;">网络错误，极验验证码加载失败，请刷新页面重试，若持续错误请尝试更换浏览器或网络。联系邮箱:
								contact@cnblogs.com
							</span> -->
							<button id="submitBtn" type="submit"
								class="btn ladda-button mx-auto d-block cnblogs-btn-blue" data-style="zoom-in">
								<span class="ladda-label">注册</span> <span class="ladda-spinner"></span>
							</button>
						</div>
					</div>

					<input type="hidden" id="RegisterFrom" name="RegisterFrom"
						value="https://account.cnblogs.com/signup?returnUrl=https%3A%2F%2Fwww.cnblogs.com%2F">
					<input name="__RequestVerificationToken" type="hidden"
						value="CfDJ8FKe-Oc4rmBCjdz4t-OOIu1w1b-veZaMmOQ14NMalffRAobsPhy5-heJW0e7hg8lTyLYTPrgrnoM5P_r4sSi6mkt_AxfSP_w2FBseGHLNMc5i2HxnRwgCAEZN8FWeyjm-kQp7xO6MLoeNLMrm-Rl5xo">
			</form>
				<!-- <input type="hidden" id="PublicKey" name="PublicKey"
					value="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCp0wHYbg/NOPO3nzMD3dndwS0MccuMeXCHgVlGOoYyFwLdS24Im2e7YyhB0wrUsyYf0/nhzCzBK8ZC9eCWqd0aHbdgOQT6CuFQBMjbyGYvlVYU2ZP7kG9Ft6YV6oc9ambuO7nPZh+bvXH0zDKfi02prknrScAKC0XhadTHT3Al0QIDAQAB">
	 -->			<div class="d-none d-md-block col-md-4 side-img-box">
					<div class="side-line">
						<div></div>
					</div>
					 <img src="./register_files/registersideimg.png"> 
				</div>
			</div>
		</div>
	</div>
	<br style="clear:both">
	<div id="footer_bottom" class="text-center" style="display: block;">
		<div>
			<a href="https://www.cnblogs.com/AboutUS.aspx" class="d-none d-md-inline">关于石大微教</a> <a
				href="https://www.cnblogs.com/ContactUs.aspx" class="d-none d-md-inline">联系我们</a> ©2004-2019<a
				href="https://www.cnblogs.com/">石大微教</a> <span class="d-none d-md-inline">保留所有权利</span> Powered by
			ASP.NET Core on
			deepin Linux
		</div>
	</div>
	<script src="./register_files/commons.bundle.js.下载"></script>
	<script src="./register_files/_layout.js.下载"></script>
	<script src="./register_files/signup.js.下载"></script>
	<div class="geetest_panel geetest_wind" style="display: none;">
		<div class="geetest_panel_ghost"></div>
		<div class="geetest_panel_box">
			<div class="geetest_other_offline geetest_panel_offline"></div>
			<div class="geetest_panel_loading">
				<div class="geetest_panel_loading_icon"></div>
				<div class="geetest_panel_loading_content">智能验证检测中</div>
			</div>
			<div class="geetest_panel_success">
				<div class="geetest_panel_success_box">
					<div class="geetest_panel_success_show">
						<div class="geetest_panel_success_pie"></div>
						<div class="geetest_panel_success_filter"></div>
						<div class="geetest_panel_success_mask"></div>
					</div>
					<div class="geetest_panel_success_correct">
						<div class="geetest_panel_success_icon"></div>
					</div>
				</div>
				<div class="geetest_panel_success_title">通过验证</div>
			</div>
			<div class="geetest_panel_error">
				<div class="geetest_panel_error_icon"></div>
				<div class="geetest_panel_error_title">网络超时</div>
				<div class="geetest_panel_error_content">请点击此处重试</div>
				<div class="geetest_panel_error_code">
					<div class="geetest_panel_error_code_text"></div>
				</div>
			</div>
			<div class="geetest_panel_footer">
				<div class="geetest_panel_footer_logo"></div>
				<div class="geetest_panel_footer_copyright">由极验提供技术支持</div>
			</div>
			<div class="geetest_panel_next"></div>
		</div>
	</div>
</body>

</html>
