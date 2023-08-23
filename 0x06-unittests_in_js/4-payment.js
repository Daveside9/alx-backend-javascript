const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalCost = Utils.calculateNumber('SUM', TotalAmount, TotalShipping);
  console.log(`The_total_is: ${totalCost}`);
};
module.exports = sendPaymentRequestToApi;
