// Initializes the `prodtask` service on path `/prodtask`
const createService = require('./prodtask.class.js');
const hooks = require('./prodtask.hooks');

module.exports = function (app) {
  
  
  // Initialize our service with any options it requires
  app.use('/prodtask', createService());

  // Get our initialized service so that we can register hooks
  const service = app.service('prodtask');

  service.hooks(hooks);
};
