const path = require('path');

const express = require('express');

// Import all product controllers
const productsController = require('../controllers/products')

const router = express.Router();



// GET
// Pass reference to product controller
router.get('/add-product', productsController.getAddProduct);

// POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;

