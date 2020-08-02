const express = require('express')
const bodyParser = require('body-parser')
// Import as a function
const app = express();


// Add a new middleware function
// Accepts an array of request handlers

// app.use((req, res, next) => {
//     console.log('in the middleware');
//     // Allows request to travel to next middleware
//     next();
// })

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    //console.log('in another middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
})

app.use('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    //console.log('in another middleware');
    res.send('<h1>Hello</h1>')
})

// Creates the server on the given port

// shortened form with express, creates server and listens
app.listen(3000);