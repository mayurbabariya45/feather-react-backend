// Initializes the `login` service on path `/login`
const createService = require('./login.class.js');
const hooks = require('./login.hooks');

module.exports = function (app) {
  // Initialize our service with any options it requires
  app.use('/login', createService());

  // Get our initialized service so that we can register hooks
  const service = app.service('login');

  service.hooks(hooks);
};
