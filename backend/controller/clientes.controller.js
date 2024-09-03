
const modelClientes = require ("../models/clientes.models")



exports.consultarClientes = async (req, res) => {
    const consulta = await modelClientes.find({})
    res.status(200).json(consulta)
}

exports.consultaCliente = async (req, res) => {
    let consulta = await modelClientes.findOne({ _id: req.params.id })
    res.status(200).json(consulta)
}

exports.editarCliente =  async (req, res) => {
    const clienteEditar = {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        direccion: req.body.direccion
    }
    let actualizar = await modelClientes.findOneAndUpdate({ _id: req.params.id }, clienteEditar)
    if (actualizar) {
        res.status(200).json({ "mensaje": "actualizado exitoso" })
    } else {
        res.status(404).json({ "mensaje": "no se realizo" })

    }
}

exports.eliminarCliente = async (req, res) => {
    const eliminar = await modelClientes.deleteOne({ _id: req.params.id })
    if (eliminar) {
        res.status(200).json({ "mensaje": "eliminado exitoso" })
    } else {
        res.status(404).json({ "mensaje": "no se realizo" })
    }
}
