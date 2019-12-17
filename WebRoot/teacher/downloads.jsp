<%@ page language="java" contentType="text/html; charset=utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style type="text/css">
html,body {
	margin: 0;
	padding: 0;
	height: 100%;
}

body {
	color: #333;
	padding-top: 2em;
	font-family: Helvetica, Arial, sans-serif;
	width: 90%;
	min-width: 700px;
	max-width: 1100px;
	margin: auto;
	font-size: 120%;
	background-color: #ddd;
}

h1 {
	font-size: 120%;
	line-height: 1em;
}

h2 {
	font-size: 100%;
	line-height: 1em;
}

table {
	width: 100%;
	box-shadow: 0 0 0.5em #999;
	margin: 0;
	border: none !important;
	margin-bottom: 2em;
	border-collapse: collapse;
	border-spacing: 0;
}

th {
	background: #000;
	background: -webkit-linear-gradient(top, #444, #000);
	background: -moz-linear-gradient(top, #444, #000);
	background: -ms-linear-gradient(top, #444, #000);
	background: -o-linear-gradient(top, #444, #000);
	background: linear-gradient(top, #444, #000);
	font-size: 14px;
	line-height: 24px;
	border: none;
	text-align: left;
	color: #fff;
}

tr {
	background: rgba(255, 255, 255, 0.8);
}

tr:hover {
	background: rgba(255, 255, 255, 0.6);
}

p,th,td {
	font-size: 14px;
}

th,td {
	height: 20px;
	vertical-align: middle;
	white-space: nowrap;
	padding: 0.2em 0.5em;
	border: 1px solid #ccc;
}

a:link,a:visited {
	color: #337ab7;
	font-weight: bold;
	text-decoration: none;
}

a:hover,a:active,a:focus {
	color: #23527c;
	text-decoration: underline;
}

.s {
	text-align: right;
	width: 15%;
}

.d {
	text-align: center;
	width: 15%;
}

.sh {
	font-family: monospace;
}

footer {
	font-size: 80%;
	text-align: right;
	margin: 1em 0;
}
</style>


<title>课件下载 - 石大微教</title>
</head>

<body>
	<!-- <h1>Index of <a href="https://downloads.openwrt.org/"><em>(root)</em></a> / <a href="https://downloads.openwrt.org/releases/">releases</a> / <a href="https://downloads.openwrt.org/releases/17.01.0/">17.01.0</a> / <a href="https://downloads.openwrt.org/releases/17.01.0/targets/">targets</a> / <a href="https://downloads.openwrt.org/releases/17.01.0/targets/imx6/">imx6</a> / <a href="https://downloads.openwrt.org/releases/17.01.0/targets/imx6/generic/">generic</a> / </h1> -->
	<hr>
	<article class="createApp">
		<div class="title">
			<a href="${pageContext.request.contextPath }/FindAllStudentServlet">首页</a> &gt; 文件下载
		</div>
	</article>
	<h2>Course Files Downloads</h2>
	<p>
		This is the courseware list<br> <i>Please download the file
			for learning</i>
	</p>
	<table>
		<tbody>
			<tr>
				<th class="n">File Name</th>
				<th>sha256sum</th>
				<th class="s">File Size</th>
				<th class="d">Date</th>
			</tr>
			<c:forEach items="${sessionScope.courseFiles }" var="courseFile">
				<tr>

					<td class="n"><a href="http://localhost:8080/family-education/upload/${courseFile.c_name }">${courseFile.c_name }</a>
					</td>
					<td class="sh">c92e4e1e34441a349f2fec7b2a33ec69480c9f2f516a3c308aeaced5411ac8e0</td>
					<td class="s">${courseFile.c_size }Byte</td>
					<td class="d">${courseFile.c_date }</td>
				</tr>
			</c:forEach>


		</tbody>
	</table>

	<br>
	<br>
	<br>




	<form method="post"
		action="${pageContext.request.contextPath }/UploadServlet"
		enctype="multipart/form-data">
		选择一个文件: <input type="file" name="uploadFile" /> <br />
		<br /> <input type="submit" value="上传" />
	</form>


	<footer>
		Open Source Downloads supported by <a href="https://www.keycdn.com/">石大微教</a>.
	</footer>

</body>

</html>