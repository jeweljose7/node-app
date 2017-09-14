const mongoose = require('mongoose');

 var noteSchema = mongoose.Schema({
            text: String,
            body: String
        });
        var Kitten = mongoose.model('notes', noteSchema);


module.exports = function(app, db) {
    app.post('/notes', (req, res) => {       
        const note = { text: req.body.text, body: req.body.body };        
        res.send(note);
        var note1 = new Kitten(note);        
        note1.save(function (err, note1) {
            if (err) return console.error(err);            
        });       
    });
};