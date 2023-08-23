const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
    if (success) {
      resolve({data: 'Successful_response_from_the_API'});
    }
  });
  module.exports = getPaymentTokenFromAPI;
