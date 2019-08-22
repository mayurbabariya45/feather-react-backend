/* eslint-disable */
const apis = require('../../external-apis');

class ClockApi {
    constructor() {
        this.clockInApi = apis.CLOCK_IN_API;
        this.clockOutApi = apis.CLOCK_OUT_API;
        this.clockInfoApi = apis.CLOCK_INFO_API;
     }

    async clockIn(boxId, userId, comment) {
       if (boxId && userId) {
        const body = {boxId, userId, comment};
        return await this.clockInApi(body);
       }
       else {
        return [];
       }       
    }
    
    async clockOut(boxId, userId, state, comment) {
       if (boxId && userId && state) {
        const body = {boxId, userId, state, comment};
        return await this.clockOutApi(body);
       }
       else {
        return [];
       }       
    }
    
    async clockInfo(userId) {
       if (userId) {
        const body = {userId};
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
  


