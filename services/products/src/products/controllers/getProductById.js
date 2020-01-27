/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 * @return {express.Return} response
 */
function getProductById(request, response) {
  return response.json({
    message: 'Router works!',
  });
}

module.exports = getProductById;
