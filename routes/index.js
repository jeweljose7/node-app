const noteRoutes = require('./note_routes');
const addtocart = require('./addtocart');
const productlisting = require('./productlisting');

module.exports = function(app, db) {
  addtocart(app, db);
  noteRoutes(app, db);
  productlisting(app,db);
  
  // Other route groups could go here, in the future
};
