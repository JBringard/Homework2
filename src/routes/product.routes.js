const Express = require('express');
const BodyParser = require('body-parser');
const ProductController = require('../controllers/product.controller');

const router = Express.Router();

router.use(BodyParser.json());

router.get('/products', ProductController.getProducts);

router.get('/products/:sku', ProductController.getProduct);

router.post('/products', ProductController.postProduct);

router.delete('/products', ProductController.deleteProducts);

router.delete('/products/:sku', ProductController.deleteProduct);

router.put('/products/:sku', ProductController.putProduct);

router.patch('/products/:sku', ProductController.patchProduct);

module.exports = router;
