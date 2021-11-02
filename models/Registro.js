const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resgistroSchema = new Schema({
    nombre:{
        type:String,
        trim:true
    },
    apellido:{
        type:String,
        trim:true
    },
    producto:{
        type:String,
        trim:true
    },
    residencia:{
        type:String,
        trim:true
    },
    profesion:{
        type:String,
        trim:true
    },
    cmp_cnp:{
        type:String,
        trim:true
    },
    telefono:{
        type:String,
        trim:true
    },
    correo:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true
    },
    consulta:{
        type:String,
        trim:true
    },
})
module.exports = mongoose.model('Registro',resgistroSchema)