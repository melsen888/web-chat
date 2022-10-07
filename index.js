const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/melsen', (req,res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/global', (req, res) => {
  res.sendFile(__dirname + '/profile./global.html');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/profile./index.html');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
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

app.use('/public', express.static('public'))

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});


http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
