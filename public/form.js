document.getElementById('login').addEventListener('submit', (ev) => {
    ev.preventDefault();
    sessionStorage.setItem('username', document.forms['login']['username'].value);
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
    ev.preventDefault();
    sessionStorage.setItem('username', document.forms['signup']['username'].value);
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

const socket = io();
socket.on('taken', _=>alert('This username is alredy taken.\nPlease choose another one'));