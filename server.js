const express = require('express')
const path = require('path')
const socketio = require('socket.io')
const http = require('http')
const cmd=require('node-cmd');
const app = express();
const server = http.createServer(app)
const io = socketio(server)


app.use('/', express.static(path.join(__dirname, 'frontend')))

io.on('connection', (socket) => {
    console.log("New socket formed from " + socket.id)
    socket.emit('connected')
    
    socket.on('send_msg', () => {
        cmd.get(
            'pwd',
            function(err, data, stderr){
               console.log('the current working dir is : ',data)
              io.to(socket.id).emit('recv_msg', data)
            }
        );
           
        } 
    )
    socket.on('send_msg2', () => {
        cmd.get(
            'ipconfig',
            function(err, data, stderr){
               console.log('info about nmap: ',data)
              io.to(socket.id).emit('recv_msg', data)
            }
        );
           
        } 
    )

})

server.listen(2345, () => console.log('Website open on http://localhost:2345'))