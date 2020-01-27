const {
  addProductController,
  getProductByIdController,
} = require('../controllers');

const routes = {
  '/v1/products/addProduct': {
    method: 'post',
    controller: addProductController,
  },
  '/v1/products/getProduct': {
    method: 'get',
    controller: getProductByIdController,
  },
};

module.exports = routes;
