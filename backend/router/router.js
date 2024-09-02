const express = require('express');
const router = express.Router();

const controladorProductos = require('../controller/productos.controller')

module.exports = function (){
    // Productos
    router.get('/productos', controladorProductos.consultarProductos)
    router.get('/productos', controladorProductos.consultarProducto)
    router.get('/productos', controladorProductos.eliminarProductoProducto)
    router.get('/productos', controladorProductos.insertarProducto)
    router.get('/productos', controladorProductos.editarProducto)
    
    return router
}