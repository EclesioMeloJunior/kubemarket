const productRoutes = require('./products/routes');

const applicationRoutes = [
  productRoutes,
];

/**
 * Function responsible for configurate productes service routes
 * @param {Express.Router} router
 * @return {Express.Router} apiRouter
 */
function buildRoutes(router) {
  for (const applicationRoute of applicationRoutes) {
    const routesPath = Object.keys(applicationRoute);

    for (const routePath of routesPath) {
      const {
        method,
        controller,
      } = applicationRoute[routePath];

      router[method](routesPath, controller);
    }
  }

  return router;
}

module.exports = buildRoutes;
