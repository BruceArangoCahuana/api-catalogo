const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mailSchema = new Schema({
    nombre:{
        type:String,
        trim:true
    },
    correo:{
        type:String,
        trim:true
    },
    consulta:{
        type:String,
        trim:true
    },
})
module.exports = mongoose.model('Mail',mailSchema);