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

router.post('/', function(req, res, next){
    passport.authenticate('jwt', function(err, pedido, info) {
        if (err) {
            return next(err); //genarete a 500 error
        }
        if(!pedido){
            return res.status(401).json({sucess: false, msg: "Ha! Te peguei, malandro!"})
        }
        async (req, res) => {
            await Pedido.create(req.body);
            res.status(200).send('Pedido realizado');
        }    
    })(req, res, next);
});

module.exports = router;