var socket = io();
socket.on('connect',function(){
    console.log('connected to server');

    socket.emit('createMessage',{
        from: 'Andrew',
        text: 'This is create message event'
    });
});

socket.on('disconnect', function(){
    console.log('discount from server');
});

socket.on('newMessage',function(message){
    console.log('new message:', message);
});