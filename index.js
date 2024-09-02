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