const mongoose = require ('mongoose');

const animalSchema = new mongoose.Schema({

    AnimalSpecies:{
        type:String,
        required:true
    },

    Breed:{
        type:String,
        required:true
    },

    Age:{
        type:String,
        required:true
    },

    Weight:{
        type:String,
        required:true
    },

});

module.exports = mongoose.model('Animals',animalSchema);