/* eslint-disable no-unused-vars */
const BoxApis = require('./externalApi.handler');

class Service {
  constructor () {
    this.boxApis = BoxApis();
  }

  async create (data) {
    if (data.getBoxId) 
      return await this.boxApis.boxId(data);
    else if (data.getBoxStatus) 
      return await this.boxApis.boxStatus(data);
    else 
      return [];    
  }
}

module.exports = function () {
  return new Service();
};

module.exports.Service = Service;
