const express = require('express');

const router = express.Router();


const controladorProductos = require('../controller/productos.controller')
const controladorUsuarios = require ("../controller/usuarios.controller")
const controladorClientes = require ("../controller/clientes.controller")

// const controladorPedidos = require ("../controller/pedidos.controller")

module.exports = function (){

    // Productos
    router.get('/productos', controladorProductos.consultarProductos)
    router.get('/productos/:id', controladorProductos.consultaProducto)
    router.delete('/productos/:id', controladorProductos.eliminarProducto)
    router.post('/productos', controladorProductos.insertarProducto)
    router.put('/productos/:id', controladorProductos.editarProducto)
    
    // usuarios
    router.get("/usuarios", controladorUsuarios.consultarUsuarios)
    router.get("/usuarios/:id", controladorUsuarios.consultaUsuario)
    router.delete("/usuarios/:id",controladorUsuarios.eliminarUsuario)
    router.post("/usuarios", controladorUsuarios.insertarUsuario)
    router.post("/usuarios", controladorUsuarios.RegistroUsuarioCompleto)
    router.put("/usuarios/:id", controladorUsuarios.editarUsuario)

    // pedidos
/*
    router.get("/pedidos", controladorPedidos.consultaPedido)
    router.get("/pedidos", controladorPedidos.consultarPedidos)
    router.get("/pedidos", controladorPedidos.editarPedido)
    router.get("/pedidos", controladorPedidos.insertarPedido)
    router.get("/pedidos", controladorPedidos.eliminarPedido)
*/


    //Clientes
    router.get("/clientes",controladorClientes.consultaCliente)
    router.get("/clientes/:id",controladorClientes.consultarClientes)
    router.put("/clientes/:id",controladorClientes.editarCliente)
    router.delete("/clientes/:id",controladorClientes.eliminarCliente)



    return router
}