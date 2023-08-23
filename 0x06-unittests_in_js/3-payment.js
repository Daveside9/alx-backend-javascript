const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  console.log(`The_total_is: ${Utils.calculateNumber('SUM', totalAmount, totalShipping)}`);
}
module.exports = sendPaymentRequestToApi;
