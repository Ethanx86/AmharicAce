const socket = io();
console.log(sessionStorage.getItem('username'));
socket.emit('curriculum', sessionStorage.getItem('username'));