const express = require("express");
const {
  getProductByIdController,
  getAllProductsController,
  postProductController,
  deleteProductController,
  updateProductIdController,
} = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware");

const productRouter = express.Router();

productRouter.get("/", authMiddleware, getAllProductsController);

productRouter.post("/", postProductController);

productRouter.delete("/:pid", deleteProductController);

productRouter.get("/:pid",authMiddleware, getProductByIdController);

productRouter.put("/:id", authMiddleware, updateProductIdController); // Ruta y controlador para actualizar un producto

module.exports = productRouter;



