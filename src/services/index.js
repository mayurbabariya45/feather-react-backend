const login = require('./login/login.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(login);
};
