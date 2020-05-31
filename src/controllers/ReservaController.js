const reserva = require('../models/reserva');
const usuario = require('../models/usuario');
const hotel = require('../models/hotel');


class ReservaController {




    async create(req, res) {
        
     
        const {usuario_id} = req.headers;
        const {hotel_id} = req.headers;
        console.log(usuario_id);
        
        let reserva = await reserva.create({responsible :usuario_id , hotel:hotel_id , period , qntGuests});
        await reserva.populate('responsible').populate('hotel').execPopulate();
        
        usuario.findById(usuario_id).catch((err)=>{
            return res.status(401).json({mensagem:"Usuario não autorizado!"})
        });

        hotel.findById(hotel_id).catch((err)=>{
            return res.status(400).json({mensagem:"Hotel Invalido!"})
        });
        

        const newReserva = new reserva(body);
        newReserva.save(function (error) {
            if (error) {
                res.json({ error })
            }
            else {
                res.json(reserva)
            }
        }); 
        
        
    }
    
    list(req, res){

            reserva.find({}).exec(function(erro,result){

                
                res.json({
                    data:result.map(h=>h.toObject())
                })
            })
                    
 

    }
}

module.exports = new ReservaController;
