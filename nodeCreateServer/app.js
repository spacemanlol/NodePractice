// Global module for http
const http = require('http');

// req - data about request
// res - help you send a response
function rqListener(req, res) {

}

// createServer callback function
// Takes request listener as argument

// http.createServer(rqListener);

// OR

const server = http.createServer((req, res) => {
    console.log(req)
});

// Creates the server on the given port
server.listen(3000);