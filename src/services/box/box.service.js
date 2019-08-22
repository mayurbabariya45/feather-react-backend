// Initializes the `box` service on path `/box`
const createService = require('./box.class.js');
const hooks = require('./box.hooks');

module.exports = function (app) {

  // Initialize our service with any options it requires
  app.use('/box', createService());

  // Get our initialized service so that we can register hooks
  const service = app.service('box');

  service.hooks(hooks);
};
