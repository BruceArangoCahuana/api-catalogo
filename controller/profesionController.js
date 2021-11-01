const Profesion = require('../models/Profesion');

exports.mostrarProfesion = async(req,res,next) => {
    
    try {
        const profesion = await Profesion.find({});
        res.json(profesion);
    } catch (error) {
        console.log(error);
        res.send(error);
        return next()
    }
}
exports.insertarProfesion = async(req,res,next) =>{
    const profesion = new Profesion(req.body);
    try {
       await profesion.save()
       res.json({ mensaje : 'Se agrego profesion'});
    } catch (error) {
        res.send(error);
        return next()
    }
}