/**
 * @return {function} addProduct is a function to insert a product to inventory
 */
function buildGetProductById({
  productsRepository,
} = {}) {
  return async function getProductById(id) {
    productsRepository.getProductById(id);
  };
}

module.exports = buildGetProductById;
