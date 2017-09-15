const productservice = require('../services/productservices')

module.exports = function(req,res) {
    var min = req.query.min_price;
    var max = req.query.max_price;    
    var k = productservice.displayAllProducts(min,max);       
    k.then( function(data) {
        var responseobj = {
            status: 200,
            total: data.length,
            result: data 
        }        
        res.send(responseobj);       
    });
    k.catch(function(data) {       
        res.send(data);
    });         
};