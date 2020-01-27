/**
 * @return {function} product object
 */
function buildProduct() {
  return function product({
    name,
    description,
    price,
    quantity,
  }) {
    return {
      getId: () => null,
      getDescription: () => description,
      getName: () => name,
      getPrice: () => price,
      getQuantity: () => quantity,
    };
  };
}


module.exports = buildProduct;
