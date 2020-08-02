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
    // console.log(req)
    // console.log(req.url, req.method, req.headers)

    const url = req.url;
    if(url === '/') {
        // Write data to the response
        res.write('<html>');
        res.write('<body><form action="/message" method="POST"><input name="message" type="text"><button type="submit">Send</button></form></body>');
        res.write('</html>');

        // ends response, cannot write anymore
        return res.end()
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>YEET</h1></body>');
    res.write('</html>');


});

// Creates the server on the given port
server.listen(3000);