const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    }

}, {timeseries: true});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;