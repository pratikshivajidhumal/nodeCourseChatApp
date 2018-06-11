//This is server file socket programming
const express=require('express');
const path=require('path');
const http=require('http');
const socketIO=require('socket.io');

const publicPath=path.join(__dirname,'../public');

const port=process.env.PORT||3000;

var app=express();

var server=http.createServer(app);

var io=socketIO(server);

//console.log(__dirname+'/../public');
//console.log(publicPath);

app.use(express.static(publicPath));

//listen to specific event socket argument in index.html/individual socket
io.on('connection',(socket)=>{
console.log('New user connected');

//this method emits the event to single user
   /* socket.emit('newMessage',{
        from:'Pratik@example.com',
        text:'Hey whats up',
        createdAt:123
    });*/

    socket.on('createMessage',(message)=>{

        console.log('createMessage:',message);

        //this method emits the event to every user
        io.emit('Broadcast', {
            from:message.from,
            text:message.text,
            createdAt:new Date().getTime()
        }   )
    });


    /*socket.on('createEmail',(newEmail)=>{

        console.log('CreateEmail',newEmail);
    });

    socket.on('disconnect',()=>{
        console.log('User was disconnected');
    })*/
});

server.listen(port,()=>
{
        console.log(`Server is up on port ${port}`);
});