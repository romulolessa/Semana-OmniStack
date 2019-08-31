const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');


const routes = express.Router();

//ensiando a ler recomendaçoes
//routes.get('/', function(req, res){
    //fazendo uma requisição
 //   return res.json({ mengaem: `hello ${req.query.name}` });
//});

routes.get('/dev', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:devsId/likes', LikeController.store);
routes.post('/devs/:devsId/dislike', DislikeController.store);


//exportando  ou mostrar uma ação 
module.exports = routes;