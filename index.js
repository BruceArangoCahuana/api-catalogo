const express = require('express');
const router =  require('./routes');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({path:'variable.env'});

//realizamos la conexion a moogose
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATA_BASE,{
    useNewUrlParser:true
});
//validamos errores
mongoose.connection.on('error',(err)=>{
    console.log(err)
})
const app = express();
//habilitar bodyparse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
//rutas de la app
app.use('/',router());

app.listen(process.env.PORT,()=>{console.log("servidor listo")})