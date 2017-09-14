const mongoose = require('mongoose');
const productmodel = require('../models/productschema');
const addNewProduct = require('../services/productservices')

module.exports = function(app, db) {
    app.post('/abc', (req, res) => {       
        const productobj = { 
            productID: req.body.item.productID, 
            name: req.body.item. name, 
            price: req.body.item. price, 
            quantity: req.body.item. quantity  
        };        
        res.send( productobj);       
        addNewProduct.abc( productobj);                    
    });
};