const express = require("express")
const bodyParser = require('body-parser');
const router = require("./backend/router/router")


require("dotenv").config()
var app = express()


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', router());

app.set('view engine', 'ejs')
app.set('views', './views')




/*

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

*/


app.listen(process.env.PORT, () => {
    console.log(process.env.PORT)
})