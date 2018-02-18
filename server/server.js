const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname,'../public');
const port =  process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage',{
        from: 'waqas',
        text: 'Hey, its new message',
        createdAt: 1301
    });

    socket.on('createEmail', (newEmail)=> {
        console.log('createEmail',newEmail);
    });

    socket.on('createMessage', (message)=>{
        console.log('createMessage: ',message);
    });

    socket.on('disconnect', ()=>{
        console.log('User disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});
