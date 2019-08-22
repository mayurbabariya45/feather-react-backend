/* eslint-disable */
const apis = require('../../external-apis');

class ProdTaskApi {
    constructor() {
        this.prodTaskApi = apis.PROD_TASK_API;
     }

    async prodtask() {
        return await this.prodTaskApi();
    }
}

module.exports = function () {
    return new ProdTaskApi();
  };
  
module.exports.ProdTaskApi = ProdTaskApi;
  


