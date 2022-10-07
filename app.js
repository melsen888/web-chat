const express = require('express');
const app = express();
const path = require('path');
// const router = express.Router(); 
// * v 2.0 
const http = require('http').Server(express);
const io = require('socket.io')(http);
const port = process.env.port || 3000;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/tikus', function (req, res) => {
  res.sendFile(__dirname,'/pukul-tikus-tanah/index.html');
});

app.get('/melsen', function (req, res) {
  res.sendFile(path.join(__dirname,'/public/page/melsen.html'));
});

app.get('/global', function (req, res) {
  res.sendFile(path.join(__dirname,'/public/page/global.html'));
});

app.get('/socket.io', function (req,res){
  res.sendFile(path.join(__dirname,'/node_modules/socket.io/client-dist/socket.io.js',));
});

app.get('/login',function (req,res){
  res.sendFile(path.join(__dirname,'backend/login/admin.js'));
});

app.get('/barcode',function (req,res){
  res.sendFile(path.join(__dirname,'/node_modules/jsbarcode'));
});

app.use(express.static(__dirname + '/public')); // public directory,css,js
app.use('/game', express.static('pukul-tikus-tanah'))
app.listen(port);

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

console.log(`http://localhost:${port}/`);