const {
  product,
} = require('../domain');

/**
 * @return {function} addProduct is a function to insert a product to inventory
 */
function buildAddProduct() {
  return async function addProduct(newProduct) {
    const productModel = product(newProduct);

    console.log(productModel);
  };
}

module.exports = buildAddProduct;
