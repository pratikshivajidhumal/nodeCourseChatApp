//This is client file socket programming
var socket=io();
socket.on('connect',function(){
    console.log('Connected to the server');


})



socket.on('Broadcast',function(message){
    console.log('Broadcast Message',message);
})

/*
socket.on('newEmail',function(email){
    console.log('New email',email);
})*/

/*socket.on('disconnect',function(){
    console.log('Disconnected from server');
})*/
