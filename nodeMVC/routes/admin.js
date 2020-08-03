const path = require('path');

const express = require('express');

// Import all product controllers
const adminController = require('../controllers/admin')

const router = express.Router();



// GET
// Pass reference to product controller
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

// POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;

