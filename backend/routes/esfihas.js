var express = require('express');
var router = express.Router();
const esfihasModel = require('../database/models/esfihas');
router.get('/', async (req, res, next) => {
    
    //console.log(req)
    try {
      const esfiha = await esfihasModel.find()
      if(!esfiha){
        res.status(422).json({ message: 'As esfihas não foram encontrada!' })
        return
       }
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
     if(!esfiha){
      res.status(422).json({ message: 'A esfiha não foi encontrada!' })
      return
     }
     res.status(200).json(esfiha);
  } catch(error){
    res.status(500).json({error:error});
  }

})

module.exports = router;