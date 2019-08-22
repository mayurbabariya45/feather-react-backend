// Initializes the `clock` service on path `/clock`
const createService = require('./clock.class.js');
const hooks = require('./clock.hooks');

module.exports = function (app) {
  
  // Initialize our service with any options it requires
  app.use('/clock', createService());

  // Get our initialized service so that we can register hooks
  const service = app.service('clock');

  service.hooks(hooks);
};
