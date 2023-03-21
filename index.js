const express = require('express');
const eslint = require('eslint');
const app = express();

// Define a route for the home page
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Start the server and listen on port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});