const {Schema ,model} = require('mongoose');

const hotelSchema = new Schema({

  name :'string', 
  state:'string', 
  city:'string', 
  address:'string', 
  type:'string' , 
  apQnt:'number', 
  dailyRate:'number',
  nomeImagem:'string',


},{
toJSON:{
    virtuals:true,
}
});

hotelSchema.virtual('imagem_url').get(function(){
  return `http://localhost:5000/uploads/${this.nomeImagem}`;
})

module.exports= model ('hotel',hotelSchema);