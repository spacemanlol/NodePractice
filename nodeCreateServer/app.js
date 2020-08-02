// Global module for http
const http = require('http');

// Filesystem module
const fs = require('fs');



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
    const method = req.method;

    if(url === '/') {
        // Write data to the response
        res.write('<html>');
        res.write('<body><form action="/message" method="POST"><input name="message" type="text"><button type="submit">Send</button></form></body>');
        res.write('</html>');

        // ends response, cannot write anymore
        return res.end()
    }

    if(url === '/message' && method === 'POST') {
        // .on -> go into data stream
        // 'data' - fires on new chunk

        const body = [];

        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        });

        // All chunks have been read and are stored in the body
        req.on('end', () => {
            // in order to interact with the chunks, we need
            // to buffer them

            // Creates a new buffer and adds all the chunks from inside the body
            // to it ("waiting at bus stop")
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);

            console.log(parsedBody)

        })


        // 302 - redirection
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>YEET</h1></body>');
    res.write('</html>');


});

// Creates the server on the given port
server.listen(3000);