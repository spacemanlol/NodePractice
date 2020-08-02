const express = require('express');

const router = express.Router();

// GET
router.get('/add-product', (req, res, next) => {
    //console.log('in another middleware');
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
})

// POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
})


module.exports = router;

