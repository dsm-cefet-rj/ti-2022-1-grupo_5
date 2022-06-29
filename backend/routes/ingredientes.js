var express = require('express');
var router = express.Router();
const IngredientesModel = require('../database/models/ingredientes');

router.get('/', (req, res, next) => {

  IngredientesModel.find({})
    .then((ingredientesData) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(ingredientesData);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = router;