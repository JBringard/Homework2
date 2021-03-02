const Express = require('express');

const router = Express.Router();
const ProductController = require('../controllers/product.controller');

router.get('/', ProductController.getProducts);

router.get('/:sku', ProductController.getProduct);

router.post('/', ProductController.postProduct);

router.delete('/', ProductController.deleteProducts);

router.delete('/:sku', ProductController.deleteProduct);

router.put('/:sku', ProductController.putProduct);

router.patch('/:sku', ProductController.patchProduct);

module.exports = router;
