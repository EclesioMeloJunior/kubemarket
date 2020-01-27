const errors = require('../../lib/errors');
const {
  addProduct,
} = require('../useCases');

/**
 *
 * @param {object} request
 * @param {object} response
 *
 * @return {object} controller response http
 */
async function addProductController(request, response) {
  const {
    name,
    description,
    price,
    quantity,
  } = request.body;

  if (!name || !price || !quantity) {
    const error = {
      messages: [
        'name param is required',
        'price param is required',
        'quantity param is required',
      ],
    };

    return response.status(400).json(errors.missingArgumentsError(error));
  }

  const product = {
    name,
    description,
    price,
    quantity,
  };

  try {
    const addProductResponse = await addProduct(product);
    return response.status(201).json(addProductResponse);
  } catch (exception) {
    const error = {
      text: 'ADD_PRODUCT_EXCEPTION',
      messages: [
        'Problems to add a new product',
        exception.message,
      ],
    };

    return response
      .status(500)
      .json(errors.customError(error.text, errors.messages));
  }
}

module.exports = addProductController;
