const socket = io();
socket.emit('curriculum');
socket.on('lessons',e=>console.log(e));