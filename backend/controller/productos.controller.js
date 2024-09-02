const modelProductos= require("../models/productos.models")

 exports.consultarProductos =async(req,res)=>{
    const consulta = await modelProductos.find({})
    console.log(consulta)
    if(consulta){
        res.render('listarProductos', {listarProductos: consulta})
    }else{ 
        res.render('productos', {"mensaje":"no hay datos disponibles"})
    }
}

exports.consultarProducto =async(req,res)=>{
    const consulta = await modelProductos.findOne({referencia: req.params.id})
    console.log(consulta)
    if(consulta){
        res.render('listarProductos', {listarProducto: consulta})
        res.status(200).json(consulta)
    }else{ 
        res.render('productos', {"mensaje":"no hay datos disponibles"})
    }
}


exports.eliminarProducto = async (req, res) => {
    const eliminar = await productos.deleteOne({ _id: req.params.id })
    if (eliminar) {
        res.status(200).json({ "mensaje": "eliminado exitoso" })
    } else {
        res.status(404).json({ "mensaje": "no se realizo" })
    }
};


exports.insertarProducto =async (req, res) => {
    const nuevoProducto = {
        referencia: req.body.referencia,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        imagen: req.body.imagen,
        habilitado: req.body.habilitado
    }

    const insercion = await productos.create(nuevoProducto)
    
    if (insercion) {
        res.status(200).json({ "mensaje": "registro realizado" })
    } else {
        res.status(404).json({ "mensaje": "no se realizo" })

    }
};

exports.editarProducto = async (req, res) => {
    const productEditar = {
        referencia: req.body.referencia,
        nombre: req.body.nombreProducto,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        Imagen: req.body.imagen,
        habilitado: req.body.habilitado
    }
    let actualizar = await productos.findOneAndUpdate({ _id: req.params.id }, productEditar)
    if (actualizar) {
        res.status(200).json({ "mensaje": "actualizado exitoso" })
    } else {
        res.status(404).json({ "mensaje": "no se realizo mall" })

    }
}

