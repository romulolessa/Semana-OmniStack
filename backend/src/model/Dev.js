//importando de dentro do mongoose o schema e model
const {Schema, model} = require('mongoose');
// schema serve para criar uma estrutura para o meu usuario
const DevSchema = new Schema({
    name:{
        type: String,
        required: true,
        //o required : true torna um campo obrrigatorio
    },
    user:{
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    like: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    //timestamps ele cria automatica duas coluna com createdAt= quando foi criado uldateAt=quando foi alterado
    timestamps: true,
});

//exportanndo o model
module.exports = model('Dev', DevSchema);