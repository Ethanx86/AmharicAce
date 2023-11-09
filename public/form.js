document.getElementById('login').addEventListener('submit', (ev) => {
    ev.preventDefault();
    fetch('/login', {
        method: 'POST',
        body: formData,
      }).then((response) => {
        if (response.ok) {
            console.log('Form submitted successfully.');
        } else {
            console.error('Form submission failed.');
      }
    }).catch((error) => {
        console.error('Error:', error);
    });
});

document.getElementById('signup').addEventListener('submit', (ev) => {
    ev.preventDefault();
    fetch('/signup', {
        method: 'POST',
        body: formData,
      }).then((response) => {
        if (response.ok) {
            console.log('Form submitted successfully.');
        } else {
            console.error('Form submission failed.');
      }
    }).catch((error) => {
        console.error('Error:', error);
    });
});