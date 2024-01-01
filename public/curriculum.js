const socket = io();
socket.emit('curriculum', sessionStorage.getItem('username'));
socket.on('lessons',e=>console.log(e));