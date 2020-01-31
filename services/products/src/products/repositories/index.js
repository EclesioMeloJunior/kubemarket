const buildProductsRepository = require('./products');

const productsRepository = buildProductsRepository();

module.exports = {
  productsRepository,
};
