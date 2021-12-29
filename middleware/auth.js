const jwt = require('jsonwebtoken')


module.exports = (req,res,next)=>{
    //autorizacion por header
    const authHeader = req.get('Authorization');

    if(!authHeader){
        const error = new Error('No autorizado')
        error.statusCode = 401;
        throw error;
    }

    //obtener token
    const token =  authHeader.split(' ')[1]
    let revisartoken
    try {
        revisartoken =jwt.verify(token,'llavecita')
    } catch (error) {
        error.statusCode = 500;
        throw error;
    }

    //token valido o si hay algun error
    if(!revisartoken){
        const error = new Error('No autenticado')
        error.statusCode = 401;
        throw error;
    }

    next();
}