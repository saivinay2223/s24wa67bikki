var express = require('express');
var router = express.Router();
let value = 0;
let total = 1;

router.get('/', function(req, res, next) {
  value += 2;       
  total += value * 2; // Multiply value by 2 before adding to total
  res.send(`Total is: ${total}`);  
});

module.exports = router;
