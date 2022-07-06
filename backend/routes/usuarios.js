var express = require('express');
var router = express.Router();
const Usuario = require('../database/models/Usuario');

router.post('/', async (req, res, next) => {
    await Usuario.create(req.body);
    res.status(201).send('Usuário foi cadastrado');
});

app.post("/auth/login", async (req, res) => {
    const {email, senha} = req.body
  })
  
//checa se usuario existe
const user = await Usuario.findOne({email: email})

if(!user){
    return res.status(404).json({msg : "Usuário não encontrado!"})
}

//checa se a senha esta correta
const checkPassword = await compare(senha, user.senha)
if(!checkPassword){
    return res.status(422).json({msg : "Senha invalida"})
}

module.exports = router;

//const userExists = await username.findOne({email: email})
//if(userExists){
//  return console.log("Utilize outro email")
//}