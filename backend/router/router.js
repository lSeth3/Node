const express = require('express');
const router = express.Router();

const controladorProductos = require('../controller/productos.controller')

module.exports = function (){
    router.get('/productos', controladorProductos.consultarProductos)
    router.get('/productos', controladorProductos.consultarProducto)
    


    
    return router
}