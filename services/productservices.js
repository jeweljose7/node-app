const productmodel = require('../models/productschema');
const mongoose = require('mongoose');

function displayAllProducts(min,max,limit) { 
    return new Promise(function (resolve, reject){
        productmodel.find({price: {$gte: min, $lte: max}},{_id:0},function(err,res) {
            if (err) reject(err);
            else resolve(res);
        }).limit(limit);
    });
}
module.exports = {
    displayAllProducts : displayAllProducts
};
