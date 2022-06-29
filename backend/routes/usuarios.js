var express = require('express');
var router = express.Router();
const Usuario = require('../database/models/Usuario');

router.post('/', async (req, res, next) => {
    await Usuario.create(req.body);
    res.status(201).send('Usuário foi cadastrado');
});

module.exports = router;