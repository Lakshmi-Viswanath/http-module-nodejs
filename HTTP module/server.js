const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((request, response) => {
    console.log(request);
    response.end("Something Something !!!");
});

server.listen(8000 , () =>{
  console.log("Server connected on port 8000");
});