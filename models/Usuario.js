const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    email:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true
    },
    nombre:{
        type:String,
        required:'Nombre es requerido'
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Usuarios',usuarioSchema)