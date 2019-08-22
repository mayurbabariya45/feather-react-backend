// Initializes the `states` service on path `/states`
const createService = require('./states.class.js');
const hooks = require('./states.hooks');

module.exports = function (app) {
  
  // Initialize our service with any options it requires
  app.use('/states', createService());

  // Get our initialized service so that we can register hooks
  const service = app.service('states');

  service.hooks(hooks);
};
