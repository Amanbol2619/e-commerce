
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const OrderSchema = new mongoose.Schema({
    orderDate: {
        type: Date,
        required: true
    },

    status: {
        type: 'String',
        required: true
    
    },
    userId: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    productId: {
        type: ObjectId,
        ref: 'Product',
        required: true
    }
   

}, {timestamps:true});

const Order = mongoose.model('Product',OrderSchema);
module.exports = Order;
