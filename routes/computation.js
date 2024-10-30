const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  const xValues = {
    cos: Math.random() * Math.PI * 2, 
    asin: Math.random() * 2 - 1, 
    asinh: Math.random() * 10 - 5 
  };
  const functions = ['cos', 'asin', 'asinh'];
  const selectedFunction = functions[Math.floor(Math.random() * functions.length)];
  const x = xValues[selectedFunction];
  let y;
  switch (selectedFunction) {
    case 'cos':
      y = Math.cos(x);
      break;
    case 'asin':
      y = Math.asin(x);
      break;
    case 'asinh':
      y = Math.asinh(x);
      break;
  }
  res.send(`Math.${selectedFunction} applied to ${x} is ${y}`);
});
module.exports = router;
