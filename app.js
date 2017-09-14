const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 8000;
const db = require('./config/db');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// require('./routes')(app, {});


mongoose.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  require('./routes')(app, database);
  app.listen(port, () => {
    console.log('Example app listening on port ' + port);
  });               
})

