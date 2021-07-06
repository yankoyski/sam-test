const tuc = require('temp-units-conv');
const test = require('/opt/nodejs/test.js');

exports.lambdaHandler = async (event) => {
    return {
        statusCode: 200,
        tuc: JSON.stringify(tuc),
        test: test.test(),
    }
};
