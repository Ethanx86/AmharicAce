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
    if(json[formData.username]){
        res.sendFile(__dirname + '\\public\\learner-home.htm');
    }
});
app.post('/signup', (req, res) => {
    const formData = req.body;
    var found = false;
    Object.keys(json).forEach(k=>found=K==formData.username);
    if(found){
        io.emit('taken');
    } else {
        json[formData.username] = {
            'password': formData.password,
            'number': 0
        };
        fs.writeFile('database.json', JSON.stringify(json), {}, () => {});
        res.sendFile(__dirname + '\\public\\learner-home.htm');
    } 
});

io.on('connection', (socket) => {
    var user;
    socket.on('curriculum', () => {
        socket.emit('lessons', users[socket.id]);
    });

    socket.on('username', (name) => {
        users[socket.id] = name;
        console.log(users);
    });
});
app.use(express.static('public', {
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.js')) {
            res.set('Content-Type', 'text/javascript');
        }
    }
}));