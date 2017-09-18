const mongoose = require('mongoose');

 var cartSchema = mongoose.Schema({
            productID:{ 
               type: String,
               required:true
            },               
            name: { 
                type:String,
                required:true,
            },
            price: { 
                type:Number,
                required:true
            },
            quantity: { 
                type:Number,
                required:true
            }
        },{VersionKey:false});
var cartmodel = mongoose.model('Model',cartSchema,'cart');
module.exports = cartmodel;