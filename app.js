const http = require('http');
const express = require('express');
const app = express();
server = http.createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.htm');
});

server.listen(80, () => {

});