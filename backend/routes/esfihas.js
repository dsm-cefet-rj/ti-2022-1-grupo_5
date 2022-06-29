var express = require('express');
var router = express.Router();
const esfihasModel = require('../database/models/esfihas');
router.get('/', async (req, res, next) => {
    
    //console.log(req)
    try {
      const esfiha = await esfihasModel.find()

      res.status(200).json(esfiha);
    }
    catch (error){
      res.status(500).json({error:error})
    }

});

router.get('/:id', async (req,res) =>{
  const id = req.params.id
  console.log(id)

  try {
     const esfiha = await esfihasModel.findOne({id: id})
     res.status(200).json(esfiha);
  } catch(error){
    res.status(500).json({error:error});
  }

})

module.exports = router;