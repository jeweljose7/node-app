const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');
const route = require('./routes/index.js')

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect(config.url, (err, database) => {
  if (err) return console.log(err)
  route(app);  
  app.listen(config.port, () => {
    console.log('Example app listening on port ' + config.port);
  });               
})

