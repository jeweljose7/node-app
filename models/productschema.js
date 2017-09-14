const mongoose = require('mongoose');

 var productSchema = mongoose.Schema({
            productID: String,
            name: String,
            price: Number,
            quantity: Number,
        });
var productmodel = mongoose.model('products',productSchema);
module.exports = productmodel;