<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="appPath" scope="application" value="${pageContext.request.contextPath }"></c:set>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>家教交流平台</title>
<link rel="stylesheet" href="${pageContext.request.contextPath }/background/resources/css/reset.css" type="text/css" media="screen" />
<link rel="stylesheet" href="${pageContext.request.contextPath }/background/resources/css/style.css" type="text/css" media="screen" />
<link rel="stylesheet" href="${pageContext.request.contextPath }/background/resources/css/invalid.css" type="text/css" media="screen" />
</head>
<body id="login">
<div id="login-wrapper" class="png_bg" align="center">
  <div id="login-top">
    <h1>管理员登陆</h1>
    <a href=""><img id="logo" src="${pageContext.request.contextPath }/background/resources/images/logo.png" alt="Simpla Admin logo" /></a> </div>
  <div id="login-content">
    <form action="${pageContext.request.contextPath }/SysAdminLoginServlet" method="post">
      <div class="notification" align="center" >
        <div>家教交流平台后台登陆 </div>
      </div>
      <p>
        <label>用户名：</label>
        <input name="name" class="text-input" type="text" />
      </p>
      <div class="clear"></div>
      <p>
        <label>密码：</label>
        <input name="pwd" class="text-input" type="password" />
      </p>
      <div class="clear"></div>
      <p id="remember-password">
        <input type="checkbox" />
       	 记住密码
      </p>
      <div class="clear">
      <%if(request.getAttribute("tag") != null) {%>
    	用户名密码错误!  
    	  <%} %>
      </div>
      <p>
        <input class="button" type="submit" value="管理员登陆" />
      </p>
    </form>
  </div>
  <!-- End #login-content -->
</div>
<!-- End #login-wrapper -->
</body>
</html>
