const mongoose = require('mongoose');

 var cartSchema = mongoose.Schema({
            productID: String,
            name: String,
            price: Number,
            quantity: Number,
        },{VersionKey:false});
var cartmodel = mongoose.model('Model',cartSchema,'cart');
module.exports = cartmodel;