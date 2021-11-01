const Mail = require('../models/Mail');
const email = require('../config/email');

exports.enviarEmail = async(req,res,next)=>{
    const mail = new Mail(req.body);
    try {
       await mail.save()
       email.sendMail(mail)
       res.json({ mensaje : 'Se envio correctamente tu mensaje,revisa tu bandeja de entrada'});
    } catch (error) {
        console.log(error);
        res.send(error);
        return next()
    }
    
}
exports.verEmail = async(req,res,next)=>{
    try {
        const mail = await Mail.find({});
        res.json(mail);
    } catch (error) {
        console.log(error);
        res.send(error);
        return next()
    }
}

exports.eliminarEmail = async(req,res,next)=>{
    try{
        await Mail.findOneAndDelete({_id:req.params.idEmail});
        res.json({mensaje:'El email fue eliminado'});
    }catch(error){
        console.log(error);
        res.send(error);
        next()
    }
}
