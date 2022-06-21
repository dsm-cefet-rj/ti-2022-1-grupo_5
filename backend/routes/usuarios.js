var express = require('express');
var router = express.Router();

router.post('/', (req, res, next) => {

    console.log(req.body);
    res.send('Usuário foi cadastrado');
});

module.exports = router;