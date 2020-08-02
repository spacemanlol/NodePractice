// Global module for http
const http = require('http');

const express = require('express')

// Import as a function
const app = express();


// Add a new middleware function
// Accepts an array of request handlers

app.use((req, res, next) => {
    console.log('in the middleware');
    // Allows request to travel to next middleware
    next();
})

app.use((req, res, next) => {
    console.log('in another middleware');
    res.send('<h1>Hello</h1>')
})

// App is a valid request handler
const server = http.createServer(app);

// Creates the server on the given port
server.listen(3000);