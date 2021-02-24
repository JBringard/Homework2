const Express = require('express');

const router = Express.Router();
const ProductController = require('../controllers/product.controller');

router.get('/products', ProductController.getProducts);

router.get('/products/:sku', ProductController.getProduct);

router.post('/products', ProductController.postProduct);

router.delete('/products', ProductController.deleteProducts);

router.delete('/products/:sku', ProductController.deleteProduct);

router.put('/products/:sku', ProductController.putProduct);

router.patch('/products/:sku', ProductController.patchProduct);

module.exports = router;
