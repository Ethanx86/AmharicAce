const express = require('express');
const app = express();
const port = 3000;
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const crypto = require('crypto');
const cipher = crypto.createHash('sha256');
const fs = require('fs');
const users = {};
const username = require(__dirname + '\\username.js');
const json = JSON.parse(fs.readFileSync('./database.json').toString());
const curriculum = JSON.parse(fs.readFileSync('./curriculum.json').toString());
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '\\public\\index.htm');
});
server.listen(80, () => {});
app.use(express.urlencoded({extended: true}));
app.post('/login', (req, res) => {
    const formData = req.body;
    Object.keys(json).forEach((key) => {
        if(json[key].username == formData.username && json[key].password == formData.password){
            res.sendFile(__dirname + '\\public\\learner-home.htm');
        }
    });
});
app.post('/signup', (req, res) => {
    const formData = req.body;
    
    var found = false;
    Object.keys(json).forEach(k=>found=json[k].username == formData.username);
    if(found){
        io.emit('taken');
    } else {
        json[Object.keys(json).length] = {
            'username': formData.username,
            'password': formData.password,
            'number': 0
        };
        users[req.sessionID] = (json.length - 1).toString();
        fs.writeFile('database.json', JSON.stringify(json), {}, () => {});
        res.sendFile(__dirname + '\\public\\learner-home.htm');
    } 
});

io.on('connection', (socket) => {
    socket.on('curriculum', (username) => {    
        console.log(username);
        Object.keys(json).forEach((k) => {
            if(json[k].username === username){
                socket.emit('lessons', curriculum[json[k].number]);
            }
        });
    });
});
app.use(express.static('public', {
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.js')) {
            res.set('Content-Type', 'text/javascript');
        }
    }
}));
