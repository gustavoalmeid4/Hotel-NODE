const usuario = ('../models/usuario');

class SessionController{

    store(req,res){
    
    
        const{email} = req.body;
  
    return res.json({email:'email@teste.com.br'});
    

}
}

module.exports = new SessionController;