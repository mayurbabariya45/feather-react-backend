/* eslint-disable no-unused-vars */

const LoginApi = require('./externalApi.handler');

class Service {
  constructor () {
    this.loginApi = LoginApi();
  }

  // async find (params) {
  //   return [];
  // }

  // async get (id, params) {
  //   return {
  //     id, text: `A new message with ID: ${id}!`
  //   };
  // }
  
  async create (data) {
    return this.loginApi.login(data.username, data.password);
  }
}

module.exports = function () {
  return new Service();
};

module.exports.Service = Service;
