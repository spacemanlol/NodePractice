const express = require('express');
const rootDir = require('../util/path')
const path = require('path');
const router = express.Router();

// GET
router.get('/add-product', (req, res, next) => {
    //console.log('in another middleware');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

// POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
})


module.exports = router;

