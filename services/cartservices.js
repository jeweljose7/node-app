const cartmodel = require('../models/cartschema');
const mongoose = require('mongoose');

function addNewProduct(productobj){ console.log("dfgafgasrfg---------------")
  return new Promise(function (resolve, reject){
    var newproduct = new cartmodel(productobj);
    newproduct.save(function (err,res) {    
      console.log("dfgafgasrfg---------------",err)
        if (err) reject(err);
        else resolve(res);
    });
  });
}
function searchProductbyID(id) {
    return new Promise(function (resolve, reject){ console.log("insidepromise--->"+id)
        cartmodel.find({productID:id},function(err,res) {
            if (err) reject(err);
            else resolve(res);
        });
    });
}
function updatequantitybyID(id,newquantity) {
  return new Promise(function (resolve, reject){ console.log("updatequantitybyID--->"+id)
    cartmodel.update({ productID:id },{ quantity:newquantity }, function (err, res) { 
          if (err) reject(err);
          else resolve(res);
      });
  });
}

module.exports = {
    addNewProduct : addNewProduct,
    searchProductbyID : searchProductbyID,
    updatequantitybyID : updatequantitybyID
};
