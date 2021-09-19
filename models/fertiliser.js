const mongoose = require('mongoose');

// creating the fertilisers schema
const fertiliserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },

    crop : {
        type : String,
        required : true,
    },
});

// creating the model 
const Fertiliser = mongoose.model('Fertiliser', fertiliserSchema);

module.exports.Fertiliser = Fertiliser;

