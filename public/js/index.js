//This is client file socket programming
var socket=io();
socket.on('connect',function(){
    console.log('Connected to the server');

    socket.emit('createMessage',{
        from:'pratik@gmail.com',
        text:'Hey..This is Pratik',

    });
})



socket.on('newMessage',function(message){
    console.log('New Message',message);
})

/*
socket.on('newEmail',function(email){
    console.log('New email',email);
})*/

/*socket.on('disconnect',function(){
    console.log('Disconnected from server');
})*/
