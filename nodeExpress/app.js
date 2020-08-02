const express = require('express')

const bodyParser = require('body-parser')

// Import as a function
const app = express();

// Import router objects
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// Add a new middleware function
// Accepts an array of request handlers

// app.use((req, res, next) => {
//     console.log('in the middleware');
//     // Allows request to travel to next middleware
//     next();
// })

app.use(bodyParser.urlencoded({extended: false}));

// Router is a valid middleware function
app.use(shopRoutes);

app.use((req, res, next) => {
    // Can chain methods as long as send is last
    res.status(404).send('<h1>404 Page not found</h1>');
})


// Creates the server on the given port

// shortened form with express, creates server and listens
app.listen(3000);