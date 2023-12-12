const express = require('express');
const router = express.Router();

const { getProducts, getProductByID, createProduct, deleteProduct } = require ('../functions/productsFunction')

router.get('/', async (req, res) => {
  console.log('Listening products')
  const products = await getProducts()
  res.json(products).status(200)
})

router.post('/', async (req, res) => {
  const product = await createProduct(req.body);
  res.json(product).status(201);
});

router.get('/:id', async (req, res) => {
  const product = await getProductByID(req.params.id);
  res.json(product).status(200);
});
router.delete('/:id', async (req, res) => {
  await deleteProduct(req.params.id);
  res.status(204).send();
});

module.exports = router;