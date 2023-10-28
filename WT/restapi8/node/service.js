function greeting(req, res) {
  var fn = req.query?.firstname ? req.query.firstname : "anonymous personality";
  
  var htmlResponse = `
    <html>
      <head>
        <title>Greetings</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #333;
            color: #f4f4f4;
          }
          h1 {
            color: #f4f4f4;
          }
        </style>
      </head>
      <body>
        <h1>Greetings, ${fn}!</h1>
      </body>
    </html>
  `;
  
  res.send(htmlResponse);
}


function addition(req, res) {
  var n1 = req.body?.num1 ? req.body.num1 : 0, n2 = req.body?.num2 ? req.body.num2 : 0 , sum = parseInt(n1) + parseInt(n2);

  var htmlResponse = `
    <html>
      <head>
        <title>Result</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #333;
            color: #f4f4f4;
          }
          h1 {
            color: #f4f4f4;
          }
          p {
            font-size: 1.2em;
          }
        </style>
      </head>
      <body>
        <h1>Result</h1>
        <p>${n1} + ${n2} = ${sum}</p>
        <br/>
        <br/>
        <br/>
        <p>If no value is passed, we will consider it as Zero</p>
      </body>
    </html>
  `;

  res.send(htmlResponse);
}

var attachService = function (app) {
  app.get('/get/greeting', greeting);
  app.post('/post/add', addition);
};
exports.attachService = attachService;
