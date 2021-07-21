const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');

  router.post('/', stuffCtrl.createThings);
  
  router.put('/:id', stuffCtrl.modifyThings);
  
  router.delete('/:id', stuffCtrl.deleteThings);
  
  router.get('/:id', stuffCtrl.getOneThing);
  
  router.get('/', stuffCtrl.getAllThings);

module.exports = router;