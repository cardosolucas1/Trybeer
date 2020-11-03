const { GetAllProducts } = require('../services/productService');

const getAllProducts = async (_req, res) => {
  const products = await GetAllProducts();
  return res.status(200).json(products);
};

module.exports = {
  getAllProducts,
};
