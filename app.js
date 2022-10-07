const express = require('express');
const app = express();
const path = require('path');
// const router = express.Router(); 
// * v 2.0 
const http = require('http').Server(express);
const io = require('socket.io')(http);
const port = process.env.port || 3000;


app.listen(port);

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

console.log(`http://localhost:${port}/`);