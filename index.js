const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/global', (req, res) => {
  res.sendFile(__dirname + '/profile./global.html');
});

app.get('/melsen', (req, res) => {
  res.sendFile(__dirname + '/profile./index.html');
});

app.use('/public', express.static('public'))

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});


http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
