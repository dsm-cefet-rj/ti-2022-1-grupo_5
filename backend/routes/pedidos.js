var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', (req, res, next) => {
    console.log(req.body);
    res.send('Finalizou pedido');
});

module.exports = router;