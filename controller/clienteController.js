const Registro = require('../models/Registro');


exports.clientes = (req,res,next) => {
    res.send('si funcion');
}

exports.registroCatalogo = async(req,res,next)=>{
    const registro = new Registro(req.body);
    try {
       await registro.save()
       res.json({ mensaje : 'Se registro tu consulta'});
    } catch (error) {
        res.send(error);
        return next()
    }
}
exports.mostrarRegistro = async(req,res,next)=>{
    try {
        const registro = await Registro.find({});
        res.json(registro);
    } catch (error) {
        console.log(error);
        res.send(error);
        return next();
    }
}

exports.traerRegistroId = async(req,res,next)=>{
    const registro = await Registro.findById(req.params.idRegistro);
    if(!registro){
        res.json({mensaje:'No existe registro'});
        return next();
    }
    res.json(registro)
}

exports.eliminarRegistro = async(req,res,next)=>{
    try{
        await Registro.findOneAndDelete({_id:req.params.idRegistro});
        res.json({mensaje:'El registro fue eliminado'});
    }catch(error){
        console.log(error);
        res.send(error);
        next()
    }
}

exports.buscarRegistro = async(req,res,next)=>{
    try {
        const{query} = req.params;
        const registro = await Registro.find({
            nombre: new RegExp(query, 'i'),
            apellido: new RegExp(query, 'i')
        })
        res.json(registro)
    } catch (error) {
        console.log(error);
        res.send(error);
        return next()
    }
}