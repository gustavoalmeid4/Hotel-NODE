const express = require('express')

const mongoose = require('mongoose');

const routes = require ('./routes');

const cors = require ('cors');

class App{

    constructor(){

    this.app=express();

    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);    
    mongoose.connect('mongodb+srv://Almeida:aezakmialmeida123@cluster0-zmabg.mongodb.net/test?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnfiedTopology: true,
    });
    


    this.middlewares();
    this.routes();

    }


middlewares(){
this.app.use{
    '/imagens',
    express.static(path.resolve(__dirname,'..','uploads'))
};
this.app.use(express.json());
this.app.use(cors());

}

routes(){

this.app.use(routes);


}


}

module.exports = new App().app