const express = require('express');
const router = express.Router();

const clienteController = require('../controller/clienteController');
const productoController = require('../controller/productoController');
const profesionController = require('../controller/profesionController');
const emailController = require('../controller/emailController');

module.exports = function(){
    router.get('/',clienteController.clientes);

    //producto controller
    router.get('/producto',productoController.verProducto);
    //insertar producto
    router.post('/producto',productoController.insertarProducto);
    //traer para editar y traer producto
    router.get('/producto/:idProducto',productoController.traerProducto);
    router.put('/producto-editar/:idProducto',productoController.editarProducto);
    //eliminar por producto
    router.delete('/producto/:idProducto',productoController.eliminarProducto);
    //buscar por producto
    router.post('/producto/busqueda/:query',productoController.buscarProducto);

    //registro catalogo
    router.post('/registro',clienteController.registroCatalogo);
    //ver resgitrados
    router.get('/registro',clienteController.mostrarRegistro);
    //ver registro por id
    router.get('/registro/:idRegistro',clienteController.traerRegistroId);
    //eliminar registro
    router.delete('/registro/:idRegistro',clienteController.eliminarRegistro);
    //buscar registro
    router.post('/registro/busqueda/:idRegistro',clienteController.buscarRegistro);

    //insertar profeseion
    router.post('/profesion',profesionController.insertarProfesion);
    //mostrar profeseion
    router.get('/profesion',profesionController.mostrarProfesion);

    
    //ver email
    router.get('/email',emailController.verEmail);
    //enviar email
    router.post('/email',emailController.enviarEmail);
    //eliminar email
    router.delete('/email/:idEmail',emailController.eliminarEmail);
    return router;
}