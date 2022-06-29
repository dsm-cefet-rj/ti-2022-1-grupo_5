const mongoose = require('mongoose')

const esfihas = mongoose.model('esfiha',{
    id: Number,
    tipo: String,
    nome: String,
    img: String,
    valor: Number,
})

module.exports = esfihas