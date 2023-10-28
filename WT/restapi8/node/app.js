const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const service = require('./service.js');

// Parse JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static('../public'));

// Attach services defined in service.js
service.attachService(app);

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
