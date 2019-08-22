/* eslint-disable no-unused-vars */
const StatesApi = require('./externalApi.handler');

class Service {
  constructor () {
    this.statesApi = StatesApi();
  }

  async create () {
    return await this.statesApi.states();
  }

}

module.exports = function () {
  return new Service();
};

module.exports.Service = Service;
