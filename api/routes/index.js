const express = require('express')

const productsRouter = require('./productsRouter')
const userRouter = require('./userRouter')
const brandsRouter = require('./brandsRouter')
const priceRouter = require('./priceProductRouter')

function routerApi(app) {
  const router = express.Router()
  app.use('/api', router)
  router.use('/products', productsRouter);
  router.use('/users', userRouter);
  router.use('/brands', brandsRouter);
  router.use('/price', priceRouter);
}

module.exports = routerApi