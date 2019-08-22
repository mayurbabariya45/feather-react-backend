/* eslint-disable */
const apis = require('../../external-apis');

class StatesApi {
    constructor() {
        this.statesApi = apis.STATES_API;
     }

    async states() {
        return await this.statesApi();
    }
}

module.exports = function () {
    return new StatesApi();
  };
  
module.exports.StatesApi = StatesApi;
  


