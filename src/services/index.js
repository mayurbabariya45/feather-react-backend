const login = require('./login/login.service.js');
const clock = require('./clock/clock.service.js');
const box = require('./box/box.service.js');
const prodtask = require('./prodtask/prodtask.service.js');
const states = require('./states/states.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(login);
  app.configure(clock);
  app.configure(box);
  app.configure(prodtask);
  app.configure(states);
};
