const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.crearCuenta =async (req,res,next)=>{
    const usuario  = new Usuario(req.body);
    usuario.password = await bcrypt.hash(req.body.password,12);
    try {
        await usuario.save();
        res.json({mensaje:'Se cre usuario correctamente'});
    } catch (error) {
        console.log(error);
        res.json({mensaje:'Error de sesion'});
    }
}
exports.listarUsuario = async (req,res,next)=>{
    try{
        const usuario = await Usuario.find({});
        res.json(usuario);
    }catch(error){
        res.send(error);
        return next();
    }
}
exports.inicioSesion =async (req,res,next)=>{
    const{email,password} = req.body
    const usuario = await Usuario.findOne({email})
    //revisamos el usuario existe
    if(!usuario){
        //si el usuario no existe
        await res.status(401).json({mensaje: 'Ese usuario no existe'});
        next();
    }else{
        //si el usuario existe
        if(!bcrypt.compareSync(password, usuario.password)){
            await res.status(401).json({mensaje:'Contraseña incorrecta'})
            next();
        }else{
            //password correcto firma del token
            const token = jwt.sign({
                email: usuario.email,
                nombre: usuario.nombre,
                _id:usuario._id
            },'llavecita',{
                expiresIn:'4h',
            });
            //retornar el token
            res.json({token});
        }
    }
}