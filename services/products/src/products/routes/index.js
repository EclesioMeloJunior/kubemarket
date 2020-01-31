const {
  addProductController,
  getProductByIdController,
} = require('../controllers');

const routes = {
  '/v1/products': {
    method: 'post',
    controller: addProductController,
  },
  '/v1/products/:id': {
    method: 'get',
    controller: getProductByIdController,
  },
};

module.exports = routes;
