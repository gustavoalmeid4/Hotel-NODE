const { Router } = require('express');

const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const HotelController = require('./controllers/HotelController');
const ReservaController = require('./controllers/ReservaController');

const routes = new Router();
const upload = multer(uploadConfig);

routes.get('/'), (req, res) => {

    return res.json({ retorno: false })

}


routes.get('/sessions', SessionController.store)

routes.post('/hotel', HotelController.create)
routes.get('/hotel', HotelController.list)
routes.post('/hotel',upload.single('imagem'),HotelController.create);

routes.post('/reserva', ReservaController.create)
routes.get('/reserva', ReservaController.list)



module.exports = routes;