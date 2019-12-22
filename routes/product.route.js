const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');

// simple test to the controller
router.get('/test', productController.test);
router.post('/create', productController.create);
router.get('/:id', productController.detail);
router.put('/:id/update', productController.update);
router.delete('/:id/delete', productController.delete);

module.exports = router;
