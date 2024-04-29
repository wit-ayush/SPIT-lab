<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Resume Uploader</title>
    <!-- <link rel="stylesheet" href="src/main/webapp/WEB-INF/static/css/styles.css"> -->
    <link rel="stylesheet" href="src/main/webapp/WEB-INF/static/css/styles.css">
    
</head>
<body>
    <jsp:include page="/WEB-INF/views/upload-resume.jsp"/>
	<script src=`${pageContext.request.contextPath}/static/js/resumeUpload.js`></script>
</body>
</html>