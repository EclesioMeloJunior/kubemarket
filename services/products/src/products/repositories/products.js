const Database = require('../../infra/database');

/**
 * @return {object} productsRepository.Operations
 */
function buildProductsRepository() {
  /**
   * getProductById return an product object stored at database
   * or null if doesnt exists
   * @param {int} id
   */
  function getProductById(id) {
    console.log(Database.connection);
  }

  return {
    getProductById,
  };
}

module.exports = buildProductsRepository;
