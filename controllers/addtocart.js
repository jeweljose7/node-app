const cartservice = require('../services/cartservices')
var err = {
    status : 422,
    error : "invalid params"
}
module.exports = function(req,res) {      
      if(req.body.item==undefined) {         
        res.send(err);
      }        
    const productobj = { 
        productID: req.body.item.productID, 
        name: req.body.item. name, 
        price: req.body.item. price, 
        quantity: req.body.item. quantity  
    }
  
    if(productobj.productID == undefined||productobj.name == undefined||productobj.price == undefined||productobj.quantity == undefined) {
       res.send(err);
    }
    else if(isNaN(productobj.price) || isNaN(productobj.quantity) ) {        
        res.send(err)
    } else {    
        var check = cartservice.searchProductbyID(req.body.item.productID)
        check.then(  function(data) {  console.log("checked for the project in cart ==>")
            if(data.length===0) {console.log("no such product found in cart ")
                var k = cartservice.addNewProduct( productobj);    
                k.then( function(data) {console.log(" product added to cart")     
                    var responseobj = {
                            status: 200,
                            total:1,
                            result:data
                    }                
                    res.send(responseobj);       
                });
                k.catch(function(data) { console.log("problem in inseting new product"+data)
                    var response ={
                        status: 422,
                        error: "invalid parameters"
                    }
                    res.send(response)
                });
                
            } else {console.log("a similar product found in cart",data[0].name)
                var newquantity = parseInt(req.body.item.quantity )+parseInt( data[0].quantity);
                var k = cartservice.updatequantitybyID(req.body.item.productID,newquantity);   
                k.then( function(data) {console.log("updated the product quantity")     
                    var responseobj = {
                            status: 200,
                            total:1                        
                    }                
                    res.send(responseobj);       
                });
                k.catch(function(data) { console.log("someproblem in updating"+data)                    
                    res.send(error)
                });
            }    
        });
        check.catch(function(data) { console.log("check false--->"+data)
            var responseobj ={
                status: 422,
                error: data
            }
            console.log("inside error handler \n " + data); 
            res.send(responseobj);
        });
    }         
};