const express = require('express')
const socketio = require('socket.io')
const http= require('http');

const app = express()




const server = http.createServer(app);
const Server = socketio.Server
const io = new Server(server)

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})




io.on('connection',(socket)=>{
    console.log('A user connected')
    socket.on('disconnect',()=>{
        console.log('user leave chat')
    })
})

io.on('connection',(socket)=>{

    socket.on('user',(user)=>{
        console.log(user+'joined the connection ')
    })
    socket.on('chat message',(msg)=>{
        console.log('chat: '+msg)
    })
})

io.on('connection',(socket)=>{
    socket.broadcast.emit('hi')
})
io.on('connection',(socket)=>{
    socket.on('chat message',(msg)=>{
        io.emit('chat message',msg)
    })
})


const port = 3030
server.listen(port,()=>{
    console.log('server started at',port)
})


