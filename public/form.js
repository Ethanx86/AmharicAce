var socket = io();
document.getElementById('login').addEventListener('submit', (ev) => {
  const formData = new FormData(document.getElementById('login'));
  const username = formData.get('username');
  socket.emit('username', username);
    ev.preventDefault();
    fetch('/login', {
        method: 'POST',
        body: formData,
      }).then((response) => {
        if (response.ok) {
        } else {
      }
    }).catch((error) => {
        console.error('Error:', error);
    });
});

document.getElementById('signup').addEventListener('submit', (ev) => {
    const formData = new FormData(document.getElementById('signup'));
    const username = formData.get('username');
    socket.emit('username', username);
    fetch('/signup', {
        method: 'POST',
        body: formData,
      }).then((response) => {
        if (response.ok) {
        } else {
      }
    }).catch((error) => {
        console.error('Error:', error);
    });
});
socket.on('taken', _=>alert('This username is alredy taken.\nPlease choose another one'));