<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDF Upload</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #808080;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 400px;
        }

        h1 {
            color: #333333;
        }

        input[type="file"] {
            margin: 20px 0;
            border: 2px dashed #ddd;
            padding: 20px;
            width: 100%;
            box-sizing: border-box;
            cursor: pointer;
            outline: none;
        }

        input[type="file"]:hover {
            border-color: #4CAF50;
        }

        input[type="file"]:focus {
            border-color: #4CAF50;
        }

        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Upload Resume</h1>
        <form action="UploadServlet" method="post" enctype="multipart/form-data">
            <input type="file" name="pdfFile" accept=".pdf" required>
            <input type="submit" value="Upload">
        </form>
    </div>
</body>
</html>
