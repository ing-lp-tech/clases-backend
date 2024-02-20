const { getAllCortes } = require("../services/cortes/serviceCortes");

const getAllCortesController = async (req, res) => {
  const result = await getAllCortes();

  if (!result) {
    res.status(500).json({ message: "internal server error" });
  } else {
    res
      .status(200)
      .json({ message: "Here are the products", products: result });
  }
};

module.exports = {
    getAllCortesController,
};
