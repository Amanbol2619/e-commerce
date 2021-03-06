
const Product = require('../models/Product');
const fs = require('fs');


exports.create = async (req, res) => {
    console.log('req.body', req.body);
    console.log('req.file', req.file);
    console.log('req.user', req.user);

    const  { filename }   = req.file;
    console.log( filename, '--------');
    const { productName, productDesc, productPrice, productCategory, productQty } = req.body;

    try {

        let product = new Product(); 
        product.fileName = filename;
        product.productName = productName;
        product.productDesc = productDesc;
        product.productPrice = productPrice;
        product.productCategory = productCategory;
        product.productQty = productQty;

        await product.save();
        res.json({
            successMessage: `${productName} үүслээ`,
            product
        })
    } catch (err) {
        console.log(err, 'productController.create алдаа');
        res.status(500).json({
            errorMessage: 'Дахин оролдоно уу'
        })
    }
};


exports.readAll = async (req, res) => {
   
    try {

        const products = await Product.find({})
        .populate('productCategory', 'category');
        
        res.json({products});
    } catch (err) {
        console.log(err, 'productController.readAll алдаа');
        res.status(500).json({
            errorMessage: 'Дахин оролдоно уу'
        })
    }
};

 exports.readByCount = async (req, res) => {
 	try {
		const products = await Product.find({})
			.populate('productCategory', 'category')
			.limit(6);

 		res.json({ products });
 	} catch (err) {
 		console.log(err, 'productController.readAll алдаа');
 		res.status(500).json({
 			errorMessage: 'Дахин оролдоно уу',
 		});
	}
 };

exports.read = async (req, res) => {
   
    try {

        const productId = req.params.productId;
        console.log(productId, '-------------------ggggg');
        const product = await Product.findById(productId);
        
        res.json(product);
    } catch (err) {
        console.log(err, 'productController.read алдаа');
        res.status(500).json({
            errorMessage: 'Дахин оролдоно уу'
        })
    }
};

exports.update = async (req, res) => {
 	const productId = req.params.productId;
     console.log('req.body', req.body);
     console.log('req.file', req.file);
     console.log('productId', productId);


 	if (req.file !== undefined) {
	req.body.fileName = req.file.filename;
 	}

	const oldProduct = await Product.findByIdAndUpdate(productId, req.body);

 	if (req.file !== undefined && req.file.filename !== oldProduct.fileName) {
	fs.unlink(`uploads/${oldProduct.fileName}`, err => {
		if (err) throw err;
 			console.log('Зураг устгагдлаа');
	});
 }

res.json({
	successMessage: 'Амжилттай өөрчлөгдлөө',
	});
 };

exports.delete = async (req, res) => {
   
    try {

       const productId = req.params.productId;
       const deletedProduct = await Product.findByIdAndDelete(productId);
       fs.unlink(`uploads/${deletedProduct.fileName}`, (err) => {
           console.log('Амжиллтай устгагдлаа', deletedProduct.fileName);
       });

       res.json(deletedProduct);

    } catch (err) {
        console.log(err, 'productController.delete алдаа');
        res.status(500).json({
            errorMessage: 'Дахин оролдоно уу'
        })
    }
};