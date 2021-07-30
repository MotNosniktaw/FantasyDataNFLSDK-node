const axios = require("axios");
const { apiKey } = require("./config");

/**
 *
 * @param {String} url
 * @param {Object} data
 * @param {String} method
 * @returns
 */
async function request(url, method = "GET", data) {
  return await axios({
    method,
    url: `https://api.sportsdata.io/v3/nfl/${url}`,
    data,
    headers: {
      "Ocp-Apim-Subscription-Key": apiKey,
    },
  })
    .then((res) => {
      //   console.log({ res });
      return res.data;
    })
    .catch((err) => {
      console.log({ err });
      return err;
    });
}

module.exports = {
  request,
};
