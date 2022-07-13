var express = require('express');
var router = express.Router();
const Pedido = require('../database/models/Pedido');
const passport = require('passport');

/**router.post('/', async (req, res, next) => {
    await Pedido.create(req.body);
    res.status(201).send('Usuário foi cadastrado');
});*/

/**
 * Private route
*/

router.post(
    '/', 
    passport.authenticate('jwt', {session: false}),
    async (req, res) => {
        await Pedido.create(req.body);
        res.status(200).send('Pedido realizado');
    }
);

module.exports = router;