const express = require('express');
const app = express();
const path = require('path');

app.get('/melsen', function (req, res) {
  res.sendFile(path.join(__dirname,'/public/page/melsen.html'));
});

app.get('/global', function (req, res) {
  res.sendFile(path.join(__dirname,'/public/page/global.html'));
});

app.get('/socket.io', function (req,res){
  res.sendFile(path.join(__dirname,'/node_modules/socket.io/client-dist/socket.io.js',));
});

app.get('/global.js', function (req,res){
  res.sendFile(path.join(__dirname,'/public/js/global/global.js',));
});

app.use(express.static(__dirname + '/public')); 