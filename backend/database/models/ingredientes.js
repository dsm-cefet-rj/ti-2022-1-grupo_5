/*const mongoose = require('mongoose');
const connectToDataBase = require('../connect')

const ingredientesSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    valor: {
        type: Number,
        required: true,
    }
})


const IngredientesModel = mongoose.model("ingredientes", ingredientesSchema);

module.exports = {IngredientesModel};*/

const mongoose = require('mongoose')

const ingredientes = mongoose.model('ingredientes',{
    tipo: String,
    nome: String,
    img: String,
    valor: Number,
})

module.exports = ingredientes