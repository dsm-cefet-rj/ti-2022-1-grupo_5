const mongoose = require('mongoose');

require("dotenv").config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

const uri = process.env.MONGODB_URI.replace("<username>", username).replace(
  "<password>", password
);

const connectToDataBase = async () => {
  await mongoose.connect(uri, 
  (error) => {
    if (error){
      return console.log("Ocorreu um erro ao se conectar com o banco de dados.", error)
    }

    return console.log("Conexão ao banco de dados realizada com sucesso!")
  })
}

module.exports = connectToDataBase;