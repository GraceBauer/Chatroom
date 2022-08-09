const app = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server,{

cors:{

origin:'*',

}

});



io.on('connection', socket =>{

    console.log('User Connected')
    
    socket.on('message',data => {
    
    console.log('Message received on server: ', data)
    
    io.emit('message',data)
    
    });

    socket.on('disconnet',() => {
        io.emit('message',' user disconnected')
    });
    
    })
    

server.listen(5000,()=>{

console.log('I am listening at port: 5000)');

});
