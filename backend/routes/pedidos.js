var express = require('express');
var router = express.Router();
const Pedido = require('../database/models/Pedido');
const checkToken = require('../middleware/autentica')

router.post('/', async (req, res, next) => {
    await Pedido.create(req.body);
    res.status(201).send('Usuário foi cadastrado');
});

/**
 * Private route
*/
router.use(checkToken);

router.get('/pedido', async (req, res) => {
    const pedido = await Pedido.find();

    res.status(200).json(pedido);
});

module.exports = router;