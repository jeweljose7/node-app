const mongoose = require('mongoose');

 var productSchema = mongoose.Schema({
            productID: String,
            name: String,
            price: Number,
            quantity: Number,
        },{VersionKey:false});
var productmodel = mongoose.model('Model1',productSchema,'products');
module.exports = productmodel;