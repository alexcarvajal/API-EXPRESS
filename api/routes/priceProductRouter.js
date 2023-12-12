const express = require('express');

const router = express.Router();

const getSpecialPrice = require('../functions/priceProductFunction');

router.get('/:userID/:nameProduct', async (req, res) => {
  const price = await getSpecialPrice(decodeURI(req.params.userID), decodeURI(req.params.nameProduct));
  res.json(price).status(200);
});

module.exports = router;