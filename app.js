const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const crypto = require('crypto');
const cipher = crypto.createHash('sha256');
const fs = require('fs');
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '\\public\\index.htm');
});

server.listen(80, () => {});

app.use(express.urlencoded({extended: true}));

app.post('/login', (req, res) => {
    const formData = req.body;
    console.log('Received form data:', formData);
    res.send('Form data received');
});

app.post('/signup', (req, res) => {
    const formData = req.body;
    console.log(fs.readFileSync('./database.json'));
});