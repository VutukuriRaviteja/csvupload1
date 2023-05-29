const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://vraviteja0795:12345@cluster0.rnachcq.mongodb.net/?retryWrites=true&w=majority');


const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
