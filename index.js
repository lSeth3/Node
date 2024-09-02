const express = require("express")
const bodyParser = require('body-parser');
const usuario = require("./backend/models/usuarios.models")
const productos = require("./backend/models/productos.models")
const clientes = require("./backend/models/clientes.models")
const router = require("./backend/router/router")


const logger = require("morgan")
require("dotenv").config()
const app = express()
app.use("/", router())
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.urlencoded({ extended: false }))
app.use(express.json())






/*



//clientes

app.get("/clientes", async (req, res) => {
    const consulta = await clientes.find({})
    res.status(200).json(consulta)
})

app.get("/clientes/:id", async (req, res) => {
    let consulta = await clientes.findOne({ _id: req.params.id })
    res.status(200).json(consulta)
})



app.put("/clientes/:id", async (req, res) => {
    const clienteEditar = {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        direccion: req.body.direccion
    }
    let actualizar = await clientes.findOneAndUpdate({ _id: req.params.id }, clienteEditar)
    if (actualizar) {
        res.status(200).json({ "mensaje": "actualizado exitoso" })
    } else {
        res.status(404).json({ "mensaje": "no se realizo" })

    }
})

app.delete("/clientes/:id", async (req, res) => {
    const eliminar = await clientes.deleteOne({ _id: req.params.id })
    if (eliminar) {
        res.status(200).json({ "mensaje": "eliminado exitoso" })
    } else {
        res.status(404).json({ "mensaje": "no se realizo" })
    }
});

// enviar correo
const emailS = require("./backend/utils/email.services")

app.get('/enviarCorreo', async (req, res) => {
    console.log('h')
    await emailS.sendEmail(
        "edwardstev372@gmail.com",
         "Mastubino",
        "TERRIBLE PAJERO",
    );
})


// registro de usuario - cliente

app.post("/registroCompleto",async(req,res)=>{
    let datosUsuario = {
        correo: req.body.correo,
        pass: req.body.pass
    }
    const usu = await usuario.create(datosUsuario)
    let datoscliente = {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        usuario:usu._id
    }
    const cli = await clientes.create(datoscliente)
    if (usu) {
        res.status(200).json({ "mensaje": "registro realizado" })
    } else {
        res.status(404).json({ "mensaje": "no se realizo" })

    }
})

// usuario 
app.post('/nuevoUsuario',async (req,res)=>{
    let datosUsuario = {
        correo: req.body.correo,
        pass: req.body.pass
    }
    const nuevoUsu = await usuario.create(datosUsuario)
    if (nuevoUsu) {
        res.status(200).json({ "mensaje": "registro realizado" })
    } else {
        res.status(404).json({ "mensaje": "no se realizo" })

    }
})

app.get('/usuarios',async(req,res)=>{
    const consulta = await usuario.find({})
    res.status(200).json(consulta)
})
app.get('/usuarios/:id',async(req,res)=>{
    const consulta = await usuario.findOne({_id:req.params.id})
    res.status(200).json(consulta)
})

app.put("/usuarios/:id",async(req,res)=>{
    let dataUser = {
        correo:req.body.correo,
        pass:req.body.pass
    }

    const actualizado = await usuario.findOneAndUpdate({_id:req.params.id},dataUser)
    if (actualizado) {
        res.status(200).json({ "mensaje": "Actualizado con exito" })
    } else {

        res.status(404).json({ "mensaje": "no se realizo" })

    }
})
app.delete("/usuarios/:id",async (req,res)=>{
    const usuarioEliminado = await usuario.deleteOne({_id:req.params.id})
    if(usuarioEliminado){
        res.status(200).json({"mensaje":"eliminado con exito"})
    }else{
        res.status(404).json({"mensaje":"No se pudo eliminar"})
    }
})

// pedidos
/*
app.get("/pedidos",async (req,res)=>{
    const consulta = await usuario.find({})
    res.status(200).json(consulta)
})

app.get("/pedidos/:id",async(req,res)=>{
    const consulta = await pedidos.findOne({_id:req.params.id})
    res.status(200).json(consulta)
})

app.post("/pedidos", async (req,res)=>{
    const dataPedido = {
        cliente:req.body.cliente,
        ca
    }
    const nuevoPedido = await pedidos.create()
})
*/
app.listen(process.env.PORT, () => {
    console.log(process.env.PORT)
})