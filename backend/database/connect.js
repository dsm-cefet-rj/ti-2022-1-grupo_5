const mongoose = require('mongoose');

require("dotenv").config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

const uri = process.env.MONGODB_URI.replace("<username>", username).replace(
  "<password>", password
);

const connectToDataBase = async () => {
  try {
    await mongoose.connect(uri); 
    console.log("Conexão ao banco de dados realizada com sucesso!")
  } catch (error) {
    console.error(error.message);
    console.log("Ocorreu um erro ao se conectar com o banco de dados.", error)
    process.exit(1);
  }
};

module.exports = connectToDataBase;