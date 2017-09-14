const productmodel = require('../models/productschema');
const mongoose = require('mongoose');

function addNewProduct(productobj) {
    var newproduct = new productmodel(productobj); 
    newproduct.save(function (err,newproduct) {
        if (err) return console.error(err);            
    });
};
function displayAllProducts() {
    productmodel.find(function(err,products) {
        if (err) return console.error(err);
        console.log(products);
        return products;
    });      
};

module.exports = {
    addNewProduct : addNewProduct,
    displayAllProducts : displayAllProducts
};
