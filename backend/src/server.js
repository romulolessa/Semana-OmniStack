// importando o express
const express = require('express');
//importando a dependencia mongoose
const mongoose = require('mongoose');
//importando as routes
const cors = require('cors');
//importando o cors

const routes = require('./routes');
// criando um servidor 

const server = express();
//conectando com o banco de dados
mongoose.connect('mongodb+srv://romulolessa:r0mul0123@cluster0-poyvo.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true    
});


server.use(cors());
//ensinando ao express a ler json
server.use(express.json());
server.use(routes);
//criando uma porta
server.listen(8030);