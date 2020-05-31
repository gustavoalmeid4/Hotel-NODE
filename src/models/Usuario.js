const {Schema ,model} = require('mongoose');

const UsuarioSchema = new Schema({

    email:'string',


})

module.exports= model ('usuario',UsuarioSchema);