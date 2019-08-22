/* eslint-disable */

const rp = require('request-promise');

const request = async (uri, method = 'GET') => {
    const options = {
        method: method,
        uri: uri,
        json: true,
        rejectUnauthorized: false
    };
    return await rp(options);
};



module.exports.LOGIN_API = async (body) => await request(` https://linux5.sima.io/pcs2/api.php?function=AuthenticateUserOnly&username=${body.username}&password=${body.password}`);