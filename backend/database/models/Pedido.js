const Esfiha = require('./esfihas');
const mongoose = require('mongoose');

const Pedido = mongoose.model('Pedido', {
    info: {
        cep: String,
        municipio: String,
        bairro: String,
        endereco: String,
        numero: Number,
        complemento: String,
        pagamento: String,
        frete: Number,
        total: Number
    },
    itens: [{
        id: Number,
        tipo: String,
        nome: String,
        img: String,
        valor: Number,
    }]
});

module.exports = Pedido;