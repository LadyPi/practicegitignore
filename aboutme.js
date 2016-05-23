'use strict'

const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send("You're Home!");
});


app.get('/aboutMe', function(req, res) {
  res.send("Once fun fact about me...");
});

app.listen(port);
console.log('Server started on', port);