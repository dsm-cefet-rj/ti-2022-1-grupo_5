var express = require('express');
var router = express.Router();
const Pedido = require('../database/models/Pedido');

router.post('/', async (req, res, next) => {
    await Pedido.create(req.body);
    res.status(201).send('Usuário foi cadastrado');
});

module.exports = router;