const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profesionSchema = new Schema({
    profesion:{
        type:String,
        trim:true
    }
})
module.exports = mongoose.model('Profesion',profesionSchema);