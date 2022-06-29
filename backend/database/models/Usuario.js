const mongoose = require('mongoose');

const Usuario = mongoose.model('Usuario', {
    nome: String,
    idade: Number,
    email: String,
    senha: String,
    cep: String,
    municipio: String,
    bairro: String,
    endereco: String,
    numero: Number,
    complemento: String
});

module.exports = Usuario;