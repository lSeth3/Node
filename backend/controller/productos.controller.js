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

