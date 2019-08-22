/* eslint-disable */
const apis = require('../../external-apis');

class LoginApi {
    constructor() {
        this.loginApi = apis.LOGIN_API;
     }

    async login(username, password) {
       if (username && password) {
        const body = {username, password}
        return await this.loginApi(body);    
       }
       else {
        return [];
       }
       
    }
}

module.exports = function () {
    return new LoginApi();
  };
  
module.exports.LoginApi = LoginApi;
  


