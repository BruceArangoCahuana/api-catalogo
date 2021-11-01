const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productosShema = new Schema({
     nombre:{
         type:String,
         trim:true
     },
     descripcion:{
         type:String
     },
     categoria:{
         type:String,
         trim:true
     },
     formaUso:{
        type:String
     },
     precauciones:{
        type:String
     },
     contraindicaciones:{
        type:String
     },
     nutrientes:{
        type:String,
        trim:true
     },
     presentacion:{
        type:String,
        trim:true
     },
     sabor:{
        type:String,
        trim:true
     },
     imagenUrl:{
        type:String
     }
});

module.exports = mongoose.model('Productos',productosShema)