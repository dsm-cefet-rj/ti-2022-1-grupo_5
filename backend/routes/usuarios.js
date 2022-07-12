var express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var router = express.Router();
const Usuario = require('../database/models/Usuario');
const checkToken = require('../middleware/autentica')

router.post('/cadastro', async (req, res, next) => {
    const { nome, email, senha, confirmaSenha, idade, cep, municipio, bairro, endereco, numero, complemento } = req.body;
    
    // validations
    if (!nome) {
        return res.status(422).json({ msg: "O nome é obrigatório!" });
    }
    if (!email) {
        return res.status(422).json({ msg: "O email é obrigatório!" });
    }
    if (!senha) {
        return res.status(422).json({ msg: "A senha é obrigatória!" });
    }
    if (senha != confirmaSenha) {
        return res
        .status(422)
        .json({ msg: "A senha e a confirmação precisam ser iguais!" });
    }
    if (!idade) {
        return res.status(422).json({ msg: "A idade é obrigatória!" });
    }
    if(idade < 18) {
        return res.status(422).json({ msg: "Precisa ser maior que 18 anos!" });
    }
    if (!cep) {
        return res.status(422).json({ msg: "O CEP é obrigatório!" });
    }
    if (!municipio) {
        return res.status(422).json({ msg: "O CEP é obrigatório!" });
    }
    if (!bairro) {
        return res.status(422).json({ msg: "O CEP é obrigatório!" });
    }
    if (!endereco) {
        return res.status(422).json({ msg: "O CEP é obrigatório!" });
    }
    if (!numero) {
        return res.status(422).json({ msg: "O número é obrigatório!" });
    }
    
    // check if user exists
    const userExists = await Usuario.findOne({ email: email });
    
    if (userExists) {
        return res.status(422).json({ msg: "Por favor, utilize outro e-mail!" });
    }
    
    // create password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(senha, salt);
    
    // create user
    const user = new Usuario({
        nome,
        email,
        senha: passwordHash,
        idade, 
        cep, 
        municipio, 
        bairro, 
        endereco, 
        numero, 
        complemento,
    });
    
    try {
        await user.save();
        
        res.status(201).json({ msg: "Usuário criado com sucesso!" });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
});


router.post("/login", async (req, res) => {
    const {email, senha} = req.body
    //checa se usuario existe
    const user = await Usuario.findOne({email: email})
    
    if(!user){
        return res.status(404).json({msg : "Usuário não encontrado!"})
    }
    
    //checa se a senha esta correta
    const checkPassword = await bcrypt.compare(senha, user.senha)
    
    if(!checkPassword){
        return res.status(422).json({msg : "Senha inválida"})
    }
    user.senha = ""

    try {
        const secret = process.env.secret;
        const token = jwt.sign(
            {
                id: user._id,
            },
            secret,
            )
            res.status(200).json({ msg: 'Autenticação realizada com sucesso', token, user})
            
    }catch (error) {
        console.log(error)
        
        res.status(500).json({
            msg: 'Aconteceu um erro no servidor, tente novamente mais tarde!',
        })
    }
})

module.exports = router;