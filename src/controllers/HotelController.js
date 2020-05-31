const hotel = require('../models/hotel')

class HotelController {
    
    
    
    create(req, res) {
        
        const nomeImagem = req.file.filename;
        const arquivo = req.file;
        return res.json({ok:true});

        const{usuario_id}=req.headers;
        const{hotel_id}=req.headers;

        const newHotel = new hotel;
        newHotel.save(function (error) {
            if (error) {
                res.json({ error })
            }
            else {
                res.json('Sucess!')
            }
        });
    }
   
    list(req, res){

            hotel.find({}).exec(function(erro,result){

                
                res.json({
                    data:result.map(h=>h.toObject())
                })
            })
                    
 

    } 
}

module.exports = new HotelController;