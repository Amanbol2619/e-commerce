const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middleware/authenticator');
const upload = require('../middleware/multer');
const productController = require('../controllers/product');



router.post('/', authenticateJWT, upload.single('productImage'), productController.create);
router.get('/', productController.readAll);
router.get('/count', productController.readByCount);
router.put('/:productId', authenticateJWT, upload.single('productImage'), productController.update);
// router.put(
// 	'/:productId',
// 	authenticatateJWT,
// 	upload.single('productImage'),
// 	productController.update
//  );
router.get('/:productId', productController.read);
router.delete('/:productId', authenticateJWT, productController.delete);

module.exports = router;