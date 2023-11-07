const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '\\public\\index.htm');
});

server.listen(80, () => {});