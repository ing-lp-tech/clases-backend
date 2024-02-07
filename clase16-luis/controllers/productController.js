const {
  getProductsFromMongo,
  getProductByIdFromMongo,
} = require("../services/productService");

const getProducts = async (req, res) => {
  const result = await getProductsFromMongo();
  console.log(result);
  res.status(200).render("home", { products: result });
};

const getProductById = async (req, res) => {
  const { pid } = req.params;
  const result = await getProductByIdFromMongo(pid);
  res.status(200).render("detail", { product: result });
};

const updateProductById= async(req,res)=>{
    const {pid}=req.params
    const newProduct=req.body
    const result 
}

module.exports = { getProducts, getProductById };
