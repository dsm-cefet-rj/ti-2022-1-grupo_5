const mongoose = require('mongoose');
const connectToDataBase = require('../connect')

const ingredientesSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
    },
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

module.exports = {IngredientesModel};