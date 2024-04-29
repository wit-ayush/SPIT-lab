<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Upload Resume</title>
</head>
<body>

<form id="resumeForm" action="uploadResume" method="post" enctype="multipart/form-data" onsubmit="submitForm()">
    <label for="resume">Upload PDF Resume:</label><br>
    <input type="file" id="resume" name="resume" accept=".pdf"><br><br>
    <input type="submit" value="Upload">
</form>


</body>
</html>
