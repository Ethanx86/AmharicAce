const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 80;

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'public/index.htm')
});

server.listen()