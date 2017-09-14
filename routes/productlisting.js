const mongoose = require('mongoose');
const productmodel = require('../models/productschema');
const productservices = require('../services/productservices')

module.exports = function(app, db) {
    app.get('/xyz', (req, res) => { 
        
        


        // var k = new Promise( productservices.displayAllProducts(resolve, reject) {
         
        // });
        // k.then( function(data) {
        //     console.log("inside error handler \n " + data); 
        //     res.send(data);
        // });
            
        


        var products = productservices.displayAllProducts();
       

       
           console.log(products);
            res.send(products);
              
    });
};