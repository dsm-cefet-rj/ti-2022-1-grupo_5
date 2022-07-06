const Esfiha = require('./esfihas');
const mongoose = require('mongoose');

const Pedido = mongoose.model('Pedido', {
    info: {
        data: String,
        idUsuario: String,
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
        id: String,
        tipo: String,
        nome: String,
        img: String,
        valor: Number,
        qtd: Number,
    }]
});

module.exports = Pedido;