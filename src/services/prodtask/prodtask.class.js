/* eslint-disable no-unused-vars */

const ProdTaskApi = require('./externalApi.handler');

class Service {
  constructor () {
    this.prodtaskApi = ProdTaskApi();
  }

  async create () {
    return await this.prodtaskApi.prodtask();
  }

}

module.exports = function () {
  return new Service();
};

module.exports.Service = Service;
