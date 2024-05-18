const net = require('node:net');

const server = net.createServer( (socket) =>{
    socket.on('data', (clientData) =>{
        console.log("Data received from client", clientData.toString());
    });
    socket.write("Data received on server");
});

server.listen(8080 , () =>{
    console.log("Server is up on the port 8080");
});