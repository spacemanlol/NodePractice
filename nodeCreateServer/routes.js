const fs = require('fs');

const requestHandler = (req, res) => {
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
        return req.on('end', () => {
            // in order to interact with the chunks, we need
            // to buffer them

            // Creates a new buffer and adds all the chunks from inside the body
            // to it ("waiting at bus stop")
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)

            const message = parsedBody.split('=')[1];
            // Another event listener that executes when we're done writing to a file
            fs.writeFile('message.txt', message, (err) => {
                // Offloads process to operating system
                // 302 - redirection
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
            // console.log(parsedBody)

        });


    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>YEET</h1></body>');
    res.write('</html>');
    res.end();

};

module.exports = {
    handler: requestHandler
}