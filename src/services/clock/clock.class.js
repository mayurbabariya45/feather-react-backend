/* eslint-disable no-unused-vars */
const ClockApi = require('./externalApi.handler');

class Service {
  constructor () {
    this.clockApi = ClockApi();
  }

  async create (data) {
    console.log(data.userId);
    
    if (data.clockIn) 
      return await this.clockApi.clockIn(data);
    else if (data.clockOut) 
      return await this.clockApi.clockOut(data);
    else if (data.clockInfo) 
      return await this.clockApi.clockInfo(data);
    else
      return data;
  }

}

module.exports = function () {
  return new Service();
};

module.exports.Service = Service;
