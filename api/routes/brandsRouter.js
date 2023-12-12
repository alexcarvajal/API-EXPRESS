const express = require('express');
const router = express.Router();

const {getBrand , createBrand} = require('../functions/brandsFunction');

router.get('/', async (req, res) => {
  const brand = await getBrand();
  res.json(brand).status(200);
}
);

router.post('/', async (req, res) => {
  const brand = await createBrand(req.body);
  res.json(brand).status(201);
}
);

module.exports = router;