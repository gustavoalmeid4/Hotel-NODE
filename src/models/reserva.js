const {Schema ,model} = require('mongoose');

const reservaSchema = new Schema({

  
responsible :{type: Schema.Types.ObjectId , ref:'Usuario'}, contact:'string', hotel :{type: Schema.Types.ObjectId , ref:'hotel'}, apType:'string', period:'string', 
qntGuests :'number',


})

module.exports= model ('reserva',reservaSchema);