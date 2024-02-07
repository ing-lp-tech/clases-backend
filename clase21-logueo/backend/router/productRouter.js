const express = require('express')
const { getProductByIdController, getAllProductsController, postProductController, deleteProductController} = require('../controllers/productController')

const productRouter = express.Router()

productRouter.get('/', getAllProductsController)

productRouter.post('/', postProductController )

productRouter.delete('/:pid', deleteProductController)

productRouter.get("/:pid", getProductByIdController)





module.exports = productRouter



