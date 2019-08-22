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



module.exports.LOGIN_API = async (body) => await request(`https://linux5.sima.io/pcs2/api.php?function=AuthenticateUserOnly&username=${body.username}&password=${body.password}`);

module.exports.CLOCK_IN_API = async (body) => await request(`https://linux5.sima.io/pcs2/api.php?function=ClockUserIn&box_id=${body.boxId}&user_id=${body.userId}&phase=READ&comment=${body.comment}`);
module.exports.CLOCK_OUT_API = async (body) => await request(`https://linux5.sima.io/pcs2/api.php?function=ClockUserOut&box_id=${body.boxId}&user_id=${body.userId}&state=${body.state}&comment=${body.comment}`);
module.exports.CLOCK_INFO_API = async (body) => await request(`https://linux5.sima.io/pcs2/api.php?function=GetUserClocking&user_id=${body.userId}`);

module.exports.STATES_API = async () => await request(`https://linux5.sima.io/pcs2/api.php?function=GetListOf&req=states`);

module.exports.BOX_ID_API = async (body) => await request(`https://linux5.sima.io/pcs2/api.php?function=GetBoxID&barcode=${body.barcode}`);
module.exports.BOX_STATUS_API = async (body) => await request(`https://linux5.sima.io/pcs2/api.php?function=GetBoxStatus&barcode=${body.barcode}`);

module.exports.PROD_TASK_API = async () => await request(`https://linux5.sima.io/pcs2/api.php?function=GetListOf&req=prodtask`);