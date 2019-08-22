/* eslint-disable */
const apis = require('../../external-apis');

class BoxApi {
    constructor() {
        this.boxIdApi = apis.BOX_ID_API;
        this.boxStatusApi = apis.BOX_STATUS_API;
     }

    async boxId(barcode) {
       if (barcode) {
        const body = {barcode}
        return await this.boxIdApi(body);
       }
       else {
        return [];
       }
       
    }
    
    async boxStatus(barcode) {
       if (barcode) {
        const body = {barcode}
        return await this.boxStatusApi(body);
       }
       else {
        return [];
       }
       
    }
}

module.exports = function () {
    return new BoxApi();
  };
  
module.exports.BoxApi = BoxApi;
  


