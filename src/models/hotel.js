const {Schema ,model} = require('mongoose');

const hotelSchema = new Schema({

  name :'string', state:'string', city:'string', address:'string', type:'string' , apQnt:'number', 
  dailyRate:'number'


})

module.exports= model ('hotel',hotelSchema);