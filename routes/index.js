const addtocart = require('../controllers/addtocart');
const productlisting = require('../controllers/listproducts');

module.exports = function(app, db) {
  app.get('/', function (req, res) {
    res.send('Hello World!')
  })
  app.get('/xyz', productlisting);
  app.post('/abc',addtocart);  
};
