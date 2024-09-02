var mongoose = require('mongoose')
require('dotenv').config();

const URI = `mongodb+srv://${process.env.USERDB}:${process.env.PASSWORD}@adso2669736.mc84yee.mongodb.net/${process.env.DB}`

mongoose.connect(URI)
module.exports = mongoose;