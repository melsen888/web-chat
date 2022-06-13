var socket = io();
let person = prompt("Nama:", "anonymous" ); //nama
socket.emit('chat message', person + " ~ " +" " + "bergabung" + " " + new Date() );
document.getElementById("name").innerHTML = person
var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');
var date = new Date();

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value)  {
    socket.emit('chat message', person +" " + "   :   "+ input.value );
    input.value = '';
  }
});

socket.on('chat message', function(msg) {
  var item = document.createElement('h4');
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});