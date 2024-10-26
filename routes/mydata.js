const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  res.render('mydata', { title: 'Sai Vinay Kumar' }); 
});
module.exports = router;
