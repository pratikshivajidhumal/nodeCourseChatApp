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
console.log(publicPath);

app.use(express.static(publicPath));

//listen to specific event socket argument in index.html/individual socket
io.on('connection',(socket)=>{
console.log('New user connected');

    socket.on('disconnect',()=>{
        console.log('User was disconnected');
    })
});

server.listen(port,()=>
{
        console.log(`Server is up on port ${port}`);
});