var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {

  res.json([
    {
      "id": 1,
      "tipo": "Salgado",
      "nome": "Molho de tomate",
      "img": "img/ingrediente-molho-de-tomate.png",
      "valor": 1.0
    },
    {
      "id": 2,
      "tipo": "Neutro",
      "nome": "Queijo Mussarela",
      "img": "img/ingrediente-queijo-mussarela.png",
      "valor": 3.0
    },
    {
      "id": 3,
      "tipo": "Salgado",
      "nome": "Cebola",
      "img": "img/ingrediente-cebola.png",
      "valor": 1.0

    },
    {
      "id": 4,
      "tipo": "Salgado",
      "nome": "Oregano",
      "img": "img/ingrediente-oregano.png",
      "valor": 1.0
    },
    {
      "id": 5,
      "tipo": "Salgado",
      "nome": "Tomate",
      "img": "img/ingrediente-tomate.png",
      "valor": 1.0

    },
    {
      "id": 6,
      "tipo": "Salgado",
      "nome": "Catupiry",
      "img": "img/ingrediente-catupiry.png",
      "valor": 1.0
    },
    {
      "id": 7,
      "tipo": "Salgado",
      "nome": "Frango",
      "img": "img/ingrediente-frango.png",
      "valor": 2.0
    },
    {
      "id": 8,
      "tipo": "Salgado",
      "nome": "Carne Moída",
      "img": "img/ingrediente-carne-moida.png",
      "valor": 2.0
    },
    {
      "id": 9,
      "tipo": "Salgado",
      "nome": "Ovo",
      "img": "img/ingrediente-ovo.png",
      "valor": 1.0
    },
    {
      "id": 10,
      "tipo": "Salgado",
      "nome": "Bacon",
      "img": "img/ingrediente-bacon.png",
      "valor": 2.0
    },
    {
      "id": 11,
      "tipo": "Salgado",
      "nome": "Calabresa",
      "img": "img/ingrediente-calabresa.png",
      "valor": 2.0
    },
    {
      "id": 12,
      "tipo": "Doce",
      "nome": "Chocolate",
      "img": "img/ingrediente-chocolate.png",
      "valor": 2.0

    },
    {
      "id": 13,
      "tipo": "Doce",
      "nome": "Granulado",
      "img": "img/ingrediente-granulado.png",
      "valor": 1.0

    },
    {
      "id": 14,
      "tipo": "Doce",
      "nome": "Confete",
      "img": "img/ingrediente-confete.png",
      "valor": 1.0
    },
    {
      "id": 15,
      "tipo": "Doce",
      "nome": "Morango",
      "img": "img/ingrediente-morango.png",
      "valor": 2.0
    },
    {
      "id": 16,
      "tipo": "Doce",
      "nome": "Doce de leite",
      "img": "img/ingrediente-doce-de-leite.png",
      "valor": 1.0
    },
    {
      "id": 17,
      "tipo": "Doce",
      "nome": "Banana",
      "img": "img/ingrediente-banana.png",
      "valor": 1.0
    },
    {
      "id": 18,
      "tipo": "Doce",
      "nome": "Canela",
      "img": "img/ingrediente-canela.png",
      "valor": 1.0
    }
  ]);
});

module.exports = router;