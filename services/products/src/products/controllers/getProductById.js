const {
  getProductById,
} = require('../useCases');

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 * @return {express.Return} response
 */
function getProductByIdController(request, response) {
  getProductById(1);

  return response.json({
    message: 'Router works!',
  });
}

module.exports = getProductByIdController;
