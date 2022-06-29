var express = require('express');
var router = express.Router();
const ingredientes = require('../database/models/ingredientes');

router.get('/', async (req, res) => {
    
  //console.log(req)
  try {
    const ingrediente = await ingredientes.find();

    res.status(200).json(ingrediente);
  }
  catch (error){
    res.status(500).json({error:error})
    console.log(error);
  }
});

router.get('/:id', async (req,res) =>{
  const id = req.params.id
  console.log(id)

  try {
     const esfiha = await ingredientes.findOne({_id: id})
     res.status(200).json(esfiha);
  } catch(error){
    res.status(500).json({error:error});
  }

})

module.exports = router;