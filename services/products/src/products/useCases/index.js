const {
  productsRepository,
} = require('../repositories');

const buildAddProduct = require('./addProduct');
const buildGetProductById = require('./getProductById');

const addProduct = buildAddProduct();
const getProductById = buildGetProductById({
  productsRepository,
});

module.exports = {
  addProduct,
  getProductById,
};
