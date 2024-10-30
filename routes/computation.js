const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Randomly select `x` in a range suitable for each function
  const xValues = {
    cos: Math.random() * Math.PI * 2, // Random value in [0, 2π] for Math.cos
    asin: Math.random() * 2 - 1, // Random value in [-1, 1] for Math.asin
    asinh: Math.random() * 10 - 5 // Random value in [-5, 5] for Math.asinh
  };

  // List of functions with corresponding random `x` ranges
  const functions = ['cos', 'asin', 'asinh'];
  const selectedFunction = functions[Math.floor(Math.random() * functions.length)];

  // Set `x` based on the selected function
  const x = xValues[selectedFunction];

  // Apply the selected function to `x`
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

  // Send the result back
  res.send(`Math.${selectedFunction} applied to ${x} is ${y}`);
});

module.exports = router;
