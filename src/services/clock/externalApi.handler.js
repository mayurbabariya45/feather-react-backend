/* eslint-disable */
const apis = require('../../external-apis');

class ClockApi {
    constructor() {
        this.clockInApi = apis.CLOCK_IN_API;
        this.clockOutApi = apis.CLOCK_OUT_API;
        this.clockInfoApi = apis.CLOCK_INFO_API;
     }

    async clockIn(data) {
       if (data) {
        const body = {data};
        return await this.clockInApi(body);
       }
       else {
        return [];
       }       
    }
    
    async clockOut(data) {
       if (data) {
        const body = {data};
        return await this.clockOutApi(body);
       }
       else {
        return [];
       }       
    }
    
    async clockInfo(data) {
       if (data) {
        const body = {data};
        return await this.clockInfoApi(body);
       }
       else {
        return [];
       }       
    }
}

module.exports = function () {
    return new ClockApi();
  };
  
module.exports.ClockApi = ClockApi;
  


