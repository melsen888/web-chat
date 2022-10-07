var socket = io();
var nama = prompt("Nama" );
if (nama == null && nama === " "){
    nama = "anonymous";
}
var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
    socket.emit('chat message', nama + " : " + input.value);
    input.value = '';
    }
});

socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});