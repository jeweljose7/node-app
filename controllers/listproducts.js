const productservice = require('../services/productservices')

module.exports = function(req,res) {    
    var min = req.query.min_price;
    var max = req.query.max_price;
    var limit = req.query.limit;    
    if(min==undefined || min== ""){
        min=0;          
    }   
    if(max==undefined || max== "") {
        max=100000;           
    }
    if(limit==undefined || limit== "") {
        limit=100000;           
    }
    if(isNaN(min) || isNaN(max) || isNaN(limit)) {      
        var response = {
            status : 422,
            error : "params type is not matching"
        }
        res.send(response)
    } else {       
        var k = productservice.displayAllProducts(min,max,limit);       
        k.then( function(data) {           
            var response = {
                status: 200,
                total: data.length,
                result: data 
            }  
            res.send(response);       
        });
        k.catch(function(data) {     
            var response = data;  
            res.send(data);
        });         
    }  
};