const Producto = require('../models/Producto');

exports.insertarProducto = async(req,res,next ) =>{
    const producto = new Producto(req.body);
    try {
       await producto.save()
       res.json({ mensaje : 'Se agrego el producto'});
    } catch (error) {
        res.send(error);
        return next()
    }
}

exports.verProducto = async(req,res,next)=>{
    try{
        const producto = await Producto.find({});
        res.json(producto);
    }catch(error){
        
        return next();
    }
}
exports.traerProducto = async(req,res,next) =>{
    const producto = await Producto.findById(req.params.idProducto);
    if(!producto){
        res.json({mensaje:'El producto no existe'});
        return next();
    }
    res.json(producto)
}
exports.editarProducto = async(req,res,next)=>{
    try{
        const producto = await Producto.findOneAndUpdate({_id:req.params.idProducto},req.body,{
            new:true
        });
        res.json(producto);
    }catch(error){
        console.log(error)
        res.send(error);
        next()
    }
}


exports.eliminarProducto = async(req,res,next)=>{
    try{
        await Producto.findOneAndDelete({_id:req.params.idProducto});
        res.json({mensaje:'El producto fue eliminado'});
    }catch(error){
        console.log(error);
        res.send(error);
        next()
    }
}
exports.buscarProducto = async(req,res,next)=>{
    try {
        const{query} = req.params;
        const producto = await Producto.find({categoria: new RegExp(query, 'i')})
        res.json(producto)
    } catch (error) {
        console.log(error);
        res.send(error);
        return next()
    }
} 