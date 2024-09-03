/*
const modelPedidos = require("../models/pedidos.models")


exports.consultarPedidos = async (req, res) => {
    const consulta = await modelPedidos.find({})
    res.status(200).json(consulta)
}

exports.consultaPedido = async (req, res) => {
    const consulta = await modelPedidos.findOne({ _id: req.params.id })
    res.status(200).json(consulta)
}

exports.insertarPedido = async (req, res) => {
    const nuevoPedido = {
        cliente: req.body.cliente,
        carrito: req.body.carrito,
        subtotal: req.body.subtotal,
        impuesto: req.body.impuesto,
        total: req.body.total,
        estado: req.body.estado,
    }
    const insercion = await modelPedidos.create(nuevoPedido)
    if (insercion) {
        res.status(200).json({ "mensaje": "registro realizado" })
    } else {
        res.status(404).json({ "mensaje": "no se realizo" })

    }
}


exports.editarPedido =  async (req, res) => {
    const editarPedido = {
        cliente: req.body.cliente,
        carrito: req.body.carrito,
        subtotal: req.body.subtotal,
        impuesto: req.body.impuesto,
        total: req.body.total,
        estado: req.body.estado,
    }
    const actualizar = await modelPedidos.findOneAndUpdate({_id: req.params.id},editarPedido)
    if (actualizar) {
        res.status(200).json({ "mensaje": "registro realizado" })
    } else {
        res.status(404).json({ "mensaje": "no se realizo" })

    }
}


exports.eliminarPedido = async (req,res) => {
    const eliminar = await modelPedidos.deleteOne({_id: req.params.id})
    if (eliminar){
        res.status(200).json({"mensaje":"eliminado exitoso"})
    } else {
        res.status(404).json({"mensaje":"no se realizo"})
    }
}

*/