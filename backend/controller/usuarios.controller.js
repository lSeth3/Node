const modelUsuarios= require("../models/usuarios.models")
const modelClientes = require("../models/clientes.models")


exports.RegistroUsuarioCompleto = async (req,res)=> {
    let datosUsuario = {
        correo: req.body.correo,
        pass: req.body.pass
    }
    const usu = await modelUsuarios.create(datosUsuario)
    let datoscliente = {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        usuario:usu._id
    }
    const cli = await modelClientes.create(datoscliente)
    if (usu) {
        res.status(200).json({ "mensaje": "registro realizado" })
    } else {
        res.status(404).json({ "mensaje": "no se realizo" })

    }
}

// usuario
exports.insertarUsuario= async (req,res)=>{
    let datosUsuario = {
        correo: req.body.correo,
        pass: req.body.pass
    }
    const nuevoUsu = await modelUsuarios.create(datosUsuario)
    if (nuevoUsu) {
        res.status(200).json({ "mensaje": "registro realizado" })
    } else {
        res.status(404).json({ "mensaje": "no se realizo" })

    }
}

exports.consultarUsuarios = async(req,res)=>{
    const consulta = await modelUsuarios.find({})
    res.status(200).json(consulta)
}

exports.consultaUsuario = async(req,res)=>{
    const consulta = await modelUsuarios.findOne({_id:req.params.id})
    res.status(200).json(consulta)
}

exports.editarUsuario = async(req,res)=>{
    let dataUser = {
        correo:req.body.correo,
        pass:req.body.pass
    }

    const actualizado = await modelUsuarios.findOneAndUpdate({_id:req.params.id},dataUser)
    if (actualizado) {
        res.status(200).json({ "mensaje": "Actualizado con exito" })
    } else {

        res.status(404).json({ "mensaje": "no se realizo" })

    }
}

exports.eliminarUsuario = async (req,res)=>{
    const usuarioEliminado = await modelUsuarios.deleteOne({_id:req.params.id})
    if(usuarioEliminado){
        res.status(200).json({"mensaje":"eliminado con exito"})
    }else{
        res.status(404).json({"mensaje":"No se pudo eliminar"})
    }
}