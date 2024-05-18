const net = require('node:net');

const client = net.createConnection(8080, () =>{
    client.write("Client connected to server");
});

client.on('data', (serverData) =>{
    console.log("Receievd data from server", serverData.toString());
});
