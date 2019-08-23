/* eslint-disable */
const apis = require('../../external-apis');

class BoxApi {
    constructor() {
        this.boxIdApi = apis.BOX_ID_API;
        this.boxStatusApi = apis.BOX_STATUS_API;
     }

    async boxId(data) {
       if (data) {
        const body = {data}
        return await this.boxIdApi(body);
       }
       else {
        return [];
       }
       
    }
    
    async boxStatus(data) {
       if (data) {
        const body = {data}
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
  


