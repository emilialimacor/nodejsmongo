const mongoose = require("mongoose");

//Propriedades, informações de cadastro e lista sobre os clientes.
const Clientes = mongoose.model('Clientes',{
    nome: String,
    endereco: String,
    bairro: String,
    cidade: String,
    telefone: String,
    email: String
})

//Estas informações criam os dados básicos para a realização do CRUD.
module.exports = Clientes